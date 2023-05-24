import parse, { DOMNode, Element, domToReact } from "html-react-parser";

export default function RichText({
  richTextHtml,
  className = "",
  ...rest
}: {
  richTextHtml: string;
  className?: string;
}) {
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        const NodeTag = `${domNode.name}`;
        return (
          // @ts-ignore
          <NodeTag className={className} {...rest}>
            {domToReact(domNode.children, options)}
          </NodeTag>
        );
      }
    },
  };

  return parse(richTextHtml, options) as JSX.Element;
}
