<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga></PesquisarVaga>
      </div>
    </div>

    <h2>Template Customizado</h2>
    <ListaVagas v-slot:default="slotPropos">
      <div v-for="(vaga, index) in slotPropos.vagas" :key="index">
        <h4>{{ vaga.titulo }}</h4>
        <p>{{ vaga.descricao }}</p>
        <hr />
      </div>
    </ListaVagas>

    <br /><br />
    <h2>Template Padrao</h2>
    <ListaVagas></ListaVagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas Abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Profissionais Cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></Indicador>
      </div>

      <div class="col-4">
        <Indicador
          titulo="Visitantes Online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></Indicador>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";

export default {
  name: "Home",
  components: {
    Indicador,
    ListaVagas,
    PesquisarVaga,
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuarioOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuarioOnline, 1000); //chama a funcao a cada 1 segundo
  },
  // mounted(){
  //   this.vagas = JSON.parse(localStorage.getItem('vagas'));
  // }
};
</script>
<style scoped>
</style>
