import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

export type BreakPoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  greatherThan?: BreakPoints
  lessThan?: BreakPoints
}

const mediaMatchModifier = {
  lessThan: (size: BreakPoints) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,
  greatherThan: (size: BreakPoints) => css`
    ${media.greaterThan(size)`
      display: block
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greatherThan, lessThan }) => css`
    display: none;

    ${!!greatherThan && mediaMatchModifier.greatherThan(greatherThan)}
    ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}
  `}
`
