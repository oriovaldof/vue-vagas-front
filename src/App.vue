<template>
  <div>
    <VagasFavoritas></VagasFavoritas>
    <TopoPadrao @navegar="componente = $event" />
    <Alerta v-if="exibirAlerta">
     
      <template v-slot:titulo>
        <h5>Titulo do alerta</h5>
      </template>
      
      <p>Descricao do alerta</p>

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
  }),
  methods: {},
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  mounted() {
    this.emitter.on("alerta", () => {
      this.exibirAlerta = true;

      setTimeout(() => (this.exibirAlerta = false), 4000);
      console.log("Apresentar a mensagem de alerta customizada");
    });
  },
};
</script>

<style scoped>
</style>
