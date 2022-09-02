<template>
  <div>
    <keep-alive>
      <component :is="conteudo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
export default {
  name: "Conteudo",
  props:{
    conteudo:{
      type:String,
      required:true
    }
  },
  components: {
    Home,
    PublicarVaga,
  }
  /*beforeCreate(){
    console.log('Antes de Criar',this.teste);
  },
  created(){
    console.log('Criado', this.teste)
  },
  beforeMount(){
    console.log('Antes de montar o template')
  },
  mounted(){
    console.log('Montado')
  },
  beforeUpdate(){
    console.log('Antes de Atualizar')
  },
  updated(){
    console.log('Atualizado')
  },
  beforeUnmount(){
    console.log('Antes de desmontar/destruir')
  },
  unmounted(){
    console.log('Desmontado/destruido');
  },
  errorCaptured(){
    console.log('Erro Capturado')
  },
  renderTracked(){
    console.log('Re-renderizacao rastreada');
  },
  renderTriggered(){
    console.log('Re-renderizacao acionanda')
  },
  activated(){
    console.log('Componente é ativado');
  },
  deactivated(){
    console.log('Componente é desativado');
  }*/
};
</script>


<style module>
.teste {
  background-color: red;
}
#teste-2 {
  background-color: yellow;
}
</style>
