import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'

import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
      margin-top: ${theme.spacings.medium}
    `}
  `}
`

export const Colum = styled.div`
  ${({ theme }) => css`
    a,
    span {
      color: ${theme.colors.gray};
      display: block;
      font-size: ${theme.font.sizes.small};
      text-decoration: none;
      margin-top: ${theme.spacings.xxsmall};
    }

    span:first-of-type,
    a:first-of-type {
      margin-top: ${theme.spacings.small};
    }
  `}
`
