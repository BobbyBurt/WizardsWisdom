// You can write more code here

import { getWisdomByIndex, getWisdom, wisdom, wisdoms } from "~/data/wisdoms";
import DebugScene from "./DebugScene";

/* START OF COMPILED CODE */

import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import orbLayer from "../prefabs/orbLayer";
/* START-USER-IMPORTS */
import WizardController from "~/WizardController";
import {
  loadDialogue,
  loadFarting,
  selectDialogue,
  selectedDialogue,
} from "~/dialogueUtil";
import { setupAdaptiveCamera } from "~/AdaptiveRes";

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
    const fullscreenButtonBack = this.add.image(659, 384, "white-pixel");
    fullscreenButtonBack.scaleX = 169.4188682791527;
    fullscreenButtonBack.scaleY = 54.95243253147957;
    fullscreenButtonBack.setOrigin(0, 0);

    // fullscreenButtonText
    const fullscreenButtonText = this.add.bitmapText(
      736,
      396,
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

  private orbRubAmount = 5000;
  private orbRubCycle = 4;
  private orbRubCycleSettings = [
    {
      blindScale: 1,
      shaderScale: 500,
      shaderCoverAlpha: 0.0,
      soundDetune: 300,
      glowScale: 2.1,
    },
    {
      blindScale: 0.8,
      shaderScale: 400,
      shaderCoverAlpha: 0.1,
      soundDetune: 200,
      glowScale: 1.9,
    },
    {
      blindScale: 0.6,
      shaderScale: 300,
      shaderCoverAlpha: 0.2,
      soundDetune: 100,
      glowScale: 1.7,
    },
    {
      blindScale: 0.4,
      shaderScale: 200,
      shaderCoverAlpha: 0.3,
      soundDetune: 0,
      glowScale: 1.5,
    },
  ];
  private orbInputEnabled = false;

  private pointerPosition: Phaser.Math.Vector2;

  private debugWisdomIndex = 0;

  private farting = false;

  preload() {
    if (this.gonnaDoFarting()) {
      this.farting = true;
      loadFarting(this);
    }

    this.wisdom = getWisdom();

    if (this.wisdom.type == "image") {
      this.load.image("wisdom-image", this.wisdom.content);
    }

    this.selectedDialogue = selectDialogue(this, this.wisdom.reaction);
    // this.selectedDialogue = selectDialogue(this, "positive");
    loadDialogue(this, this.selectedDialogue);

    // shadertest
    this.load.glsl("shader", "assets/shaders/test.frag");
  }

  create() {
    this.editorCreate();

    this.orb.create();
    this.orb.setWisdom(this.wisdom);

    setupAdaptiveCamera(this.cameras.main, this.scale);
    window.addEventListener("resize", this.adaptToRes.bind(this));
    // This would be a problem if we closed this scene. Would adding an event through Phaser's event system solve that? Need to figure it out for future projects
    this.adaptToRes();

    this.cameras.main.setBackgroundColor("0x222222");

    this.debugScene = this.scene.get("debug") as DebugScene;

    this.fullscreenButtonSetup();

    this.wizardController = new WizardController(
      this,
      this.wizardSpineObject.animationState,
    );

    if (this.farting) {
      this.wizardController.soundChain("moan", 9);
    } else {
      this.wizardController.setupAnimation(this.selectedDialogue, "preWisdom");
    }

    // this.orb.setOtherOrbText(true);
    this.orb.wisdomAppearAnimation();

    // DEBUG
    this.input.keyboard?.on("keydown-N", () => {
      this.orb.setClouds(false);
    });
    this.input.keyboard?.on("keydown-M", () => {
      this.orb.setClouds(true);
    });

    if (!__DEV__) this.sound.play("music", { volume: 0.3 });

    this.input.keyboard!.on("keyup", () => {
      return;
      this.wisdom = getWisdomByIndex(this.debugWisdomIndex);
      this.debugWisdomIndex++;
      this.orb.setWisdom(this.wisdom);
      console.debug(this.wisdom);
      // this.orb.wisdomAppearAnimation();
    });
  }

  update(time: number, delta: number) {
    this.updatePointerPosition();

    this.orbInputCheck();

    this.debugScene.DisplayVar("pointerPos", this.pointerPosition);

    this.updateRubParticlePosition();
  }

  gonnaDoFarting(): boolean {
    // debug: force
    return false;

    if (Phaser.Math.RND.integerInRange(0, 100) === 1) {
      return true;
    } else {
      return false;
    }
  }

  updateRubParticlePosition() {
    if (this.orb.rubParticles) {
      this.orb.rubParticles.updateConfig({
        x: this.pointerPosition.x - 500,
        y: this.pointerPosition.y - 500,
      });
    }
  }

  updatePointerPosition() {
    this.pointerPosition = this.cameras.main.getWorldPoint(
      this.input.activePointer.x,
      this.input.activePointer.y,
    );
    // this.pointerPosition.set(
    //   this.pointerPosition.x - 500,
    //   this.pointerPosition.y - 500,
    // );
  }

  /**
   * Triggered by animation callback
   */
  public enableOrbInput() {
    this.orbInputEnabled = true;
    this.orb.setClouds(false);
  }

  orbInputCheck() {
    if (!this.orbInputEnabled) return;

    this.setPointerRubParticles();

    let line = new Phaser.Geom.Line(
      this.pointerPosition.x,
      this.pointerPosition.y,
      960,
      890,
    );
    this.debugScene.DisplayVar("length", Phaser.Geom.Line.Length(line));
    if (
      this.input.activePointer.isDown &&
      Phaser.Geom.Line.Length(line) < 250 &&
      this.orbRubAmount > 0
    ) {
      this.orbRubAmount -= this.input.activePointer.distance;
      this.orb.cloudTile2_1.setAlpha(this.orb.cloudTile2_1.alpha + 0.002);
      this.orb.cloudTile2_2.setAlpha(this.orb.cloudTile2_2.alpha + 0.002);
    }
    if (this.orbRubAmount < 0) {
      if (this.orbRubCycle !== 0) {
        this.orbInputCycle();
      } else {
        this.orb.magicEndAnimation();
        this.orb.setClouds(true);
        this.orb.wisdomAppearAnimation();
        this.orb.cloudTile2_1.setAlpha(0);
        this.orb.cloudTile2_2.setAlpha(0);
        this.sound.play("orb-rub-magic", {
          volume: 0.2,
          detune: 500,
        });
        this.orbInputEnabled = false;
        this.orb.rubParticles.updateConfig({ quantity: 0 });
        this.orbGlow.setScale(1.3);
        this.wizardController.animationState.setAnimation(
          0,
          "orb-magic-end",
          false,
        );
        this.wizardController.setupAnimation(
          this.selectedDialogue,
          "postWisdom",
        );
      }
    }
  }

  private setPointerRubParticles() {
    if (this.input.activePointer.isDown) {
      this.orb.rubParticles.updateConfig({ quantity: 1 });
      this.orb.rubParticles.updateConfig({ alpha: { start: 0.06, end: 0 } });
    } else {
      this.orb.rubParticles.updateConfig({ alpha: { start: 0.02, end: 0 } });
      this.orb.rubParticles.updateConfig({ quantity: 1 });
    }
  }

  orbInputCycle() {
    this.orbRubCycle--;
    this.orbRubAmount = 5000;
    this.orb.cloudTile2_1.setAlpha(0);
    this.orb.cloudTile2_2.setAlpha(0);
    this.orb.magicPulseAnimation(
      this.orbRubCycleSettings[this.orbRubCycle].shaderScale,
      this.orbRubCycleSettings[this.orbRubCycle].blindScale,
      this.orbRubCycleSettings[this.orbRubCycle].shaderCoverAlpha,
    );
    this.sound.play("orb-rub-magic", {
      volume: 0.2,
      detune: this.orbRubCycleSettings[this.orbRubCycle].soundDetune,
    });
    this.wizardController.animationState.setAnimation(
      0,
      "orb-magic-cycle",
      false,
    );
    this.orbGlow.setScale(this.orbRubCycleSettings[this.orbRubCycle].glowScale);
    // this.debugScene.DisplayVar("cycle", this.orbRubCycle);
  }

  // decouple me please
  fullscreenButtonSetup() {
    this.fullscreenButtonBack.setInteractive();
    this.fullscreenButtonBack.on("pointerdown", () => {
      this.scale.startFullscreen();
    });
  }

  /**
   * Called on create and on resize
   */
  adaptToRes() {
    this.cameras.main.centerOn(966, 560);

    // orientation check
    if (this.registry.get("mobile") && this.scale.height > this.scale.width) {
    }
    // registry mobile flag isn't set, so this wont work

    this.cameras.main.preRender();

    // align UI objects to screen edges
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
