import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const possibleSources = [
  'C:/Users/Win11/.gemini/antigravity/brain/b7166e09-9954-4e32-9235-10ee1b85428e/.user_uploaded',
  'C:/Users/Win11/.gemini/antigravity/brain/910965cd-2784-4abe-b097-25238441b475/.user_uploaded',
]

const targetDirs = [
  path.resolve(__dirname, 'public/images'),
  path.resolve(__dirname, 'images'),
]

const mappings = [
  { dest: 'gleice-farias.png', srcs: ['media_1792079188612_f6c46fed.png', 'gleice-farias.png'] },
  { dest: 'resultado-facial-1.png', srcs: ['media_1792079217939_a5ddcf45.png', 'resultado-facial-1.png'] },
  { dest: 'resultado-limpeza.png', srcs: ['media_1792079239393_977ec28e.png', 'resultado-limpeza.png'] },
]

for (const targetDir of targetDirs) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }
}

let copiedCount = 0
for (const item of mappings) {
  let found = false
  for (const srcDir of possibleSources) {
    for (const srcName of item.srcs) {
      const srcPath = path.join(srcDir, srcName)
      if (fs.existsSync(srcPath)) {
        for (const targetDir of targetDirs) {
          const destPath = path.join(targetDir, item.dest)
          fs.copyFileSync(srcPath, destPath)
          console.log(`[copy-images] Copiado com sucesso: ${srcName} -> ${destPath}`)
        }
        found = true
        copiedCount++
        break
      }
    }
    if (found) break
  }
  if (!found) {
    console.warn(`[copy-images] Aviso: Não foi possível localizar imagem para ${item.dest}`)
  }
}

console.log(`[copy-images] Concluído. ${copiedCount} imagem(ns) copiada(s).`)
