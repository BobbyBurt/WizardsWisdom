// You can write more code here

/* START OF COMPILED CODE */

import tileSpriteScroll from "../components/tileSpriteScroll";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class orbLayer extends Phaser.GameObjects.Layer {
  constructor(scene: Phaser.Scene) {
    super(scene);

    // displacementImage
    const displacementImage = scene.add.image(
      -234.07164001464844,
      1495.907470703125,
      "displacement-test",
    );
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
    const backing = scene.add.image(0, 0, "white-pixel");
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
    const shaderCover = scene.add.image(0, 0, "white-pixel");
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
    const cloudTile1_3 = scene.add.tileSprite(0, 0, 798, 400, "orb-test-3");
    cloudTile1_3.blendMode = Phaser.BlendModes.ADD;
    cloudTile1_3.scaleX = 1.1425012389526452;
    cloudTile1_3.scaleY = 1.1425012389526452;
    cloudTile1_3.alpha = 0.4;
    cloudTile1_3.alphaTopLeft = 0.4;
    cloudTile1_3.alphaTopRight = 0.4;
    cloudTile1_3.alphaBottomLeft = 0.4;
    cloudTile1_3.alphaBottomRight = 0.4;
    cloudTile1_3.tilePositionY = 78;
    cloudTile1_3.tileScaleX = 2.91;
    cloudTile1_3.tileScaleY = 1.26;
    this.add(cloudTile1_3);

    // cloudTile1-2
    const cloudTile1_2 = scene.add.tileSprite(0, 0, 798, 400, "orb-test-3");
    cloudTile1_2.blendMode = Phaser.BlendModes.ADD;
    cloudTile1_2.scaleX = 1.1425012389526452;
    cloudTile1_2.scaleY = 1.1425012389526452;
    cloudTile1_2.alpha = 0.7;
    cloudTile1_2.alphaTopLeft = 0.7;
    cloudTile1_2.alphaTopRight = 0.7;
    cloudTile1_2.alphaBottomLeft = 0.7;
    cloudTile1_2.alphaBottomRight = 0.7;
    cloudTile1_2.tileScaleX = 2.3;
    this.add(cloudTile1_2);

    // cloudTile1-1
    const cloudTile1_1 = scene.add.tileSprite(0, 0, 798, 400, "orb-test-3");
    cloudTile1_1.blendMode = Phaser.BlendModes.ADD;
    cloudTile1_1.scaleX = 1.1425012389526452;
    cloudTile1_1.scaleY = 1.1425012389526452;
    cloudTile1_1.alpha = 0.4;
    cloudTile1_1.alphaTopLeft = 0.4;
    cloudTile1_1.alphaTopRight = 0.4;
    cloudTile1_1.alphaBottomLeft = 0.4;
    cloudTile1_1.alphaBottomRight = 0.4;
    cloudTile1_1.tileScaleY = 1.25;
    this.add(cloudTile1_1);

    // cloudTile2-2
    const cloudTile2_2 = scene.add.tileSprite(0, 0, 737, 492, "orb-texture-2");
    cloudTile2_2.blendMode = Phaser.BlendModes.ADD;
    cloudTile2_2.scaleY = 1.264417829224711;
    cloudTile2_2.alpha = 0.2;
    cloudTile2_2.alphaTopLeft = 0.2;
    cloudTile2_2.alphaTopRight = 0.2;
    cloudTile2_2.alphaBottomLeft = 0.2;
    cloudTile2_2.alphaBottomRight = 0.2;
    this.add(cloudTile2_2);

    // cloudTile2-1
    const cloudTile2_1 = scene.add.tileSprite(0, 0, 737, 492, "orb-texture-2");
    cloudTile2_1.blendMode = Phaser.BlendModes.ADD;
    cloudTile2_1.scaleY = 1.327039111834162;
    cloudTile2_1.angle = -8;
    cloudTile2_1.alpha = 0.2;
    cloudTile2_1.alphaTopLeft = 0.2;
    cloudTile2_1.alphaTopRight = 0.2;
    cloudTile2_1.alphaBottomLeft = 0.2;
    cloudTile2_1.alphaBottomRight = 0.2;
    this.add(cloudTile2_1);

    // circleMask
    const circleMask = scene.add.ellipse(0, 0, 128, 128);
    circleMask.scaleX = 3.9851915253699906;
    circleMask.scaleY = 3.9851915253699906;
    circleMask.visible = false;
    circleMask.isFilled = true;
    circleMask.fillAlpha = 0.3;
    this.add(circleMask);

    // wisdomText
    const wisdomText = scene.add.bitmapText(
      0,
      0,
      "quintessential",
      "Lorem ipsum dolor \nsit amet, consectetur \nadipiscing elit. Nunc \nconsectetur nec dui \neu imperdiet. ",
    );
    wisdomText.setOrigin(0.5, 0.5);
    wisdomText.alpha = 0;
    wisdomText.alphaTopLeft = 0;
    wisdomText.alphaTopRight = 0;
    wisdomText.alphaBottomLeft = 0;
    wisdomText.alphaBottomRight = 0;
    wisdomText.text =
      "Lorem ipsum dolor \nsit amet, consectetur \nadipiscing elit. Nunc \nconsectetur nec dui \neu imperdiet. ";
    wisdomText.fontSize = 64;
    wisdomText.align = 1;
    this.add(wisdomText);

    // textDisplacementFx
    const textDisplacementFx = wisdomText.postFX!.addDisplacement(
      "displacement-test",
      0.12,
      0.12,
    );

    // textGlowFx
    const textGlowFx = wisdomText.postFX!.addGlow(
      16777215,
      4,
      0,
      false,
      0.1,
      10,
    );

    // glassOverlapImage
    const glassOverlapImage = scene.add.image(0, 0, "orb-overlap");
    glassOverlapImage.alpha = 0.8;
    glassOverlapImage.alphaTopLeft = 0.8;
    glassOverlapImage.alphaTopRight = 0.8;
    glassOverlapImage.alphaBottomLeft = 0.8;
    glassOverlapImage.alphaBottomRight = 0.8;
    this.add(glassOverlapImage);

    // blurMask
    const blurMask = scene.add.image(0, 0, "orb-inside-mask");
    blurMask.scaleX = 0.8931690576196487;
    blurMask.scaleY = 0.8931690576196487;
    blurMask.visible = false;
    this.add(blurMask);

    // wisdomImage
    const wisdomImage = scene.add.image(0, 0, "wizard-orb-temp");
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
    const imageDisplacementFx = wisdomImage.preFX!.addDisplacement(
      "displacement-test",
      0.12,
      0.12,
    );

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
    this.circleMask = circleMask;
    this.textDisplacementFx = textDisplacementFx;
    this.textGlowFx = textGlowFx;
    this.wisdomText = wisdomText;
    this.glassOverlapImage = glassOverlapImage;
    this.blurMask = blurMask;
    this.imageDisplacementFx = imageDisplacementFx;
    this.wisdomImage = wisdomImage;

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
  private cloudTile2_2: Phaser.GameObjects.TileSprite;
  private cloudTile2_1: Phaser.GameObjects.TileSprite;
  private circleMask: Phaser.GameObjects.Ellipse;
  private textDisplacementFx: Phaser.FX.Displacement;
  private textGlowFx: Phaser.FX.Glow;
  private wisdomText: Phaser.GameObjects.BitmapText;
  private glassOverlapImage: Phaser.GameObjects.Image;
  private blurMask: Phaser.GameObjects.Image;
  private imageDisplacementFx: Phaser.FX.Displacement;
  private wisdomImage: Phaser.GameObjects.Image;

  /* START-USER-CODE */

  public create() {
    this.maskSetup();
  }

  private maskSetup() {
    let wisdomMask = this.blurMask.createBitmapMask();
    this.wisdomText.setMask(wisdomMask);
    this.wisdomImage.setMask(wisdomMask);

    let cloudMask = this.circleMask.createGeometryMask();
    let cloudTiles = [
      this.cloudTile1_1,
      this.cloudTile1_2,
      this.cloudTile1_3,
      this.cloudTile2_1,
      this.cloudTile2_2,
    ];
    cloudTiles.forEach((value) => {
      value.setMask(cloudMask);
    });
  }

  colourChangeTest() {
    // let fx = this.orbEffect1.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx.hue(200);
    // let fx2 = this.orbEffect2.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx2.hue(200);
    // let fx3 = this.orbEffect3.preFX?.addColorMatrix() as Phaser.FX.ColorMatrix;
    // fx3.hue(200);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
