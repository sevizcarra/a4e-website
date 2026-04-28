# Deploy Rápido - afor.cl

## Opción más rápida: Vercel CLI

```bash
# 1. Instalar Vercel (una sola vez)
npm i -g vercel

# 2. Ir a la carpeta
cd afor-website

# 3. Instalar dependencias
npm install

# 4. Deploy a producción
vercel --prod
```

Sigue las instrucciones en pantalla:
- Login con GitHub/Email
- Confirma el proyecto
- **¡Listo en 2 minutos!**

---

## Configurar afor.cl

### 1. En Vercel (después del deploy)

1. Ve a tu proyecto → **Settings** → **Domains**
2. Agrega: `afor.cl` y `www.afor.cl`
3. Vercel te mostrará los DNS a configurar

### 2. En NIC Chile

Agrega estos registros DNS:

```
Tipo: A
Host: @
Valor: 76.76.21.21

Tipo: A
Host: www
Valor: 76.76.21.21
```

### 3. Esperar

- Propagación DNS: 5 min - 48 horas
- Vercel verifica automáticamente
- SSL se activa solo

---

## Hacer cambios después

### Método 1: Con Git (recomendado)

```bash
# Sube a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/afor-website.git
git push -u origin main

# Conecta con Vercel (una vez)
# vercel.com → Import Project → Tu repo

# Después, cada cambio:
git add .
git commit -m "Actualización"
git push
# Deploy automático en 1-2 min
```

### Método 2: Con CLI

```bash
# Edita archivos
# Deploy
vercel --prod
# Listo en 1-2 min
```

---

## Verificar

1. **Local**: `npm run dev` → [localhost:3000](http://localhost:3000)
2. **Producción**: Vercel te da una URL tipo `afor-website.vercel.app`
3. **Dominio**: Cuando DNS propague → `https://afor.cl`

---

## Contactos útiles

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **NIC Chile**: [nic.cl](https://nic.cl)
- **Verificar DNS**: [whatsmydns.net](https://whatsmydns.net)
