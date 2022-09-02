<template>
  <div>
    <VagasFavoritas></VagasFavoritas>
    <TopoPadrao @navegar="componente = $event"/>

    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
  </div>
</template>

<script>
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import Conteudo from "@/components/layouts/Conteudo.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade:true,
    componente:'Home'
  }),
  methods:{
    
  },
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas
}
};
</script>

<style scoped>

</style>
