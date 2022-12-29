<template>
  <div>
    <button class="btn2" @click="$emit('click', $event)">
      {{ text ? text : 'button2' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom2',
  props: {
    text: {
      type: String,
      required: false
    }
  },

}
</script>

<style>
.btn2 {
  padding: 0.7rem 1.7rem;
  font-size: 18px;
  border-radius: 0.5em;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5cc, -6px -6px 12px rgb(140, 137, 137);
}

.btn2:hover {
  box-shadow: -6px -6px 12px #c5c5cc, 6px 6px 12px rgb(140, 137, 137);
  cursor: pointer;
}
</style>