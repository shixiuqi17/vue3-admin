const text = {
  welcome: "Welcome to Vue Admin",
  languageSwitchSucceeded: "Language switching succeeded!",
  pleaseEnterUserName: "please enter user name",
  pleaseEnterPassword: "please enter password"
};

const btn = {
  submit: "submit",
  reset: "reset"
};

const rules = {
  userName3_10: "The length of user name should be between 3-10 characters"
};

const ch = {
  ...text,
  ...btn,
  rules
};
export default ch;
