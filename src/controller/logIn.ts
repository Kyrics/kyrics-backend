import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import { signupIfUserNotFoundAndLogin, socialLoginInput } from '../service/social';

const socialLogin = async (req: Request, res: Response) => {
  const { name, socialId, email, profileImageUrl, socialType } = req.body;
  console.log(req.body);
  if (!name || !socialId || !socialType) {
    console.log(name, socialId, email);
    return res.status(400).json({
      status: 400,
      message: '필요한 값이 없습니다.',
    });
  }
  const input: socialLoginInput = {
    name,
    socialId,
    email,
    profileImageUrl,
    socialType,
  };
  try {
    const { jwtSignRes: token, isNewUser } = await signupIfUserNotFoundAndLogin(input);
    return res.status(200).json({
      status: statusCode.OK,
      data: {
        token,
        isNewUser,
      },
      message: '소셜 로그인 성공',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

export { socialLogin };
