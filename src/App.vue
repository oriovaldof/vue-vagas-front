<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar o compomente Conteudo</button>
    <TopoPadrao @nomeDoEventoQueSeraCapturadoNoComponentePai="acao($event)" />

    <Conteudo v-if="visibilidade"></Conteudo>
  </div>
</template>

<script>
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import Conteudo from "@/components/layouts/Conteudo.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade:true
  }),
  methods:{
    desmontarComponente(){
      this.visibilidade = false;
    },
    acao(p){
      console.log('Chegamos até o componente PAI');
      console.log(p);
    }
  },
  components: {
    Conteudo,
    TopoPadrao,
  }
};
</script>

<style scoped>

</style>
