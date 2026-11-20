const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  fs.mkdirSync('preview', { recursive: true });

  // 1. CAPTURAS PC
  const pagePC = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const pcUrl = 'file:///' + path.resolve(__dirname, 'index_pc.html').replace(/\\/g, '/');
  await pagePC.goto(pcUrl, { waitUntil: 'load' });
  await pagePC.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1000));

  const pcSlides = await pagePC.locator('.pc-slide').all();
  for (let i = 0; i < pcSlides.length; i++) {
    await pcSlides[i].screenshot({ path: `preview/pc_slide_${i + 1}.png` });
  }

  // 2. CAPTURAS MÓVIL
  const pageMovil = await browser.newPage({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 2
  });
  const movilUrl = 'file:///' + path.resolve(__dirname, 'index_movil.html').replace(/\\/g, '/');
  await pageMovil.goto(movilUrl, { waitUntil: 'load' });
  await pageMovil.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1000));

  // Screenshot de la primera pantalla visible móvil (Hero)
  await pageMovil.screenshot({ path: 'preview/movil_hero.png' });

  // Scroll a servicios y capturar
  await pageMovil.locator('#servicios').scrollIntoViewIfNeeded();
  await pageMovil.screenshot({ path: 'preview/movil_servicios.png' });

  // Scroll a trabajos y capturar
  await pageMovil.locator('#trabajos').scrollIntoViewIfNeeded();
  await pageMovil.screenshot({ path: 'preview/movil_trabajos.png' });

  await browser.close();
  console.log('Capturas de preview generadas');
})();
