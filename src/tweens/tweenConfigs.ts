/** @format */

import Phaser from "phaser";

export const tweenConfigs = {
  magic: {
    pulse: {
      scale: 0,
      duration: 100,
      ease: Phaser.Math.Easing.Quadratic.In,
    },
    end: {
      glow: {
        scale: { from: 1, to: 0 },
        alpha: { from: 1, to: 0 },
        duration: 100,
        ease: Phaser.Math.Easing.Quadratic.In,
      },
      shine: {
        scale: 0.5,
        alpha: 1,
        delay: 120,
        duration: 50,
        ease: Phaser.Math.Easing.Quadratic.Out,
        yoyo: true,
      },
    },
  },
  orb: {
    cloud: {
      appear: {
        alpha: 0.6,
        duration: 4000,
        ease: Phaser.Math.Easing.Cubic.In,
      },
      disappear: {
        alpha: 0,
        duration: 3000,
        ease: Phaser.Math.Easing.Cubic.In,
      },
    },
  },
  wisdom: {
    appear: {
      scale: {
        scale: { from: 0, to: 1 },
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
        outerStrength: { from: 0, to: 1 },
        ease: Phaser.Math.Easing.Cubic.Out,
        duration: 3000,
        delay: 1000,
      },
    },
  },
};
