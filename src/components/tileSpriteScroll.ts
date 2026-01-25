// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class tileSpriteScroll {
  constructor(gameObject: Phaser.GameObjects.TileSprite) {
    this.gameObject = gameObject;
    (gameObject as any)["__tileSpriteScroll"] = this;

    /* START-USER-CTR-CODE */
    this.gameObject.scene.events.once(
      Phaser.Scenes.Events.UPDATE,
      this.setupTween,
      this,
    );
    /* END-USER-CTR-CODE */
  }

  static getComponent(
    gameObject: Phaser.GameObjects.TileSprite,
  ): tileSpriteScroll {
    return (gameObject as any)["__tileSpriteScroll"];
  }

  private gameObject: Phaser.GameObjects.TileSprite;
  public X: number = 798;
  public Y: number = 492;
  public duration: number = 1000;

  /* START-USER-CODE */

  public tween: Phaser.Tweens.Tween;

  setupTween() {
    this.tween = this.gameObject.scene.tweens.add({
      targets: this.gameObject,
      tilePositionX: this.X,
      tilePositionY: this.Y,
      ease: Phaser.Math.Easing.Linear,
      duration: this.duration,
      repeat: -1,
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
