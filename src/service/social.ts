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
    },
  });
  if (!userRes) {
    await User.create({
      name,
      socialId,
      email,
      profileImageUrl,
      socialType,
    });
  }
  const signinInput = {
    socialId,
    socialType,
  };
  const jwtSignRes = await jwtSign(signinInput);
  return jwtSignRes;
};

export { SocialType, socialLoginInput, signupIfUserNotFoundAndLogin };
