import { findArtistById, findSongWithAlbumCover } from '../repository/artist';

interface IReadArtistRes {
  id: number;
  artist: string;
  backgroundImageUrl: string;
  songs: any;
}

const readArtist = async (artistId: number): Promise<IReadArtistRes | Error> => {
  const findArtistRes = await findArtistById(artistId);
  if (!findArtistRes) {
    throw Error('해당 id의 가수가 없습니다.');
  }

  const findSongWithAlbumCoverRes = await findSongWithAlbumCover(artistId);
  return {
    id: artistId,
    artist: findArtistRes.name,
    backgroundImageUrl: findArtistRes.backgroundImageUrl,
    songs: findSongWithAlbumCoverRes,
  };
};

export { readArtist };
