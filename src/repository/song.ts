
import Song from '../models/song';
import Artist from '../models/artist'

const findSongById = async (id: number): Promise<Song> => {
  const findSongByPkRes = await Song.findByPk(id);
  return findSongByPkRes;
}

export { findSongById };
