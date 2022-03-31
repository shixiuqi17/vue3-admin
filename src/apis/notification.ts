import { axios } from "@/plugins/axios";
import { ListOptions } from "@/components/compSecondDev/notificationList/types";

export function getNotificationData() {
  return axios.request<ListOptions[]>({
    url: "notification/data"
  });
}
