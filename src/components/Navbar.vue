<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">

        
            <a class="navbar-brand" href="#">BlueJk's Page</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-center">
                <li class="nav-item" :id="list_pages[0]">
                    <router-link to="/" :class="['nav-link', {active: isActive(list_pages[0])}]" @click="clicked(list_pages[0])">Home</router-link>
                </li>
                <li class="nav-item" :id="list_pages[1]">
                    <router-link to="/projects" :class="['nav-link', {active: isActive(list_pages[1])}]" @click="clicked(list_pages[1])">Projects</router-link>
                </li>
                <li class="nav-item" :id="list_pages[2]">
                    <router-link to="/contacts" :class="['nav-link', {active: isActive(list_pages[2])}]" @click="clicked(list_pages[2])">Contacts</router-link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import router from '@/router';

export default {
    name: 'Navbar',
    created() {
        console.log(window.location.pathname.replace('/', ''))
        this.activePage = window.location.pathname.replace('/', '') || this.list_pages[0]
    },
    data() {
        return {
            activePage: '',
            list_pages: ['home', 'projects', 'contacts']
        }
    },
    methods: {
        isActive(page) {
            return this.activePage === page
        },
        clicked(page) {
            this.activePage = page
        }
    }
}
</script>

<style scoped>

</style>