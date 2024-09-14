import { Editor, NodeViewWrapper } from "@tiptap/react";

type AudioProps = {
  editor: Editor;
} & Record<string, any>;

const AudioRenderer = (props: AudioProps) => {
  const { node } = props;

  return (
    <NodeViewWrapper>
      <div className="audio-wrapper">
        <audio
          src={node.attrs.src}
          controls
          data-document-id={node.attrs.src}
          data-document-name={node.attrs.name}
        >
          <track kind="captions" />
        </audio>
      </div>
    </NodeViewWrapper>
  );
};

export default AudioRenderer;
