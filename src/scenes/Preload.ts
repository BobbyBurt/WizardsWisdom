/** @format */

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import dataManagerKeys from "~/data/dataManagerKeys";
import fullscreenHandler from "~/FullscreenHandler";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // progress
    const progress = this.add.text(240, 104, "", {});
    progress.setOrigin(0.5, 0.5);
    progress.visible = false;
    progress.tintTopLeft = 9737364;
    progress.tintTopRight = 9737364;
    progress.tintBottomLeft = 9737364;
    progress.tintBottomRight = 9737364;
    progress.text = "0%";
    progress.setStyle({ fontSize: "-64px" });

    // bitmaptext
    const bitmaptext = this.add.bitmapText(
      960,
      540,
      "quintessential",
      "loading..."
    );
    bitmaptext.setOrigin(0.5, 0.5);
    bitmaptext.text = "loading...";
    bitmaptext.fontSize = 72;

    this.bitmaptext = bitmaptext;

    this.events.emit("scene-awake");
  }

  private bitmaptext!: Phaser.GameObjects.BitmapText;

  /* START-USER-CODE */

  loaded = false;

  preload() {
    this.editorCreate();

    this.scale.autoRound = true;
    let _fullscreenHandler = new fullscreenHandler(this.game);
    if (this.scale.isPortrait) {
      this.game.scale.setGameSize(
        fullscreenHandler.mobilePortraitRes.width,
        fullscreenHandler.mobilePortraitRes.height
      );
    }

    this.sound.pauseOnBlur = false;

    // TEMP - hardcode for debugging. Will figure out how to access if user is returning later
    this.game.registry.set(dataManagerKeys.returningUser, false);

    // camera
    fullscreenHandler.adjustCamera(this.cameras.main);
    // this.cameras.main.setOrigin(0, 0);
    // this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
    // this.cameras.main.setBackgroundColor(0x242424);
    this.cameras.main.transparent = true;

    // start input
    window.addEventListener("touchstart", this.onPointer);
    window.addEventListener("click", this.onPointer);

    this.scene.launch("medal");

    this.scene.launch("debug");
  }

  create() {
    this.load.pack("asset-pack", "assets/asset-pack.json");
    this.load.start();

    // load event
    this.load.on(Phaser.Loader.Events.COMPLETE, () => {
      this.loaded = true;

      // DEBUG: auto load
      if (__DEV__) {
        // this.start();
        // mobile detection will not run if enabled
      }
    });

    this.load.on("filecomplete", (key: string, type: string, data: any) => {
      // this.fileText.setText(this.fileText.text + `\nloaded: ${key} ${type}`)
      // this.fileText.setY(this.fileText.y - 10)
    });

    this.load.on("complete", (key: string, type: string, data: any) => {
      this.loaded = true;
      this.bitmaptext.setText("Click / tap to begin");

      // debug autostart
      // this.scene.start("wizard");
    });
  }

  /**
   * Set registry's mobile value based on input.
   *
   * Start the game if loaded.
   */
  onPointer = (event: any) => {
    // set registry's mobile value
    if (event.type == "touchstart") {
      this.registry.set("mobile", true);
    } else if (event.type == "click") {
      this.registry.set("mobile", false);
    }

    if (this.loaded) {
      this.start();
    }
  };

  /**s
   * loads next scene
   */
  start() {
    window.removeEventListener("touchstart", this.onPointer);
    window.removeEventListener("click", this.onPointer);

    this.scene.start("wizard");
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
