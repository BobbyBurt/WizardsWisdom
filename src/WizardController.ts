/** @format */

import Phaser from "phaser";

import {
  AnimationState,
  SkinsAndAnimationBoundsProvider,
  SpinePlugin,
  TrackEntry,
} from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import { wisdom } from "./data/wisdoms";
import {
  dialogueGroup,
  reactionDialogueGroup,
  selectedDialogue,
} from "./dialogueUtil";
import WizardScene from "./scenes/WizardScene";

export default class WizardController {
  constructor(scene: WizardScene, animationState: AnimationState) {
    this.scene = scene;
    this.animationState = animationState;
  }

  private scene: WizardScene;
  public animationState: AnimationState;

  public setupAnimation(dialogueToPlay: selectedDialogue) {
    this.animationState.data.defaultMix = 0;

    // this needs to be updated to include any new dialogue groups
    let dialogueOrder: Array<dialogueGroup | reactionDialogueGroup> = [
      "welcome",
      // "welcome-returning",
      "moan",
      // "positive",
      "negative",
      // "confused",
      "bye",
    ];

    dialogueOrder.forEach((value) => {
      if (dialogueToPlay.get(value) != null) {
        this.animationState.addAnimation(
          0,
          `${value}-${dialogueToPlay.get(value)}`,
        );
      }
    });

    this.animationState.addListener({
      start: (entry) => {},
      complete: (entry) => {},
      event: (entry, event) => {
        if (event.data.name == "dialogue") {
          try {
            this.scene.sound.play(`${entry.animation?.name}`);
          } catch {
            console.debug(`no sound in cache for animation`);
          }
        } else if (event.data.name == "orb") {
          this.scene.setOrbCloudEffect();
        }
      },
    });
  }

  // private audioCallbacktest() {
  //   let reacion = this.scene.sound.add("reaction-positive-1");
  //   reacion.on("complete", () => {
  //     console.debug("done-audio");
  //     this.scene.sound.play("bye-2");
  //   });
  //   reacion.play();
  // }
}
