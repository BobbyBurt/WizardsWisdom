// You can write more code here

import { getWisdomForDate, wisdom, wisdoms } from "~/data/wisdoms";
import DebugScene from "./DebugScene";
import fullscreenHandler from "~/FullscreenHandler";

/* START OF COMPILED CODE */

import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import orbLayer from "../prefabs/orbLayer";
/* START-USER-IMPORTS */
import WizardController from "~/WizardController";
import { loadDialogue, selectDialogue, selectedDialogue } from "~/dialogueUtil";

/* END-USER-IMPORTS */

export default class WizardScene extends Phaser.Scene {
  constructor() {
    super("wizard");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // wizardSpineObject
    const wizardSpineObject = this.add.spine(
      966,
      560,
      "wizard",
      "wizard-atlas",
      new SkinsAndAnimationBoundsProvider(null, ["default"]),
    );
    wizardSpineObject.skeleton.setSkinByName("default");

    // orbGlow
    const orbGlow = this.add.image(969, 893, "point-blur");
    orbGlow.blendMode = Phaser.BlendModes.ADD;
    orbGlow.scaleX = 1.3;
    orbGlow.scaleY = 1.3;
    orbGlow.alpha = 0.75;
    orbGlow.alphaTopLeft = 0.75;
    orbGlow.alphaTopRight = 0.75;
    orbGlow.alphaBottomLeft = 0.75;
    orbGlow.alphaBottomRight = 0.75;
    orbGlow.tintTopLeft = 12748273;
    orbGlow.tintTopRight = 12748273;
    orbGlow.tintBottomLeft = 12748273;
    orbGlow.tintBottomRight = 12748273;

    // fullscreenButtonBack
    const fullscreenButtonBack = this.add.image(22, 25, "white-pixel");
    fullscreenButtonBack.scaleX = 169.4188682791527;
    fullscreenButtonBack.scaleY = 54.95243253147957;
    fullscreenButtonBack.setOrigin(0, 0);

    // fullscreenButtonText
    const fullscreenButtonText = this.add.bitmapText(
      99,
      37,
      "monogram-italic",
      "Fullscreen",
    );
    fullscreenButtonText.setOrigin(0.5, 0);
    fullscreenButtonText.tintTopLeft = 0;
    fullscreenButtonText.tintTopRight = 0;
    fullscreenButtonText.tintBottomLeft = 0;
    fullscreenButtonText.tintBottomRight = 0;
    fullscreenButtonText.text = "Fullscreen";
    fullscreenButtonText.fontSize = 24;
    fullscreenButtonText.align = 1;

    // orb
    const orb = new orbLayer(this);
    this.add.existing(orb);

    this.wizardSpineObject = wizardSpineObject;
    this.orbGlow = orbGlow;
    this.fullscreenButtonBack = fullscreenButtonBack;
    this.fullscreenButtonText = fullscreenButtonText;
    this.orb = orb;

    this.events.emit("scene-awake");
  }

  private wizardSpineObject!: SpineGameObject;
  private orbGlow!: Phaser.GameObjects.Image;
  private fullscreenButtonBack!: Phaser.GameObjects.Image;
  private fullscreenButtonText!: Phaser.GameObjects.BitmapText;
  private orb!: orbLayer;

  /* START-USER-CODE */

  private debugScene: DebugScene;

  private wisdomTextScaleTween: Phaser.Tweens.Tween;
  private cloudEffectFadeTween: Phaser.Tweens.Tween;
  private wisdomTextAlphaTween: Phaser.Tweens.Tween;
  private wisdomTextGlowTween: Phaser.Tweens.Tween;
  private displacementFXTween: Phaser.Tweens.Tween;
  private glowTween: Phaser.Tweens.Tween;
  private glowTween2: Phaser.Tweens.Tween;

  private wizardController: WizardController;
  private wisdom: wisdom;
  private selectedDialogue: selectedDialogue;

  private shader: Phaser.GameObjects.Shader;

  private orbRubAmount = 7000;
  private orbRubCycle = 4;
  private orbRubCycleSettings = [
    { blindScale: 1, shaderScale: 500 },
    { blindScale: 0.8, shaderScale: 400 },
    { blindScale: 0.6, shaderScale: 300 },
    { blindScale: 0.4, shaderScale: 200 },
  ];
  private orbInputEnabled = false;

  preload() {
    // let testDate = new Date(2025, 11, 17, 2, 30);
    // let wisdom = getWisdomForDate(testDate);
    this.wisdom = getWisdomForDate();

    if (this.wisdom.type == "image") {
      this.load.image("wisdom-image", this.wisdom.content);
    }

    this.selectedDialogue = selectDialogue(this, "negative");
    loadDialogue(this, this.selectedDialogue);

    // shadertest
    this.load.glsl("shader", "assets/shaders/test.frag");
  }

  create() {
    this.editorCreate();

    this.orb.create();
    this.orb.setWisdom(this.wisdom);

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.debugScene = this.scene.get("debug") as DebugScene;

    this.fullscreenButtonSetup();

    // this.orbEffectMask.setVisible(false);
    // just in case i left it visible in the editor

    this.wizardController = new WizardController(
      this,
      this.wizardSpineObject.animationState,
    );
    this.wizardController.setupAnimation(this.selectedDialogue);

    this.sound.play("music", { volume: 0.3 });
  }

  update(time: number, delta: number) {
    this.orbInputCheck();
  }

  /**
   * Triggered by animation callback
   */
  public enableOrbInput() {
    this.orbInputEnabled = true;

    // change orb visual
  }

  orbInputCheck() {
    if (!this.orbInputEnabled) return;

    let line = new Phaser.Geom.Line(
      this.input.activePointer.worldX,
      this.input.activePointer.worldY,
      960,
      890,
    );
    if (
      this.input.activePointer.isDown &&
      Phaser.Geom.Line.Length(line) < 250 &&
      this.orbRubAmount > 0
    ) {
      this.orbRubAmount -= this.input.activePointer.distance;
    }
    if (this.orbRubAmount <= 0) {
      this.orbRubCycle--;
      this.orbRubAmount = 7000;
    }
    this.debugScene.DisplayVar("rub", this.orbRubAmount);
  }

  // decouple me please
  fullscreenButtonSetup() {
    this.fullscreenButtonBack.setInteractive();
    this.fullscreenButtonBack.on("pointerdown", () => {
      this.scale.startFullscreen();
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
