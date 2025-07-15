import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = "./src/assets/images";
const OUTPUT_DIR = "./src/assets/optimized";

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath, ext);
    const outputFile = path.join(OUTPUT_DIR, `${fileName}.webp`);

    sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputFile)
        .then(() => {
            console.log(`✅ Optimisé: ${filePath} -> ${outputFile}`);
        })
        .catch(err => console.error(`❌ Erreur sur ${filePath}:`, err));
}

function scanDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.match(/\.(png|jpe?g|webp)$/i)) {
            processImage(fullPath);
        }
    });
}

// Execution
ensureDir(OUTPUT_DIR);
scanDir(INPUT_DIR);
