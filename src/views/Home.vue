<template>
    <div id="home" class="font-poppins">
        <header class="w-full h-[800px] bg-primary">
            <Navbar />
            <div class="text-2xl text-center text-white font-bold mt-5">Home Page</div>
        </header>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Home',
    components: {
        Navbar
    }
}
</script>