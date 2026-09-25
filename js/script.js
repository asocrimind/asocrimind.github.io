document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const menuLateral = document.getElementById("menuLateral");
    const menuOverlay = document.getElementById("menuOverlay");
    const cerrarMenu = document.getElementById("cerrarMenu");
    const enlacesMenu = document.querySelectorAll(".menu-lista a");

    function abrirMenu() {
        menuLateral.classList.add("activo");
        menuOverlay.classList.add("activo");
        document.body.style.overflow = "hidden";
    }

    function cerrarMenuLateral() {
        menuLateral.classList.remove("activo");
        menuOverlay.classList.remove("activo");
        document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", abrirMenu);
    cerrarMenu.addEventListener("click", cerrarMenuLateral);
    menuOverlay.addEventListener("click", cerrarMenuLateral);

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
            cerrarMenuLateral();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            cerrarMenuLateral();
        }
    });

    const carrusel = document.getElementById("carruselNosotros");
    if (carrusel) {
        new bootstrap.Carousel(carrusel, {
            interval: 5000,
            ride: "carousel",
            pause: "hover",
            wrap: true
        });
    }

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


const botonServicios = document.querySelector(".boton-servicios");
const menuServicios = document.querySelector(".menu-servicios");
if (botonServicios && menuServicios) {
    botonServicios.addEventListener("click", () => {
        menuServicios.classList.toggle("abierto");
    });
}


const botonesProceso = document.querySelectorAll(".btn-proceso");
const modalProceso = document.getElementById("modalProceso");
const cerrarProceso = document.getElementById("cerrarProceso");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const pasosModal = document.getElementById("pasosModal");
const btnWhatsappProceso = document.getElementById("btnWhatsappProceso");
const procesos = {
    linea1: {
        titulo: "¿Cómo realizar tu pedido?",
        descripcion:
            "Conoce el proceso para solicitar productos de la línea clásica.",
        pasos: [
            {
                numero: "01",
                titulo: "Escríbenos por WhatsApp",
                descripcion:
                    "Comunicate al 33 1962 7087 y dinos que producto deseas."
            },
            {
                numero: "02",
                titulo: "Cuéntanos cómo lo quieres",
                descripcion:
                    "Adaptalo a tu gusto indicando: nombre, logotipo, profesión, frase o diseño."
            },
            {
                numero: "03",
                titulo: "Confirma tu diseño y realiza el pago",
                descripcion:
                    "Antes de producirlo confirmamos el diseño. una vez realizado el pago, comenzamos a elaborarlo."
            },
            {
                numero: "04",
                titulo: "Recógelo cerca de ti",
                descripcion:
                    "Envíamos tu pedido mediante paquetería casa blanca. selecciona la sucursal de tu preferncia y cuando tu paquete esté disponible, recibirás los datos necesarios para recogerlo."
            }
        ]
    },

    linea2: {
        titulo: "¿Cómo adquirir estos productos?",
        descripcion:
            "Conoce el proceso para solicitar productos de la línea forense.",
        pasos: [
            {
                numero: "01",
                titulo: "Solicita tu cotización",
                descripcion:
                    "Escríbenos por WhatsApp con los modelos y cantidades que te interesan. Confirmaremos precio, existencia y opciones de entrega o envío."
            },
            {
                numero: "02",
                titulo: "Reserva y pago",
                descripcion:
                    "La cotización se reserva durante 48 horas. Si el pago no se realiza dentro de ese plazo, las piezas regresan a disponibilidad."
            },
            {
                numero: "03",
                titulo: "Confirma tu pedido",
                descripcion:
                    "Envía la captura o ticket de pago y tus datos completos de entrega. Revisa que nombre, teléfono y domicilio estén correctos."
            },
            {
                numero: "04",
                titulo: "Salida y guía",
                descripcion:
                    "El pedido se envía el siguiente día hábil. La guía se comparte por la tarde y normalmente puede rastrearse aproximadamente 24 horas después."
            }
        ]
    }

};

botonesProceso.forEach((boton) => {
    boton.addEventListener("click", () => {
        const tipoProceso = boton.dataset.proceso;
        const proceso = procesos[tipoProceso];
        if (!proceso) return;
        modalTitulo.textContent = proceso.titulo;
        modalDescripcion.textContent = proceso.descripcion;
        pasosModal.innerHTML = "";
        proceso.pasos.forEach((paso) => {
            const elemento = document.createElement("div");
            elemento.className = "paso-modal";
            elemento.innerHTML = `
                <div class="numero-paso-modal">
                    ${paso.numero}
                </div>
                <div>
                    <h3>${paso.titulo}</h3>
                    <p>
                        ${paso.descripcion}
                    </p>
                </div>
            `;
            pasosModal.appendChild(elemento);
        });
        modalProceso.classList.add("activo");
    });
});

cerrarProceso.addEventListener("click", () => {
    modalProceso.classList.remove("activo");
});

modalProceso.addEventListener("click", (e) => {
    if (e.target === modalProceso) {
        modalProceso.classList.remove("activo");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalProceso.classList.remove("activo");
    }
});
