<template>
    <div id="shortenlink" class="font-poppins">
        <Navbar />
        <div class="w-full flex flex-col items-center">
            <div class="text-3xl font-bold text-center mt-14 mb-8 text-primary">Shortenlink</div>
            <div class="w-[680px] flex flex-col gap-6 items-center">
                <input type="text" class="border-2 border-primary text-primary px-4 py-3 w-full rounded-md outline-none font-medium" placeholder="http://yourlink" v-model="shortlink.fullUrl">
                <div class="flex">
                    <div class="bg-primary py-3 pr-4 pl-6 rounded-l-md font-semibold text-xl">
                        <span class="text-white">kukuhsatrio.site/</span>
                    </div>
                    <input type="text" class="text-lg text-primary font-medium border-2 border-primary py-3 px-4 outline-none rounded-r-md" placeholder="your custom link" v-model="shortlink.shortUrl">
                </div>
                <div class="relative w-[192px] h-[52px]">
                    <div class="w-[192px] h-[52px] bg-black opacity-50 rounded-md absolute top-[6px] left-[6px]"></div>
                    <button class="bg-marineyellow w-[192px] h-[52px] rounded-md overflow-hidden pr-[5px] pb-[5px] absolute hover:top-1 hover:left-1 transition-all duration-300 ease-in" @click="createNewLink()">
                        <div class="w-full h-full bg-ringyellow rounded-[4px] text-[22px] text-primary-dark font-semibold flex items-center justify-center">Shorten</div>
                    </button>
                </div>
                <div class="mt-3 font-medium w-[580px] py-3 rounded-md flex justify-center items-center" :class="'bg-' + message.color + '-200'" v-if="message">{{ message.content }}</div>
            </div>
        </div>

				<div class="w-full flex flex-col items-center mb-16">
					<div class="text-2xl font-bold text-center mt-20 mb-8 text-primary">List Shortlink</div>
					<div class="flex flex-col gap-6">
						<div class="flex gap-6">
							<div class="flex">
								<div class="w-[55px] text-center bg-primary h-[48px] flex justify-center items-center text-white font-medium rounded-l-md">NO</div>
								<div class="w-[600px] border-y-2 border-y-primary h-[48px] flex justify-center items-center text-primary font-semibold">FULL URL</div>
								<div class="w-[300px] border-y-2 border-x-2 border-primary h-[48px] flex justify-center items-center text-primary font-semibold rounded-r-md">SHORT URL</div>
							</div>
							<div class="w-[122px] h-[48px] flex justify-center items-center border-2 border-primary rounded-md text-primary font-semibold">ACTION</div>
							<div class="w-[68px] h-[48px] flex justify-center items-center border-2 border-primary rounded-md text-primary font-semibold">CLICKS</div>
						</div>
						<div class="flex flex-col gap-3">
							<div class="flex gap-6" v-for="item, index in allLinks" :key="item.id">
								<div class="flex">
									<div class="w-[55px] text-center bg-primary py-2 flex justify-center items-center text-white font-medium rounded-l-md">{{ index + 1 }}</div>
									<div class="text-sm w-[600px] border-y-2 border-y-primary py-2 px-4 flex items-center text-primary font-medium">{{ item.fullUrl }}</div>
									<div class="text-sm w-[300px] border-y-2 border-x-2 border-primary py-2 px-4 flex items-center text-primary font-medium rounded-r-md"><a :href="'/' + item.shortUrl">{{ 'https://kukuhsatrio.site/' + item.shortUrl }}</a></div>
								</div>
								<div class="flex gap-3">
									<div class="w-[55px] py-2 flex justify-center items-center border-2 border-primary rounded-md text-primary hover:bg-primary hover:text-white cursor-pointer">
										<i class="bi bi-pencil"></i>
									</div>
									<div class="w-[55px] py-2 flex justify-center items-center border-2 border-primary rounded-md text-primary hover:bg-primary hover:text-white cursor-pointer">
										<i class="bi bi-trash"></i>
									</div>
								</div>
								<div class="text-xs w-[68px] py-2 flex justify-center items-center border-2 border-primary rounded-md text-primary">{{ item.clicks + ' clicks' }}</div>
							</div>
						</div>
					</div>
				</div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import axios from 'axios';

export default {
    name: 'Shortenlink',
    components: {
        Navbar
    },
    data() {
        return {
            shortlink: {},
            message: '',
            allLinks: {}
        }
    },
    methods: {
        async errorHandle() {
            this.message = {}
            this.message.color = "red"
            this.message.content = 'The url already exists, please use another custom url'
            // if(await err.response.data.split(' ')[0] == 'E11000') {
            // }
            setTimeout(this.clearPopup, 3000)
        },
        successHandle(res) {
            console.log(res)
            this.$router.push({ name: 'Shortenlink' })
            // window.location.href = '/shortlinks'
            this.message = {}
            this.message.color = "green"
            this.message.content = "Shortlink successfully created"
            setTimeout(this.clearPopup, 3000)
        },
        createNewLink() {
            console.log(this.shortlink)
            // axios.post('https://satrio-server.vercel.app/shortlinks', this.shortlink)
            axios.post('https://satrio-server.vercel.app/shortlinks', this.shortlink)
            .then((res) => this.successHandle(res))
            .catch(() => this.errorHandle())
        },
		clearPopup() {
			this.message = ''
		},
        setAllLinks(res) {
            console.log(res.data)
            this.allLinks = res.data
        },
        getAllLinks() {
            axios.get('https://satrio-server.vercel.app/shortlinks')
            .then((res) => this.setAllLinks(res))
            .catch((err) => console.log(err))
        }
    },
    mounted() {
        this.getAllLinks()
    }
}
</script>