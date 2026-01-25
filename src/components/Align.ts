
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Align extends UserComponent {

	constructor(gameObject: any) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__Align"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): Align {
		return (gameObject as any)["__Align"];
	}

	private gameObject: any;
	public up: boolean = false;
	public middle: boolean = false;
	public down: boolean = false;
	public left: boolean = false;
	public center: boolean = false;
	public right: boolean = false;
	public horizontalOffset: number = 0;
	public verticalOffset: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
