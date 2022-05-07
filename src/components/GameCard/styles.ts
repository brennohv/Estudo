import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 29.2rem;
    position: relative;
    display: flex;
    flex-direction: column;

    a {
      height: 13.7rem;
      background-color: ${theme.colors.lightGray};
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      animation: placeholderShimmer 1s linear infinite forwards;

      @keyframes placeholderShimmer {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 29.2rem 0;
        }
      }
    }
  `}
`

export const Img = styled.img`
  max-height: 13.7rem;
  object-fit: cover;
  width: 100%;
`
export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
  overflow-wrap: break-word;
`

export const DescriptionBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    background-color: ${theme.colors.white};
    flex-direction: column;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    box-shadow: 0px 1px 5px rgba(3, 5, 23, 0.05);
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    /* max-width: calc(100% - 2.5rem); */
  `}
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    font-weight: 500;
    margin-bottom: 1rem;
  `}
`

export const Price = styled.button`
  ${({ theme }) => css`
    padding: 0 calc(${theme.spacings.xsmall} - 0.4rem);
    margin-right: ${theme.spacings.xxsmall};
    height: 3rem;
    max-width: 7.8rem;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    border: none;
    border-radius: 0.2rem;
  `}
`

export const BuyBox = styled.div`
  align-self: flex-end;
  display: flex;
`

export const PromotionalPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    align-self: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    text-decoration-line: line-through;
    margin-right: calc(${theme.spacings.xsmall} + 0.4rem);
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    & svg {
      width: 2.5rem;
      color: ${theme.colors.primary};
      position: absolute;
      cursor: pointer;
      top: 1.4rem;
      right: 1.8rem;
    }
  `}
`
