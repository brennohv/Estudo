import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'large'
  borderLeft?: boolean
  borderBottom?: boolean
  colorBorderBottom?: 'primary' | 'secondary'
}

const Heading = ({
  color = 'black',
  children,
  size = 'large',
  borderLeft = false,
  borderBottom = false,
  colorBorderBottom = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    borderLeft={borderLeft}
    borderBottom={borderBottom}
    colorBorderBottom={colorBorderBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
