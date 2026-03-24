/** @format */

import Phaser from "phaser";
import DebugScene from "./scenes/DebugScene";

/**
 *
 * @param camera
 * @param safeZone zoom will make sure everything in this rect is visible
 * @param borderZone will stop zooming out once camera width or height reaches this rect's. Overrides safezone. The rect should be big enough that in normal circumstances this fallback never occurs. This is just so that things beyond the camera aren't seen if it does.
 * @param debugScene debug info will be displayed by DebugScene if provided
 */
export function setCameraZome(
  camera: Phaser.Cameras.Scene2D.Camera,
  safeZone: Phaser.GameObjects.Rectangle,
  borderZone: Phaser.GameObjects.Rectangle,
  debugScene?: DebugScene,
) {
  // rects should only be visible in editor
  // safeZone.setVisible(false);
  // borderZone.setVisible(false);

  // debug
  let mode = "max";

  // terminology is confusing cause lowering zoom is "zooming out," more stuff is visible. We always start at zoom = 1 where visuals are most crisp, then zoom out a variable amount

  // calculate max zoom
  camera.setZoom(1);
  camera.preRender();
  let heightMaxZoom = camera.displayHeight / safeZone.height;
  let widthMaxZoom = camera.displayWidth / safeZone.width;
  let maxZoom = heightMaxZoom < widthMaxZoom ? heightMaxZoom : widthMaxZoom;

  // calculate min zoom
  let widthMinZoom = camera.displayWidth / borderZone.width;
  let heightMinZoom = camera.displayHeight / borderZone.height;
  let minZoom = widthMinZoom > heightMinZoom ? widthMinZoom : heightMinZoom;

  // Use max zoom unless min is needed
  camera.setZoom(maxZoom);
  mode = "safe";
  if (
    camera.displayWidth > borderZone.width ||
    camera.displayHeight > borderZone.height
  ) {
    camera.setZoom(minZoom);
    mode = "max";
  }

  // debug display
  if (debugScene) {
    debugScene.DisplayVar("display width", camera.displayWidth);
    debugScene.DisplayVar("max zone width", borderZone.width);
    debugScene.DisplayVar("zoom", camera.zoom);
    debugScene.DisplayVar("m", minZoom);
    debugScene.DisplayVar("zone", mode);
  }
}
