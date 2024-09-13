import React from "react";

import { prefixFileUrlWithBackendUrl, useLibrary } from "@strapi/helper-plugin";

import { AllowedTypes, Asset, TipTapAsset } from "../../../types";

type MediaLibraryDialogProps = {
  allowedTypes?: Array<AllowedTypes>;
  isOpen: boolean;
  onChange: (assets: Array<TipTapAsset>) => void;
  onToggle: () => void;
};

const MediaLibraryDialog = ({
  allowedTypes = ["images"],
  isOpen = false,
  onChange,
  onToggle,
}: MediaLibraryDialogProps) => {
  const { components } = useLibrary();
  const MediaLibraryModal = components["media-library"];

  const handleSelectedAssets = (files: Array<Asset>) => {
    const formattedFiles = files.map(({ alternativeText, ...file }) => ({
      ...file,
      alt: alternativeText || file.name,
      url: prefixFileUrlWithBackendUrl(file.url),
      mime: file.mime,
    }));

    onChange(formattedFiles);
  };

  if (!isOpen) return null;

  return (
    <MediaLibraryModal
      allowedTypes={allowedTypes}
      onClose={onToggle}
      onSelectAssets={handleSelectedAssets}
    />
  );
};

export default MediaLibraryDialog;
