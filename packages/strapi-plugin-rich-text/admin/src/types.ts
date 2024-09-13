import { Editor } from "@tiptap/react";

const ALLOWED_TYPES = ["files", "images", "videos", "audios"] as const;
const DIALOG_TYPES = [
  "color",
  "highlight",
  "insertLink",
  "insertYouTube",
  "abbr",
] as const;

type AllowedTypes = (typeof ALLOWED_TYPES)[number];
type DialogTypes = (typeof DIALOG_TYPES)[number];

type AssetFormat = {
  url: string;
  width: number;
  height: number;
  size: number;
};

type BaseAsset = Omit<AssetFormat, "width" | "height"> & {
  id: number;
  name: string;
  caption: string | null;
  width?: number;
  height?: number;
  hash: string;
  ext?: string;
  mime: string;
  sizeInBytes: number;
  createdAt: string;
  updatedAt: string;
};

type Asset = BaseAsset & {
  alternativeText: string | null;
  related?: Array<any>;
  formats?: {
    thumbnail?: AssetFormat;
    medium?: AssetFormat;
    small?: AssetFormat;
    large?: AssetFormat;
  };
};

type TipTapAsset = BaseAsset & {
  alt: string;
  // loading: string;
};

type DialogProps = {
  editor: Editor;
  onExit: () => void;
};

export type {
  AllowedTypes,
  Asset,
  AssetFormat,
  DialogTypes,
  DialogProps,
  TipTapAsset,
};
