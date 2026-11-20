const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('--- GENERANDO VERSIONES PC Y MÓVIL ---');

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. GENERACIÓN VERSIÓN PC (1440px x 900px Widescreen)
  console.log('1. Generando versión PC (1440x900)...');
  const pagePC = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });

  const pcHtmlPath = path.resolve(__dirname, 'index_pc.html');
  const pcUrl = 'file:///' + pcHtmlPath.replace(/\\/g, '/');
  await pagePC.goto(pcUrl, { waitUntil: 'load' });
  await pagePC.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1200));

  const pcPdfPath = path.resolve(__dirname, 'Propuesta-Web-Pepo-CarAudio-PC.pdf');
  await pagePC.pdf({
    path: pcPdfPath,
    width: '1440px',
    height: '900px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('-> Guardado:', pcPdfPath);

  // 2. GENERACIÓN VERSIÓN MÓVIL (414px de ancho)
  console.log('2. Generando versión Móvil...');
  const pageMovil = await browser.newPage({
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 2
  });

  const movilHtmlPath = path.resolve(__dirname, 'index_movil.html');
  const movilUrl = 'file:///' + movilHtmlPath.replace(/\\/g, '/');
  await pageMovil.goto(movilUrl, { waitUntil: 'load' });
  await pageMovil.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1200));

  // Medir altura total para formato continuo móvil óptimo para WhatsApp
  const totalHeight = await pageMovil.evaluate(() => {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  });

  console.log('Altura total del contenido móvil:', totalHeight, 'px');

  const movilPdfPath = path.resolve(__dirname, 'Propuesta-Web-Pepo-CarAudio-Movil.pdf');
  await pageMovil.pdf({
    path: movilPdfPath,
    width: '414px',
    height: `${totalHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('-> Guardado:', movilPdfPath);

  await browser.close();
  console.log('--- EXPORTACIÓN COMPLETADA CON ÉXITO ---');
})();
