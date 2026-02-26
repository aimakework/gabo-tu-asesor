# Configuración de despliegue automático a Coolify

## 1. Crear la aplicación en Coolify

1. En Coolify: **Nueva aplicación** → **Dockerfile**
2. Conectar repo: `https://github.com/aimakework/gabo-tu-asesor`
3. Rama: `main`
4. Crear base de datos PostgreSQL y añadir variable `DATABASE_URL`
5. Guardar y hacer un despliegue manual inicial

## 2. Obtener el Webhook URL

1. En Coolify, abre la aplicación **Gabo Tu Asesor**
2. Ve a **Webhook** (o **Configuration** → **Webhook**)
3. Copia la URL del **Deploy webhook**

## 3. Añadir secretos en GitHub

1. Ve a https://github.com/aimakework/gabo-tu-asesor/settings/secrets/actions
2. **New repository secret** → Nombre: `COOLIFY_TOKEN` → Valor: tu token de Coolify
3. **New repository secret** → Nombre: `COOLIFY_WEBHOOK` → Valor: la URL del webhook

## 4. Listo

Cada vez que hagas `git push` a `main`, GitHub Actions disparará el despliegue en Coolify automáticamente.
