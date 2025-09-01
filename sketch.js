var valor = document.getElementById("pecinco").offsetWidth;

window.addEventListener("resize", function () {
valor = document.getElementById("pecinco").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#pecinco");
    select("#nombre").html("Valentina Avila");
    select("#aprendizaje").html("modelado en 3D"); 
    noStroke();
}

function draw() {
    background(255, 224, 242);
    orbitControl();
    directionalLight(200, 200, 200, -1, -1, -1);
    pointLight(255, 255, 255, 200, -150, 200);
    specularMaterial(200, 200, 255);
    shininess(50);
    emissiveMaterial(50, 50, 100);
    metalness(1);
    fill(255, 38, 139);
    sphere(valor/4, valor/4);;
}

function windowResized() {
    resizeCanvas(valor, valor);

            }


