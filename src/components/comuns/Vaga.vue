<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo:
        {{ tipo }} | Publicação: {{ publicacao }}</small
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
  // props: ["titulo", "descricao", "salario", "modalidade", "tipo", "publicacao"],
  // props: {
  //   titulo: String,
  //   descricao: String,
  //   salario: [Number, String],
  //   modalidade: String,
  //   tipo: String,
  //   publicacao: String,
  // },
  props: {
    titulo: {
      type:String,
      required:true,
      validator(p){
        // console.log('Prop: ', p, p.length);
        if(p.length < 6 )return false; //se estiver invalido
        return true; //se estiver valida
        //return false; //se estiver invalido
      }
    },
    // descricao: {
    //   type:String,
    //   required:true
    // },
    descricao: {
      type:String,
      // default:'O Contratante não adicionou uma descrição para essa vaga'
      default(){
        return '*'.repeat(20);
      }
    },
    salario: {
      type:[Number, String],
      required:true
    },
    modalidade: {
      type:String,
      required:true
    },
    tipo: {
      type:String,
      required:true
    },
    publicacao: {
      type:String,
      required:true
    },
  },
 
};
</script>