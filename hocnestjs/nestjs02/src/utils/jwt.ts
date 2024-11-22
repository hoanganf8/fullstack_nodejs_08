import * as jwt from 'jsonwebtoken';
export default class JWT {
  static createAccessToken(payload: object) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    });
  }
  static createRefreshToken() {
    const payload = {
      value: Math.random() + new Date().getTime(),
    };
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRE,
    });
  }
  static verifyToken(accessToken: string) {
    try {
      return jwt.verify(accessToken, process.env.JWT_SECRET);
    } catch {
      return false;
    }
  }
}
