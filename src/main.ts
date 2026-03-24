/** @format */

import cloudSaves from "./API/SavesData";
import medalScene from "./API/medalScene";
import { newgroundsIOWrapper } from "./API/newgroundsIOWrapper";
import DebugScene from "./scenes/DebugScene";
import Preload from "./scenes/Preload";
import { SpinePlugin } from "@esotericsoftware/spine-phaser";
import WizardScene from "./scenes/WizardScene";

window.addEventListener("load", function () {
  if (__DEV__) {
    console.clear();
  }

  var game = new Phaser.Game({
    title: "Wizard's Wisdom",
    // url: 'https://www.newgrounds.com/projects/games/1923225/preview',
    version: "0",

    // type: __DEV__ ? Phaser.CANVAS : Phaser.AUTO,
    type: Phaser.AUTO,
    backgroundColor: "#333333",
    // pixelArt: true,
    roundPixels: true,
    scale: {
      mode: Phaser.Scale.NONE,
      width: window.innerWidth * window.devicePixelRatio,
      height: window.innerHeight * window.devicePixelRatio,
      zoom: 1 / window.devicePixelRatio,
    },
    transparent: true,
    plugins: {
      scene: [
        {
          key: "spine.SpinePlugin",
          plugin: SpinePlugin,
          mapping: "spine",
        },
      ],
    },
  });

  game.scene.add("preload", Preload);
  game.scene.add("boot", Boot, true);
  game.scene.add("medal", medalScene);
  game.scene.add("debug", DebugScene);
  game.scene.add("wizard", WizardScene);
});

class Boot extends Phaser.Scene {
  private ngWrap: newgroundsIOWrapper;

  /**
   * load preload assets, then the scene
   */
  preload() {
    window.addEventListener("resize", this.resize.bind(this));

    this.load.pack("pack", "assets/preload-asset-pack.json");
    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("preload"),
    );
  }

  create() {
    // NG.io event callbacks
    return;
    this.game.events.once(Phaser.Core.Events.STEP, () => {
      this.ngWrap = new newgroundsIOWrapper();
      this.ngWrap.start();
    });
    this.game.events.on(Phaser.Core.Events.STEP, () => {
      NGIO.keepSessionAlive();
      if (NGIO.isInitialized) {
        this.ngWrap.update(this.game);
      }
    });

    this.setSaveDataKeys();
  }

  /**
   * Sets registry data keys that will be included in the save file.
   */
  setSaveDataKeys() {
    let dataKeys = new Array<string>();

    dataKeys.push("keys-for-data-that-should-be-saved");

    cloudSaves.setDataKeys(dataKeys);
  }

  resize() {
    let w = window.innerWidth * window.devicePixelRatio;
    let h = window.innerHeight * window.devicePixelRatio;

    // manually resize the game with the Phaser 3.16 scalemanager
    this.scale.resize(w, h);

    for (let scene of this.scene.manager.scenes) {
      if (scene.scene.settings.active) {
        // Scale the camera
        scene.cameras.main.setViewport(0, 0, w, h);

        scene.events.emit("resize");
      }
    }
  }
}
