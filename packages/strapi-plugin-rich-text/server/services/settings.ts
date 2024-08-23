import { Strapi } from "@strapi/strapi";

import defaultSettings from "../config/defaults";
import { getCoreStore } from "../utils";

const createDefaultConfig = async () => {
  const pluginStore = getCoreStore();

  await pluginStore.set({ key: "settings", value: defaultSettings });

  return pluginStore.get({ key: "settings" });
};

export default ({ strapi: _ }: { strapi: Strapi }) => ({
  getConfig: async () => {
    let config = await getCoreStore().get({ key: "settings" });

    if (!config) {
      config = await createDefaultConfig();
    }

    return config;
  },
});
