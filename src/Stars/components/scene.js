import { Color, Scene } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("red");
  console.log(scene);

  return scene;
}

export { createScene };
