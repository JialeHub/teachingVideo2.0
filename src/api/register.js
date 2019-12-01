import transformData from "@/utils/transformData";
import service from "@/utils/request";

//注册
export function registerApi(data) {
  return service({
    method: "post",
    url: "/auth/register",
    data: transformData(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
