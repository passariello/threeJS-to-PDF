var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( { 
										canvas: obj,
										antialias: true ,
										preserveDrawingBuffer:true,
										alpha: true
										});
										
renderer.setSize(canvas.width, canvas.height);

var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material1 = new THREE.MeshBasicMaterial();
var material2 = new THREE.MeshBasicMaterial();

var sphere = [
	new THREE.Mesh(geometry, material1), 
	new THREE.Mesh(geometry, material1), 
	new THREE.Mesh(geometry, material2)
];

sphere[0].position.set(1, 1, 1);
sphere[1].position.set(-1, -1, -1);

scene.add(sphere[0]);
scene.add(sphere[1]);
scene.add(sphere[2]);
camera.position.z = 10;

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

var hex = "0x" + "000000".replace(/0/g, function() {
	return (~~(Math.random() * 16)).toString(16);
});
sphere[0].material.color.setHex(hex);

hex = "0x" + "000000".replace(/0/g, function() {
  return (~~(Math.random() * 16)).toString(16);
});
sphere[2].material.color.setHex(hex);

/*
var render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};


*/

function animate() {
	requestAnimationFrame( animate );
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
	renderer.render( scene, camera );
}

animate();
