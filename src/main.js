import { createApp } from 'vue'
import App from './App.vue'

//importar o pacote mitt
import mitt from 'mitt'

//criar a instancia do pacote mitt
const emitter = mitt();

//inicia a instancia do vue com base no componente 
// createApp(App).mount('#app')

const app = createApp(App);

//configurar a instancia do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponivel para todas as instancias de componentes dentro do app
app.config.globalProperties.emitter = emitter;

//associar a instancia do vue com o elemento html de id app
app.mount('#app');