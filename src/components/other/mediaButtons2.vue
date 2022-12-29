<template>
    <div>
        <ul class="list-media-button">

            <li class="item-media-button">
                <a href="#">
                    <Icon class="fab" name="mdi:github"></Icon>
                    <!-- <ion-icon class="fab" name="logo-github"></ion-icon> -->
                </a>
            </li>
            <li class="item-media-button">
                <a href="#">
                    <Icon class="fab" name="mdi:twitter"></Icon>
                    <!-- <ion-icon class="fab" name="logo-twitter"></ion-icon> -->
                </a>
            </li>
            <li class="item-media-button">
                <a href="#">
                    <Icon class="fab" name="ic:baseline-facebook"></Icon>

                    <!-- <ion-icon class="fab" name="logo-facebook"></ion-icon> -->
                </a>
            </li>
            <li class="item-media-button">
                <a href="#">
                    <Icon class="fab" name="ph:instagram-logo-fill"></Icon>

                    <!-- <ion-icon class="fab" name="logo-instagram"></ion-icon> -->
                </a>
            </li>
            <li class="item-media-button">
                <a href="#">
                    <Icon class="fab" name="ic:baseline-whatsapp"></Icon>

                    <!-- <ion-icon class="fab" name="logo-whatsapp"></ion-icon> -->
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MediaButtons2'
}
</script>

<style>
.list-media-button {

    display: flex;
}

.list-media-button .item-media-button {
    list-style: none;
}

.list-media-button .item-media-button a {
    /* position: relative; */
    width: 60px;
    height: 60px;
    display: block;
    text-align: center;
    margin: 0 10px;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
    /* text-decoration: none; */
    box-shadow: 0 10px 35px rgb(0, 0, 0, 0.4);
    background: linear-gradient(0deg, rgb(171, 124, 192), #fff);
    transition: .5s;
}

.list-media-button .item-media-button a:hover {
    box-shadow: 0 2px 5px rgba(171, 93, 216, 0.89);
    text-decoration: none;
}

.list-media-button .item-media-button a .fab {
    width: 90%;
    height: 100%;
    /* display: block; */
    background: linear-gradient(0deg, rgb(223, 149, 195), rgb(164, 201, 198));
    border-radius: 50%;
    /* line-height: calc(60px - 12px); */
    font-size: 24px;
    color: #262626;
    /* transition: .5s; */
}
</style>