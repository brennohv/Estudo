import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonProps } from '.'
import { darken } from 'polished'

type WrapperProps = Omit<RibbonProps, 'children'>

const wrapperModifier = {
  extraLarge: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.large};
    right: -2.2rem;
    padding: 0 ${theme.spacings.large};

    ::after {
      top: 4rem;
      border-right-width: 2.2rem;
      border-top-width: 1rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 3.3rem;
    font-size: ${theme.font.sizes.small};
    right: -1.4rem;
    padding: 0 ${theme.spacings.medium};

    ::after {
      top: 3.3rem;
      border-right-width: 1.4rem;
      border-top-width: 0.8rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.4rem;
    font-size: ${theme.font.sizes.xsmall};
    right: -1.3rem;
    padding: 0 ${theme.spacings.small};

    ::after {
      top: 2.4rem;
      border-right-width: 1.3rem;
      border-top-width: 0.6rem;
      /*
        OUTRO CAMINHO PARA FAZER O EFEITO DESEJADO DO AFTER

      padding-top: 0.6rem;
      width: 1.3rem; */
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, theme, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    align-items: center;
    background-color: ${theme.colors[color!]};
    ${!!size && wrapperModifier[size](theme)}

    ::after {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: ${darken(0.2, theme.colors[color!])};
      border-left-color: ${darken(0.2, theme.colors[color!])};
      border-left-width: 0;
      border-bottom-width: 0;
      /*
        OUTRO CAMINHO PARA FAZER O EFEITO DESEJADO DO AFTER

      background-color: ${darken(0.2, theme.colors[color!])}
      clip-path: polygon(0 0%, 100% 0%, 0% 100%, 0 50%); */
    }
  `}
`
// Com bordas foi mais difícil de conseguir entender o funcionamento.
