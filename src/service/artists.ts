import Artist from '../models/artist';
import { findMainArtists } from '../repository/artist';

const readArtists = async (): Promise<Artist[]> => {
  const findMainArtistsRes = await findMainArtists(2);
  return findMainArtistsRes;
};

export { readArtists };
