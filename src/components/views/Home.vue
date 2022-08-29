<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVaga></PesquisarVaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
       <!--Exemplo Eviando os props separados--> 
        <!-- <Vaga 
          :titulo="vaga.titulo"
          :descricao="vaga.descricao"
          :salario="vaga.salario"
          :modalidade="vaga.modalidade"
          :tipo="vaga.tipo"
          :publicacao="vaga.publicacao"
        /> -->

        <!--Exemplo eviando o objeto inteiro para o componente-->
        <Vaga v-bind="vaga" />
      </div>
    </div>

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
        {{ usuariosOnline }}
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "Home",
  components: {
    Indicador,
    PesquisarVaga,
    Vaga,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
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
  activated(){
    this.vagas = JSON.parse(localStorage.getItem('vagas'));
  }
};
</script>


<style scoped>
</style>
