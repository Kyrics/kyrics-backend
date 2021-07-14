import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import { signupIfUserNotFoundAndLogin, socialLoginInput } from '../service/social';

const socialLogin = async (req: Request, res: Response) => {
  const { name, socialId, email, profileImageUrl, socialType } = req.body;
  console.log(req.body);
  if (!name || !socialId || !socialType) {
    console.log(name, socialId, email);
    return res.json({
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
    const jwtAfterLogin = await signupIfUserNotFoundAndLogin(input);
    return res.json({
      status: statusCode.OK,
      data: {
        token: jwtAfterLogin,
      },
      message: '소셜 로그인 성공',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

export { socialLogin };
