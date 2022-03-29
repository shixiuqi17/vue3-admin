import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/notification/data",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: [
          {
            title: "通知",
            content: [
              {
                title: "用户A回复了你的邮件",
                time: "2022-03-10 14:33:18",
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
              },
              {
                title: "用户B邀请你参加会议",
                time: "2019-03-14 10:25:40",
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"
              },
              {
                title: "用户C已批准了你的休假申请",
                time: "2019-2-18 16:22:10",
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"
              }
            ]
          },
          {
            title: "关注",
            content: [
              {
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
                title: "用户A评论了你",
                desc: "描述信息描述信息描述信息",
                time: "3小时前"
              },
              {
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
                title: "用户B评论了你",
                desc: "描述信息描述信息描述信息",
                time: "10小时前"
              },
              {
                avatar:
                  "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
                title: "用户C评论了你",
                desc: "描述信息描述信息描述信息",
                time: "5小时前"
              }
            ]
          },
          {
            title: "代办",
            content: [
              {
                title: "任务名称",
                desc: "任务需要在 2017-01-12 20:00 前启动",
                tag: "未开始",
                tagType: ""
              },
              {
                title: "紧急任务",
                desc: "紧急任务需在2022-01-06，需在 2022-01-07 前完成代码变更任务",
                tag: "马上到期",
                tagType: "danger"
              },
              {
                title: "信息安全考试",
                desc: "指派竹尔于 2022-01-01 前完成更新并发布",
                tag: "已耗时8天",
                tagType: "warning"
              }
            ]
          }
        ]
      };
    }
  }
] as MockMethod[];
