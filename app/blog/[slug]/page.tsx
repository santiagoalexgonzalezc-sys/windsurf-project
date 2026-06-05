import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
}

const mockPost: Post = {
  id: 1,
  title: 'Cómo optimizar tu aplicación Next.js',
  summary: 'Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js con técnicas avanzadas de optimización.',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.

Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.`,
  author: 'John Doe',
  date: '15 Enero 2023',
};

const relatedPosts: Post[] = [
  {
    id: 2,
    title: 'Introducción a TypeScript',
    summary: 'Guía completa para comenzar con TypeScript y mejorar la calidad de tu código JavaScript.',
    content: '',
    author: 'Jane Smith',
    date: '20 Febrero 2023',
  },
  {
    id: 3,
    title: 'Tailwind CSS: Guía práctica',
    summary: 'Descubre cómo utilizar Tailwind CSS para crear interfaces modernas y responsivas rápidamente.',
    content: '',
    author: 'John Doe',
    date: '10 Marzo 2023',
  },
  {
    id: 4,
    title: 'Testing en React',
    summary: 'Estrategias y herramientas para escribir tests efectivos en tus aplicaciones React.',
    content: '',
    author: 'Jane Smith',
    date: '5 Abril 2023',
  },
  {
    id: 5,
    title: 'State Management con Zustand',
    summary: 'Una alternativa ligera y sencilla a Redux para manejar el estado en aplicaciones React.',
    content: '',
    author: 'John Doe',
    date: '15 Mayo 2023',
  },
  {
    id: 6,
    title: 'Deploy de Next.js en Vercel',
    summary: 'Paso a paso para desplegar tu aplicación Next.js en Vercel con configuración optimizada.',
    content: '',
    author: 'Jane Smith',
    date: '1 Junio 2023',
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
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
        {/* Hero Section - Full Width */}
        <section className="w-full">
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Imagen destacada del post</span>
          </div>
        </section>

        {/* Post Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          {/* Metadata */}
          <div className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <p>Por {mockPost.author} • {mockPost.date}</p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{mockPost.title}</h1>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {mockPost.content}
            </p>
          </div>
        </section>

        {/* Related Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Posts relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
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
              © {new Date().getFullYear()} Dev Portafolio. Todos los derechos reservados.
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
