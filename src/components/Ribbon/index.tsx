import * as S from './styles'

export type Colors = 'primary' | 'secondary'
export type Size = 'extraLarge' | 'large' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: Colors
  size?: Size
}

const Ribbon = ({
  children,
  color = 'secondary',
  size = 'large'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size} aria-label="Ribbon">
    {children}
  </S.Wrapper>
)

export default Ribbon
