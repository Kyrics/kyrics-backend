import Artist from '../models/artist';

const readArtists = async (): Promise<Artist[] | Error> => {
    const findArtistsRes = await Artist.findAll({
        attributes: ['id', 'name', 'profileImageUrl', 'logoImageUrl'],
        limit: 2
    });
    return findArtistsRes;
};

export { readArtists };