const box = require('./anni-box')
const { image } = require('./styleguide')

function wrapSVG (cfg, img, annotations) {
   const wb = {
      x: cfg.view.x || 0,
      y: cfg.view.y || 0,
      w: cfg.view.w || cfg.image.w,
      h: cfg.view.h || cfg.image.h,
   }

   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
   <svg
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
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

function wrapFocusedSVG (cfg, img, annotations) {
   const wb = {
      x: cfg.view.x || 0,
      y: cfg.view.y || 0,
      w: cfg.view.w || cfg.image.w,
      h: cfg.view.h || cfg.image.h,
   }

   let padding = cfg.focus.padding || 0
   if (!parseInt(padding)) {
      padding = image.padding[cfg.focus.padding || 'md'] || 0
   }

   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
   <svg
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="${wb.w}px"
      height="${wb.h}px"
      viewBox="${wb.x} ${wb.y} ${wb.w} ${wb.h}"
      version="1.1">
   <defs>
      <filter
         style="color-interpolation-filters:sRGB"
         id="fl-blur"
         x="0"
         width="1"
         y="0"
         height="1">
         <feGaussianBlur stdDeviation="6" />
         <feComponentTransfer>
            <feFuncA type="table" tableValues="1 1"/>
         </feComponentTransfer>
      </filter>

      <!-- This thing does the hole in the rect -->
      <clipPath
         id="fl-clip">
         <rect
            style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            width="${cfg.focus.w + padding*2}px"
            height="${cfg.focus.h + padding*2}px"
            x="${cfg.focus.x-padding}px"
            y="${cfg.focus.y-padding}px" />
      </clipPath>
   </defs>

     <g>
       <image
          y="0"
          x="0"
          style="filter:url(#fl-blur)"
          xlink:href="data:image/png;base64,${img}"
          preserveAspectRatio="none"
          height="${cfg.image.h}px"
          width="${cfg.image.w}px" />

       <image
          y="0"
          x="0"
          clip-path="url(#fl-clip)"
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
      switch (an.kind.split('-')[0]) {
         case 'box':
            aas.push(box.make(an))
            break

         default:
            throw new Error('unknown annotation kind: ' + an.kind)
      }
   }

   if (config.focus) {
      return Buffer.from(wrapFocusedSVG(config, baseRaw, aas.join('\n')), 'utf-8')
   }

   return Buffer.from(wrapSVG(config, baseRaw, aas.join('\n')), 'utf-8')
}
