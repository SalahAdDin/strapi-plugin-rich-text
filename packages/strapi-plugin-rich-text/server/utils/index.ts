import pluginPkg from "../../package.json";
import { ContentType } from "../../types/contentTypes";
import { Settings } from "../../types/settings";

const name = pluginPkg.strapi.name;

const getConfig = (): Settings => {
  return strapi.config.get(`plugin.${name}`);
};

const getCoreStore = () => {
  return strapi.store({ type: "plugin", name });
};

const getService = (service: string) => {
  return strapi.plugin(name).service(service);
};

const API_PREFIX = "api::";

export const extractApiContentTypes = (
  contentTypes: Array<ContentType>
): Array<ContentType> =>
  contentTypes.filter((contentType) => contentType.name.startsWith(API_PREFIX));

export { getService, getCoreStore, getConfig };
