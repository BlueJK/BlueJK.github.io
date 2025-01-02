<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav justify-content-center">
            <li :class="['nav-item', {active: isActive(list_pages[0])}]" :id="list_pages[0]">
                <a class="nav-link" href="/" @click="clicked(list_pages[0])">Home <span class="sr-only">(current)</span></a>
            </li>
            <li :class="['nav-item', {active: isActive(list_pages[1])}]" :id="list_pages[1]">
                <a class="nav-link" href="/projects" @click="clicked(list_pages[1])">Projects</a>
            </li>
            <li :class="['nav-item', {active: isActive(list_pages[2])}]" :id="list_pages[2]">
                <a class="nav-link" href="/contacts" @click="clicked(list_pages[2])">Contacts</a>
            </li>
            
            </ul>
        </div>
    </nav>
</template>

<script>
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