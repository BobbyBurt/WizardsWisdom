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

  public setupAnimation(
    dialogueToPlay: selectedDialogue,
    phase: "preWisdom" | "postWisdom",
  ) {
    this.animationState.data.defaultMix = 0;

    let dialogueOrder = new Array<dialogueGroup | reactionDialogueGroup>();
    if (phase === "preWisdom") dialogueOrder = ["welcome", "moan"];
    else if (phase === "postWisdom") {
      // this needs to be updated to include any new dialogue groups
      if (dialogueToPlay.has("positive")) dialogueOrder.push("positive");
      else if (dialogueToPlay.has("negative")) dialogueOrder.push("negative");
      else if (dialogueToPlay.has("confused")) dialogueOrder.push("confused");
      // this could be a loop
dialogueOrder.push("bye");
      dialogueOrder.push("idle");
    }

    dialogueOrder.forEach((value) => {
      if (dialogueToPlay.get(value) != null) {
        this.animationState.addAnimation(
          0,
          `${value}-${dialogueToPlay.get(value)}`,
          value === "idle",
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
        } else if (event.data.name == "enable-orb-input") {
          this.scene.enableOrbInput();
        }
      },
    });
  }

  /**
   * after random delay, plays random sound with key & index up to sounds param. Calls itself upon sound completion
   * @param key
   * @param sounds
   */
  public soundChain(key: string, sounds: number) {
    this.scene.time.delayedCall(Phaser.Math.RND.between(0, 3000), () => {
      let fartSound = this.scene.sound.add(
        `moan-${Phaser.Math.RND.between(1, sounds)}`,
      );
      console.debug(fartSound.key);
      fartSound.on("complete", () => {
        this.soundChain(key, sounds);
      });
      fartSound.play();
    });
  }
// should this be in this class?

  // private audioCallbacktest() {
  //   let reacion = this.scene.sound.add("reaction-positive-1");
  //   reacion.on("complete", () => {
  //     console.debug("done-audio");
  //     this.scene.sound.play("bye-2");
  //   });
  //   reacion.play();
  // }
}
