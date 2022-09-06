<template>
    <div id="navbar" class="font-poppins text-white flex justify-between items-center px-40 py-5 bg-primary">
        <div class="flex gap-4 items-center">
            <router-link to="/"><img src="../assets/image/logo.png" alt="Logo" class="h-9"></router-link>
            <router-link to="/"><p class="font-k2d font-extrabold text-2xl">Kukuh satrio</p></router-link>
        </div>
        <ul class="flex gap-[42px] font-medium">
            <li class="menu">
                <router-link to="/">Home</router-link>
                <hr class="line border border-white bg-white rounded-full mt-2 hidden">
            </li>
            <li class="menu">
                <router-link to="/about">About</router-link>
                <hr class="line border border-white bg-white rounded-full mt-2 hidden">
            </li>
            <li class="menu">
                <router-link to="/project">Project</router-link>
                <hr class="line border border-white bg-white rounded-full mt-2 hidden">
            </li>
            <li class="menu">
                <router-link to="/product">Product</router-link>
                <hr class="line border border-white bg-white rounded-full mt-2 hidden">
            </li>
            <li class="menu">
                <router-link to="/contact">Contact</router-link>
                <hr class="line border border-white bg-white rounded-full mt-2 hidden">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    components: {}
}
</script>

<style scoped>
a.router-link-exact-active ~ .line {
  display: block;
}

</style>