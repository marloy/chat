import { PageName } from "../pages/types";

declare global {
  interface Window {
    renderPage: (name: PageName) => void;
}
}

export {};
