// You can write more code here

/* START OF COMPILED CODE */

import tileSpriteScroll from "../components/tileSpriteScroll";
/* START-USER-IMPORTS */
import { tweenConfigs } from "~/tweens/tweenConfigs";

import { wisdom } from "~/data/wisdoms";
/* END-USER-IMPORTS */

export default class orbLayer extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// displacementImage
		const displacementImage = scene.add.image(-112, 773, "displacement-test");
		displacementImage.scaleX = 35.981488078279575;
		displacementImage.scaleY = -27.397985958338662;
		displacementImage.visible = false;
		displacementImage.alpha = 0.2;
		displacementImage.alphaTopLeft = 0.2;
		displacementImage.alphaTopRight = 0.2;
		displacementImage.alphaBottomLeft = 0.2;
		displacementImage.alphaBottomRight = 0.2;
		this.add(displacementImage);

		// backing
		const backing = scene.add.image(960, 870, "white-pixel");
		backing.scaleX = 535.0364126804407;
		backing.scaleY = 498.1917593818383;
		backing.tintTopLeft = 0;
		backing.tintTopRight = 0;
		backing.tintBottomLeft = 0;
		backing.tintBottomRight = 0;
		this.add(backing);

		// shaderContainer
		const shaderContainer = scene.add.container(0, 0);
		this.add(shaderContainer);

		// shaderCover
		const shaderCover = scene.add.image(960, 870, "white-pixel");
		shaderCover.scaleX = 535.0364126804407;
		shaderCover.scaleY = 498.1917593818383;
		shaderCover.alpha = 0.6;
		shaderCover.alphaTopLeft = 0.6;
		shaderCover.alphaTopRight = 0.6;
		shaderCover.alphaBottomLeft = 0.6;
		shaderCover.alphaBottomRight = 0.6;
		shaderCover.tintTopLeft = 0;
		shaderCover.tintTopRight = 0;
		shaderCover.tintBottomLeft = 0;
		shaderCover.tintBottomRight = 0;
		this.add(shaderCover);

		// cloudTile1-3
		const cloudTile1_3 = scene.add.tileSprite(975, 859, 798, 400, "orb-test-3");
		cloudTile1_3.blendMode = Phaser.BlendModes.ADD;
		cloudTile1_3.scaleX = 1.1425012389526452;
		cloudTile1_3.scaleY = 1.1425012389526452;
		cloudTile1_3.alpha = 0.6;
		cloudTile1_3.alphaTopLeft = 0.6;
		cloudTile1_3.alphaTopRight = 0.6;
		cloudTile1_3.alphaBottomLeft = 0.6;
		cloudTile1_3.alphaBottomRight = 0.6;
		cloudTile1_3.tileScaleX = 2.91;
		cloudTile1_3.tileScaleY = 1.26;
		this.add(cloudTile1_3);

		// cloudTile1-2
		const cloudTile1_2 = scene.add.tileSprite(975, 859, 798, 400, "orb-test-3");
		cloudTile1_2.blendMode = Phaser.BlendModes.ADD;
		cloudTile1_2.scaleX = 1.1425012389526452;
		cloudTile1_2.scaleY = 1.1425012389526452;
		cloudTile1_2.alpha = 0.6;
		cloudTile1_2.alphaTopLeft = 0.6;
		cloudTile1_2.alphaTopRight = 0.6;
		cloudTile1_2.alphaBottomLeft = 0.6;
		cloudTile1_2.alphaBottomRight = 0.6;
		cloudTile1_2.tileScaleX = 2.3;
		this.add(cloudTile1_2);

		// cloudTile1-1
		const cloudTile1_1 = scene.add.tileSprite(975, 859, 798, 400, "orb-test-3");
		cloudTile1_1.blendMode = Phaser.BlendModes.ADD;
		cloudTile1_1.scaleX = 1.1425012389526452;
		cloudTile1_1.scaleY = 1.1425012389526452;
		cloudTile1_1.alpha = 0.6;
		cloudTile1_1.alphaTopLeft = 0.6;
		cloudTile1_1.alphaTopRight = 0.6;
		cloudTile1_1.alphaBottomLeft = 0.6;
		cloudTile1_1.alphaBottomRight = 0.6;
		cloudTile1_1.tileScaleY = 1.25;
		this.add(cloudTile1_1);

		// cloudTile2-2
		const cloudTile2_2 = scene.add.tileSprite(975, 859, 737, 492, "orb-texture-2");
		cloudTile2_2.blendMode = Phaser.BlendModes.ADD;
		cloudTile2_2.scaleY = 1.264417829224711;
		cloudTile2_2.alpha = 0;
		cloudTile2_2.alphaTopLeft = 0;
		cloudTile2_2.alphaTopRight = 0;
		cloudTile2_2.alphaBottomLeft = 0;
		cloudTile2_2.alphaBottomRight = 0;
		this.add(cloudTile2_2);

		// cloudTile2-1
		const cloudTile2_1 = scene.add.tileSprite(975, 859, 737, 492, "orb-texture-2");
		cloudTile2_1.blendMode = Phaser.BlendModes.ADD;
		cloudTile2_1.scaleY = 1.327039111834162;
		cloudTile2_1.angle = -8;
		cloudTile2_1.alpha = 0;
		cloudTile2_1.alphaTopLeft = 0;
		cloudTile2_1.alphaTopRight = 0;
		cloudTile2_1.alphaBottomLeft = 0;
		cloudTile2_1.alphaBottomRight = 0;
		this.add(cloudTile2_1);

		// wisdomImage
		const wisdomImage = scene.add.image(971, 899, "wizard-orb-temp");
		wisdomImage.scaleX = 0.46951698552354193;
		wisdomImage.scaleY = 0.46951698552354193;
		wisdomImage.visible = false;
		wisdomImage.alpha = 0.6;
		wisdomImage.alphaTopLeft = 0.6;
		wisdomImage.alphaTopRight = 0.6;
		wisdomImage.alphaBottomLeft = 0.6;
		wisdomImage.alphaBottomRight = 0.6;
		this.add(wisdomImage);

		// imageDisplacementFx
		const imageDisplacementFx = wisdomImage.preFX!.addDisplacement("displacement-test", 0.12, 0.12);

		// wisdomText
		const wisdomText = scene.add.bitmapText(960, 890, "quintessential", "asdf");
		wisdomText.setOrigin(0.5, 0.5);
		wisdomText.text = "asdf";
		wisdomText.fontSize = 100;
		wisdomText.align = 1;
		this.add(wisdomText);

		// textGlowFx
		const textGlowFx = wisdomText.postFX!.addGlow(16777215, 4, 0, false, 0.1, 10);

		// textDisplacementFx
		const textDisplacementFx = wisdomText.postFX!.addDisplacement("orb-texture-2", 0.1, 0.3);

		// circleMask
		const circleMask = scene.add.ellipse(960, 890, 128, 128);
		circleMask.scaleX = 3.9851915253699906;
		circleMask.scaleY = 3.9851915253699906;
		circleMask.visible = false;
		circleMask.isFilled = true;
		circleMask.fillAlpha = 0.3;
		this.add(circleMask);

		// otherText
		const otherText = scene.add.bitmapText(960, 872, "quintessential", "Rub me!asdfasdf");
		otherText.setOrigin(0.5, 0.5);
		otherText.alpha = 0;
		otherText.alphaTopLeft = 0;
		otherText.alphaTopRight = 0;
		otherText.alphaBottomLeft = 0;
		otherText.alphaBottomRight = 0;
		otherText.text = "Rub me!asdfasdf";
		otherText.fontSize = 64;
		otherText.align = 1;
		this.add(otherText);

		// glassOverlap
		const glassOverlap = scene.add.image(960, 891, "orb-overlap");
		glassOverlap.alpha = 0.8;
		glassOverlap.alphaTopLeft = 0.8;
		glassOverlap.alphaTopRight = 0.8;
		glassOverlap.alphaBottomLeft = 0.8;
		glassOverlap.alphaBottomRight = 0.8;
		this.add(glassOverlap);

		// wisdomMask
		const wisdomMask = scene.add.image(960, 891, "orb-inside-mask");
		wisdomMask.scaleX = 0.8931690576196487;
		wisdomMask.scaleY = 0.8931690576196487;
		wisdomMask.visible = false;
		this.add(wisdomMask);

		// magicGlow
		const magicGlow = scene.add.container(945, 872);
		magicGlow.scaleX = 1.189984455542984;
		magicGlow.scaleY = 1.189984455542984;
		magicGlow.alpha = 0;
		this.add(magicGlow);

		// point_blur
		const point_blur = scene.add.image(23, 13, "point-blur");
		point_blur.scaleX = 0.8539875620877397;
		point_blur.scaleY = 0.8539875620877397;
		point_blur.visible = false;
		magicGlow.add(point_blur);

		// point_blur_1
		const point_blur_1 = scene.add.image(23, 13, "point-blur");
		point_blur_1.scaleX = 0.6826333077561331;
		point_blur_1.scaleY = 0.6826333077561331;
		point_blur_1.visible = false;
		magicGlow.add(point_blur_1);

		// point_blur_2
		const point_blur_2 = scene.add.image(23, 13, "point-blur");
		point_blur_2.scaleX = 0.523314985509712;
		point_blur_2.scaleY = 0.523314985509712;
		point_blur_2.visible = false;
		magicGlow.add(point_blur_2);

		// point_blur_3
		const point_blur_3 = scene.add.image(23, 13, "point-blur");
		point_blur_3.scaleX = 0.3375327663048206;
		point_blur_3.scaleY = 0.3375327663048206;
		point_blur_3.visible = false;
		magicGlow.add(point_blur_3);

		// orbInnerMask_1
		const orbInnerMask_1 = scene.add.image(15, 19, "orb-inside-mask");
		orbInnerMask_1.scaleX = 0.8931690576196487;
		orbInnerMask_1.scaleY = 0.8931690576196487;
		orbInnerMask_1.tintFill = true;
		magicGlow.add(orbInnerMask_1);

		// magicShine
		const magicShine = scene.add.container(945, 872);
		magicShine.scaleX = 0;
		magicShine.scaleY = 0;
		magicShine.alpha = 0;
		this.add(magicShine);

		// point_blur_4
		const point_blur_4 = scene.add.image(15, 18, "point-blur");
		point_blur_4.scaleX = 0.2971777169320155;
		point_blur_4.scaleY = 0.2971777169320155;
		magicShine.add(point_blur_4);

		// point_blur_5
		const point_blur_5 = scene.add.image(15, 18, "point-blur");
		point_blur_5.scaleX = 0.03572863874145179;
		point_blur_5.scaleY = 0.5776038356078905;
		magicShine.add(point_blur_5);

		// point_blur_6
		const point_blur_6 = scene.add.image(15, 18, "point-blur");
		point_blur_6.scaleX = 0.03572863874145179;
		point_blur_6.scaleY = 0.5776038356078905;
		point_blur_6.angle = 90;
		magicShine.add(point_blur_6);

		// cloudTile1_3 (components)
		const cloudTile1_3tileSpriteScroll = new tileSpriteScroll(cloudTile1_3);
		cloudTile1_3tileSpriteScroll.Y = 0;
		cloudTile1_3tileSpriteScroll.duration = 10500;

		// cloudTile1_2 (components)
		const cloudTile1_2tileSpriteScroll = new tileSpriteScroll(cloudTile1_2);
		cloudTile1_2tileSpriteScroll.X = -798;
		cloudTile1_2tileSpriteScroll.Y = 0;
		cloudTile1_2tileSpriteScroll.duration = 10000;

		// cloudTile1_1 (components)
		const cloudTile1_1tileSpriteScroll = new tileSpriteScroll(cloudTile1_1);
		cloudTile1_1tileSpriteScroll.Y = 0;
		cloudTile1_1tileSpriteScroll.duration = 9500;

		// cloudTile2_2 (components)
		const cloudTile2_2tileSpriteScroll = new tileSpriteScroll(cloudTile2_2);
		cloudTile2_2tileSpriteScroll.X = -737;
		cloudTile2_2tileSpriteScroll.Y = -492;
		cloudTile2_2tileSpriteScroll.duration = 8000;

		// cloudTile2_1 (components)
		const cloudTile2_1tileSpriteScroll = new tileSpriteScroll(cloudTile2_1);
		cloudTile2_1tileSpriteScroll.X = 737;
		cloudTile2_1tileSpriteScroll.duration = 7000;

		this.backing = backing;
		this.shaderContainer = shaderContainer;
		this.shaderCover = shaderCover;
		this.cloudTile1_3 = cloudTile1_3;
		this.cloudTile1_2 = cloudTile1_2;
		this.cloudTile1_1 = cloudTile1_1;
		this.cloudTile2_2 = cloudTile2_2;
		this.cloudTile2_1 = cloudTile2_1;
		this.imageDisplacementFx = imageDisplacementFx;
		this.wisdomImage = wisdomImage;
		this.textGlowFx = textGlowFx;
		this.textDisplacementFx = textDisplacementFx;
		this.wisdomText = wisdomText;
		this.circleMask = circleMask;
		this.otherText = otherText;
		this.glassOverlap = glassOverlap;
		this.wisdomMask = wisdomMask;
		this.orbInnerMask_1 = orbInnerMask_1;
		this.magicGlow = magicGlow;
		this.magicShine = magicShine;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	private backing: Phaser.GameObjects.Image;
	private shaderContainer: Phaser.GameObjects.Container;
	private shaderCover: Phaser.GameObjects.Image;
	private cloudTile1_3: Phaser.GameObjects.TileSprite;
	private cloudTile1_2: Phaser.GameObjects.TileSprite;
	private cloudTile1_1: Phaser.GameObjects.TileSprite;
	public cloudTile2_2: Phaser.GameObjects.TileSprite;
	public cloudTile2_1: Phaser.GameObjects.TileSprite;
	private imageDisplacementFx: Phaser.FX.Displacement;
	private wisdomImage: Phaser.GameObjects.Image;
	private textGlowFx: Phaser.FX.Glow;
	private textDisplacementFx: Phaser.FX.Displacement;
	private wisdomText: Phaser.GameObjects.BitmapText;
	private circleMask: Phaser.GameObjects.Ellipse;
	private otherText: Phaser.GameObjects.BitmapText;
	private glassOverlap: Phaser.GameObjects.Image;
	private wisdomMask: Phaser.GameObjects.Image;
	private orbInnerMask_1: Phaser.GameObjects.Image;
	private magicGlow: Phaser.GameObjects.Container;
	private magicShine: Phaser.GameObjects.Container;

	/* START-USER-CODE */

  private shader: Phaser.GameObjects.Shader;

  private cloudDisappearTween: Phaser.Tweens.Tween;
  private cloudAppearTween: Phaser.Tweens.Tween;

  public rubParticles: Phaser.GameObjects.Particles.ParticleEmitter;

  public create() {
    this.rubParticleSetup();

    this.setupMasks();

    // in case i left it visible in editor
    this.circleMask.setVisible(false);

    // this.wisdomText.setVisible(false);
  }

  private setupMasks() {
    let wisdomMask = this.wisdomMask.createBitmapMask();
    this.wisdomText.setMask(wisdomMask);
    this.wisdomImage.setMask(wisdomMask);

    let cloudMask = this.circleMask.createGeometryMask();
    let objectsWithCircleMask = [
      this.cloudTile1_1,
      this.cloudTile1_2,
      this.cloudTile1_3,
      this.cloudTile2_1,
      this.cloudTile2_2,
      this.backing,
      this.shaderCover,
      this.rubParticles,
    ];
    objectsWithCircleMask.forEach((value) => {
      value.setMask(cloudMask);
    });
  }

  // private colourChangeTest() {
  // let fx = this.orbEffect1.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
  // fx.hue(200);
  // let fx2 = this.orbEffect2.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
  // fx2.hue(200);
  // let fx3 = this.orbEffect3.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
  // fx3.hue(200);
  // }

  setWisdom(wisdom: wisdom) {
    if (wisdom.type == "image") {
      this.wisdomImage.setTexture("wisdom-image");
    } else if (wisdom.type == "video") {
      // todo
    } else {
      this.wisdomText.setText(wisdom.content);
      if (wisdom.content.length < 30) this.wisdomText.fontSize = 84;
      else if (wisdom.content.length < 60) this.wisdomText.fontSize = 68;
      else this.wisdomText.fontSize = 58;
      // console.debug(wisdom.content.length);
    }

    this.wisdomImage.setVisible(wisdom.type == "image");
    this.wisdomText.setVisible(wisdom.type == undefined);
  }

  /**
   * Fade in or out cloudTile1 objects
   * @param showCloud1 or 2
   */
  public setClouds(visible: boolean) {
    let clouds = [this.cloudTile1_1, this.cloudTile1_2, this.cloudTile1_3];

    let cloudDisappearTween = this.scene.tweens.add({
      ...(visible
        ? tweenConfigs.orb.cloud.appear
        : tweenConfigs.orb.cloud.disappear),
      targets: clouds,
    });
  }

  public wisdomAppearAnimation() {
    let scaleTween = this.scene.tweens.add({
      ...tweenConfigs.wisdom.appear.scale,
      targets: [this.wisdomText, this.wisdomImage],
    });
    let alphaTween = this.scene.tweens.add({
      ...tweenConfigs.wisdom.appear.alpha,
      targets: [this.wisdomText, this.wisdomImage],
    });
    let displacementTween = this.scene.tweens.add({
      ...tweenConfigs.wisdom.appear.displacement,
      targets: [this.textDisplacementFx, this.imageDisplacementFx],
    });
    let glowTween = this.scene.tweens.add({
      ...tweenConfigs.wisdom.appear.glow,
      targets: this.textGlowFx,
    });
  }

  /**
   * when i call this in scene, also set scale of wizard lighting: 1.5, 1.7, 1.9, 2.1
   * @param size
   * @param glowAlpha
   * @param glowScale
   */
  public magicPulseAnimation(
    size: number,
    glowScale: number,
    shaderCoverAlpha: number,
  ) {
    if (this.shader) {
      this.shader.destroy();
    }
    this.shader = this.scene.add.shader("shader", 960, 890, size, size);
    this.shaderContainer.add(this.shader);
    this.magicGlow.setScale(glowScale);
    this.magicGlow.setAlpha(0.4);
    let glowTween = this.scene.tweens.add({
      ...tweenConfigs.magic.pulse,
      targets: this.magicGlow,
    });

    this.shaderCover.setAlpha(shaderCoverAlpha);
  }

  magicEndAnimation() {
    if (this.shader) {
      this.shader.destroy();
    }
    let glowTween = this.scene.tweens.add({
      ...tweenConfigs.magic.end.glow,
      targets: this.magicGlow,
    });
    let shineTween = this.scene.tweens.add({
      ...tweenConfigs.magic.end.shine,
      targets: this.magicShine,
    });
  }

  public rubParticleSetup() {
    this.rubParticles = this.scene.add.particles(500, 500, "point-blur", {
      blendMode: "ADD",
      lifespan: 400,
      quantity: 0,
      x: 0,
      y: 0,
      scale: 0.2,
      alpha: { start: 0.1, end: 0 },
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
