/// <reference types="vite/client" />
//解决ts2307 报错
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
