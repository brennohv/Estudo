import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
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
