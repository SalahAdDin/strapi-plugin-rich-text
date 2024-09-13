import { TipTapAsset } from "../types";

export const getUpdatedImage = (asset: TipTapAsset) => ({
  src: asset.url,
  alt: asset.alt,
  ...(asset.width && { width: asset.width }),
  ...(asset.height && { height: asset.height }),
  ...((asset.url?.includes("lazy") || asset.caption === "lazy") && {
    loading: "lazy",
  }),
});
