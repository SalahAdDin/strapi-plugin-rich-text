import { ComponentPropsWithRef, ReactNode, forwardRef, Ref } from "react";

import { formatBytes, getExtensionFromFileName } from "../../../lib/media";

import { ExtensionParagraph, StyledAttachment } from "./Attachment.styles";

export interface AttachmentProps extends ComponentPropsWithRef<"div"> {
  /**
   * Name of resource or Folder
   * */
  name?: string;
  size?: number;
  /**
   * Actions attachment
   * */
  options: ReactNode | undefined;
}

export type AttachmentType = AttachmentProps;

const Attachment = forwardRef(
  (
    { name = "Attachment Name", size, options, ...restProps }: AttachmentProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const extension = getExtensionFromFileName(name);

    return (
      <StyledAttachment ref={ref} {...restProps}>
        <div className="file">
          <ExtensionParagraph extension={extension}>
            {extension}
          </ExtensionParagraph>
          <p className="filename text-truncate">
            {name}
            <span>{formatBytes(size ?? 0)}</span>
          </p>
        </div>
        {options && <div className="options">{options}</div>}
      </StyledAttachment>
    );
  }
);

Attachment.displayName = "Attachment";

export default Attachment;
