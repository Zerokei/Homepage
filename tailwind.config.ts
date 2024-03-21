const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'purple',
      'purple': colors.purple,
      'zinc': colors.zinc,
      'amber': colors.amber,
      'sky': colors.sky
    },
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-background) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        separator: "rgb(var(--color-separator) / <alpha-value>)",
      },
      outlineColor: {
        primary: "rgb(var(--color-foreground) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--color-foreground) / <alpha-value>)",
        secondary: "rgb(var(--color-background) / <alpha-value>)",
      },
    },
  },
}