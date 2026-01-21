// You can write more code here

import { getWisdomForDate, wisdom, wisdoms } from "~/data/wisdoms";
import DebugScene from "./DebugScene";
import fullscreenHandler from "~/FullscreenHandler";

/* START OF COMPILED CODE */

import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
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

		// displacement_test
		const displacement_test = this.add.image(-112, 773, "displacement-test");
		displacement_test.scaleX = 35.981488078279575;
		displacement_test.scaleY = -27.397985958338662;
		displacement_test.visible = false;
		displacement_test.alpha = 0.2;
		displacement_test.alphaTopLeft = 0.2;
		displacement_test.alphaTopRight = 0.2;
		displacement_test.alphaBottomLeft = 0.2;
		displacement_test.alphaBottomRight = 0.2;

		// wizardSpineObject
		const wizardSpineObject = this.add.spine(965, 560, "wizard", "wizard-atlas", new SkinsAndAnimationBoundsProvider(null, ["default"]));
		wizardSpineObject.skeleton.setSkinByName("default");

		// glowEffect
		const glowEffect = this.add.image(961, 894, "point-blur");
		glowEffect.blendMode = Phaser.BlendModes.ADD;
		glowEffect.scaleX = 1.7761059502504315;
		glowEffect.scaleY = 1.7761059502504315;
		glowEffect.alpha = 0.75;
		glowEffect.alphaTopLeft = 0.75;
		glowEffect.alphaTopRight = 0.75;
		glowEffect.alphaBottomLeft = 0.75;
		glowEffect.alphaBottomRight = 0.75;
		glowEffect.tintTopLeft = 12748273;
		glowEffect.tintTopRight = 12748273;
		glowEffect.tintBottomLeft = 12748273;
		glowEffect.tintBottomRight = 12748273;

		// orbBack
		const orbBack = this.add.image(960, 870, "white-pixel");
		orbBack.scaleX = 535.0364126804407;
		orbBack.scaleY = 498.1917593818383;
		orbBack.tintTopLeft = 0;
		orbBack.tintTopRight = 0;
		orbBack.tintBottomLeft = 0;
		orbBack.tintBottomRight = 0;

		// shaderContainer
		const shaderContainer = this.add.container(0, 0);

		// orbEffect1
		const orbEffect1 = this.add.tileSprite(1045, 857, 798, 400, "orb-test-3");
		orbEffect1.blendMode = Phaser.BlendModes.ADD;
		orbEffect1.scaleX = 1.1425012389526452;
		orbEffect1.scaleY = 1.1425012389526452;
		orbEffect1.alpha = 0.4;
		orbEffect1.alphaTopLeft = 0.4;
		orbEffect1.alphaTopRight = 0.4;
		orbEffect1.alphaBottomLeft = 0.4;
		orbEffect1.alphaBottomRight = 0.4;
		orbEffect1.tilePositionY = 78;
		orbEffect1.tileScaleX = 2.91;
		orbEffect1.tileScaleY = 1.26;

		// orbEffect2
		const orbEffect2 = this.add.tileSprite(985, 854, 798, 400, "orb-test-3");
		orbEffect2.blendMode = Phaser.BlendModes.ADD;
		orbEffect2.scaleX = 1.1425012389526452;
		orbEffect2.scaleY = 1.1425012389526452;
		orbEffect2.alpha = 0.7;
		orbEffect2.alphaTopLeft = 0.7;
		orbEffect2.alphaTopRight = 0.7;
		orbEffect2.alphaBottomLeft = 0.7;
		orbEffect2.alphaBottomRight = 0.7;
		orbEffect2.tileScaleX = 2.3;

		// orbEffect3
		const orbEffect3 = this.add.tileSprite(979, 859, 798, 400, "orb-test-3");
		orbEffect3.blendMode = Phaser.BlendModes.ADD;
		orbEffect3.scaleX = 1.1425012389526452;
		orbEffect3.scaleY = 1.1425012389526452;
		orbEffect3.alpha = 0.4;
		orbEffect3.alphaTopLeft = 0.4;
		orbEffect3.alphaTopRight = 0.4;
		orbEffect3.alphaBottomLeft = 0.4;
		orbEffect3.alphaBottomRight = 0.4;
		orbEffect3.tileScaleY = 1.25;

		// orbClouds2
		const orbClouds2 = this.add.tileSprite(993, 868, 737, 492, "orb-texture-2");
		orbClouds2.blendMode = Phaser.BlendModes.ADD;
		orbClouds2.scaleY = 1.264417829224711;
		orbClouds2.alpha = 0.2;
		orbClouds2.alphaTopLeft = 0.2;
		orbClouds2.alphaTopRight = 0.2;
		orbClouds2.alphaBottomLeft = 0.2;
		orbClouds2.alphaBottomRight = 0.2;

		// orbClouds1
		const orbClouds1 = this.add.tileSprite(989, 869, 737, 492, "orb-texture-2");
		orbClouds1.blendMode = Phaser.BlendModes.ADD;
		orbClouds1.scaleY = 1.327039111834162;
		orbClouds1.angle = -8;
		orbClouds1.alpha = 0.2;
		orbClouds1.alphaTopLeft = 0.2;
		orbClouds1.alphaTopRight = 0.2;
		orbClouds1.alphaBottomLeft = 0.2;
		orbClouds1.alphaBottomRight = 0.2;

		// orbEffectMask
		const orbEffectMask = this.add.ellipse(960, 890, 128, 128);
		orbEffectMask.scaleX = 3.9851915253699906;
		orbEffectMask.scaleY = 3.9851915253699906;
		orbEffectMask.visible = false;
		orbEffectMask.isFilled = true;
		orbEffectMask.fillAlpha = 0.3;

		// fullscreenButtonBack
		const fullscreenButtonBack = this.add.image(22, 25, "white-pixel");
		fullscreenButtonBack.scaleX = 169.4188682791527;
		fullscreenButtonBack.scaleY = 54.95243253147957;
		fullscreenButtonBack.setOrigin(0, 0);

		// fullscreenButtonText
		const fullscreenButtonText = this.add.bitmapText(99, 37, "monogram-italic", "Fullscreen");
		fullscreenButtonText.setOrigin(0.5, 0);
		fullscreenButtonText.tintTopLeft = 0;
		fullscreenButtonText.tintTopRight = 0;
		fullscreenButtonText.tintBottomLeft = 0;
		fullscreenButtonText.tintBottomRight = 0;
		fullscreenButtonText.text = "Fullscreen";
		fullscreenButtonText.fontSize = 24;
		fullscreenButtonText.align = 1;

		// wisdomText
		const wisdomText = this.add.bitmapText(960, 863, "quintessential", "Lorem ipsum dolor \nsit amet, consectetur \nadipiscing elit. Nunc \nconsectetur nec dui \neu imperdiet. ");
		wisdomText.setOrigin(0.5, 0.5);
		wisdomText.text = "Lorem ipsum dolor \nsit amet, consectetur \nadipiscing elit. Nunc \nconsectetur nec dui \neu imperdiet. ";
		wisdomText.fontSize = 64;
		wisdomText.align = 1;

		// textDisplacementFx
		const textDisplacementFx = wisdomText.postFX!.addDisplacement("displacement-test", 0.12, 0.12);

		// textGlowFx
		const textGlowFx = wisdomText.postFX!.addGlow(16777215, 4, 0, false, 0.1, 10);

		// orb_overlap
		const orb_overlap = this.add.image(960, 891, "orb-overlap");
		orb_overlap.alpha = 0.8;
		orb_overlap.alphaTopLeft = 0.8;
		orb_overlap.alphaTopRight = 0.8;
		orb_overlap.alphaBottomLeft = 0.8;
		orb_overlap.alphaBottomRight = 0.8;

		// orbInnerMask
		const orbInnerMask = this.add.image(960, 891, "orb-inside-mask");
		orbInnerMask.scaleX = 0.8931690576196487;
		orbInnerMask.scaleY = 0.8931690576196487;
		orbInnerMask.visible = false;

		// wisdomImage
		const wisdomImage = this.add.image(971, 899, "wizard-orb-temp");
		wisdomImage.scaleX = 0.46951698552354193;
		wisdomImage.scaleY = 0.46951698552354193;
		wisdomImage.visible = false;
		wisdomImage.alpha = 0.6;
		wisdomImage.alphaTopLeft = 0.6;
		wisdomImage.alphaTopRight = 0.6;
		wisdomImage.alphaBottomLeft = 0.6;
		wisdomImage.alphaBottomRight = 0.6;

		// imageDisplacementFx
		const imageDisplacementFx = wisdomImage.preFX!.addDisplacement("displacement-test", 0.12, 0.12);

		// orbBlindImages
		const orbBlindImages = this.add.container(945, 872);
		orbBlindImages.visible = false;

		// point_blur
		const point_blur = this.add.image(23, 13, "point-blur");
		point_blur.scaleX = 0.8287660998615729;
		point_blur.scaleY = 0.8287660998615729;
		orbBlindImages.add(point_blur);

		// point_blur_1
		const point_blur_1 = this.add.image(23, 13, "point-blur");
		point_blur_1.scaleX = 0.8287660998615729;
		point_blur_1.scaleY = 0.8287660998615729;
		orbBlindImages.add(point_blur_1);

		// point_blur_2
		const point_blur_2 = this.add.image(23, 13, "point-blur");
		point_blur_2.scaleX = 0.8287660998615729;
		point_blur_2.scaleY = 0.8287660998615729;
		orbBlindImages.add(point_blur_2);

		// point_blur_3
		const point_blur_3 = this.add.image(23, 13, "point-blur");
		point_blur_3.scaleX = 0.8287660998615729;
		point_blur_3.scaleY = 0.8287660998615729;
		orbBlindImages.add(point_blur_3);

		// orbShineImages
		const orbShineImages = this.add.container(945, 872);
		orbShineImages.visible = false;

		// point_blur_4
		const point_blur_4 = this.add.image(15, 18, "point-blur");
		point_blur_4.scaleX = 0.2971777169320155;
		point_blur_4.scaleY = 0.2971777169320155;
		orbShineImages.add(point_blur_4);

		// point_blur_5
		const point_blur_5 = this.add.image(15, 18, "point-blur");
		point_blur_5.scaleX = 0.03572863874145179;
		point_blur_5.scaleY = 0.5776038356078905;
		orbShineImages.add(point_blur_5);

		// point_blur_6
		const point_blur_6 = this.add.image(15, 18, "point-blur");
		point_blur_6.scaleX = 0.03572863874145179;
		point_blur_6.scaleY = 0.5776038356078905;
		point_blur_6.angle = 90;
		orbShineImages.add(point_blur_6);

		this.wizardSpineObject = wizardSpineObject;
		this.glowEffect = glowEffect;
		this.orbBack = orbBack;
		this.shaderContainer = shaderContainer;
		this.orbEffect1 = orbEffect1;
		this.orbEffect2 = orbEffect2;
		this.orbEffect3 = orbEffect3;
		this.orbClouds2 = orbClouds2;
		this.orbClouds1 = orbClouds1;
		this.orbEffectMask = orbEffectMask;
		this.fullscreenButtonBack = fullscreenButtonBack;
		this.fullscreenButtonText = fullscreenButtonText;
		this.textDisplacementFx = textDisplacementFx;
		this.textGlowFx = textGlowFx;
		this.wisdomText = wisdomText;
		this.orb_overlap = orb_overlap;
		this.orbInnerMask = orbInnerMask;
		this.imageDisplacementFx = imageDisplacementFx;
		this.wisdomImage = wisdomImage;
		this.orbBlindImages = orbBlindImages;
		this.orbShineImages = orbShineImages;

		this.events.emit("scene-awake");
	}

	private wizardSpineObject!: SpineGameObject;
	private glowEffect!: Phaser.GameObjects.Image;
	private orbBack!: Phaser.GameObjects.Image;
	private shaderContainer!: Phaser.GameObjects.Container;
	private orbEffect1!: Phaser.GameObjects.TileSprite;
	private orbEffect2!: Phaser.GameObjects.TileSprite;
	private orbEffect3!: Phaser.GameObjects.TileSprite;
	private orbClouds2!: Phaser.GameObjects.TileSprite;
	private orbClouds1!: Phaser.GameObjects.TileSprite;
	private orbEffectMask!: Phaser.GameObjects.Ellipse;
	private fullscreenButtonBack!: Phaser.GameObjects.Image;
	private fullscreenButtonText!: Phaser.GameObjects.BitmapText;
	private textDisplacementFx!: Phaser.FX.Displacement;
	private textGlowFx!: Phaser.FX.Glow;
	private wisdomText!: Phaser.GameObjects.BitmapText;
	private orb_overlap!: Phaser.GameObjects.Image;
	private orbInnerMask!: Phaser.GameObjects.Image;
	private imageDisplacementFx!: Phaser.FX.Displacement;
	private wisdomImage!: Phaser.GameObjects.Image;
	private orbBlindImages!: Phaser.GameObjects.Container;
	private orbShineImages!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

  private debugScene: DebugScene;

  private wisdomTextScaleTween: Phaser.Tweens.Tween;
  private cloudEffectFadeTween: Phaser.Tweens.Tween;
  private wisdomTextAlphaTween: Phaser.Tweens.Tween;
  private wisdomTextGlowTween: Phaser.Tweens.Tween;
  private displacementFXTween: Phaser.Tweens.Tween;
  private glowTween: Phaser.Tweens.Tween;

  private wizardController: WizardController;
  private wisdom: wisdom;
  private selectedDialogue: selectedDialogue;

  private shader: Phaser.GameObjects.Shader;

  private orbRubAmount = 30000;

  /** should be a type that doesn't allow modification after being set in create(). Too lazy to do it now */
  private cloudEffectEditorAlpha: number;

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
    this.cloudEffectEditorAlpha = this.orbClouds1.alpha;

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.debugScene = this.scene.get("debug") as DebugScene;

    this.setupOrbVisuals();

    this.setupFullscreenButton();

    this.setupWisdomTextAppear();

    this.orbEffectMask.setVisible(false);
    // just in case i left it visible in the editor

    this.wizardController = new WizardController(
      this,
      this.wizardSpineObject.animationState,
    );
    this.wizardController.setupAnimation(this.selectedDialogue);

    this.setWisdomVisual();
    ``;

    this.shader = this.add.shader("shader", 960, 890, 400, 400);
    this.shaderContainer.add(this.shader);
  }

  update(time: number, delta: number) {
    let line = new Phaser.Geom.Line(
      this.input.activePointer.worldX,
      this.input.activePointer.worldY,
      this.orb_overlap.x,
      this.orb_overlap.y,
    );
    if (
      this.input.activePointer.isDown &&
      Phaser.Geom.Line.Length(line) < 250 &&
      this.orbRubAmount > 0
    ) {
      this.orbRubAmount -= this.input.activePointer.distance;
    }
    this.debugScene.DisplayVar("rub", this.orbRubAmount);
  }

  /**
   * Set text, image or video
   */
  setWisdomVisual() {
    if (this.wisdom.type == "image") {
      this.wisdomImage.setTexture("wisdom-image");
    } else if (this.wisdom.type == "video") {
      // todo
    } else {
      this.wisdomText.setText(this.wisdom.content);
    }

    this.wisdomImage.setVisible(this.wisdom.type == "image");
    this.wisdomText.setVisible(this.wisdom.type == undefined);
  }

  setupOrbVisuals() {
    let tween1 = this.tweens.add({
      targets: this.orbEffect1,
      tilePositionX: 798,
      ease: Phaser.Math.Easing.Linear,
      duration: 9500,
      repeat: -1,
    });
    let tween2 = this.tweens.add({
      targets: this.orbEffect2,
      tilePositionX: -798,
      ease: Phaser.Math.Easing.Linear,
      duration: 10000,
      repeat: -1,
    });

    let tween3 = this.tweens.add({
      targets: this.orbEffect3,
      tilePositionX: 798,
      ease: Phaser.Math.Easing.Linear,
      duration: 10500,
      repeat: -1,
    });

    let cloudTween1 = this.tweens.add({
      targets: this.orbClouds1,
      tilePositionX: 737,
      tilePositionY: 492,
      ease: Phaser.Math.Easing.Linear,
      duration: 7000,
      repeat: -1,
    });

    let cloudTween2 = this.tweens.add({
      targets: this.orbClouds2,
      tilePositionX: -737,
      tilePositionY: -492,
      ease: Phaser.Math.Easing.Linear,
      duration: 8000,
      repeat: -1,
    });

    let innerOrbMask = this.orbInnerMask.createBitmapMask();
    this.wisdomText.setMask(innerOrbMask);
    this.wisdomImage.setMask(innerOrbMask);

    let orbMask = this.orbEffectMask.createGeometryMask();
    this.orbEffect1.setMask(orbMask);
    ``;
    this.orbEffect2.setMask(orbMask);
    this.orbEffect3.setMask(orbMask);
    this.orb_overlap.setMask(orbMask);
    this.orbBack.setMask(orbMask);
    this.orbClouds1.setMask(orbMask);
    this.orbClouds2.setMask(orbMask);

    // let fx = this.orbEffect1.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx.hue(200);
    // let fx2 = this.orbEffect2.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx2.hue(200);
    // let fx3 = this.orbEffect3.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx3.hue(200);

    this.glowTween = this.tweens.add({
      targets: this.glowEffect,
      alpha: 0.4,
      ease: Phaser.Math.Easing.Cubic.InOut,
      yoyo: true,
      loop: -1,
      duration: 500,
    });
  }

  /**
   *
   * @param on if undefined, state will toggle
   */
  public setOrbCloudEffect(on?: boolean) {
    if (on == undefined) {
      on = !this.orbClouds1.visible;
    }

    this.cloudEffectFadeTween = this.tweens.add({
      targets: [this.orbClouds1, this.orbClouds2],
      alpha: on ? this.cloudEffectEditorAlpha : 0,
      ease: Phaser.Math.Easing.Cubic.Out,
      duration: 2000,
    });
  }

  private setupWisdomTextAppear() {
    this.wisdomText.setScale(4);
    this.wisdomText.setAlpha(0);
    this.wisdomImage.setScale(4);
    this.wisdomImage.setAlpha(0);
    this.textGlowFx.outerStrength = 0;
    this.wisdomTextScaleTween = this.tweens.add({
      targets: [this.wisdomText, this.wisdomImage],
      scale: 1,
      ease: Phaser.Math.Easing.Cubic.Out,
      duration: 2000,
    });
    this.wisdomTextAlphaTween = this.tweens.add({
      targets: [this.wisdomText, this.wisdomImage],
      alpha: 0.8,
      ease: Phaser.Math.Easing.Sine.InOut,
      duration: 3000,
    });
    this.displacementFXTween = this.tweens.add({
      targets: [this.textDisplacementFx, this.imageDisplacementFx],
      x: 0,
      y: 0,
      ease: Phaser.Math.Easing.Cubic.Out,
      duration: 3000,
    });
    this.wisdomTextGlowTween = this.tweens.add({
      targets: this.textGlowFx,
      outerStrength: 1,
      ease: Phaser.Math.Easing.Cubic.Out,
      duration: 3000,
      delay: 1000,
    });
    // this.wisdomTextScaleTween.play();
    // this.displacementFXTween.play();
  }

  // decouple me please
  setupFullscreenButton() {
    this.fullscreenButtonBack.setInteractive();
    this.fullscreenButtonBack.on("pointerdown", () => {
      this.scale.startFullscreen();
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
