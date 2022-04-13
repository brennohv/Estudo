import * as S from './styles'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'

import { useState } from 'react'

export type MenuProps = {
  isOpen?: boolean
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="open menu" onClick={() => setIsOpen(true)} />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <SearchIcon aria-label="search" />
        <ShoppingCartIcon aria-label="shopping cart" />
      </S.MenuGroup>

      <S.MenuFull aria-label="Menu full" isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
