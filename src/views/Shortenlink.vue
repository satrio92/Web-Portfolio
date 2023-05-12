<template>
    <div id="shortenlink" class="font-poppins">
        <Navbar />
        <!-- <div class="w-full flex flex-col items-center">
            <div class="text-2xl font-bold text-center mt-5">Shortenlik</div>
            <div class="relative w-[470px] flex flex-col gap-8 items-center bg-pink-300">
                <input type="text" class="border-2 border-primary px-4 py-3 w-full" placeholder="http://">
                <div class="relative bg-slate-400">
                    <div class="w-[192px] h-[52px] bg-black opacity-50 rounded-md absolute top-[6px] left-[6px]"></div>
                    <button class="bg-marineyellow w-[192px] h-[52px] rounded-md overflow-hidden pr-[5px] pb-[5px] absolute hover:top-1 hover:left-1 transition-all duration-300 ease-in">
                        <div class="w-full h-full bg-ringyellow rounded-[4px] text-[22px] text-primary-dark font-semibold flex items-center justify-center">Check Now!</div>
                    </button>
                </div>
            </div>
        </div> -->
        <div class="w-full flex flex-col items-center">
            <div class="text-3xl font-bold text-center mt-14 mb-8">Shortenlink</div>
            <div class="w-[680px] flex flex-col gap-6 items-center">
                <input type="text" class="border-2 border-primary px-4 py-3 w-full rounded-md outline-none font-medium" placeholder="http://yourlink">
                <div class="flex">
                    <div class="bg-primary py-3 pr-4 pl-6 rounded-l-md font-semibold text-xl">
                        <span class="text-white">kukuhsatrio.site/</span>
                    </div>
                    <input type="text" class="text-lg text-primary font-medium border-2 border-primary py-3 px-4 outline-none rounded-r-md" placeholder="your custom link">
                </div>
                <div class="relative w-[192px] h-[52px]">
                    <div class="w-[192px] h-[52px] bg-black opacity-50 rounded-md absolute top-[6px] left-[6px]"></div>
                    <button class="bg-marineyellow w-[192px] h-[52px] rounded-md overflow-hidden pr-[5px] pb-[5px] absolute hover:top-1 hover:left-1 transition-all duration-300 ease-in">
                        <div class="w-full h-full bg-ringyellow rounded-[4px] text-[22px] text-primary-dark font-semibold flex items-center justify-center">Shorten</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Shortenlink',
    components: {
        Navbar
    }
}
</script>