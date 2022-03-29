import { axios } from "@/plugins/axios";
import { ListOptions } from "@/components/notificationList/types";

export function getNotificationData() {
  return axios.request<ListOptions[]>({
    url: "notification/data"
  });
}
