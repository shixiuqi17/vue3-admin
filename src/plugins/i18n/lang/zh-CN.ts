const text = {
  welcome: "欢迎来到 Vue Admin",
  languageSwitchSucceeded: "语言切换成功!",
  pleaseEnterUserName: "请输入用户名",
  pleaseEnterPassword: "请输入密码",
  userNameRequired: "用户名不能为空",
  passwordRequired: "密码不能为空",
  userNameLength: "用户名长度需在{length}个字符",
  passwordLength: "密码长度需在{length}个字符",
  loginSuccessful: "登录成功 , 欢迎来到 Vue Admin !",
  accountError: "账号或密码错误"
};

const btn = {
  submit: "提交",
  reset: "重置",
  logout: "退出登录",
  chinese: "中文简体",
  english: "English",
  backHomePage: "回到首页"
};

const rules = {
  userName3_10: "用户名长度需在3-10个字符之间"
};

const ch = {
  ...text,
  ...btn,
  rules
};
export default ch;
