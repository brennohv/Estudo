import * as S from './styles'

export type RibbonProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  size?: 'extraLarge' | 'large' | 'small'
}

const Ribbon = ({
  children,
  color = 'secondary',
  size = 'large'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
