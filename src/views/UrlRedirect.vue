<template>
    <div id="contact" class="font-poppins">
        <!-- <Navbar /> -->
        <!-- <div class="text-2xl font-bold text-center mt-5">The url is not found!</div> -->
        <div class="w-full h-screen flex justify-center items-center" v-if="notfound">
            <img src="../assets/image/url-not-found.svg" alt="">
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'UrlRedirect',
    components: {
        Navbar
    },
    data() {
        return {
            message: '',
            notfound: false
        }
    },
    methods: {
        redirect() {
            axios.get('https://satrio-server.vercel.app/' + this.$route.params.shorturl)
            .then((res) => window.location.href = res.data)
            .catch(() => this.notfound = true)
        }
    },
    mounted() {
        this.redirect()
    }
}
</script>