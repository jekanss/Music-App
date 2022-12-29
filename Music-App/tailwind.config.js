module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "verde-primario": "rgb(0,169,91)",
        "verde-secundario": "rgb(9,231,142)",   
        "verde-oscuro": "rgba(0,71,38,28)",   
        "negro": "rgb(20,20,20)",   
        "gris": "rgb(166,166,166)",
      },
      backgroundImage: theme => ({
        'nav-pattern': "url('/assets/img/Barra-menu-larga.png')",     
        'backLineas': "url('/assets/img/BackLineas.png')",     
        'backVirtualizacion': "url('/assets/img/backgroundVirtualizacion.png')",     
      }),
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        ancho: '.2em',
      },
      boxShadow:{        
        boxTituloNav: " 0px 50px 24px -13px #25FF1F",
        boxSectionTeAyudamos: " 0px 19px 17px -5px rgba(9,231,142,0.25)",        
      },
      animation:{
        'fadeIn': 'fadeIn 1s linear',   
      },
      keyframes:{        
        fadeIn:{
          //0%
          'from': {  opacity: 0 },
          //100%
          'to': {  opacity: 1 }
        }
      },
    },
  },
  variants: { 
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],    
    fontSize: ['responsive', 'hover', 'group-hover'],    
    transform: ['responsive', 'hover', 'group-hover'],    
    scale: ['responsive', 'hover', 'group-hover'] ,   
    margin: ['responsive', 'hover', 'group-hover'] ,   
    padding: ['responsive', 'hover', 'group-hover'],   
    visibility: ['responsive', 'hover', 'group-hover'],
    display:['responsive', 'hover', 'group-hover'],
    borderWidth: ['hover', 'focus', 'group-hover'],
    aspectRatio: ['responsive', 'hover', 'group-hover'],
    active: ['responsive', 'hover', 'group-hover']
  },
  plugins: [],
}