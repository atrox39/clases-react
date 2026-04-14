# Dominando React en 2026: De los Fundamentos a un E-Commerce Real

Bienvenido al repositorio del proyecto E-Commerce construido con React y Vite, basado en el artículo ["Dominando React en 2026: De los Fundamentos a un E-Commerce Real (Parte 1)"](https://atrox39.medium.com/dominando-react-en-2026-de-los-fundamentos-a-un-e-commerce-real-parte-1-6554e5cd9752) por Eddy Ortega.

Este proyecto tiene como objetivo construir un E-Commerce completo conectado a la API de FakeStore.

## 🛠 Requisitos de Software

- **Node.js (Versión 18.0 o superior):** Versión LTS recomendada para evitar errores de compatibilidad.
- **Gestor de paquetes (NPM):** Viene incluido con Node.
- **Visual Studio Code:** El estándar de la industria para desarrollo frontend.
- **Terminal:** PowerShell, Bash o WSL2 (altamente recomendado en Windows para un flujo de trabajo tipo Unix).
- **React Developer Tools:** Extensión para el navegador indispensable para debuguear componentes.

## 📚 Fundamentos de JavaScript (Requisitos Técnicos)

React es, en esencia, "puro JavaScript". Para no batallar con la lógica de la librería, debes sentirte cómodo con estos conceptos de ECMAScript 6+:
- **Inmutabilidad (const vs let):** Entender que en React no mutamos datos, los reemplazamos.
- **Funciones Flecha (Arrow Functions):** La sintaxis que usaremos para casi todos nuestros componentes.
- **Desestructuración:** Para extraer valores de objetos (props) y arreglos (hooks) de forma elegante.
- **Lógica de Cortocircuito y Ternarios:** Fundamentales para mostrar u ocultar elementos en la interfaz.
- **Métodos Funcionales de Arreglos:** Especialmente `.map()`, que es la forma estándar de renderizar listas en React.
- **Callbacks:** Funciones pasadas como argumentos a otras funciones.
- **DOM:** Interfaz de programación que representa los documentos HTML/XML.

## 🚀 Tecnologías

- **React:** Biblioteca para interfaces de usuario basadas en componentes. Su éxito radica en la declaratividad (actualiza el DOM rápidamente en función de los datos).
- **Vite:** Herramienta de construcción (build tool) ultra rápida que reemplaza a Webpack, utilizando ES Modules y esbuild (Go). Es hasta 100 veces más rápido que los empaquetadores tradicionales.

## 💻 Inicio Rápido

El proyecto fue inicializado con Vite mediante los comandos:
```bash
npm create vite@latest mi-ecommerce-app
cd mi-ecommerce-app
npm install
npm run dev
```

## 🏗 Estructura Inicial

- `index.html`: Punto de entrada HTML. Contiene el `<div id="root">`, donde vive tu app.
- `src/main.jsx`: Punto de entrada que conecta React con el HTML.
- `src/App.jsx`: Tu componente raíz principal, donde se renderiza la UI.

## 🔮 Próximos Pasos (Módulo 2)

Profundizaremos en el manejo de **Estado (`useState`)** y **Efectos (`useEffect`)**, piezas fundamentales que nos permitirán consumir la FakeStoreAPI para transformar esta base en un E-Commerce funcional y profesional.
