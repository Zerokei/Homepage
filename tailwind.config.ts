const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: colors.current,
      inherit: colors.inherit,
      'purple': colors.purple,
      'zinc': colors.zinc,
      'amber': colors.amber,
      'sky': colors.sky
    },
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        separator: "rgb(var(--color-separator) / <alpha-value>)",
      },
      outlineColor: {
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
      textDecorationColor: {
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
    },
  },
}