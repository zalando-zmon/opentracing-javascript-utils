export const libraries = {
  opentracing: {
  	class: 'opentracing',

  	src: [],

  	getCustomTracer: () => {}
  },
  lightstep: {
    
    class: 'lightstep',
    
    src: [
    	'https://unpkg.com/lightstep-tracer@0.20.13/dist/lightstep-tracer.min.js',
		  'https://unpkg.com/lightstep-overlay@1.1.4/dist/lightstep-overlay.min.js'
	   ],

  	getCustomTracer: (config) => {
      	let customTracer = new lightstep.Tracer(config.config);

      	if (config.overlay) {
      		LightStepOverlay(customTracer);
      		console.log('Lightstep Overlay enabled')
      	}

      	return customTracer
      }
  }
}
