<template>
    <div class="sticky top-2 mx-8 z-10">
        <nav class="flex h-14 items-center py-8 justify-between shadow-2xl bg-purple-50 rounded-xl md:px-8 px-2 "
            aria-label="Global">
            <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-12" src="https://tryit-likeit.com/wp-content/uploads/2021/01/cook.png" alt="" />
                </a>
            </div>
            <!-- menu vericon pc -->
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="flex font-semibold text-gray-900 hover:text-gray-900">
                    <Icon class="mr-2" :name="item.icon"></Icon>
                    {{ item.name }}
                </a>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <OtherButtonsButton4 class="mr-4" :text="'iNICIAR'"></OtherButtonsButton4>
                <OtherButtonsButton4 clase2 :text="'REGISTRAR'"></OtherButtonsButton4>
                <!-- <OtherButtonsButton7></OtherButtonsButton7>
                <a href="#"
                    class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Log in
                </a> -->
            </div>
            <!-- Boton menu Mobile -->
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="store.setMobileMenuOpen(true)">
                    <span class="sr-only">Open main menu</span>
                    <Icon name="material-symbols:menu"></Icon>
                </button>
            </div>
        </nav>
        <!-- menu Mobile -->
        <!-- <Dialog></Dialog> -->
        <!-- <Dialog as="div" @close="store.setMobileMenuOpen(false)" :open="store.mobileMenuOpen">
        <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex h-9 items-center justify-between">
                <div class="flex">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>
                </div>
                <div class="flex">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="store.setMobileMenuOpen(false)">
                        <span class="sr-only">Close menu</span>
                        <Icon name="mdi:close"></Icon>
                    </button>
                </div>
            </div>
            <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{
        item.name
                            }}</a>
                    </div>
                    <div class="py-6">
                        <a href="#"
                            class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log
                            in</a>
                    </div>
                </div>
            </div>
        </DialogPanel>
    </Dialog> -->
    </div>
</template>


<script setup>
// import { Dialog, DialogPanel } from '@headlessui/vue'
const store = useStore()
const navigation = [
    { name: 'Inicio', href: '#home1', icon: 'mdi:home' },
    { name: 'Servicios', href: '#home2', icon: 'fluent:people-team-28-filled' },
    { name: 'Noticias', href: '#home3', icon: 'ic:baseline-notifications-active' },
    // { name: 'Contáctanos', href: '#home4', icon: 'ion:share-social-sharp' },
]
// export default {
//     data() {
//         return {
//             store: useStore(),
//             navigation: [
//                 { name: 'Product', href: '#home1' },
//                 { name: 'Features', href: '#home2' },
//                 { name: 'Marketplace', href: '#home3' },
//                 { name: 'Company', href: '#home4' },
//             ]
//         }
//     }
// }
</script>
<style>
html {
    scroll-behavior: smooth;
}
</style>