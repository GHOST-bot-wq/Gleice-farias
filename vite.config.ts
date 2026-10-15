import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Suporte completo a ES Modules para diretório local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Diretórios onde as imagens do usuário podem estar armazenadas
const brainDirs = [
  'C:/Users/Win11/.gemini/antigravity/brain/b7166e09-9954-4e32-9235-10ee1b85428e/.user_uploaded',
  'C:/Users/Win11/.gemini/antigravity/brain/910965cd-2784-4abe-b097-25238441b475/.user_uploaded',
]

const targetDirs = [
  path.resolve(__dirname, 'public/images'),
  path.resolve(__dirname, 'images'),
]

const imageMappings = [
  { dest: 'gleice-farias.png', srcs: ['media_1792079188612_f6c46fed.png', 'gleice-farias.png'] },
  { dest: 'resultado-facial-1.png', srcs: ['media_1792079217939_a5ddcf45.png', 'resultado-facial-1.png'] },
  { dest: 'resultado-limpeza.png', srcs: ['media_1792079239393_977ec28e.png', 'resultado-limpeza.png'] },
]

function ensureImagesCopied() {
  for (const targetDir of targetDirs) {
    try {
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
      }
    } catch (err) {
      console.warn('[Vite Setup] Erro ao criar diretório:', targetDir, err)
    }
  }

  for (const item of imageMappings) {
    let found = false
    for (const dir of brainDirs) {
      for (const srcName of item.srcs) {
        const srcPath = path.join(dir, srcName)
        if (fs.existsSync(srcPath)) {
          for (const targetDir of targetDirs) {
            try {
              const destPath = path.join(targetDir, item.dest)
              fs.copyFileSync(srcPath, destPath)
              console.log(`[Vite Setup] Imagem copiada com sucesso: ${item.dest} -> ${destPath}`)
            } catch (err) {
              console.warn('[Vite Setup] Erro ao copiar imagem para:', targetDir, err)
            }
          }
          found = true
          break
        }
      }
      if (found) break
    }
  }
}

// Executa cópia no momento do carregamento da configuração
ensureImagesCopied()

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-user-uploaded-images',
      buildStart() {
        ensureImagesCopied()
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const mapping: Record<string, string> = {
            '/images/gleice-farias.png': 'gleice-farias.png',
            '/images/resultado-facial-1.png': 'resultado-facial-1.png',
            '/images/resultado-limpeza.png': 'resultado-limpeza.png',
          }
          const cleanUrl = req.url.split('?')[0]
          const destName = mapping[cleanUrl]
          if (destName) {
            // 1. Checa em public/images
            const publicPath = path.resolve(__dirname, 'public/images', destName)
            if (fs.existsSync(publicPath)) {
              res.setHeader('Content-Type', 'image/png')
              res.setHeader('Cache-Control', 'public, max-age=31536000')
              return fs.createReadStream(publicPath).pipe(res)
            }
            // 2. Checa em images
            const rootImagesPath = path.resolve(__dirname, 'images', destName)
            if (fs.existsSync(rootImagesPath)) {
              res.setHeader('Content-Type', 'image/png')
              res.setHeader('Cache-Control', 'public, max-age=31536000')
              return fs.createReadStream(rootImagesPath).pipe(res)
            }
            // 3. Fallback direto no brain directory
            for (const item of imageMappings) {
              if (item.dest === destName) {
                for (const dir of brainDirs) {
                  for (const srcName of item.srcs) {
                    const srcPath = path.join(dir, srcName)
                    if (fs.existsSync(srcPath)) {
                      res.setHeader('Content-Type', 'image/png')
                      res.setHeader('Cache-Control', 'public, max-age=31536000')
                      return fs.createReadStream(srcPath).pipe(res)
                    }
                  }
                }
              }
            }
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const mapping: Record<string, string> = {
            '/images/gleice-farias.png': 'gleice-farias.png',
            '/images/resultado-facial-1.png': 'resultado-facial-1.png',
            '/images/resultado-limpeza.png': 'resultado-limpeza.png',
          }
          const cleanUrl = req.url.split('?')[0]
          const destName = mapping[cleanUrl]
          if (destName) {
            const publicPath = path.resolve(__dirname, 'public/images', destName)
            if (fs.existsSync(publicPath)) {
              res.setHeader('Content-Type', 'image/png')
              res.setHeader('Cache-Control', 'public, max-age=31536000')
              return fs.createReadStream(publicPath).pipe(res)
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
