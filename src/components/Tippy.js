import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function TippyItem({ children, content, placement, arrow = false, theme = "dark" }) {
  return (
    <Tippy content={content} placement={placement} arrow={true} theme={theme}>
      {children}
    </Tippy>
  );
}
