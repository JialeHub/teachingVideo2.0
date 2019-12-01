import transformData from "@/utils/transformData";
import service from "@/utils/request";

//登录
export function loginApi(data) {
  return service({
    method: "post",
    url: "/auth/login",
    data: transformData(data)
  });
}
