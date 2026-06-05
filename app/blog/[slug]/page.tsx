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
  return <h1>Blog {params.slug}</h1>;
}
