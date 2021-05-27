var gl;
var canvas = document.getElementById("obj");

canvas.width = 673;
canvas.height = 472;

function start() {
    gl = initWebGL(canvas);
    if (!gl) { return;}
	
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
function initWebGL(canvas) {
    gl = null;
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {console.log("Unable to initialize WebGL. Your browser may not support it.");}
    return gl;
}
