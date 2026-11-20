const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Iniciando exportación de PDF con Playwright...');
  
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 }
  });

  const htmlPath = path.resolve(__dirname, 'index.html');
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  
  console.log('Cargando URL:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'load' });
  
  // Esperar a que las fuentes y recursos se asienten
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  const pdfPath = path.resolve(__dirname, 'Propuesta-Web-Pepo-CarAudio.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    },
    preferCSSPageSize: true
  });

  console.log('PDF generado exitosamente en:', pdfPath);
  await browser.close();
})();
