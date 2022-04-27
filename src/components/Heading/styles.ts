import { HeadingProps } from './index'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    ::after {
      width: 3rem;
    }
  `,
  medium: () => css`
    font-size: 2.4rem;
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: 2.4rem;
    `}
  `,
  borderLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  borderBottom: (theme: DefaultTheme, color: 'primary' | 'secondary') => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    ::after {
      content: '';
      position: absolute;
      display: block;
      border-bottom: 0.5rem solid ${theme.colors[color]};
      width: 4.9rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({
    theme,
    color,
    size,
    borderLeft,
    borderBottom,
    colorBorderBottom
  }) => css`
    color: ${theme.colors[color!]};
    ${!!borderLeft && wrapperModifier.borderLeft(theme)}
    ${!!borderBottom && wrapperModifier.borderBottom(theme, colorBorderBottom!)}
    ${!!size && wrapperModifier[size!](theme)}
  `}
`
