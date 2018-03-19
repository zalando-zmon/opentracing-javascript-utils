var imp = 'browser'
var opentracing = require('opentracing');
var customImp = require('lightstep-tracer/'+imp+'.js');

(function component() {
    var tracer = () => {}
    var config = {
        xhr_instrumentation: true,
        access_token: '123421',
        component_name: 'something',
        collector_host: 'localhost',
        collector_port: 443,
        collector_encryption: '',
        verbosity: 1,
    }
    opentracing.globalTracer(new customImp.Tracer(config))
    tracer = opentracing.globalTracer()
    console.log('OpenTracing initd', tracer)
    return tracer
})()
