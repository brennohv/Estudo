import { PositionFloatImage } from './index'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const WrapperModifier = {
  right: (theme: DefaultTheme) => css`
    grid-template-areas: 'description floatImage';
    grid-template-columns: 2fr 1.3fr;

    ${Description} {
      align-items: flex-start;
      padding: ${theme.spacings.xsmall} 0 0 ${theme.spacings.small};

      ${media.greaterThan('medium')`
        justify-content: flex-end;
        padding: 0 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
      `}
    }

    ${FlotImage} {
      justify-self: end;
    }
  `,

  left: (theme: DefaultTheme) => css`
    grid-template-areas: 'floatImage description';
    grid-template-columns: 1.3fr 2fr;

    ${Description} {
      align-items: flex-end;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small} 0 0;

      ${media.greaterThan('medium')`
        justify-content: flex-end;
        padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge} 0;
      `}
    }
  `
}

type WrapperProps = {
  src: string
  positionFloatImage: PositionFloatImage
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ src, positionFloatImage, theme }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: center center;
    position: relative;
    width: 100%;
    height: 23rem;

    display: grid;
    z-index: ${theme.layers.overlay};

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${WrapperModifier[positionFloatImage](theme)}
  `}
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

export const FlotImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatImage;
    align-self: end;
    z-index: ${theme.layers.overlay};
    max-height: 15.7rem;
    max-width: 100%;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    grid-area: description;
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.overlay};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
    font-weight: 300;
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
