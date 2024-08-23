import pluginPkg from "../../package.json";

const name = pluginPkg.strapi.name;

const getCoreStore = () => {
  return strapi.store({ type: "plugin", name });
};

const getService = (service: string) => {
  return strapi.plugin(name).service(service);
};

export { getService, getCoreStore };
