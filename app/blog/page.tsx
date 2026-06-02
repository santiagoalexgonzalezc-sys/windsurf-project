import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Cómo optimizar tu aplicación Next.js',
    summary: 'Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js con técnicas avanzadas de optimización.',
    featured: true,
  },
  {
    id: 2,
    title: 'Introducción a TypeScript',
    summary: 'Guía completa para comenzar con TypeScript y mejorar la calidad de tu código JavaScript.',
  },
  {
    id: 3,
    title: 'Tailwind CSS: Guía práctica',
    summary: 'Descubre cómo utilizar Tailwind CSS para crear interfaces modernas y responsivas rápidamente.',
  },
  {
    id: 4,
    title: 'Testing en React',
    summary: 'Estrategias y herramientas para escribir tests efectivos en tus aplicaciones React.',
  },
  {
    id: 5,
    title: 'State Management con Zustand',
    summary: 'Una alternativa ligera y sencilla a Redux para manejar el estado en aplicaciones React.',
  },
  {
    id: 6,
    title: 'Deploy de Next.js en Vercel',
    summary: 'Paso a paso para desplegar tu aplicación Next.js en Vercel con configuración optimizada.',
  },
];

export default function Blog() {
  const featuredPost = mockPosts.find((post) => post.featured);
  const regularPosts = mockPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Dev Portafolio
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Featured Post */}
        {featuredPost && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Imagen destacada</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
                <p className="mb-6 text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
                <button className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                  Leer más
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Últimos posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Miniatura</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{post.summary}</p>
                <button className="text-gray-900 dark:text-gray-100 hover:underline">
                  Leer
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Mi Blog. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Twitter/X
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
