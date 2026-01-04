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
import { reactionDialogueGroup } from "./dialogueUtil";

export default class WizardController {
  /**
   *
   * @param scene
   * @param animationState
   * @param wisdomReaction so we can load appropriate dialogue
   */
  constructor(
    scene: Phaser.Scene,
    animationState: AnimationState,
    wisdomReaction: reactionDialogueGroup
  ) {
    this.scene = scene;
    this.animationState = animationState;
    this.wisdomReaction = wisdomReaction;
  }

  private scene: Phaser.Scene;
  public animationState: AnimationState;
  private readonly wisdomReaction: reactionDialogueGroup;
  public selectedDialogueKeys: selectedDialogueKeys;

  public chooseDialogue() {
    // this.selectedDialogueKeys.bye =
    // this.scene.load.audio("bye-1", "assets/dialogue/Bye messages/bye-1.wav");
    // this.scene.load.start();
    // this.scene.load.on("complete", () => {
    //   console.debug("asdf");
    //   this.scene.sound.play("bye-1");
    // });
    // setup random rnd seed
    // use to load dialogue from appropriate groups using
  }

  public reaction() {
    this.animationState.data.defaultMix = 0;

    // this.animationState.setAnimation(0, "idle-bounce", true);
    // this.animationState.setAnimation(1, "blink", true);
    // this.animationState.setAnimation(2, "hand-fiddle", true);
    this.animationState.setAnimation(3, "positive/13", false);
    this.animationState.addAnimation(3, "negative-4");

    // audio end callback test

    // let reacion = this.scene.sound.add("reaction-positive-1");
    // reacion.on("complete", () => {
    //   console.debug("done-audio");
    //   this.scene.sound.play("bye-2");
    // });
    // reacion.play();

    // spine end callback test

    this.animationState.addListener({
      start: (entry) => {
        // this.scene.sound.play(entry.animation?.name!);
        console.debug(entry.animation?.name!);
      },
      complete: (entry) => {
        // console.debug("done");
        // this.sound.play("bye-1");
      },
    });
  }
}

export type selectedDialogueKeys = { reaction: string; bye: string };
