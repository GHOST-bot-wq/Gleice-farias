/**
 * GS Estética Avançada — Script de cópia das imagens
 * Execute com: node copy-images.mjs
 */

import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SOURCE_DIR =
  'C:/Users/Win11/.gemini/antigravity/brain/d68eae7a-3e61-4ca0-b4fd-c15fc9c70900/.user_uploaded'

const DEST_DIR = join(__dirname, 'public', 'images')

const FILES = [
  { from: 'media_1791982783604_90426954.png', to: 'gabrielly-sampaio.png' },
  { from: 'media_1791982783660_987dcf2e.png', to: 'gabrielly-laser.png' },
  { from: 'media_1791982783600_f3e3327c.png', to: 'resultado-corporal-1.png' },
  { from: 'media_1791982783650_663dc558.png', to: 'resultado-antes-depois.png' },
]

console.log('\n📁 GS Estética Avançada — Copiando imagens...\n')

if (!existsSync(DEST_DIR)) {
  mkdirSync(DEST_DIR, { recursive: true })
}

let success = 0
for (const { from, to } of FILES) {
  const src = join(SOURCE_DIR, from)
  const dst = join(DEST_DIR, to)
  try {
    copyFileSync(src, dst)
    console.log(`  ✅ ${to}`)
    success++
  } catch {
    console.log(`  ❌ Não encontrado: ${from}`)
  }
}

console.log(`\n${success}/${FILES.length} imagens copiadas com sucesso.`)
if (success === FILES.length) {
  console.log('\n✨ Tudo pronto! Execute: npm run dev\n')
}
