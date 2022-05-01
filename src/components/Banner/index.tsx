import Button from 'components/Button'
import Ribbon, { Colors, Size } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  withRibbon?: string
  ribbonColor?: Colors
  ribbonSize?: Size
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  withRibbon,
  ribbonColor = 'secondary',
  ribbonSize = 'large'
}: BannerProps) => (
  <S.Wrapper>
    {!!withRibbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {withRibbon}
      </Ribbon>
    )}
    <S.Img src={img} role="img" aria-label={title} />

    <S.Description>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Description>
  </S.Wrapper>
)

export default Banner
