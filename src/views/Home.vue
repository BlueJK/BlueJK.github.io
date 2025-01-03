<template>
    <div>

    
        <div class="text-bg-dark p-5 m-4 h-100 rounded-3">
            
            <div class="container-fluid py-5">
                <h1 class="display-4 fw-bold">Welcome to BlueJK's Page!</h1>
                <p class="lead">Here contains some explanation of my projects and my contacts.</p>
                <hr class="my-4">
                <p class="lead">
                    <router-link class="btn btn-primary btn-lg" to="./projects" role="button">Visit Projects</router-link>
                </p>
            </div>
            
        </div>
        <img src="@/assets/name.png" class="img-fluid" alt="...">
    </div>
</template>

<style scoped>
    .h1-custom {
        text-align: center;
        margin-top: 20px;
    }
</style>