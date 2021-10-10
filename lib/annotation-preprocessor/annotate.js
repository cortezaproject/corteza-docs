const box = require('./anni-box')

function wrapSVG (cfg, img, annotations) {
   const wb = {
      x: cfg.view.x || 0,
      y: cfg.view.y || 0,
      w: cfg.view.w || cfg.image.w,
      h: cfg.view.h || cfg.image.h,
   }


   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
   <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="${wb.w}px"
      height="${wb.h}px"
      viewBox="${wb.x} ${wb.y} ${wb.w} ${wb.h}"
      version="1.1">

     <g>
       <image
          y="0"
          x="0"
          xlink:href="data:image/png;base64,${img}"
          preserveAspectRatio="none"
          height="${cfg.image.h}px"
          width="${cfg.image.w}px" />
       ${annotations}
     </g>
   </svg>`
}

module.exports.annotate = (config, baseBuff) => {
   const baseRaw = baseBuff.toString('base64')

   const aas = []
   for (const an of config.annotations) {
      var aux
      switch (an.kind.split('-')[0]) {
         case 'box':
            aas.push(box.make(an))
            break

         default:
            throw new Error('unknown annotation kind: ' + an.kind)
      }
   }

   return Buffer.from(wrapSVG(config, baseRaw, aas.join('\n')), 'utf-8')
}
