<template>
    <div id="home1" class="mx-auto max-w-3xl pt-20 pb-32 md:pt-20 md:pb-30">
        <div class="">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span class="text-gray-600">
                        no expandimos por toda europa. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />leer más<span
                                aria-hidden="true">&rarr;</span></a>
                    </span>
                </div>
            </div>
            <div>
                <h1 class="text-4xl font-bold font-[Georgia] sm:text-center sm:text-6xl">Take a chef</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Tenetur quas, aliquid necessitatibus rerum esse voluptate quod quos qui tempore
                    est assumenda nesciunt maxime possimus autem! Repellat architecto quaerat blanditiis delectus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur, illo vero sit omnis dicta
                    alias labore impedit necessitatibus veniam, vel itaque excepturi id modi doloremque aperiam nesciunt
                    consectetur sequi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sit minima laudantium magni
                    asperiores et? Recusandae, iste! Voluptatem et dignissimos magnam eveniet porro voluptate deserunt
                    beatae officia suscipit voluptates. Aliquam.
                </p>

                <h2 class="text-center mt-8 text-xl font-bold">registrate como....</h2>

                <div class="mt-6 flex gap-x-4 sm:justify-center">
                    <OtherButtonsButton1 :text="'chef'"></OtherButtonsButton1>
                    <OtherButtonsButton1 :text="'comensal'"></OtherButtonsButton1>

                </div>
            </div>
            <div
                class="bg-red-50 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177"
                            y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9089FC" />
                            <stop offset="1" stop-color="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
    <div id="home2" class="absolute -mt-20"></div>

    <!-- <div class="absolute top-28 right-96 bg-purple-400 -z-10">
        <div aria-hidden="true"
            class="lg:top-60 lg:right-32 pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 mt-52">
                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img src="~/public/1.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="~/public/2.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="~/public/3.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="~/public/1.jpg" alt="" class="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'content1'
}
</script>

<style>

</style>