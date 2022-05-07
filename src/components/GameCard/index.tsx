import * as S from './styles'

import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { Favorite } from '@styled-icons/material/Favorite'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from 'components/Button'

import { useState } from 'react'
import Ribbon, { Colors, Size } from 'components/Ribbon'

export type GameCardProps = {
  img: string
  title: string
  slug: string
  developer: string
  price: string
  promotionalPrice?: string
  ribbon?: string
  sizeRibbon?: Size
  colorRibbon?: Colors
}

const GameCard = ({
  img,
  title,
  slug,
  developer,
  price,
  promotionalPrice,
  ribbon,
  sizeRibbon,
  colorRibbon
}: GameCardProps) => {
  const [onFav, setOnFav] = useState(false)

  return (
    <S.Wrapper>
      <a href={`/game/${slug}`}>
        <S.Img src={img} aria-label={title} />
      </a>

      {!!ribbon && (
        <Ribbon size={sizeRibbon} color={colorRibbon}>
          {ribbon}
        </Ribbon>
      )}

      <S.DescriptionBox>
        <S.FavButton
          role={'button'}
          onClick={() => setOnFav(!onFav)}
          aria-label="favButton"
        >
          {onFav ? (
            <Favorite aria-label="removeFromWishlist" />
          ) : (
            <FavoriteBorder aria-label="addToWishlist" />
          )}
        </S.FavButton>

        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.BuyBox>
          {!!promotionalPrice && (
            <S.PromotionalPrice>{price}</S.PromotionalPrice>
          )}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button
            size="small"
            icon={<AddShoppingCart aria-label="Add shopingCart" />}
          />
        </S.BuyBox>
      </S.DescriptionBox>
    </S.Wrapper>
  )
}

export default GameCard
