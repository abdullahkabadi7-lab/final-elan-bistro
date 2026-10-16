import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = 'src/assets';

async function optimize() {
  console.log('Optimizing images with Sharp...');

  // 1. Hero image (LCP): generate 640w, 1024w, 1920w in modern WebP and optimized JPEG
  const heroPath = path.join(srcDir, 'elan-bistro-dining-room-hero.jpg');
  const heroMeta = await sharp(heroPath).metadata();
  console.log('Hero original dimensions:', heroMeta.width, 'x', heroMeta.height);

  const heroSizes = [640, 1024, 1920];
  for (const w of heroSizes) {
    const h = Math.round((w * heroMeta.height) / heroMeta.width);
    
    // WebP
    const webpOut = path.join(srcDir, `elan-bistro-dining-room-hero-${w}.webp`);
    await sharp(heroPath)
      .resize(w, h, { fit: 'cover' })
      .webp({ quality: 82 })
      .toFile(webpOut);
    const webpStat = fs.statSync(webpOut);
    console.log(`Hero WebP ${w}w: ${(webpStat.size / 1024).toFixed(1)} KB`);

    // Also copy to public/ for static preloading
    fs.copyFileSync(webpOut, path.join('public', `elan-bistro-dining-room-hero-${w}.webp`));

    // JPEG fallback
    const jpgOut = path.join(srcDir, `elan-bistro-dining-room-hero-${w}.jpg`);
    await sharp(heroPath)
      .resize(w, h, { fit: 'cover' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(jpgOut);
    const jpgStat = fs.statSync(jpgOut);
    console.log(`Hero JPEG ${w}w: ${(jpgStat.size / 1024).toFixed(1)} KB`);
  }

  // Also full-size default WebP for hero
  await sharp(heroPath)
    .webp({ quality: 82 })
    .toFile(path.join(srcDir, 'elan-bistro-dining-room-hero.webp'));
  fs.copyFileSync(path.join(srcDir, 'elan-bistro-dining-room-hero.webp'), path.join('public', 'elan-bistro-dining-room-hero.webp'));

  // 2. Other large images: generate modern WebP versions
  const otherImages = [
    { file: 'elan-bistro-dining-room.jpg', sizes: [640, 1024] },
    { file: 'chef-julien-marchetti.jpg', sizes: [400, 800] },
    { file: 'seared-hokkaido-scallops.jpg', sizes: [400, 800] },
    { file: 'aged-wagyu-tenderloin.jpg', sizes: [400, 800] },
    { file: 'valrhona-fondant.jpg', sizes: [400, 800] },
    { file: 'oysters-de-cancale.jpg', sizes: [400, 800] },
    { file: 'black-truffle-tagliolini.jpg', sizes: [400, 800] },
    { file: 'roast-challans-duck.jpg', sizes: [400, 800] },
    { file: 'signature-smoked-cocktail.jpg', sizes: [400, 800] },
    { file: 'elan-bistro-wine-cellar.jpg', sizes: [400, 800] },
    { file: 'chef-plating-dish.jpg', sizes: [400, 800] },
    { file: 'candlelit-table-setting.jpg', sizes: [400, 800] },
  ];

  for (const item of otherImages) {
    const inPath = path.join(srcDir, item.file);
    const base = item.file.replace(/\.jpg$/, '');
    const meta = await sharp(inPath).metadata();

    for (const w of item.sizes) {
      if (w <= meta.width) {
        const h = Math.round((w * meta.height) / meta.width);
        const outWebp = path.join(srcDir, `${base}-${w}.webp`);
        await sharp(inPath)
          .resize(w, h, { fit: 'cover' })
          .webp({ quality: 82 })
          .toFile(outWebp);
        const s = fs.statSync(outWebp);
        console.log(`${base}-${w}.webp: ${(s.size / 1024).toFixed(1)} KB`);
      }
    }

    // Default WebP full size
    const defaultWebp = path.join(srcDir, `${base}.webp`);
    await sharp(inPath)
      .webp({ quality: 82 })
      .toFile(defaultWebp);
    const s = fs.statSync(defaultWebp);
    console.log(`${base}.webp (full): ${(s.size / 1024).toFixed(1)} KB vs original ${(fs.statSync(inPath).size / 1024).toFixed(1)} KB`);
  }

  console.log('Image optimization complete!');
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
