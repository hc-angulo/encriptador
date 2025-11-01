# 🔐 Encriptador de Texto

Aplicación web que permite **encriptar y desencriptar mensajes** utilizando un sistema simple de sustitución de vocales.  
Desarrollada como parte de un reto de programación para practicar **lógica, manipulación del DOM y diseño web**.

🌐 **Demo en vivo:** [https://hc-angulo.github.io/encriptador/](https://hc-angulo.github.io/encriptador/) 

---

## 📜 Descripción del Proyecto

Durante cuatro semanas se desarrolló una aplicación que **encripta textos** para que puedas intercambiar mensajes secretos con otras personas que conozcan la clave de encriptación.

La aplicación transforma las vocales del texto según las siguientes **llaves de encriptación**:

| Letra | Reemplazo |
|--------|------------|
| e | enter |
| i | imes |
| a | ai |
| o | ober |
| u | ufat |

Por ejemplo:

- "gato" => "gaitober"
- "gaitober" => "gato"


---

## 🧩 Requisitos del Proyecto

### Funcionales
- Debe funcionar **solo con letras minúsculas**.  
- No se deben usar **acentos ni caracteres especiales**.  
- Debe ser posible:
  - **Encriptar** un texto.  
  - **Desencriptar** un texto encriptado.

### Interfaz
- Campo de texto para ingresar el mensaje.  
- Botones para seleccionar entre **Encriptar** o **Desencriptar**.  
- Área que muestre el **resultado** del proceso.  

### Extra (Funcionalidad Adicional)
- Un botón que **copie el texto** encriptado o desencriptado al portapapeles (simulando la función `Ctrl + C` o “Copiar”).

---

## ⚙️ Tecnologías Utilizadas

- **HTML5** – estructura de la aplicación  
- **CSS3** – estilos y diseño responsivo  
- **JavaScript (Vanilla)** – lógica de encriptación, desencriptación y copia de texto  

---

## 🚀 Cómo Usar

1. Accede al sitio: [hc-angulo.github.io/encriptador](https://hc-angulo.github.io/encriptador/)  
2. Escribe un texto en el campo de entrada.  
3. Elige una opción:
   - 🔒 **Encriptar** para codificar el texto.  
   - 🔓 **Desencriptar** para decodificarlo.  
4. Copia el resultado con el botón **“Copiar”**.

---

## 🧠 Lógica de Encriptación

El algoritmo recorre el texto y reemplaza las vocales según las llaves definidas.  
Para desencriptar, se realiza el proceso inverso, sustituyendo las secuencias específicas por sus letras originales.

Ejemplo de lógica básica:
```js
// Encriptar
texto.replaceAll("e", "enter")
     .replaceAll("i", "imes")
     .replaceAll("a", "ai")
     .replaceAll("o", "ober")
     .replaceAll("u", "ufat");

// Desencriptar
texto.replaceAll("enter", "e")
     .replaceAll("imes", "i")
     .replaceAll("ai", "a")
     .replaceAll("ober", "o")
     .replaceAll("ufat", "u");
```

---

## 💡 Posibles Mejoras Futuras    

- Validación en tiempo real del texto ingresado.
- Modo oscuro y mejoras de accesibilidad.
- Encriptación adicional o personalizable por el usuario.
- Implementación como aplicación web progresiva (PWA).

---
