import Template from '@templates/Template.js';
import '@styles/main.css';  //Añadir los estilos css
import '@styles/vars.styl';
console.log("Hola desde webpack.config.dev.js");
(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();

