import img1 from "./media/images/1.jpg";
import img2 from "./media/images/2.jpg";
import img3 from "./media/images/3.jpg";
import img4 from "./media/images/4.gif";
import audio1 from "./media/audio/1.mp3";
import audio2 from "./media/audio/2.mp3";
import audio3 from "./media/audio/3.mp3";
import video1 from "./media/video/1.mp4";
import video2 from "./media/video/2.mp4";

export const videos = [
  { header: "video1", src: video1 },
  { header: "video2", src: video2 },
];

export const audios = [
  { header: "audio1", src: audio1 },
  { header: "audio2", src: audio2 },
  { header: "audio3", src: audio3 },
];

export const images = [
  { header: "img-1", src: img1 },
  { header: "img-2", src: img2 },
  { header: "img-3", src: img3 },
  { header: "img-4", src: img4 },
];

export const imageTemplate = (item) => {
  return `
    <div>
      <h3>${item.header}</h3>
      <img src="${item.src}" alt="${item.header}">
    </div>
  `;
};

export const audioTemplate = (item) => {
  return `
    <div>
      <h3>${item.header}</h3>
      <div>
        <audio src="${item.src}" controls></audio>
      </div>
    </div>
  `;
};

export const videoTemplate = (item) => {
  return `
    <div>
      <h3>${item.header}</h3>
      <div>
        <video src="${item.src}" controls></video>
      </div>
    </div>
  `;
};
