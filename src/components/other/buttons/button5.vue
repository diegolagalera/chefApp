<template>
  <button :class="loading? 'button--loading' : 'btn5'"> {{ loading? 'Button 5' : 'Button 5' }} </button>
</template>

<script>
export default {
    name: 'ButtonCustom5',
    data () {
        return{
        loading: false
    }
 },

}
</script>

<style>
.btn5{
    position: relative;
    padding: 0.5em 3em;
    color: rgb(40, 67, 67);
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-shadow: 0 0 0.5em rgb(110, 237, 237); */
    background-color: rgb(44, 157, 157);
    border: 0.25em solid rgb(110, 237, 237);
    border-radius: 1em;
    box-shadow: 0 0 1em 0.25em rgb(110, 237, 237),
    0 0 4em 1em rgb(65, 243, 243, 0.281),
    inset 0 0 0.75em 0.25em rgb(110, 237, 237);
    outline: none;
    cursor: pointer;
    transition: aññ 0.3s;
}
/* .btn5::after{
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(65, 243, 243, 0.781);
    filter: blur(2em);
    opacity: 0.7;
    pointer-events: none;
    transform: perspective(1.5em)
    rotateX(35deg)
    scale(1, 0.6);
} */

.btn5:hover{
    color: rgb(44, 157, 157);
    background-color: rgb(110, 237, 237);
    box-shadow: 0 0 1em 0.25em rgb(110, 237, 237),
    0 0 4em 2em rgb(65, 243, 243, 0.381),
    inset 0 0 0.75em 0.25em rgb(110, 237, 237);
}

.btn5:active{
    box-shadow: 0 0 0.6em 0.25em
    rgb(110, 237, 237),
    0 0 2.5em 2em rgb(65, 243, 243, 0.781),
    inset 0 0 0.5em 0.25em rg;
}








.button--loading{
    position: relative;
    padding: 0.5em 3em;
    color: rgb(44, 157, 157);
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    /* text-shadow: 0 0 0.5em rgb(110, 237, 237); */
    background-color: rgb(44, 157, 157);
    border: 0.25em solid rgb(110, 237, 237);
    border-radius: 1em;
    box-shadow: 0 0 1em 0.25em rgb(110, 237, 237),
    0 0 4em 1em rgb(65, 243, 243, 0.281),
    inset 0 0 0.75em 0.25em rgb(110, 237, 237);
    outline: none;
    cursor: pointer;
    transition: 0.3s;
        /* z-index: 10; */

}


.button--loading::before{
    content: "";
    z-index: 100;

    position: absolute;
    width: 26px;
    height: 26px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
}

.button--loading:hover{
    color: rgb(44, 157, 157);
    /* background-color: rgb(110, 237, 237); */
    box-shadow: 0 0 1em 0.25em rgb(110, 237, 237),
    0 0 4em 2em rgb(65, 243, 243, 0.381),
    inset 0 0 0.75em 0.25em rgb(110, 237, 237);
}

.button--loading:active{
    box-shadow: 0 0 0.6em 0.25em
    rgb(110, 237, 237),
    0 0 2.5em 2em rgb(65, 243, 243, 0.781),
    inset 0 0 0.5em 0.25em rg;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>