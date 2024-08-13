const redirectUrl=""

// 微信授权
export const handleAuth = () => {
  window.open(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc771e6c068fd173b&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`);
};

export const handleCorpAuth = () => {
  window.open(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc771e6c068fd173b&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`);
};
