import { default as dark } from './default'

export const light: typeof dark = {
  ...dark,
  colors: {
    ...dark.colors,
    text: '#202B5F',
    background: '#F7F7F7',
    card: {
      ...dark.colors.card,
      bg: '#E8E8E8',
      text: '#202B5F',
    },
  },
}
