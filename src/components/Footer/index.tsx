import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo size="small" />

    <S.Content>
      <S.Colum>
        <Heading size="small" borderBottom colorBorderBottom="secondary">
          Contact
        </Heading>

        <a href="mailto:brennovicentini@gmail.com">brennovicentini@gmail.com</a>
      </S.Colum>

      <S.Colum>
        <Heading size="small" borderBottom colorBorderBottom="secondary">
          Follow us
        </Heading>

        <nav>
          <a href="https://www.linkedin.com/in/brenno-abreu">Linkedin</a>
          <a href="https://github.com/brennohv">Github</a>
          <a href="https://www.facebook.com/brenno.henrique.338/">facebook</a>
        </nav>
      </S.Colum>

      <S.Colum>
        <Heading size="small" borderBottom colorBorderBottom="secondary">
          Links
        </Heading>

        <nav>
          <Link href="/">
            <a>Loja</a>
          </Link>

          <Link href="/explorer">
            <a>Explorar</a>
          </Link>

          <Link href="/explorer">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Colum>

      <S.Colum>
        <Heading size="small" borderBottom colorBorderBottom="secondary">
          Address
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Colum>
    </S.Content>
  </S.Wrapper>
)

export default Footer
