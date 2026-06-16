import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
}

interface Talk {
  id: number;
  title: string;
  summary: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Proyecto E-commerce',
    description: 'Plataforma de comercio electrónico con Next.js y Stripe',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de control con visualización de datos en tiempo real',
  },
  {
    id: 3,
    title: 'App de Tareas',
    description: 'Aplicación de gestión de tareas con React y TypeScript',
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    description: 'Sitio web personal con diseño moderno y responsivo',
  },
];

const mockTalks: Talk[] = [
  {
    id: 1,
    title: 'Introducción a Next.js 15',
    summary: 'Descubre las nuevas características de Next.js 15 y cómo mejorar el rendimiento de tus aplicaciones.',
  },
  {
    id: 2,
    title: 'TypeScript para React Developers',
    summary: 'Aprende a utilizar TypeScript en tus proyectos React para escribir código más seguro y mantenible.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* About me Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Imagen de perfil</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-center">About me</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Soy un desarrollador apasionado por crear experiencias web modernas y eficientes.
                  Me especializo en tecnologías como Next.js, React y TypeScript.
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Mi objetivo es compartir conocimiento y ayudar a otros desarrolladores a mejorar
                  sus habilidades a través de tutoriales y artículos prácticos.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Me encanta aprender nuevas tecnologías y contribuir a la comunidad de desarrollo.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Imagen</span>
                </div>
                <h3 className="font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talks Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Talks</h2>
          <div className="space-y-6">
            {mockTalks.map((talk) => (
              <div key={talk.id} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 bg-gray-200 dark:bg-gray-800 rounded shrink-0 flex items-center justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Miniatura</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-center">{talk.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{talk.summary}</p>
                    <button className="text-gray-900 dark:text-gray-100 hover:underline">
                      Ver charla
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
