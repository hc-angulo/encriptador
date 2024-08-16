document.addEventListener("DOMContentLoaded", function () {
    // Variables: Selección de elementos de la interfaz mediante selectores CSS
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnBorrar = document.querySelector(".btn-borrar");
    const btnInfo = document.getElementById("btnInfo");
    const btnInfoInterfazInicio = document.getElementById("btnInfoInterfazInicio");
    const btnCopiar = document.querySelector(".btn-copiar");
    const containerInterfazImagen = document.querySelector(".section__container-interfaz-imagen");
    const wrapper = document.querySelector(".wrapper");
    const containerInterfazInput = document.querySelector(".section__container-interfaz-input");
    const containerInterfazOuput = document.getElementById("containerInterfazOutput");
    const textAreaInput = document.querySelector(".textarea-input");
    const textAreaOutput = document.querySelector(".textarea-output");
    const containerBtnInfo = document.getElementById("containerbtnInfo");
    const CARACTERES_PERMITIDOS = obtenerCaracteresPermitidos();

    // Evento de clic en el botón de encriptar
    btnEncriptar.addEventListener("click", function () {
        let textoEntrada = textAreaInput.value;
        desplegarResultado(textoEntrada, encriptar);
    });

    // Evento de clic en el botón de desencriptar
    btnDesencriptar.addEventListener("click", function () {
        let textoEntrada = textAreaInput.value.trim();
        desplegarResultado(textoEntrada, desencriptar);
    });

    // Evento de clic en el botón de mostrar información
    btnInfo.addEventListener("click", mostrarInformacion);
    btnInfoInterfazInicio.addEventListener("click", mostrarInformacion);

    // Evento de entrada de texto en el textarea de entrada
    textAreaInput.addEventListener('input', function () {
        if (!textAreaInput.value.length) {
            location.reload(); // Recarga la página si no hay texto
        }
    });

    // Evento de clic en el botón de borrar, recarga la página
    btnBorrar.addEventListener("click", function () {
        location.reload();
    });

    // Evento de clic en el botón de copiar
    btnCopiar.addEventListener("click", function () {
        copiar();
    });

    // Función de encriptación: Reemplaza ciertas vocales con cadenas de texto
    function encriptar(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función de desencriptación: Reemplaza cadenas de texto con las vocales originales
    function desencriptar(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Función para mostrar una alerta de error cuando el texto ingresado es inválido
    function notificarError() {
        wrapper.style.display = 'none';
        Swal.fire({
            title: "<strong>¡Recuerda!</strong>",
            text: "Solo está permitido introducir letras minúsculas, sin acentos y sin caracteres especiales.",
            imageUrl: "assets/img-advertencia.png",
            imageWidth: 250,
            imageHeight: 320,
            imageAlt: "imagen de advertencia",
            confirmButtonColor: " #ba0a0b",
            allowOutsideClick: false,
            background: "#000000",
            backdrop: `rgba(0,0,0,0.7)`
        }).then((result) => {
            if (result.isConfirmed) {
                wrapper.style.display = 'flex';
            }
        });
    }

    // Función para mostrar información sobre la aplicación
    function mostrarInformacion() {
        wrapper.style.display = 'none';
        Swal.fire({
            title: "<strong>¡Bienvenido!</strong>",
            text: "Esta es una App que te permitirá encriptar y desencriptar textos. Solo está permitido introducir letras minúsculas, sin acentos y sin caracteres especiales.",
            imageUrl: "assets/logo.png",
            imageWidth: 400,
            imageHeight: 150,
            imageAlt: "logo de app",
            confirmButtonColor: " #ba0a0b",
            allowOutsideClick: false,
            background: "#000000",
            backdrop: `rgba(0,0,0,0.7)`
        }).then((result) => {
            if (result.isConfirmed) {
                wrapper.style.display = 'flex';
            }
        });
    }

    // Función para mostrar el resultado encriptado o desencriptado en la interfaz
    function desplegarResultado(text, func) {
        text = text.trim();
        if (esValido(text)) {
            if (text !== "") {
                containerInterfazOuput.classList.remove('section__container-interfaz-output-hidden');
                containerInterfazImagen.style.display = "none";
                containerInterfazOuput.classList.add('section__container-interfaz-output');
                containerBtnInfo.classList.add('section__container-btn-info');
                containerBtnInfo.classList.remove('section__container-btn-info-hidden');
                textAreaOutput.value = func(text);
            } else {
                textAreaInput.value = "";
            }
        } else {
            notificarError();
        }
    }

    // Función para obtener las letras minúsculas permitidas según el código ASCII
    function obtenerCaracteresPermitidos() {
        const caracteres = [String.fromCharCode(32), String.fromCharCode(241)]; // Espacio y ñ
        const codigoAsciiInicio = 97; // Código ASCII de 'a'
        const codigoAsciiFin = 122; // Código ASCII de 'z'
        for (let i = codigoAsciiInicio; i <= codigoAsciiFin; i++) {
            caracteres.push(String.fromCharCode(i)); // Agrega letras de 'a' a 'z'
        }
        return caracteres;
    }

    // Función para validar que el texto solo contenga caracteres permitidos
    function esValido(texto) {
        for (let i = 0; i < texto.length; i++) {
            if (!CARACTERES_PERMITIDOS.includes(texto[i])) {
                return false; // Retorna falso si se encuentra un carácter no permitido
            }
        }
        return true;
    }

    // Función para copiar el texto encriptado o desencriptado al portapapeles
    function copiar() {
        textAreaOutput.select();
        textAreaOutput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        wrapper.style.display = 'none';
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu texto ha sido copiado éxitosamente",
            showConfirmButton: true,
            confirmButtonColor: " #ba0a0b",
            background: "#000000",
            backdrop: `rgba(0,0,0,0.7)`
        }).then((result) => {
            if (result.isConfirmed) {
                wrapper.style.display = 'flex';
            }
        });
    }

    // Evento para ajustar la altura del textarea y contenedor según el contenido
    textAreaInput.addEventListener('input', function () {
        textAreaInput.style.height = 'auto'; // Resetea la altura a 'auto'
        textAreaInput.style.height = textAreaInput.scrollHeight + 'px'; // Ajusta la altura según el contenido
        textAreaOutput.style.height = 'auto';
        textAreaOutput.style.height = textAreaInput.scrollHeight + 'px';

        containerInterfazInput.style.height = 'auto'; // Resetea la altura a 'auto'
        containerInterfazInput.style.height = containerInterfazInput.scrollHeight + 'px'; // Ajusta la altura del contenedor

        let stylesheet = document.styleSheets[0];
        for (let j = 0; j < stylesheet.cssRules.length; j++) {
            let rule = stylesheet.cssRules[j];

            // Modifica la regla CSS deseada
            if (rule.selectorText === '.left-section__container-interfaz-output') {
                rule.style.height = 'auto';
                rule.style.height = containerInterfazInput.scrollHeight + 'px';
            }
        }

        // Llamada inicial para ajustar las alturas al cargar la página
        textAreaInput.dispatchEvent(new Event('input'));
        textAreaOutput.dispatchEvent(new Event('input'));
    });

});














