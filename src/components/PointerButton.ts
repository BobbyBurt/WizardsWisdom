
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PointerButton {

	constructor(gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__PointerButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle): PointerButton {
		return (gameObject as any)["__PointerButton"];
	}

	private gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle;
	public setAlpha: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
