<template>
    <div v-if="changed" v-for="img_name in imgs_path_to_show">
            <img :src="getImagePath(img_name)" class="img-fluid" alt="...">
    </div>
</template>
<script>
export default {
    name: 'ProjectName',
    data() {
        return {
            name: '',
            paths:{
                Doremii: ['Doremii_home.png',
                    'Doremii_home2.png',
                    'Doremii_events.png',
                    'Doremii_map.png',
                ]
            },
            imgs_path_to_show: [],
            changed: false
                
            
        }
    },
    created() {
        this.name = this.$route.params.name
        console.log(this.name)
        this.imgs_path_to_show = this.paths[this.name]
        console.log(this.imgs_path_to_show[0])
        this.changed = true
    },
    methods: {
        getImagePath(imageName) {
            console.log(imageName)
            var tmp = new URL(`../assets/${imageName}`, import.meta.url).href;
            console.log(tmp);
            return tmp;
        }
        
    }
}
</script>