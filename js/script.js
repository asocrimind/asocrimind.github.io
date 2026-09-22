document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTOS DEL MENÚ
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const menuLateral = document.getElementById("menuLateral");
    const menuOverlay = document.getElementById("menuOverlay");
    const cerrarMenu = document.getElementById("cerrarMenu");

    const enlacesMenu = document.querySelectorAll(".menu-lista a");


    /* =========================
       ABRIR MENÚ
    ========================= */

    function abrirMenu() {

        menuLateral.classList.add("activo");
        menuOverlay.classList.add("activo");

        document.body.style.overflow = "hidden";
    }


    /* =========================
       CERRAR MENÚ
    ========================= */

    function cerrarMenuLateral() {

        menuLateral.classList.remove("activo");
        menuOverlay.classList.remove("activo");

        document.body.style.overflow = "";
    }


    /* =========================
       EVENTOS
    ========================= */

    menuBtn.addEventListener("click", abrirMenu);

    cerrarMenu.addEventListener("click", cerrarMenuLateral);

    menuOverlay.addEventListener("click", cerrarMenuLateral);


    /* =========================
       CERRAR AL SELECCIONAR
       UNA OPCIÓN
    ========================= */

    enlacesMenu.forEach(enlace => {

        enlace.addEventListener("click", () => {
            cerrarMenuLateral();
        });

    });


    /* =========================
       ESCAPE PARA CERRAR
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            cerrarMenuLateral();
        }

    });


    /* =========================
       CARRUSEL
    ========================= */

    const carrusel = document.getElementById("carruselNosotros");

    if (carrusel) {

        new bootstrap.Carousel(carrusel, {

            interval: 5000,
            ride: "carousel",
            pause: "hover",
            wrap: true

        });

    }

    /* ================= GRÁFICA 1 ================= */

    const ctx1 = document.getElementById("grafica1");

    new Chart(ctx1, {

        type: "doughnut",

        data: {
            labels: [
                "Desistimientos",
                "Procedentes",
                "Rechazos"
            ],

            datasets: [{
                data: [25, 39, 36],

                backgroundColor: [
                    "#bb7864",
                    "#deddd7",
                    "#b49a63"
                ],

                borderWidth: 0
            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    display: false
                }
            },

            cutout: "65%"
        }

    });


    /* ================= GRÁFICA 2 ================= */

    const ctx2 = document.getElementById("grafica2");

    new Chart(ctx2, {

        type: "doughnut",

        data: {
            labels: [
                "Más de 16 días",
                "De 2 a 5 días",
                "De 6 a 12 días",
                "De 13 a 15 días"
            ],

            datasets: [{
                data: [6, 30, 19, 25],

                backgroundColor: [
                    "#bb7864",
                    "#deddd7",
                    "#b49a63",
                    "#adaca7"
                ],

                borderWidth: 0
            }]
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    display: false
                }
            },

            cutout: "65%"
        }

    });

});
