import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 2000);
  return camera;
}

export { createCamera };
