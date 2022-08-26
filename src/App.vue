<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">Desmontar o compomente Conteudo</button>
    <TopoPadrao />

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
