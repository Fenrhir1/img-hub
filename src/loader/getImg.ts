import { mapNodes } from "../declarations";
import { utilityGetNode } from "../utilities/getNode";

export function getImg() {
  const storedImages = JSON.parse(
    localStorage.getItem("imageDataArray") || "[]"
  );
  const imgContainer = document.createElement("div");
  imgContainer.className = "image-container";
  const { value: cover } = utilityGetNode(
    mapNodes.inputImg
  ) as HTMLInputElement;
  const { value: title } = utilityGetNode(
    mapNodes.inputTitle
  ) as HTMLInputElement;
  const { value: description } = utilityGetNode(
    mapNodes.inputDescription
  ) as HTMLInputElement;

  imgContainer.innerHTML = `<img src="${cover}" alt="">
  <span>${title}</span>
  <span>${description}</span>`;
  const node = utilityGetNode(mapNodes.bottomContainer);
  node.appendChild(imgContainer);
  const imgStorage = {
    cover,
    title,
    description,
  };
  storedImages.push(imgStorage);
  localStorage.setItem("lastImageData", JSON.stringify(storedImages));
}
