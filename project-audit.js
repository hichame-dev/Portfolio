import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const STYLES_DIR = './src/styles';
let definedClasses = new Set();
let usedClasses = new Set();
let images = [];
let mediaQueries = 0;
let titles = 0;
let metas = 0;

// 1. Extraire les classes SCSS
function extractClassesFromScss(content) {
    const regex = /\.([\w-]+)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        definedClasses.add(match[1]);
    }
}

// 2. Extraire classes utilisées dans JSX/HTML
function extractUsedClasses(content) {
    const regex = /class(Name)?=["'`]([^"'`]+)["'`]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        match[2].split(/\s+/).forEach(cls => usedClasses.add(cls));
    }
}

// 3. Parcourir le projet pour chercher les usages
function scanProject(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanProject(fullPath);
        } else {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (file.endsWith('.scss')) {
                extractClassesFromScss(content);
                mediaQueries += (content.match(/@media/g) || []).length;
            }
            if (file.match(/\.(html|jsx|tsx|js)$/)) {
                extractUsedClasses(content);
                titles += (content.match(/<title>|<Title>/gi) || []).length;
                metas += (content.match(/<meta/gi) || []).length;
            }
            if (file.match(/\.(png|jpe?g|webp|svg)$/i)) {
                const size = fs.statSync(fullPath).size / 1024;
                images.push({ file, size: size.toFixed(2), path: fullPath });
            }
        }
    });
}

// 4. Exécution
scanProject(SRC_DIR);
scanProject(STYLES_DIR);

// 5. Générer un rapport markdown
const unusedClasses = [...definedClasses].filter(cls => !usedClasses.has(cls));
let report = `# 🚀 Audit du projet Portfolio\n
## 🎨 Classes SCSS inutilisées
${unusedClasses.length ? unusedClasses.map(c => `- .${c}`).join('\n') : '✅ Aucune classe inutilisée trouvée.'}

## 🖼️ Images à optimiser
${images.length ? images.map(img => `- ${img.file} (${img.size} Ko) - ${img.path}`).join('\n') : '✅ Aucune image trouvée.'}

## 📱 Responsive (media queries)
- Nombre total de \`@media\` : **${mediaQueries}**

## 🌐 SEO
- Balises <title> trouvées : **${titles}**
- Balises <meta> trouvées : **${metas}**

---

✔ Audit complet. Pense à utiliser des formats WebP/AVIF, à ajouter des breakpoints si besoin, et à nettoyer les classes SCSS.
`;

fs.writeFileSync('audit-report.md', report, 'utf8');
console.log("✅ Rapport généré : audit-report.md");
