import service from "@/utils/request";

//主页拉取数据
export function homeApi() {
  return service({
    method: "get",
    url: "/administrator/HomePage"
  });
}
