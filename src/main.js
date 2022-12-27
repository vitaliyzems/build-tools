import "./style.scss";
import {
  images,
  audios,
  videos,
  imageTemplate,
  audioTemplate,
  videoTemplate,
} from "./mediaItems";

const galleryHeader = document.querySelector(".gallery-header");
const gallery = document.createElement("div");

gallery.classList.add("container", "gallery");

images.forEach((item) => {
  gallery.insertAdjacentHTML("beforeend", imageTemplate(item));
});

audios.forEach((item) => {
  gallery.insertAdjacentHTML("beforeend", audioTemplate(item));
});

videos.forEach((item) => {
  gallery.insertAdjacentHTML("beforeend", videoTemplate(item));
});

galleryHeader.after(gallery);
