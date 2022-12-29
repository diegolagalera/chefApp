<template>
  <div class="container-media">
    <ul class="list-neon">
        <li class="item-neon">
            <ion-icon name="logo-github"></ion-icon>
            <span class="title" data-text="git">git</span>
        </li>
        <li class="item-neon">
            <ion-icon name="logo-twitter"></ion-icon>
            <span class="title" data-text="twitter">twitter</span>
        </li>
        <li class="item-neon">
            <ion-icon name="logo-facebook"></ion-icon>
            <span class="title" data-text="facebook">facebook</span>
        </li>
        <li class="item-neon">
            <ion-icon name="logo-instagram"></ion-icon>
            <span class="title" data-text="instagram">instagram</span>
        </li>
        <li class="item-neon">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <span class="title" data-text="whatsapp">whatsapp</span>
        </li>

    </ul>
  </div>
</template>

<script>
export default {
 name:'mediaButtons'
}
</script>

<style>
.container-media{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
}
.list-neon{ /*ponemos la lista en horizontal */
    position:relative;
    display: flex;
    gap: 30px;
}

.list-neon .item-neon { /*dibujamos los circulos negros con su sombra */
    position: relative;
    list-style: none;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid blanchedalmond;
    background: #000;
    box-shadow: 0px 2px 30px rgb(204, 223, 174);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
}

.list-neon .item-neon:hover{
    width: 180px;
    box-shadow: 0 10px 25px rgb(0, 0, 0, 0);
    background:  linear-gradient(45deg, rgb(60, 194, 111), rgb(2, 106, 133));
    opacity: 1;
}
.list-neon .item-neon::before{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
}
.list-neon .item-neon ion-icon{
    color: rgb(190, 182, 182);
    font-size: 1.75em;
    transition: 0.5;
    transition-delay: 0.25s;
}
.list-neon .item-neon:hover ion-icon {
    transform: scale(0);
    color: #fff;
    transition-delay: 0s;
}

.list-neon .item-neon span{
    position: absolute;
}

.title {
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transform: scale(0);
    transition-delay: 0s;
}

.list-neon .item-neon:hover .title{
    transform: scale(1);
    transition-delay: 0.2s;
}


</style>