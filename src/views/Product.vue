<template>
    <div id="product" class="font-poppins">
        <Navbar />
        <div class="text-2xl font-bold text-center mt-5">Product Page</div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Product',
    components: {
        Navbar
    }
}
</script>