/** @format */

import Phaser from "phaser";

/**
 * All tween configs decoupled here. Targets are null and have to be set.
 */
export const tweenConfigs = {
  wisdom: {
    appear: {
      scale: {
        scale: 1,
        ease: Phaser.Math.Easing.Cubic.Out,
        duration: 2000,
      },
      alpha: {
        alpha: { from: 0, to: 0.8 },
        ease: Phaser.Math.Easing.Sine.InOut,
        duration: 3000,
      },
      displacement: {
        x: 0,
        y: 0,
        ease: Phaser.Math.Easing.Cubic.Out,
        duration: 3000,
      },
      glow: {
        outerStrength: 1,
        ease: Phaser.Math.Easing.Cubic.Out,
        duration: 3000,
        delay: 1000,
      },
    },
  },
};
