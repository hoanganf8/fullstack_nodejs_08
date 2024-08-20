//Xử lý nhiều request bị failed cùng lúc

let token = `My Token`;
let isExpire = false;
let refreshTokenPromise = null;
const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New Token: ${Math.random()}`);
    }, Math.random() * 1000);
  });
};
const callAPI = (url) => {
  setTimeout(async () => {
    if (url === `/courses`) {
      isExpire = true;
    }
    if (isExpire) {
      //Hết hạn ==> Gọi refresh token
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshToken();
      }
      const newToken = await refreshTokenPromise;
      token = newToken;
      isExpire = false;
    }
    console.log(`Request URL: ${url}`, `Token: ${token}`);
  }, 1000);
};

callAPI(`/profile`);
callAPI(`/courses`);
callAPI(`/products`);
callAPI(`/posts`);

/*
if (something()) {
    something()
}
*/
