import { PageName } from "./pages/types";
import { renderPage } from "./utils/renderPage";

window.renderPage = renderPage;

renderPage(PageName.Home);
