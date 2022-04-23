import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    display: flex;
    align-items: center;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.1rem;
    height: 2.1rem;
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    margin: 0.3rem ${theme.spacings.small} 0;
    position: relative;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.3s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`

type MenuFullProps = {
  isOpen?: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen = false }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    background: ${theme.colors.white};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      width: 2.8rem;
      height: 2.8rem;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xxlarge};
      margin: ${theme.spacings.xsmall};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(-3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(3rem)' : 'translateY(0)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      font-size: ${theme.font.sizes.xsmall};
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`

export const RegisterLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;
  `}
`
