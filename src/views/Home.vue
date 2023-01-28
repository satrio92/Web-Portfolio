<template>
	<div id="home" class="font-fredoka">
		<header class="w-full h-[760px] bg-primary">
			<Navbar />
			<Hero />
		</header>
		<About />
		<!-- Projects --> 
		<div id="projects" class="w-full bg-primary relative">
			<div class="w-full absolute -top-8 flex justify-center">
				<div class="relative">
					<div class="w-[250px] h-[72px] rounded-lg overflow-hidden pr-[7px] pb-[7px]"></div>
					<router-link to="/" v-scroll-to="'#projects'" class="w-[250px] h-[72px] bg-marineyellow rounded-lg overflow-hidden pr-[7px] pb-[7px] absolute top-0 left-0 z-20 cursor-pointer">
						<div class="w-full h-full bg-ringyellow rounded-br-md flex items-center pt-2 justify-center text-2xl text-primary-dark font-semibold">VIEW PROJECT</div>
					</router-link>
					<div class="w-[250px] h-[72px] bg-black opacity-40 rounded-lg overflow-hidden pr-[7px] pb-[7px] absolute top-2 left-2 z-10"></div>
				</div>
			</div>
			<div class="w-full flex justify-center py-28">
				<div class="w-[977px] h-[560px] overflow-hidden">
					<div class="w-[300%] h-full flex transition-all duration-500 ease-in" :style="{ marginLeft: `-${currentProject * 100}%` }">
						<ProjectCard :name="'Crypverse'"/>
						<ProjectCard :name="'Crypverse 2'"/>
						<ProjectCard :name="'Crypverse 3'"/>
					</div>
				</div>
			</div>
			<div class="h-full absolute right-10 top-0  flex flex-col justify-center gap-8">
				<div class="w-[70px] h-[70px] pl-1 rounded-full border-2 border-secondary flex items-center justify-center hover:border-ringyellow cursor-pointer" style="background-color: rgba(255, 255, 255, 0.1)" @click="slideProject('right')">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path d="M8.93828 26.9384L8.93831 26.9384L19.8787 16L8.93873 5.06196C8.93866 5.06189 8.93859 5.06182 8.93852 5.06175C8.79893 4.92246 8.68817 4.757 8.61259 4.57486C8.53697 4.39262 8.49805 4.19726 8.49805 3.99996C8.49805 3.80266 8.53697 3.60729 8.61259 3.42506C8.68821 3.24282 8.79904 3.07729 8.93873 2.93796L9.29183 3.29196L8.93783 2.93885C9.07717 2.79916 9.2427 2.68833 9.42493 2.61271C9.60717 2.53709 9.80253 2.49817 9.99983 2.49817C10.1971 2.49817 10.3925 2.53709 10.5747 2.61271C10.7569 2.68828 10.9223 2.79902 11.0616 2.93858C11.0617 2.93867 11.0617 2.93876 11.0618 2.93885L23.0609 14.938L8.93828 26.9384ZM8.93828 26.9384C8.65674 27.2199 8.49857 27.6018 8.49857 28C8.49857 28.3981 8.65674 28.78 8.93828 29.0615C9.21982 29.3431 9.60168 29.5012 9.99983 29.5012C10.398 29.5012 10.7798 29.3431 11.0614 29.0615L23.0609 17.062L8.93828 26.9384ZM23.3871 15.4251C23.3115 15.243 23.2009 15.0776 23.0614 14.9384V17.0615C23.2009 16.9223 23.3115 16.7569 23.3871 16.5749C23.4627 16.3926 23.5016 16.1973 23.5016 16C23.5016 15.8027 23.4627 15.6073 23.3871 15.4251Z" fill="white" stroke="white"/>
					</svg>
				</div>
				<div class="w-[70px] h-[70px] pr-1 rounded-full border-2 border-secondary flex items-center justify-center hover:border-ringyellow cursor-pointer" style="background-color: rgba(255, 255, 255, 0.1)" @click="slideProject('left')">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path d="M23.0617 26.9384L23.0617 26.9384L12.1213 16L23.0613 5.06196C23.0613 5.06189 23.0614 5.06182 23.0615 5.06175C23.2011 4.92246 23.3118 4.757 23.3874 4.57486C23.463 4.39262 23.502 4.19726 23.502 3.99996C23.502 3.80266 23.463 3.60729 23.3874 3.42506C23.3118 3.24282 23.201 3.07729 23.0613 2.93796L22.7082 3.29196L23.0622 2.93885C22.9228 2.79916 22.7573 2.68833 22.5751 2.61271C22.3928 2.53709 22.1975 2.49817 22.0002 2.49817C21.8029 2.49817 21.6075 2.53709 21.4253 2.61271C21.2431 2.68828 21.0777 2.79902 20.9384 2.93858C20.9383 2.93867 20.9383 2.93876 20.9382 2.93885L8.93906 14.938L23.0617 26.9384ZM23.0617 26.9384C23.3433 27.2199 23.5014 27.6018 23.5014 28C23.5014 28.3981 23.3433 28.78 23.0617 29.0615C22.7802 29.3431 22.3983 29.5012 22.0002 29.5012C21.602 29.5012 21.2202 29.3431 20.9386 29.0615L8.93906 17.062L23.0617 26.9384ZM8.61292 15.4251C8.68846 15.243 8.79913 15.0776 8.93861 14.9384V17.0615C8.79913 16.9223 8.68846 16.7569 8.61292 16.5749C8.5373 16.3926 8.49838 16.1973 8.49838 16C8.49838 15.8027 8.5373 15.6073 8.61292 15.4251Z" fill="white" stroke="white"/>
					</svg>
				</div>
			</div>
		</div>
		<Skills :skills="skills"/>
		<Contact />
		<ArticleCard />
		<Footer />
	</div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import ProjectCard from '../components/ProjectCard.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import ArticleCard from '../components/ArticleCard.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Home',
	components: {
		Navbar,
		Hero,
		About,
		ProjectCard,
		Skills,
		Contact,
		ArticleCard,
		Footer
	},
	data() {
		return {
			currentProject: 0,
			projectMargin: '-ml-[0px]',
			skills: {
				programming: [
					'html',
					'css',
					'javascript',
					'vuejs',
					'tailwind',
					'reactjs',
					'python',
					'php'
				],
				design: [
					'illustrator',
					'coreldraw',
					'affinity',
					'figma',
					'canva'
				],
				editing: [
					'photoshop',
					'lightroom',
					'picsart',
					'premierpro',
					'aftereffect',
					'filmora'
				]
			}
		}
	},
	methods: {
		slideProject(slide) {
			if(slide == "right") {
				if(this.currentProject == 2) {
					this.currentProject = 0
				} else {
					this.currentProject++
				}
			} else {
				if(this.currentProject == 0) {
					this.currentProject = 2
				} else {
					this.currentProject--
				}
			}
		}
	}
}
</script>

<style>
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-thumb {
	background-color: rgb(161, 159, 159);
	border-radius: 10px;
}
</style>