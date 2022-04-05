import { HeadingProps } from './index'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: 2.4rem;
    `};
  `,
  borderLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  borderBottom: (theme: DefaultTheme) => css`
    position: relative;

    ::after {
      content: '';
      position: absolute;
      margin-top: 0.4rem;
      display: block;
      border-bottom: 0.5rem solid ${theme.colors.primary};
      width: 4.9rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, borderLeft, borderBottom }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifier[size!](theme)}
    ${!!borderLeft && wrapperModifier.borderLeft(theme)}
    ${!!borderBottom && wrapperModifier.borderBottom(theme)}
  `}
`
