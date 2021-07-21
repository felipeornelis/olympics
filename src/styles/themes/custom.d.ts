import 'styled-components'
import { default as theme } from './default'

type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
