import { User } from '../models';
import { jwtSign } from '../util/jwt';
import { createUser, findUserBySocialAccount, updateUser } from '../repository/user';

type SocialType = 'Google' | 'Facebook';

interface userInfoDto {
  name: string;
  socialId: string;
  email?: string;
  profileImageUrl?: string;
  socialType: SocialType;
}

interface signUpRes {
  jwtSignRes: string;
  isNewUser: boolean;
}

const signupIfUserNotFoundOrLogin = async (input: userInfoDto): Promise<signUpRes> => {
  const { name, socialId, profileImageUrl, socialType } = input;

  const userRes = await findUserBySocialAccount(socialId, socialType);

  let user: User;
  let isNewUser = false;
  if (!userRes) {
    user = await createUser(input);
    isNewUser = true;
  } else {
    user = await findUserBySocialAccount(socialId, socialType);
    user.name = name;
    user.profileImageUrl = profileImageUrl || user.profileImageUrl;
    await updateUser(user);
  }
  const jwtSignRes = await jwtSign({
    id: user.id,
    socialId,
    socialType,
  });

  return {
    jwtSignRes,
    isNewUser,
  };
};

export { SocialType, userInfoDto, signupIfUserNotFoundOrLogin };
