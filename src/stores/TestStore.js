import { defineStore } from 'pinia'

export const useStore = defineStore('TestStore', {
    state: () => ({
        mobileMenuOpen: false
    }),
    actions: {
        setMobileMenuOpen(IsOpen) {
            this.mobileMenuOpen = IsOpen
        }
    },
    getters: {
        mobile() {
            return this.mobileMenuOpen
        }
    }
})