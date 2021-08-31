import Song from '../models/song';
import Artist from '../models/artist';
import Album from '../models/album';

const findSongById = async (id: number) => {
  const findSongByPkRes = await Song.findByPk(id, {
    include: [Artist, Album],
  });
  return findSongByPkRes;
};

export { findSongById };
