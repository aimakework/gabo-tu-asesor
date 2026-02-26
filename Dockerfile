# Build and run (Debian base avoids Prisma/OpenSSL issues on Alpine)
FROM node:20-bookworm-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx prisma generate
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Migraciones al iniciar, luego el servidor
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
