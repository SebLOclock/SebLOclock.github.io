const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, '../public')
const targetDir = path.join(__dirname, '../dist')

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Copier les fichiers du dossier public vers dist
fs.readdirSync(sourceDir).forEach(file => {
  const sourcePath = path.join(sourceDir, file)
  const targetPath = path.join(targetDir, file)
  
  if (fs.statSync(sourcePath).isFile()) {
    fs.copyFileSync(sourcePath, targetPath)
  }
})

console.log('Assets statiques copiés avec succès !') 