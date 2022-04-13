import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    svg {
      width: 2.8rem;
      height: 2.8rem;
      margin-left: ${theme.spacings.xsmall};
      cursor: pointer;
    }
  `}
`

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    svg {
      width: 2.8rem;
      height: 2.8rem;
      cursor: pointer;
    }
  `}
`
type MenuFullProps = {
  isOpen?: boolean
}
export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
    position: absolute;

    svg {
      width: 2.8rem;
      height: 2.8rem;
      cursor: pointer;
    }
  `}
`
