import User from '../models/user';

const findUserById = async (id: number): Promise<User|null> => {
  const readUserRes = await User.findOne({
    where: {
      id
    },
    attributes: ['id', `name`, `email`, `profileImageUrl`]
  })
  return readUserRes;
}

const deleteUserById = async (id: number): Promise<number> => {
  const destroyUserRes = await User.destroy({
    where: {
      id
    }
  });
  return destroyUserRes;
}

const updateUser = async (user: User): Promise<User> => {
  return user.save();
}

export { findUserById, deleteUserById, updateUser };