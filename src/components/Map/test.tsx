import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Imperatriz',
      slug: 'Imperatriz',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)
    expect(screen.getByTitle(/imperatriz/i)).toBeInTheDocument()
  })
})
