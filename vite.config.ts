import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Caminho das imagens enviadas
const brainUploadDir = 'C:/Users/Win11/.gemini/antigravity/brain/b7166e09-9954-4e32-9235-10ee1b85428e/.user_uploaded'
const targetImgDir = path.resolve(__dirname, 'public/images')

function copyImageSafe(srcName: string, destName: string) {
  try {
    const src = path.join(brainUploadDir, srcName)
    const dest = path.join(targetImgDir, destName)
    if (fs.existsSync(src)) {
      if (!fs.existsSync(targetImgDir)) {
        fs.mkdirSync(targetImgDir, { recursive: true })
      }
      fs.copyFileSync(src, dest)
      console.log(`[Vite Setup] Copiada imagem: ${destName}`)
    }
  } catch (err) {
    console.warn('[Vite Setup] Aviso ao copiar imagem:', srcName, err)
  }
}

// Executa cópia no carregamento da configuração
copyImageSafe('media_1792079188612_f6c46fed.png', 'gleice-farias.png')
copyImageSafe('media_1792079217939_a5ddcf45.png', 'resultado-facial-1.png')
copyImageSafe('media_1792079239393_977ec28e.png', 'resultado-limpeza.png')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-user-uploaded-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const mapping: Record<string, string> = {
            '/images/gleice-farias.png': 'media_1792079188612_f6c46fed.png',
            '/images/resultado-facial-1.png': 'media_1792079217939_a5ddcf45.png',
            '/images/resultado-limpeza.png': 'media_1792079239393_977ec28e.png',
          }
          const cleanUrl = req.url.split('?')[0]
          const file = mapping[cleanUrl]
          if (file) {
            const filePath = path.join(brainUploadDir, file)
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'image/png')
              res.setHeader('Cache-Control', 'public, max-age=31536000')
              return fs.createReadStream(filePath).pipe(res)
            }
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 3000,
    open: true,
  },
})
