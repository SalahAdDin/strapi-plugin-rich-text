import { Strapi } from "@strapi/strapi";

import defaultSettings from "../config/defaults";
import { extractApiContentTypes, getCoreStore, getService } from "../utils";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getContentTypes(ctx) {
    const types = strapi.contentTypes;

    const formattedTypes = extractApiContentTypes(
      Object.keys(types).map((key) => ({
        name: key,
        attributes: types[key]["attributes"],
        info: types[key]["info"],
        // kind: data[key]["kind"],
        key: types[key]["uid"],
      }))
    );

    ctx.send(formattedTypes);
  },
  async getEntries(ctx) {
    const { name } = ctx.params;
    const entries = await strapi.entityService?.findMany(name);

    const formattedEntries = (
      entries as unknown as Array<Record<any, string>>
    )?.map((entry) => ({
      id: entry.id,
      name: entry.name || entry.title,
      uuid: entry.slug,
    }));

    ctx.send(formattedEntries);
  },
  async getSettings(ctx) {
    if (!strapi?.store) {
      ctx.throw(500, "Strapi store is not available.");
      return;
    }

    const config = await getService("settings").getConfig();

    if (config !== null) ctx.send(config);
    else ctx.send(defaultSettings);
  },
  async updateSettings(ctx) {
    const newSettings = ctx.request.body;

    if (!strapi?.store) {
      ctx.throw(500, "Strapi store is not available.");
      return;
    }

    await getCoreStore().set({
      key: "settings",
      value: newSettings,
    });

    ctx.send({ ok: true });
  },
});
