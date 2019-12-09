import transformData from "@/utils/transformData";
import service from "@/utils/request";

//注册
export function addHomeworkApi(data) {
  return service({
    method: "post",
    url: "/TheBackground/JobRequest",
    data: transformData(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
