<template>
    <div class="btn6div">
        <button class="btn6">Button 6</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonCustom6',

}
</script>

<style>

.btn6{
    position: relative;
    font-size: 20px;
    color: #020e26;
    /* background-color: transparent; */
    background: transparent;
    border: 1px solid #020e26;
    border-radius: 48px;
    z-index: 10;
    padding: 5px 32px;
    transition: 0.4s;
}

.btn6:hover{
    color: #fff;
}

.btn6::before{
    content: '';
    position: absolute;
    height: 35px;
    width: 150px;
    z-index: -1;
    border-radius: 48px;
    background-color: #3bd9d9;
    transform: translate(-24px, 2px);
    transition: 0.4s;
}

.btn6:hover::before{
    background-color: #b527cf;
    transform: translate(-33px, -3px);
}
</style>