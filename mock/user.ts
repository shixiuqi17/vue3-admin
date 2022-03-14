import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: {
          name: "Shixiuqi",
          age: 20,
          gender: 1,
          avatar:
            "http://m.qpic.cn/psc?/V51NoUuH0EpW5c2t1Znk1hFj8E1DhfQ5/45NBuzDIW489QBoVep5mccvUwB6qLLSfeofH1KlA43.7Z*0UsON918Fc3zH1ETKt*3.oU*EFzBr2v6FZd5OMERy6VJF*pBuiH3AFJ*F.Mts!/b&bo=HQehAwAAAAADJ7o!&rf=viewer_4"
        }
      };
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: {
          token: Random.string(20)
        }
      };
    }
  }
] as MockMethod[];
