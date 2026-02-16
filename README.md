# A4E - Architecture for Engineering

Landing page oficial de A4E (Architecture for Engineering).

## 🚀 Deploy Rápido a Vercel

### Opción 1: Deploy con Git (Recomendado)

#### 1. Subir a GitHub

```bash
cd a4e-website
git init
git add .
git commit -m "Initial commit - A4E landing page"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/a4e-website.git
git push -u origin main
```

#### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) y registra/inicia sesión
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Click en "Deploy"

**¡Listo!** Tu sitio estará en línea en ~2 minutos.

### Opción 2: Deploy directo con Vercel CLI

```bash
# Instalar Vercel CLI (una sola vez)
npm i -g vercel

# Desde la carpeta del proyecto
cd a4e-website
vercel --prod
```

---

## 🌐 Configurar Dominio a4e.cl

### Paso 1: Agregar dominio en Vercel

1. En tu proyecto de Vercel, ve a **Settings** → **Domains**
2. Agrega estos dominios:
   - `a4e.cl`
   - `www.a4e.cl`
3. Vercel te mostrará los registros DNS necesarios

### Paso 2: Configurar DNS en NIC Chile

Vercel te dará dos opciones. Elige la que prefieras:

#### Opción A: Registros A (Recomendado)

En el panel de NIC Chile, agrega estos registros DNS:

```
Tipo: A
Host: @
Valor: 76.76.21.21

Tipo: A
Host: www
Valor: 76.76.21.21
```

#### Opción B: CNAME

```
Tipo: CNAME
Host: www
Valor: cname.vercel-dns.com

Tipo: A (para el dominio raíz)
Host: @
Valor: 76.76.21.21
```

### Paso 3: Verificar

- La propagación DNS puede tomar entre 5 minutos y 48 horas
- Vercel verificará automáticamente cuando detecte los cambios
- Vercel configurará SSL/HTTPS automáticamente (certificado gratuito)

---

## ⚡ Hacer Cambios Rápidos

### Si usaste Git + Vercel (Opción 1):

```bash
# 1. Edita los archivos que necesites
# 2. Commit y push
git add .
git commit -m "Actualización: descripción del cambio"
git push

# ¡Listo! Vercel desplegará automáticamente en 1-2 minutos
```

### Si usaste Vercel CLI (Opción 2):

```bash
# Edita archivos
# Deploy
vercel --prod
```

**Resultado:** Cambios en producción en menos de 2 minutos.

---

## 💻 Desarrollo Local

### Primera vez (instalación):

```bash
cd a4e-website
npm install
```

### Ejecutar en desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construir para producción (opcional):

```bash
npm run build
npm run start
```

---

## 📁 Estructura del Proyecto

```
a4e-website/
├── app/
│   ├── globals.css      # Estilos globales + Tailwind
│   ├── layout.js        # Layout principal (metadata, SEO)
│   └── page.js          # Landing page completa
├── public/
│   └── logo-a4e.png     # Logo A4E
├── next.config.js       # Configuración Next.js
├── tailwind.config.js   # Configuración Tailwind CSS
└── package.json         # Dependencias
```

---

## 🔧 Configuración Importante

### SEO y Metadata

Edita en `app/layout.js`:

```javascript
export const metadata = {
  title: 'A4E - Architecture for Engineering',
  description: 'Tu descripción aquí',
  keywords: 'arquitectura, ingeniería, ...',
}
```

### Animaciones

Las animaciones de fade-in están configuradas en `app/page.js`:
- Duración: 2500ms
- Delays escalonados: 0ms, 600ms, 1200ms, 1800ms, 2400ms

---

## 🎨 Editar Contenido

Todo el contenido está en `app/page.js` en el objeto `translations`:

```javascript
const translations = {
  es: {
    tagline: "ARQUITECTURA INDUSTRIAL ESPECIALIZADA",
    heroTitle1: "Diseñamos el futuro",
    heroTitle2: "de la ingeniería",
    // ... más contenido
  }
}
```

---

## 📊 Monitoreo

Vercel proporciona:
- ✅ Analytics automático
- ✅ Logs en tiempo real
- ✅ Preview deployments (cada PR en GitHub)
- ✅ Rollback instantáneo a versiones anteriores

---

## ⚠️ Notas Importantes

1. **SSL/HTTPS**: Vercel lo configura automáticamente (gratuito)
2. **CDN Global**: Tu sitio se sirve desde la ubicación más cercana al visitante
3. **Zero Config**: Next.js + Vercel funcionan sin configuración adicional
4. **Cambios instantáneos**: Con Git, cada push = deploy automático

---

## 🆘 Soporte

Si tienes problemas:

1. **DNS no propaga**: Espera hasta 48h, verifica en [whatsmydns.net](https://www.whatsmydns.net)
2. **Build falla**: Revisa logs en Vercel dashboard
3. **Dominio no verifica**: Asegúrate de que los registros DNS sean exactos

---

## 📝 Changelog

- **v1.0.0** - Landing page inicial con animaciones optimizadas
  - Logo A4E embebido
  - Animaciones de fade-in configurables
  - Responsive design completo
  - Listo para a4e.cl
