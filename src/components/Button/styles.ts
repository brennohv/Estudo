import { ButtonProps } from './index'
import styled, { css, DefaultTheme } from 'styled-components'

export const modifierWraper = {
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall};
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    svg {
      width: 1.5rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    width: 12.2rem;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    svg {
      width: 1.8rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    width: 15rem;
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    svg {
      width: 2.1rem;
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    span {
      margin-left: 0.8rem;
    }
  `
}

type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    color: ${theme.colors.white};
    font-weight: 500;
    font-family: ${theme.font.family};
    border-radius: 0.4rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );

    ${!!size && modifierWraper[size!](theme)};
    ${fullWidth && modifierWraper.fullWidth()}
    ${hasIcon && modifierWraper.withIcon()}

    :hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(
          178.59deg,
          #ff5f5f -14.51%,
          #f062c0 102.86%,
          #f23131 102.86%
        );
    }
  `}
`
