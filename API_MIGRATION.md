# API Migration Documentation

## Overview

This project has been migrated from using mock data locally to consuming a REST API built with Bun.js. The blog posts are now served through a dedicated API server instead of being hardcoded in the frontend components.

## Architecture

### Components

1. **Frontend (Next.js 16)**
   - `app/page.tsx` - Home page consuming API
   - `app/blog/[slug]/page.tsx` - Blog post page consuming API

2. **Backend (Bun.js)**
   - `server.ts` - Bun.js HTTP server
   - Endpoint: `GET http://localhost:3001/posts`

## API Endpoint

### GET /posts

**URL:** `http://localhost:3001/posts`

**Method:** GET

**Response:** JSON array of posts

```json
[
  {
    "id": 1,
    "title": "Cómo optimizar tu aplicación Next.js",
    "summary": "Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js con técnicas avanzadas de optimización.",
    "content": "Este es el contenido completo del post...",
    "author": "Juan Pérez",
    "date": "15 de Mayo, 2024",
    "featured": true
  },
  ...
]
```

## Setup Instructions

### Prerequisites

- Node.js installed
- Bun.js installed (for the API server)
- npm installed

### Installation

1. Install dependencies:

```bash
npm install
```

1. Install concurrently (for running both servers):

```bash
npm install --save-dev concurrently
```

## Running the Application

### Option 1: Run Frontend and API Simultaneously (Recommended)

```bash
npm run dev:all
```

This will start:

- Next.js frontend on `http://localhost:3000`
- Bun.js API on `http://localhost:3001`

### Option 2: Run Separately

**Frontend only:**

```bash
npm run dev
```

**API only:**

```bash
npm run server
```

## Development Workflow

### Adding New Posts

To add new posts to the blog:

1. Edit `server.ts`
2. Add the new post object to the `mockPosts` array
3. Restart the API server (Ctrl+C then `npm run server`)

Example:

```typescript
const mockPosts: Post[] = [
  // ... existing posts
  {
    id: 8,
    title: 'Nuevo Post',
    summary: 'Resumen del nuevo post',
    content: 'Contenido completo del nuevo post',
    author: 'Autor',
    date: 'Fecha',
    featured: false,
  },
];
```

### Testing the API

You can test the API endpoint directly:

```bash
curl http://localhost:3001/posts
```

Or use a tool like Postman or Insomnia.

## File Structure

```
windsurf-project/
├── server.ts                          # Bun.js API server
├── app/
│   ├── page.tsx                       # Home page (consumes API)
│   └── blog/
│       └── [slug]/
│           ├── page.tsx               # Blog post page (consumes API)
│           └── page.test.tsx          # Tests for blog page
├── components/
│   ├── Header.tsx
│   ├── Header.test.tsx                # Header tests
│   ├── Footer.tsx
└── package.json                       # Scripts for running servers
```

## Scripts Available

- `npm run dev` - Start Next.js frontend only
- `npm run server` - Start Bun.js API only
- `npm run dev:all` - Start both frontend and API simultaneously
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Troubleshooting

### API Not Responding

1. Ensure the API server is running: `npm run server`
2. Check if port 3001 is available
3. Verify the API URL in `app/page.tsx` and `app/blog/[slug]/page.tsx`

### Frontend Not Loading Posts

1. Ensure both servers are running: `npm run dev:all`
2. Check browser console for errors
3. Verify API is responding: `curl http://localhost:3001/posts`

### Port Conflicts

If port 3000 or 3001 are already in use, you can modify the ports in:

- `server.ts` (line 80) for API port
- Next.js uses environment variable `PORT` or defaults to 3000

## Migration Details

### Changes Made

**Before (Mock Data):**

- Posts were hardcoded in component files
- Data was duplicated across multiple files
- No separation between frontend and data layer

**After (API):**

- Posts served through dedicated API endpoint
- Single source of truth for blog data
- Clear separation between frontend and backend
- Easier to scale and maintain

### Benefits

1. **Single Source of Truth**: Posts data exists in one place (`server.ts`)
2. **Scalability**: Easy to add database integration later
3. **Separation of Concerns**: Frontend focuses on UI, backend handles data
4. **Testing**: API can be tested independently
5. **Flexibility**: Easy to add authentication, caching, etc.

## Future Enhancements

Potential improvements for the API:

1. Add database integration (PostgreSQL, MongoDB, etc.)
2. Implement authentication and authorization
3. Add POST/PUT/DELETE endpoints for CRUD operations
4. Add pagination for posts
5. Implement caching with Redis
6. Add rate limiting
7. Implement error handling and validation
8. Add API documentation (Swagger/OpenAPI)
