import { User } from '../models';
import { jwtSign } from '../module/jwt';

type SocialType = 'Google' | 'Facebook';

interface socialLoginInput {
  name: string;
  socialId: string;
  email?: string;
  profileImageUrl?: string;
  socialType: SocialType;
}

const signupIfUserNotFoundAndLogin = async (input: socialLoginInput) => {
  const { name, socialId, email, profileImageUrl, socialType } = input;
  const userRes = await User.findOne({
    where: {
      socialId,
      socialType,
    },
  });
  let user: User;
  let isNewUser = false;
  if (!userRes) {
    user = await User.create({
      name,
      socialId,
      email,
      profileImageUrl,
      socialType,
    });
    isNewUser = true;
  } else {
    user = await User.findOne({ where: { socialId, socialType } });
    user.name = name;
    user.profileImageUrl = profileImageUrl || user.profileImageUrl;
    await user.save();
  }

  const signinInput = {
    id: user.id,
    socialId,
    socialType,
  };
  const jwtSignRes = await jwtSign(signinInput);
  return { jwtSignRes, isNewUser };
};

export { SocialType, socialLoginInput, signupIfUserNotFoundAndLogin };
