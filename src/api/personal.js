import transformData from "@/utils/transformData";
import service from "@/utils/request";

//获取
export function getPersonal(data) {
  return service({
    method: "get",
    url: "/person/messageOfUser?username=" + data
  });
}

//上传
export function postPersonal(data) {
  return service({
    method: "post",
    url: "/person/Edit",
    data: transformData(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
