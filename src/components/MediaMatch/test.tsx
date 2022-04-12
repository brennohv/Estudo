import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let onDesktop: Element
  let onMobile: Element

  beforeEach(() => {
    renderWithTheme(
      <>
        <MediaMatch greatherThan="medium">
          <h1 data-testid="desktop"> Only Desktop </h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile"> Only Mobile </h1>
        </MediaMatch>
      </>
    )

    onDesktop = screen.getByTestId('desktop')
    onMobile = screen.getByTestId('mobile')
  })

  it('should not render the heading by default', () => {
    expect(onDesktop.parentElement).toHaveStyleRule('display', 'none')
    expect(onMobile.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should render the heading when passed in props', () => {
    expect(onDesktop.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(onMobile.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
