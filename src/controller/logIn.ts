import { Request, Response } from 'express';
import statusCode from '../util/statusCode';
import { signupIfUserNotFoundOrLogin, userInfoDto } from '../service/social';

const socialLogin = async (req: Request, res: Response) => {
  const { name, socialId, email, profileImageUrl, socialType } = req.body;
  if (!name || !socialId || !socialType) {
    return res.json({
      status: 400,
      message: '필요한 값이 없습니다.',
    });
  }
  const input: userInfoDto = {
    name,
    socialId,
    email,
    profileImageUrl,
    socialType,
  };
  try {
    const { jwtSignRes: token, isNewUser } = await signupIfUserNotFoundOrLogin(input);
    return res.status(200).json({
      status: statusCode.OK,
      data: {
        token,
        isNewUser,
      },
      message: '소셜 로그인 성공',
    });
  } catch (error) {
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

export { socialLogin };
