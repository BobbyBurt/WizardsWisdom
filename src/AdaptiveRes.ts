/** @format */

import Phaser from "phaser";
import DebugScene from "./scenes/DebugScene";

/**
 *
 * @param camera
 * @param safeZone zoom will make sure everything in this rect is visible
 * @param debugScene
 */
export function setCameraZome(
  camera: Phaser.Cameras.Scene2D.Camera,
  safeZone: Phaser.GameObjects.Rectangle,
  debugScene?: DebugScene,
) {
  safeZone.setVisible(false);

  camera.setZoom(1);
  camera.preRender();
  let h = camera.displayHeight / safeZone.height;
  let w = camera.displayWidth / safeZone.width;
  camera.setZoom(h < w ? h : w);

  // debug display
  // if (debugScene) {
  //   debugScene.DisplayVar("display width", camera.displayWidth);
  //   debugScene.DisplayVar("safe zone width", safeZone.width);
  //   debugScene.DisplayVar("zoom", camera.zoom);
  // }
}
