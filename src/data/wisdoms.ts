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
  { content: "Always\nrecycle!", reaction: "positive" },
  { content: "Believe\nin yourself!", reaction: "positive" },
  { content: "Don't play\non the road!", reaction: "positive" },
  { content: "Piracy is not\na victimless crime!", reaction: "positive" },
  { content: "Live,\nlaugh, love", reaction: "negative" },
  { content: "Don't do\ndrugs!", reaction: "positive" },
  { content: "Smoking's\nfor suckers!", reaction: "positive" },
  { content: "Work hard,\nplay hard", reaction: "positive" },
  { content: "Brush and floss\nevery night", reaction: "positive" },
  { content: "Stretch\nevery morning", reaction: "positive" },
  {
    content:
      "\n\n\nThe Krabby Patty\nSecret Formula is\nsea cheese, sea lettuce, sea tomatoes,\npickles, ketchup, mustard,\nmayonnaise, sea onion, one cup",
    reaction: "confused",
  },
  {
    content:
      "Lorem ipsum dolor\nsit amet, consectetur\nadipiscing elit. Nunc\nconsectetur nec dui\neu imperdiet",
    reaction: "negative",
  },
  {
    content: "Invest in Nvidia\n5 years ago",
    reaction: "negative",
  },
  {
    content: "Watch\nReboot",
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
    content: `Esther\nis 5'5"`,
    reaction: "confused",
  },
  {
    content: "Share\nwith others",
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
      "The water\nswirls in the \nway in the Southern\nhemisphere; it's\nCoriolis effect",
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
      "A wizard is\nnever early, he\narrives precisely\nfive minutes late",
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
      "A lack\nof planning on your\npart doesn't constitute\nan emergency on\nmy part",
    reaction: "positive",
  },
  {
    content: "Don't let\nyour mood be\nyour attitude",
    reaction: "positive",
  },
  {
    content: "Don't let\nyour dreams be\ndreams,\njust do it",
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
    content: "Stretch\ndaily",
    reaction: "positive",
  },
  {
    content: "The start is\nnot nearly as\nimportant as the\nfinish",
    reaction: "positive",
  },
  {
    content: "You can do a\nlot more for others\nthan you can do\nfor yourself",
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
    content: "One person's dumb\njoke could be another\nperson's disaster!",
    reaction: "positive",
  },
  {
    content: "All you gotta do\nis ask your mom",
    reaction: "confused",
  },
  {
    content: "People who are lonely\ncan be old at 33",
    reaction: "positive",
  },
  {
    content:
      "You can't call home\nif you don't know your\narea code and phone\nnumber by heart",
    reaction: "confused",
  },
  {
    content: "Ctrl + shift + V\npastes without\nformatting",
    reaction: "confused",
  },
  {
    content:
      "Always tell your\nparents where you're\ngoing and when\nyou're going to\nbe back",
    reaction: "positive",
  },
  {
    content: "Be aware\nof your\nsurroundings",
    reaction: "positive",
  },
  {
    content: "Never trust\na fart",
    reaction: "positive",
  },
  {
    content: "Books can take you\nto far-away lands\nand exotic places",
    reaction: "positive",
  },
  {
    content: "You need\n'Premium Fuel'\nto run your best",
    reaction: "positive",
  },
  {
    content: "Stupid remember,\nsmart write it down",
    reaction: "positive",
  },
  {
    content:
      "Old people can be\nvery wise, and they\noften know the right\ndirection to take\nin life",
    reaction: "positive",
  },
  {
    content:
      "Don't ever threaten\nto leave, unless you\nalready have your\nbags packed",
    reaction: "positive",
  },
  {
    content: "It's not always\nabout what you\nsay, but\nhow you say it",
    reaction: "positive",
  },
  {
    content: "Ships are safest\nin harbor, but that\nisn't why we build\nships",
    reaction: "positive",
  },
  {
    content:
      "Say thank you\nwhen you have to say\nthank you,\nsay sorry when you\nhave to say sorry",
    reaction: "positive",
  },
  {
    content:
      "There is no such\nthing as right person\nwrong time.\nThe right people\nare timeless",
    reaction: "positive",
  },
  {
    content: "Make work part of\nyour life, not the\nother way around",
    reaction: "positive",
  },
  {
    content:
      "Graffiti is art.\nHowever, graffiti as an\nact of vandalism\nis a crime",
    reaction: "confused",
  },
  {
    content: "Graffiti would be\nhella boring if\nit was legal",
    reaction: "negative",
  },
  {
    content: "Brothers don't\nkeep score",
    reaction: "confused",
  },
  {
    content: "Nobody beats\nKurt Wylde",
    reaction: "confused",
  },
  {
    content: "One could be\na genius\nand still be insane",
    reaction: "confused",
  },
  {
    content:
      "This is the greatest\ndanger, to see only\nwhat you want to see\nand not what is true",
    reaction: "positive",
  },
  {
    content:
      "The right man in the\nwrong place can make\nall the difference\nin the world",
    reaction: "confused",
  },
  {
    content: "You will die\nin 12 seconds",
    reaction: "negative",
  },
  {
    content: "Winning lottery\nnumbers are\n04 12 13 18\n21 33 40 + 49",
    reaction: "negative",
  },
  {
    content: "Change your profile\npicture to clippy",
    reaction: "confused",
  },
  {
    content: "Turn off your\ndevice right now",
    reaction: "confused",
  },
  {
    content: "Order white mocha\nat Starbucks.\nIt's good",
    reaction: "confused",
  },
  {
    content: "I need\nscissors! 61",
    reaction: "confused",
  },
  {
    content:
      "\n\nThe most important\nthing in your life... the\nsingle wisdom that'll\nsave you someday...\nwhen offered candy from\nstrangers, always say no",
    reaction: "negative",
  },
  {
    content: "An Anemone or\nClematis plant's juice\ncan cause a rash.",
    reaction: "positive",
  },
  {
    content: "Visit the Strong\nMuseum of Play in\nRochester, NY",
    reaction: "confused",
  },
  {
    content:
      "Nought's had,\nall's spent,\nWhere our desire is got\nwithout content",
    reaction: "confused",
  },
  {
    content: "Progress,\nnot perfection",
    reaction: "positive",
  },
  {
    content: "Done is better\nthan perfect",
    reaction: "positive",
  },
  {
    content: "Take your time\nalways",
    reaction: "positive",
  },
  {
    content: "You miss 100%\nof the shots\nyou don't take",
    reaction: "positive",
  },
  {
    content: "Wholeness quiets\ninfinite phenomena",
    reaction: "confused",
  },
  {
    content: "Hidden meaning\ntransforms\nunparalleled\nabstract beauty",
    reaction: "confused",
  },
  {
    content: "Good health imparts\nreality to subtle\ncreativity",
    reaction: "confused",
  },
  {
    content: "The future explains\nirrational facts",
    reaction: "confused",
  },
  {
    content: "Imagination is\ninside exponential\nspace time\nevents",
    reaction: "confused",
  },
  {
    content: "Consciousness is the\ngrowth of coherence,\nand of us",
    reaction: "confused",
  },
  {
    content: "Today, science tells\nus that the essence of\nnature is joy",
    reaction: "confused",
  },
  {
    content: "Your teacher can open\nthe door, but you must\nenter it yourself",
    reaction: "positive",
  },
  {
    content: "The creative adult\nis the child who\nsurvived",
    reaction: "positive",
  },
  {
    content:
      "There are no stupid\nquestions, but there is\nalways at least one\nexception",
    reaction: "positive",
  },
  {
    content:
      "A river cuts through\na rock, not \nof its power\nbut its persistence",
    reaction: "positive",
  },
  {
    content:
      "All endings are also\nbeginnings. We just\ndon't know it\nat the time",
    reaction: "positive",
  },
  {
    content: "Art and love are\nthe same thing",
    reaction: "positive",
  },
  {
    content: "A wet person does\nnot fear the rain",
    reaction: "positive",
  },
  {
    content: "Forgiveness means\nletting go of the\nhope for a better\npast",
    reaction: "positive",
  },
  {
    content:
      "Only those who will\nrisk going too far\ncan possibly find\nout how far one\ncan go",
    reaction: "positive",
  },
  {
    content:
      "I wonder how many\npeople I've looked\nat all my life\nand never seen",
    reaction: "positive",
  },
  {
    content:
      "Moisture is the essence\nof wetness. And wetness\nis the essence of beauty",
    reaction: "negative",
  },
  {
    content:
      "Man who run in front\nof car get tired.\nMan who run behind\ncar get exhausted",
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

  // DEBUG
  // Phaser.Math.RND.sow(["asasdfdf"]);

  let wisdomIndex = Phaser.Math.RND.between(0, wisdoms.length - 1);
  // first rnd usage returns same thing after setting the same seed
  // let wisdomIndex = 9;

  return wisdoms[wisdomIndex];
}

export function getWisdomByIndex(index: number): wisdom {
  return wisdoms[index];
}
