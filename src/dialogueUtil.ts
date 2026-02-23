import dataManagerKeys from "./data/dataManagerKeys";

export const dialogueGroup = [
  "welcome",
  "welcome-returning",
  "moan",
  "bye",
  "idle",
] as const;

export const reactionDialogueGroup = [
  "positive",
  "negative",
  "confused",
] as const;

export type dialogueGroup = (typeof dialogueGroup)[number];
export type reactionDialogueGroup = (typeof reactionDialogueGroup)[number];

/**
 * "welcome", "welcome-returning" and all reaction group keys may be undefined
 */
export type selectedDialogue = Map<
  dialogueGroup | reactionDialogueGroup,
  number
>;

/** Range of dialogue lines that exist to pick */
export let dialoguesPerGroup = new Map<
  dialogueGroup | reactionDialogueGroup,
  number
>([
  ["bye", 2],
  ["confused", 1],
  ["positive", 2],
  ["negative", 1],
  ["moan", 1],
  ["welcome", 2],
  ["welcome-returning", 3],
  ["idle", 1],
]);

/**
 * picks randomly from appropriate group
 * to be called from preload()
 * @param scene
 * @param reactionGroup
 * @param loadAll for debugging. Dialogue will be loaded with number suffixes, so the usual asset keys won't work
 */
export function selectDialogue(
  scene: Phaser.Scene,
  reactionGroup: reactionDialogueGroup,
): Map<dialogueGroup | reactionDialogueGroup, number> {
  // reset rnd seed
  let date = new Date();
  let newSeed = date.getSeconds().toString();
  Phaser.Math.RND.sow([newSeed]);

  let selectedDialogue = new Map<
    dialogueGroup | reactionDialogueGroup,
    number
  >();

  // randomly select dialogue to load for each non reaction dialogue group
  dialogueGroup.forEach((value) => {
    if (
      (value != "welcome-returning" ||
        scene.game.registry.get(dataManagerKeys.returningUser)) &&
      (value != "welcome" || !scene.registry.get(dataManagerKeys.returningUser))
    ) {
      // skip welcome or welcome-returning based on if returning user or not

      let dialougeIndexToLoad;
      dialougeIndexToLoad = Phaser.Math.RND.between(
        1,
        dialoguesPerGroup.get(value)!,
      );

      // DEBUG
      // dialougeIndexToLoad = 2;

      selectedDialogue.set(value, dialougeIndexToLoad);
    }
  });

  let reactionDialougeIndexToLoad;
  reactionDialougeIndexToLoad = Phaser.Math.RND.between(
    1,
    dialoguesPerGroup.get(reactionGroup)!,
  );
  // reactionDialougeIndexToLoad = 2;
  selectedDialogue.set(reactionGroup, reactionDialougeIndexToLoad);

  // DEBUG - this is simpler than my previous "load all" idea since I dont have a proper debug menu yet
  // selectedDialogue.set("positive", 1);

  return selectedDialogue;
}

export function loadDialogue(
  scene: Phaser.Scene,
  dialogueToLoad: selectedDialogue,
) {
  dialogueToLoad.forEach((value, key) => {
    if (value != undefined) {
      scene.load.audio(
        `${key}-${value}`,
        `assets/dialogue/${key}/${key}-${value}.mp3`,
      );
    }
  });
}
