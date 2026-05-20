/**
 * Génère les favicons PNG et l'og-image à partir des assets sources.
 * Usage : `node scripts/generate-assets.mjs`
 *
 * Sources :
 *   - public/favicon.svg          → favicons PNG (16, 32, apple-touch-icon 180)
 *   - src/assets/face.jpg         → og-image.jpg (1200x630)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const logoSrc = resolve(root, 'public/favicon.svg');
const faceSrc = resolve(root, 'src/assets/face.jpg');

async function makeFavicon(size, outName) {
  const out = resolve(root, 'public', outName);
  await sharp(logoSrc, { density: 384 })
    .resize({ width: size, height: size, fit: 'contain' })
    .png({ quality: 92 })
    .toFile(out);

  console.log(`✓ ${outName} (${size}x${size})`);
}

async function makeAppleTouchIcon() {
  const out = resolve(root, 'public/apple-touch-icon.png');
  await sharp(logoSrc, { density: 384 })
    .resize({ width: 180, height: 180, fit: 'contain' })
    .png({ quality: 92 })
    .toFile(out);

  console.log('✓ apple-touch-icon.png (180x180)');
}

async function makeOgImage() {
  const out = resolve(root, 'public/og-image.jpg');
  await sharp(faceSrc)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.92, saturation: 1.05 })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);

  console.log('✓ og-image.jpg (1200x630)');
}

async function main() {
  await makeFavicon(16, 'favicon-16.png');
  await makeFavicon(32, 'favicon-32.png');
  await makeAppleTouchIcon();
  await makeOgImage();
  console.log('\nAll assets generated.');
}

main().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
