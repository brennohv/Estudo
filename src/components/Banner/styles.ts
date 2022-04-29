import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    ${ButtonStyles.Wrapper} {
      width: 15rem;
      height: 5rem;
    };
  `}
`

type ImgProps = {
  src: string
}

export const Img = styled.div<ImgProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    height: 14rem;

    ${media.greaterThan('medium')`
      height: 22rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: ${theme.spacings.medium}
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`
