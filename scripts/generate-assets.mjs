/**
 * Génère les favicons PNG et l'og-image à partir des assets sources.
 * Usage : `node scripts/generate-assets.mjs`
 *
 * Sources :
 *   - public/logo-stayn.png       → favicons PNG (16, 32, apple-touch-icon 180)
 *   - src/assets/face.jpg         → og-image.jpg (1200x630)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const logoSrc = resolve(root, 'public/logo-stayn.png');
const faceSrc = resolve(root, 'src/assets/face.jpg');

async function makeFavicon(size, outName, padding = 0.1) {
  const out = resolve(root, 'public', outName);
  const inner = Math.round(size * (1 - padding * 2));
  const offset = Math.round(size * padding);

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 251, g: 248, b: 244, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(logoSrc)
          .resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer(),
        top: offset,
        left: offset,
      },
    ])
    .png({ quality: 92 })
    .toFile(out);

  console.log(`✓ ${outName} (${size}x${size})`);
}

async function makeAppleTouchIcon() {
  const out = resolve(root, 'public/apple-touch-icon.png');
  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 251, g: 248, b: 244, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(logoSrc)
          .resize({ width: 140, height: 140, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer(),
        top: 20,
        left: 20,
      },
    ])
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

// PNG dédié pour le marker Google Static Maps — logo cropé, fond transparent.
// 128×128 + 72 DPI + sans iCC profile + RGBA pur : Google Static Maps rejette
// silencieusement les icons "lourds" (chunks iCCP/eXIf/pHYs) MAIS pas les icons
// plus grands tant qu'ils restent en RGBA propre. 128×128 donne un rendu net
// après upscale CSS (carte 1280px Google → ~1900px écran, ratio ~1.5).
// Cf. tests 2026-04-30.
async function makeLogoMarker() {
  const out = resolve(root, 'public/logo-marker.png');
  await sharp(logoSrc)
    .resize({ width: 128, height: 128, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .withMetadata({ density: 72 })
    .png({ compressionLevel: 9, palette: false })
    .toFile(out);

  console.log('✓ logo-marker.png (128x128, transparent, 72 DPI)');
}

async function main() {
  await makeFavicon(16, 'favicon-16.png');
  await makeFavicon(32, 'favicon-32.png');
  await makeAppleTouchIcon();
  await makeOgImage();
  await makeLogoMarker();
  console.log('\nAll assets generated.');
}

main().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
