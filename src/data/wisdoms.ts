import { reactionDialogueGroup } from "~/dialogueUtil";

export type wisdom = {
  readonly content: string;
  /** if null, defaults to "text" */
  readonly type?: "text" | "image" | "video";
  readonly reaction: reactionDialogueGroup;
};

// export type reaction = "positive" | "negative" | "confused";

/**  */
export let wisdoms: Array<wisdom> = [
  { content: "\n\nAlways recycle!", reaction: "positive" },
  { content: "Believe in yourself!", reaction: "positive" },
  { content: "Don't play on the road!", reaction: "positive" },
  { content: "Piracy is not a victimless crime!", reaction: "positive" },
  { content: "Live, laugh, love", reaction: "positive" },
  { content: "Don't do drugs!", reaction: "positive" },
  { content: "Smoking's for suckers!", reaction: "positive" },
  { content: "Work hard, play hard", reaction: "positive" },
  { content: "Brush and floss every night", reaction: "positive" },
  { content: "Stretch every morning", reaction: "positive" },
];

/**
 * Returns wisdom random wisdom using date as rnd seed
 * @param date For testing - if null, today's date will be used
 * @returns
 */
export function getWisdomForDate(date?: Date): wisdom {
  // Maybe there are 31 groups of wisdoms, the day of the week determines which todays' is pulled from. The currrent month & year create the seed used in the RND to pick which wisdom from the group. This way users def won't see the same wisdom at least for a month

  if (date == null) {
    date = new Date();
  }

  Phaser.Math.RND.sow([
    date.getDate().toString(),
    date.getMonth().toString(),
    date.getFullYear().toString(),
  ]);
  let wisdomIndex = Phaser.Math.RND.between(0, wisdoms.length - 1);
  // first rnd usage returns same thing after setting the same seed

  return wisdoms[wisdomIndex];
}
