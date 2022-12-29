<template>
  <div>
  <button class="btn-grad-1" @click="hola()">
    BUTTON3
  </button>
</div>
</template>

<script>
export default {
 name: 'ButtonCustom3',
 methods: {
  hola(){
    console.log('aaaaa');
  }
 }
}
</script>

<style>
.btn-grad-1{
  background:  linear-gradient(45deg, rgb(60, 194, 111), rgb(2, 106, 133));
  color: white;
}
.btn-grad-1 { 
    padding: 0.7rem 1.7rem;
    font-size: 18px;
    border-radius: 0.5em;
    transition: all .3s;
    box-shadow: 6px 6px 12px #c5c5cc, -6px -6px 12px rgb(140, 137, 137);
}
.btn-grad-1:hover{
    box-shadow:-6px -6px 12px #c5c5cc,6px 6px 12px  rgb(140, 137, 137) ;
    cursor: pointer;
}

</style>