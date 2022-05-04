import Button from 'components/Button'
import * as S from './styles'

export type PositionFloatImage = 'right' | 'left'

export type HighlightProps = {
  img: string
  title: string
  subtitle: string
  floatImage?: string
  positionFloatImage?: PositionFloatImage
  labelButton: string
}

const Highlight = ({
  title,
  subtitle,
  floatImage,
  positionFloatImage = 'left',
  img,
  labelButton
}: HighlightProps) => (
  <S.Wrapper
    positionFloatImage={positionFloatImage}
    src={img}
    role="img"
    aria-label={title}
  >
    <S.Overlay />
    {!!floatImage && <S.FlotImage src={floatImage} aria-label="floatImage" />}
    <S.Description>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href="/games/rdr2">
        {labelButton}
      </Button>
    </S.Description>
  </S.Wrapper>
)

export default Highlight
