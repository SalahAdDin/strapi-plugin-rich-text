type Settings = {
  headings: string[];
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  blockquote: boolean;
  color: boolean;
  highlight: boolean;
  align: string[];
  lists: string[];
  disableOrderedListShorthand: boolean;
  table: boolean;
  hardbreak: boolean;
  horizontal: boolean;
  links: {
    enabled: boolean;
    autolink: boolean;
    openOnClick: boolean;
    linkOnPaste: boolean;
    relAttribute: boolean;
    HTMLAttributes: {
      rel: string;
    };
  };
  image: {
    enabled: boolean;
    inline: boolean;
    allowBase64: boolean;
  };
  other: {
    characterLimit?: number;
    wordcount: boolean;
    saveJson: boolean;
  };
  youtube: {
    enabled: boolean;
    height: number;
    width: number;
  };
  /*   contentBlocks: {
      types: string;
    }; */
};

export type { Settings };
