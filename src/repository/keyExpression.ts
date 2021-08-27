import { QueryTypes } from 'sequelize';
import KeyExpression from '../models/keyExpression';
import sequelize from '../models';
import { IReadVocabsRes } from '../service/song';

const findKeyExpressionBySongId = async (songId: number): Promise<KeyExpression[]> => {
  const findAllKeyExpressionRes = await KeyExpression.findAll({
    attributes: ['id', 'kor', 'eng', ['kor_example', 'korExample'], ['eng_example', 'engExample']],
    where: { songId },
  });
  return findAllKeyExpressionRes;
};

const findKeyExpressionBySongIdWithLogin = async (songId: number, userId: number): Promise<IReadVocabsRes[]> => {
  const vocabQuery = `SELECT id, kor, eng, kor_example as korExample, eng_example as engExample, key_expression_id as keyExpressionId
                        FROM key_expression LEFT OUTER JOIN my_vocab
                        ON (key_expression.id = my_vocab.key_expression_id
                        AND my_vocab.user_id=${userId})
                        WHERE key_expression.song_id=${songId};`;
  const readVocab = (await sequelize.query<IReadVocabsRes>(vocabQuery, {
    type: QueryTypes.SELECT,
  })) as IReadVocabsRes[];
  return readVocab;
};

export { findKeyExpressionBySongId, findKeyExpressionBySongIdWithLogin };
