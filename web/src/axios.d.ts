import axios from "axios";

declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
// import * as axios from "axios";

// declare module "axios" {
//   interface AxiosInstance {
//     (config: AxiosRequestConfig): Promise<any>;
//   }
// }
