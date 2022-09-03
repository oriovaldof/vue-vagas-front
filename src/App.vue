<template>
  <div>
    <VagasFavoritas></VagasFavoritas>
    <TopoPadrao @navegar="componente = $event" />
    <Alerta v-if="exibirAlerta">
      <h3>Teste 1: Slote Padrao</h3>
      <template v-slot:titulo>
        <h5>Titulo do alerta</h5>
      </template>

      <div>
        <p><strong>Teste 2: Slot Padrão</strong></p>
      </div>

      <template v-slot:descricao>
        <p>Descricao do alerta</p>
      </template>

      <ul>
        <li>Teste 3: Slot Padrão</li>
        <li>Teste 3: Slot Padrão</li>
        <li>Teste 3: Slot Padrão</li>
      </ul>


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
