const text = {
  welcome: "Welcome to Vue Admin",
  languageSwitchSucceeded: "Language switching succeeded!",
  pleaseEnterUserName: "please enter user name",
  pleaseEnterPassword: "please enter password",
  userNameRequired: "user name cannot be empty",
  passwordRequired: "password cannot be empty",
  userNameLength: "The user name must be {length} characters",
  passwordLength: "The password must be {length} characters",
  loginSuccessful: "Login is successful , Welcome to Vue Admin !",
  accountError: "The account or password is incorrect",
  selectProvince: "please select a province",
  selectCity: "please select a city",
  selectArea: "please select an area"
};

const btn = {
  submit: "submit",
  reset: "reset",
  logout: "logout",
  chinese: "中文简体",
  english: "English",
  message: "message",
  notification: "notification",
  backHomePage: "back to the home page"
};

const rules = {
  userName3_10: "The length of user name should be between 3-10 characters"
};

const en_us = {
  ...text,
  ...btn,
  rules
};
export default en_us;
