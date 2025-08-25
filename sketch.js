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
                background(255, 216, 223);
                orbitControl();
                pointlight (250,250,250, valor/3, valor/2,50);
                specularMaterial(255);
                shininess(50);
                metalness(1);
                fill(255,100,150);
                sphere(valor/4, valor/4);
             }

            function windowResized() {
                resizeCanvas(valor, valor);
            }