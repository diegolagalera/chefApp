// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
        // {
        //     autoImports: ['defineStore', 'acceptHMRUpdate'],
        // },
        // '@nuxtjs/supabase'
    ],
    appConfig: {
        nuxtIcon: {
            size: '1.5em'
        }
    }
})
