<template>
  <div>
    <a :class="clase2 ? 'button4' : 'clase2'" href="#">
      <span class="span4">
        {{ text ? text : 'Button4' }}
      </span>
      <div class="liquid"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ButtonCustom4',
  props: {
    text: {
      type: String,
      required: false
    },
    clase2: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style>
.button4 {
  position: relative;
  padding: 0.5rem 1.7rem;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
  overflow: hidden;
  border-radius: 40px;
}

.button4 .span4 {
  position: relative;
  color: rgb(246, 246, 246);
  font-size: 12px;
  font-family: Arial;
  letter-spacing: 8px;
  z-index: 1;
}

.button4 .liquid {
  position: absolute;
  top: -10px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #5ac7f2;
  box-shadow: inset -20px 20px 120px rgb(92, 98, 187);
  transition: .5s;
}

.button4 .liquid::after,
.button4 .liquid::before {
  content: '';
  width: 200px;
  height: 200px;
  position: absolute;
  top: 10;
  left: 50%;
  /* transform: translate(-70%, -5%); */
  /* background: #000; */
}

.button4 .liquid::before {
  border-radius: 60%;
  background: rgb(99, 177, 177);
  animation: animate 5s linear infinite;
}

.button4 .liquid::after {
  border-radius: 40%;
  background: rgba(204, 60, 197, 0.322);
  animation: animate 10s linear infinite;
}

.button4:hover .liquid {
  top: -120px;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -80%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -80%) rotate(360deg);
  }
}



.clase2 {
  position: relative;
  padding: 0.5rem 1.7rem;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
  overflow: hidden;
  border-radius: 40px;
}

.clase2 .span4 {
  position: relative;
  color: rgb(246, 246, 246);
  font-size: 12px;
  font-family: Arial;
  letter-spacing: 8px;
  z-index: 1;
}

.clase2 .liquid {
  position: absolute;
  top: -10px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #86bcd1;
  box-shadow: inset -20px 20px 120px rgb(194, 54, 159);
  transition: .5s;
}

.clase2 .liquid::after,
.clase2 .liquid::before {
  content: '';
  width: 200px;
  height: 200px;
  position: absolute;
  top: 10;
  left: 50%;
  /* transform: translate(-70%, -5%); */
  /* background: #000; */
}

.clase2 .liquid::before {
  border-radius: 60%;
  background: rgb(124, 172, 190);
  animation: animate 5s linear infinite;
}

.clase2 .liquid::after {
  border-radius: 40%;
  background: rgba(155, 39, 39, 0.322);
  animation: animate 10s linear infinite;
}

.clase2:hover .liquid {
  top: -120px;
}

</style>