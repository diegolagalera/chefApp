<template>
  <div>
    <button class="btn1" @click="$emit('click', $event)">
      {{ text ? text : 'button1' }}

    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom1',
  props: {
    text: {
      type: String,
      required: false
    }
  },
  methods: {
    hola() {
      console.log('aaaaa');
    }
  }
}
</script>

<style>
.btn1 {
  border: 1px solid #181616;
}

.btn1 {
  padding: 0.7rem 1.7rem;
  font-size: 18px;
  border-radius: 0.5em;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5cc, -6px -6px 12px rgb(140, 137, 137);
}

.btn1:hover {
  box-shadow: -6px -6px 12px #c5c5cc, 6px 6px 12px rgb(140, 137, 137);
  cursor: pointer;
}
</style>