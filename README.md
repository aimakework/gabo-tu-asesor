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

### Opción A: Con Dockerfile (recomendado)

1. En Coolify: **Nueva aplicación** → **Dockerfile** → conectar repo `aimakework/gabo-tu-asesor`
2. Crear **base de datos PostgreSQL** en Coolify (o usar una existente)
3. Añadir variable de entorno: `DATABASE_URL` = `postgresql://user:pass@host:5432/dbname`
4. El Dockerfile ya incluye migraciones al iniciar
5. Desplegar

### Opción B: Sin Dockerfile (Buildpack)

1. En Coolify: **Nueva aplicación** → **Node.js** → conectar repo
2. **Build command:** `npm ci && npm run build`
3. **Start command:** `npx prisma migrate deploy && npm start`
4. **Port:** 3000
5. Añadir `DATABASE_URL` y desplegar
