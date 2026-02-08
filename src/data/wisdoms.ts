import { reactionDialogueGroup } from "~/dialogueUtil";

export type wisdom = {
  readonly content: string;
  /** if null, defaults to "text" */
  readonly type?: "text" | "image" | "video";
  readonly reaction: reactionDialogueGroup;
};

//
//
//
//
//
//
//
//
/**  */
export let wisdoms: Array<wisdom> = [
  { content: "Always recycle!", reaction: "positive" },
  { content: "Believe\nin yourself!", reaction: "positive" },
  { content: "Don't play\non the road!", reaction: "positive" },
  { content: "Piracy is not\na victimless crime!", reaction: "positive" },
  { content: "Live, laugh, love", reaction: "negative" },
  { content: "Don't do drugs!", reaction: "positive" },
  { content: "Smoking's\nfor suckers!", reaction: "positive" },
  { content: "Work hard,\nplay hard", reaction: "positive" },
  { content: "Brush and floss\nevery night", reaction: "positive" },
  { content: "Stretch\nevery morning", reaction: "positive" },
  {
    content:
      "Lorem ipsum dolor\nsit amet, consectetur\nadipiscing elit. Nunc\nconsectetur nec dui\neu imperdiet",
    reaction: "negative",
  },
  {
    content: "Watch Reboot",
    reaction: "confused",
  },
  {
    content: "Play Highschool\nBathroom Simulator",
    reaction: "confused",
  },
  {
    content: `The average\nheight of a Canadian\nwomen is about 5'4"`,
    reaction: "confused",
  },
  {
    content: `Esther is 5'5"`,
    reaction: "confused",
  },
  {
    content: "Share with others",
    reaction: "positive",
  },
  {
    content: "When you are full,\neat ice cream",
    reaction: "positive",
  },
  {
    content: "If you are\nchoking on ice,\nbe patient--\nit shall pass",
    reaction: "positive",
  },
  {
    content: "1+2+3+4\n+5+6+7+8\n+9+10 is 55",
    reaction: "negative",
  },
  {
    content:
      "To stop hiccups,\ndrink water \nbent forward at\na 90-degree angle",
    reaction: "positive",
  },
  {
    content:
      "Would having\n12 fingers make it\neasier to play the\npiano? Or harder?",
    reaction: "negative",
  },
  {
    content:
      "The water\nswirls in the \nway in the Southern\n hemisphere; it's Coriolis\neffect",
    reaction: "confused",
  },
  {
    content: "Watch out\nfor water",
    reaction: "confused",
  },
  {
    content: "The world\nwill end on\n11/19/2022",
    reaction: "negative",
  },
  {
    content:
      "A wizard is\nnever early, he\narrives precisely five\nminutes late",
    reaction: "negative",
  },
  {
    content: "If you drop\nyour dish cloth,\nbe warned:\ncompany's coming",
    reaction: "positive",
  },
  {
    content: "RGB is additive\ncolour, CMYK is\nsubtractive",
    reaction: "confused",
  },
  {
    content: "Happy wife,\nhappy life",
    reaction: "positive",
  },
  {
    content: "Idk",
    reaction: "negative",
  },
  {
    content: "The only true\nwisdom is in knowing\nyou know nothing",
    reaction: "confused",
  },
  {
    content: "The more you\nknow, the more you\nknow how little\nyou know",
    reaction: "positive",
  },
  {
    content:
      "The best time\nto plant a tree\nwas 20 years ago.\nThe second best time\nwas 19 years ago",
    reaction: "positive",
  },
  {
    content:
      "You can use CSS\n(Cascading Style Sheets)\nto change the colour\nof your text",
    reaction: "confused",
  },
  {
    content: "Disregard\ntomorrow's\nwisdom",
    reaction: "confused",
  },
  {
    content: "Are you living\na life you won't\nregret?",
    reaction: "negative",
  },
  {
    content: "It takes more\nmuscles to frown\nthan to smile.",
    reaction: "positive",
  },
  {
    content:
      "A lack \nplanning on your\npart doesn't constitute\nan emergency on\nmy part",
    reaction: "positive",
  },
  {
    content: "Don't let\nyour mood be\nyour attitude",
    reaction: "positive",
  },
  {
    content: "Don't let\nyour dreams be\ndreams, just do it",
    reaction: "positive",
  },
  {
    content: "You are\nusing this orb\nincorrectly. Please\nconsult the manual",
    reaction: "negative",
  },
  {
    content: "Why not take\na break and get\nsome fresh air?",
    reaction: "negative",
  },
  {
    content: "Stretch daily",
    reaction: "positive",
  },
  {
    content: "The start is\nnot nearly as\nimportant as the\nfinish",
    reaction: "positive",
  },
  {
    content: "You can do a\nlot more for \nthan you can do\nfor yourself",
    reaction: "positive",
  },
  {
    content:
      "It is the small\neveryday deeds of\nordinary folk that\nkeep the darkness\nat bay",
    reaction: "positive",
  },
  {
    content: "If you're\nfailing to plan,\nyou're planning\nto fail",
    reaction: "positive",
  },
  {
    content: "Even miracles\ntake a little time",
    reaction: "positive",
  },
  {
    content:
      "The grass isn't\ngreener on the other side,\nit's green where\nyou water it",
    reaction: "positive",
  },
  {
    content: "That smoke'll\nmake you choke",
    reaction: "confused",
  },
  {
    content: "You are not\nstupid",
    reaction: "negative",
  },
  {
    content:
      "Gain responsibility,\nbut never grow up.\nGrown ups don't\nhave fun",
    reaction: "positive",
  },
  {
    content: "One person's dumb\njoke could be another person's disaster!",
    reaction: "positive",
  },
  {
    content: "All you gotta do is ask your mom",
    reaction: "confused",
  },
  {
    content: "People who are lonely can be old at 33",
    reaction: "positive",
  },
  {
    content:
      "You can't call home if you don't know your area code and phone number by heart",
    reaction: "confused",
  },
  {
    content: "Ctrl + shift + V pastes without formatting",
    reaction: "confused",
  },
  {
    content:
      "always tell your parents where you're going and when you're going to be back",
    reaction: "positive",
  },
  {
    content: "Be aware of your surroundings",
    reaction: "positive",
  },
  {
    content: "Never trust a fart",
    reaction: "positive",
  },
  {
    content: "Books can take you to far-away lands and exotic places",
    reaction: "positive",
  },
  {
    content: "You need 'Premium Fuel' to run your best",
    reaction: "positive",
  },
  {
    content: "Stupid remember, smart write it down",
    reaction: "positive",
  },
  {
    content:
      "Old people can be very wise, and they often know the right direction to take in life",
    reaction: "positive",
  },
  {
    content:
      "Don't ever threaten to leave, unless you already have your bags packed",
    reaction: "positive",
  },
  {
    content: "It's not always about what you say, but how you say it",
    reaction: "positive",
  },
  {
    content: "Ships are safest in harbor, but that isn't why we build ships",
    reaction: "positive",
  },
  {
    content:
      "Say thank you when you have to say thank you, say sorry when you have to say sorry",
    reaction: "positive",
  },
  {
    content:
      "There is no such thing as right person wrong time. The right people are timeless",
    reaction: "positive",
  },
  {
    content: "Make work part of your life, not the other way around",
    reaction: "positive",
  },
  {
    content:
      "Graffiti is art. However, graffiti as an act of vandalism is a crime",
    reaction: "confused",
  },
  {
    content: "Graffiti would be hella boring if it was legal",
    reaction: "negative",
  },
  {
    content: "Brothers don't keep score",
    reaction: "confused",
  },
  {
    content: "Nobody beats Kurt Wylde",
    reaction: "confused",
  },
  {
    content: "One could be a genius and still be insane",
    reaction: "confused",
  },
  {
    content:
      "This is the greatest danger, to see only what you want to see and not what is true",
    reaction: "positive",
  },
  {
    content:
      "The right man in the wrong place can make all the difference in the world",
    reaction: "confused",
  },
  {
    content: "You will die in 12 seconds",
    reaction: "negative",
  },
  {
    content: "Winning lottery numbers are 04 12 13 18 21 33 40 + 49",
    reaction: "negative",
  },
  {
    content: "Change your profile picture to clippy",
    reaction: "confused",
  },
  {
    content: "Turn off your device right now",
    reaction: "confused",
  },
  {
    content: "Order white mocha at Starbucks. It's good",
    reaction: "confused",
  },
  {
    content: "I need scissors! 61",
    reaction: "confused",
  },
  {
    content:
      "The most important thing in your life... the single wisdom that'll save you someday... is that when offered candy from strangers, always say no",
    reaction: "negative",
  },
  {
    content: "An Anemone or Clematis plant's juice can cause a rash.",
    reaction: "positive",
  },
  {
    content: "Visit the Strong Museum of Play in Rochester, NY",
    reaction: "confused",
  },
  {
    content:
      "Nought's had, all's spent, Where our desire is got without content",
    reaction: "confused",
  },
  {
    content: "Progress, not perfection",
    reaction: "positive",
  },
  {
    content: "Done is better than perfect",
    reaction: "positive",
  },
  {
    content: "Take your time always",
    reaction: "positive",
  },
  {
    content: "You miss 100% of the shots you don't take",
    reaction: "positive",
  },
  {
    content: "Wholeness quiets infinite phenomena",
    reaction: "confused",
  },
  {
    content: "Hidden meaning transforms unparalleled abstract beauty",
    reaction: "confused",
  },
  {
    content: "Good health imparts reality to subtle creativity",
    reaction: "confused",
  },
  {
    content: "The future explains irrational facts",
    reaction: "confused",
  },
  {
    content: "Imagination is inside exponential space time events",
    reaction: "confused",
  },
  {
    content: "Consciousness is the growth of coherence, and of us",
    reaction: "confused",
  },
  {
    content: "Today, science tells us that the essence of nature is joy",
    reaction: "confused",
  },
  {
    content: "Your teacher can open the door, but you must enter it yourself",
    reaction: "positive",
  },
  {
    content: "The creative adult is the child who survived",
    reaction: "positive",
  },
  {
    content:
      "There are no stupid questions, but there is always at least one exception",
    reaction: "positive",
  },
  {
    content:
      "A river cuts through a rock, not because of its power but its persistence",
    reaction: "positive",
  },
  {
    content:
      "All endings are also beginnings. We just don't know it at the time",
    reaction: "positive",
  },
  {
    content: "Art and love are the same thing",
    reaction: "positive",
  },
  {
    content: "A wet person does not fear the rain",
    reaction: "positive",
  },
  {
    content: "Forgiveness means letting go of the hope for a better past",
    reaction: "positive",
  },
  {
    content:
      "Only those who will risk going too far can possibly find out how far one can go",
    reaction: "positive",
  },
  {
    content:
      "I wonder how many people I've looked at all my life and never seen",
    reaction: "positive",
  },
  {
    content:
      "Moisture is the essence of wetness. And wetness is the essence of beauty",
    reaction: "negative",
  },
  {
    content:
      "Man who run in front of car get tired. Man who run behind car get exhausted",
    reaction: "negative",
  },
  {
    content: "assets/images/image-wisdoms/tv-test-screen.png",
    reaction: "negative",
    type: "image",
  },
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
  // let wisdomIndex = 9;

  return wisdoms[wisdomIndex];
}

export function getWisdomByIndex(index: number): wisdom {
  return wisdoms[index];
}
