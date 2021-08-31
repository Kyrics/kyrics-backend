import User from '../models/user';
import { SocialType, userInfoDto } from '../service/social';

const createUser = async (input: userInfoDto): Promise<User> => {
  const { name, socialId, email, profileImageUrl, socialType } = input;
  const createUserRes = await User.create({
    name,
    socialId,
    email,
    profileImageUrl,
    socialType,
  });
  return createUserRes;
};

const findUserById = async (id: number): Promise<User> => {
  const readUserRes = await User.findOne({
    where: {
      id,
    },
    attributes: ['id', `name`, `email`, `profileImageUrl`],
  });
  return readUserRes;
};

const findUserBySocialAccount = async (socialId: string, socialType: SocialType): Promise<User> => {
  const userRes = await User.findOne({
    where: {
      socialId,
      socialType,
    },
  });
  return userRes;
};

const deleteUserById = async (id: number): Promise<number> => {
  const destroyUserRes = await User.destroy({
    where: {
      id,
    },
  });
  return destroyUserRes;
};

const updateUser = async (user: User): Promise<User> => {
  return user.save();
};

export { createUser, findUserById, findUserBySocialAccount, deleteUserById, updateUser };
