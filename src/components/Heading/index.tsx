import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
  borderLeft?: boolean
  borderBottom?: boolean
}

const Heading = ({
  color = 'black',
  children,
  size = 'medium',
  borderLeft = false,
  borderBottom = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    size={size}
    borderLeft={borderLeft}
    borderBottom={borderBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
