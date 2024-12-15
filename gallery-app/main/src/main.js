import "./index.scss";
import GalleryTemplate from "./components/Gallery/Gallery.hmpl";
import TitleTemplate from "./components/Title/Title.hmpl";

const { response: Title } = TitleTemplate();

const { response: Gallery } = GalleryTemplate(({ request: { event } }) => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page: event ? Number(event.target.getAttribute("data-page")) : 1,
    }),
  };
});

document.body.append(Title);
document.body.append(Gallery);

const gallery = document.querySelector("#gallery");
const galleryInitial = document.querySelector("#gallery-initial");
const modal = document.querySelector("#modal");
const modalImg = modal.querySelector("img");
const navigationButtons = document.querySelectorAll(".navigation-button");

const setActive = (e) => {
  if (e.target.tagName === "IMG") {
    modalImg.src = e.target.src;
    modal.classList.add("active");
  }
};

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

galleryInitial.addEventListener("click", (e) => {
  setActive(e);
});

gallery.addEventListener("click", (e) => {
  setActive(e);
});

for (let i = 0; i < navigationButtons.length; i++) {
  const btn = navigationButtons[i];
  btn.addEventListener("click", () => {
    if (!galleryInitial.classList.contains("hidden"))
      galleryInitial.classList.add("hidden");
    btn.setAttribute("disabled", "");
    navigationButtons[i === 0 ? 1 : 0].removeAttribute("disabled");
  });
}
