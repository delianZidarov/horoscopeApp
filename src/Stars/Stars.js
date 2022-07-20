import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

let camera;
let scene;
let renderer;

class Stars {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const light = createLights();

    scene.add(light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    renderer.render(scene, camera);
    console.log("renderer", renderer);
  }
}

export { Stars };
