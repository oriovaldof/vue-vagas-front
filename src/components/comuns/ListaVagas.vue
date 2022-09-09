<template>
  <slot
    :vagas="vagas"
  >
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <Vaga v-bind="vaga" />
      </div>
    </div>
  </slot>
</template>
<script>
import Vaga from "@/components/comuns/Vaga.vue";
export default {
  name: "ListaVagas",
  data: () => ({
    vagas: [],
  }),
  components: {
    Vaga,
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      // console.log(vaga);
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      console.log(vagas);
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
};
</script>