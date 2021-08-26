import { QueryTypes } from "sequelize";
import MyVocab from '../models/myVocab';
import sequelize from "../models";
import { IMyVocabRes } from "../service/user";

const readMyVocabByUserId = async (userId: number): Promise<IMyVocabRes[]|Error> => {
  const readMyVocabQuery = `
  SELECT my_vocab.key_expression_id as id, key_expression.kor, key_expression.eng, key_expression.kor_example as korExample, key_expression.eng_example as engExample
  FROM my_vocab
  LEFT OUTER JOIN key_expression ON (my_vocab.key_expression_id = key_expression.id)
  WHERE my_vocab.user_id = ${userId}
  ORDER BY my_vocab.created_at DESC;`;
  const readMyVocabRes = await sequelize.query(readMyVocabQuery, { type: QueryTypes.SELECT }) as IMyVocabRes[];
  return readMyVocabRes;
}

const createMyVocabByUserId = async (id: number, userId: number): Promise<MyVocab|Error> => {
  const createMyVocabRes = await MyVocab.create({
    userId,
    keyExpressionId: id,
  });
  return createMyVocabRes;
}

const destroyMyVocab = async (id: number, userId: number): Promise<number|Error> => {
  const destroyMyVocabRes = await MyVocab.destroy({
    where: {
      userId,
      keyExpressionId: id,
    },
  });
  return destroyMyVocabRes;
}
export { readMyVocabByUserId, createMyVocabByUserId, destroyMyVocab };