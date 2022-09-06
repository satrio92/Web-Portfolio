<template>
    <div id="about" class="font-poppins">
        <Navbar />
        <div class="text-2xl font-bold text-center mt-5">About Page</div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'About',
    components: {
        Navbar
    }
}
</script>