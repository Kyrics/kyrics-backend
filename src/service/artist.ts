import { QueryTypes } from 'sequelize';
import sequelize from '../models';
import Artist from '../models/artist';

interface IReadArtistRes {
  id: number;
  artist: string;
  backgroundImageUrl: string;
  songs: any;
}

const readArtist = async (artistId: number): Promise<IReadArtistRes | Error> => {
  const findArtistRes = await Artist.findByPk(artistId, {
    attributes: ['id', 'name', 'background_image_url'],
  });
  if (!findArtistRes) {
    throw Error('해당 id의 가수가 없습니다.');
  }
  const query = `
  SELECT song.id, title, album_image_url as albumImageUrl, artist.name as artist FROM song
  JOIN album ON(song.album_id=album.id)
  JOIN song_artist ON(song.id=song_artist.song_id)
  JOIN artist ON(artist.id=song_artist.artist_id)
  WHERE artist.id=${artistId}
  LIMIT 5
  `;
  const findSongWithAlbumCover = await sequelize.query(query, { type: QueryTypes.SELECT });
  return {
    id: artistId,
    artist: findArtistRes.name,
    backgroundImageUrl: findArtistRes.backgroundImageUrl,
    songs: findSongWithAlbumCover,
  };
};

export { readArtist };
