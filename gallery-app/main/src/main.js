import "./index.scss";
import GalleryTemplate from "./components/Gallery/Gallery.hmpl";
import TitleTemplate from "./components/Title/Title.hmpl";

const { response: Title } = TitleTemplate();

const { response: Gallery } = GalleryTemplate(() => {
  return {};
});

document.body.append(Title);
document.body.append(Gallery);
