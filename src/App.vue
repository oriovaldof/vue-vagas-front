<template>
  <div>
    <VagasFavoritas></VagasFavoritas>
    <TopoPadrao @navegar="componente = $event" />
    <Alerta v-if="exibirAlerta" :tipo="alerta.tipo">
     
      <template v-slot:titulo>
        <h5>{{alerta.titulo}}</h5>
      </template>
      
      <p>{{alerta.descricao}}</p>

    </Alerta>

    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
  </div>
</template>

<script>
import Alerta from "@/components/comuns/Alerta.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";
import Conteudo from "@/components/layouts/Conteudo.vue";
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";

export default {
  name: "App",
  data: () => ({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false,
    alerta:{
      titulo:'',
      descricao:'',
      tipo:''
    }
  }),
  methods: {},
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  mounted() {
    this.emitter.on("alerta", (a) => {
      this.alerta = a;
      this.exibirAlerta = true;

      setTimeout(() => (this.exibirAlerta = false), 4000);
    });
  },
};
</script>

<style scoped>
</style>
