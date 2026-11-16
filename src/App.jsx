import "@astryxdesign/core/reset.css";
import "@astryxdesign/core/astryx.css";
import { Theme } from "@astryxdesign/core/theme";
import { themes, defaultThemeSlug } from "./astryx-themes";

export function App({ children }) {
  return (
    <Theme theme={themes[defaultThemeSlug]}>
      {children}
    </Theme>
  );
}

export default App;
