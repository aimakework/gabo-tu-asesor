# Gabo Tu Asesor - Diagnóstico Financiero

Aplicación web con formulario dinámico de diagnóstico financiero para profesionistas con ingresos desde $55,000 MXN.

## Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Base de datos**: PostgreSQL + Prisma

## Desarrollo local

```bash
npm install
cp .env.example .env
# Editar .env con tu DATABASE_URL de PostgreSQL
npx prisma generate
npm run dev
```

## Build y producción

```bash
npm run build
npm start
```

## Variables de entorno

- `DATABASE_URL`: URL de conexión a PostgreSQL (ej: `postgresql://user:pass@host:5432/dbname`)

## Despliegue en Coolify

1. Crear repositorio Git y hacer push
2. En Coolify: Nueva aplicación → conectar repositorio
3. Build command: `npm ci && npm run build`
4. Start command: `npx prisma migrate deploy && npm start` (o ejecutar migraciones en un script separado)
5. Añadir variable `DATABASE_URL` (PostgreSQL)
6. Crear base de datos PostgreSQL en Coolify si no existe
