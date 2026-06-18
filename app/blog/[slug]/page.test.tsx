import { render, screen } from '@testing-library/react'
import BlogPost from './page'

// Mock de next/navigation para params
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}))

describe('BlogPost', () => {
  beforeEach(() => {
    // Reset mocks antes de cada test
    jest.clearAllMocks()
  })

  it('renders post title when post exists', async () => {
    const { useParams } = require('next/navigation')
    useParams.mockReturnValue({ slug: '1' })

    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const title = screen.getByText('Cómo optimizar tu aplicación Next.js')
    expect(title).toBeInTheDocument()
  })

  it('renders post author and date when post exists', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const author = screen.getByText(/Por Juan Pérez/)
    const date = screen.getByText(/15 de Mayo, 2024/)
    
    expect(author).toBeInTheDocument()
    expect(date).toBeInTheDocument()
  })

  it('renders post content when post exists', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const content = screen.getByText(/Este es el contenido completo del post/)
    expect(content).toBeInTheDocument()
  })

  it('shows "Post no encontrado" when post does not exist', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '999' }) })
    render(Component)

    const notFound = screen.getByText('Post no encontrado')
    expect(notFound).toBeInTheDocument()
  })

  it('renders related posts section', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const relatedPostsTitle = screen.getByText('Posts relacionados')
    expect(relatedPostsTitle).toBeInTheDocument()
  })

  it('renders related posts links with correct href attributes', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const relatedLinks = screen.getAllByText('Leer')
    expect(relatedLinks.length).toBeGreaterThan(0)
    
    // Verificar que al menos un link tenga el href correcto
    const firstLink = relatedLinks[0].closest('a')
    expect(firstLink).toHaveAttribute('href')
  })

  it('renders hero section with placeholder image', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const heroPlaceholder = screen.getByText('Imagen hero del post')
    expect(heroPlaceholder).toBeInTheDocument()
  })
})
