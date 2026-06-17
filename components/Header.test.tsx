import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the logo with correct text', () => {
    render(<Header />)
    const logo = screen.getByText('Dev Portafolio')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')
    const blogLink = screen.getByText('Blog')

    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(blogLink).toBeInTheDocument()
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')
    const blogLink = screen.getByText('Blog')

    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about')
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog')
  })
})
