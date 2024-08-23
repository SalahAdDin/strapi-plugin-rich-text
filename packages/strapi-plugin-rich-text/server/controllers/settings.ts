import { Strapi } from "@strapi/strapi";

import pluginPkg from "../../package.json";
import defaultSettings from "../defaults";

const name = pluginPkg.strapi.name;

export default ({ strapi }: { strapi: Strapi }) => ({
  async getSettings(ctx) {
    if (!strapi?.store) {
      ctx.throw(500, "Strapi store is not available.");
      return;
    }

    const config = await strapi.plugin(name).service("settings");

    if (config !== null) ctx.send(config);
    else ctx.send(defaultSettings);
  },
  async updateSettings(ctx) {
    const newSettings = ctx.request.body;

    if (!strapi?.store) {
      ctx.throw(500, "Strapi store is not available.");
      return;
    }

    await strapi
      .store({
        type: "plugin",
        name: name,
      })
      .set({
        key: "settings",
        value: newSettings,
      });

    ctx.send({ ok: true });
  },
});
