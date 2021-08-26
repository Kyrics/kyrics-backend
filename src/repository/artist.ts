import { QueryTypes } from "sequelize";
import sequelize from "../models";
import Artist from '../models/artist'

const findArtistById = async (id: number): Promise<Artist|null> => {
  const findArtistByIdRes = await Artist.findByPk(id, {
    attributes: ['id', 'name', ['background_image_url', 'backgroundImageUrl']],
  });
  return findArtistByIdRes;
}


const findSongWithAlbumCover = async (id: number) => {
  const query = `SELECT song.id, title, album_image_url as albumImageUrl, artist.name as artist
                FROM song
                JOIN album ON(song.album_id=album.id)
                JOIN song_artist ON(song.id=song_artist.song_id)
                JOIN artist ON(artist.id=song_artist.artist_id)
                WHERE artist.id=${id}
                LIMIT 5;
  `;
  const findSongWithCover = await sequelize.query(query, { type: QueryTypes.SELECT });
  return findSongWithCover;
}

export { findArtistById, findSongWithAlbumCover };