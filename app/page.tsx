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
];

export default function Home() {
  const featuredPost = mockPosts.find((post) => post.featured);
  const regularPosts = mockPosts.filter((post) => !post.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Mi Blog
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
        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Imagen placeholder</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About me</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Soy un desarrollador apasionado por crear experiencias web modernas y eficientes.
                Me especializo en tecnologías como Next.js, React y TypeScript.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Mi objetivo es compartir conocimiento y ayudar a otros desarrolladores a mejorar
                sus habilidades a través de tutoriales y artículos prácticos.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Ver más
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Post */}
            {featuredPost && (
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
                <button className="text-gray-900 dark:text-gray-100 hover:underline">
                  Leer más
                </button>
              </div>
            )}

            {/* Regular Posts */}
            <div className="space-y-4">
              {regularPosts.map((post) => (
                <div key={post.id} className="flex gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Img</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{post.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.summary}</p>
                    <button className="text-sm text-gray-900 dark:text-gray-100 hover:underline">
                      Leer
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
