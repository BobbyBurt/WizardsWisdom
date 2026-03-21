/** @format */

import Phaser from "phaser";

export function setupAdaptiveCamera(
  camera: Phaser.Cameras.Scene2D.Camera,
  scaleManager: Phaser.Scale.ScaleManager,
) {
  camera.setViewport(0, 0, scaleManager.width, scaleManager.height);
  camera.setRoundPixels(true);
}

export function setCameraZoom(camera: Phaser.Cameras.Scene2D.Camera) {
  // calculate min size

  this.cameras.main.setZoom(1);
  if (
    this.scale.width < this.minScreenWidth ||
    this.scale.height < this.minScreenHeight
  ) {
    // zoom out incrementally until we're past width and height min

    for (let i = 0; i < 20; i++) {
      this.cameras.main.setZoom(1 - i * 0.05);

      // check min
      // console.log('w: ' + this.cameras.main.width / (1 - (i * .05)))
      // console.log('h: ' + this.cameras.main.height / (1 - (i * .05)))

      if (
        this.cameras.main.width / (1 - i * 0.05) > this.minScreenWidth &&
        this.cameras.main.height / (1 - i * 0.05) > this.minScreenHeight
      ) {
        break;
      }
    }
  }

  this.zoomText.setText("cam zoom: " + this.cameras.main.zoom);
}
