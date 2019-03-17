import { Context } from "@nuxt/vue-app";
import pkg from "./package.json";

export default {
  mode: "universal",

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: Context) {
      if (ctx.isClient) {
        config.devtool = "source-map";
      }
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    // tslint:disable-next-line:object-literal-sort-keys
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Build configuration
  */
};
