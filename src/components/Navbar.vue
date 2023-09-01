<template>
  <div id="navbar" class="w-full flex justify-center pt-[39px]">
		<div class="md:w-[calc(100%-52px)] lg:w-[calc(100%-52px)] xl:w-[1132px] h-[100px] flex items-center relative">
			<div class="w-[68px] h-full border-y-[2.5px] border-l-[2.5px] border-primary-dark bg-omugray rounded-l-lg mr-1 flex items-center pl-[15px]">
				<div class="flex flex-col gap-[10px]">
					<div class="flex justify-end">
						<div class="w-[7px] h-[7px] rounded-full bg-primary"></div>
					</div>
					<div class="flex gap-[10px]">
						<div class="w-[7px] h-[7px] rounded-full bg-primary"></div>
						<div class="w-[7px] h-[7px] rounded-full bg-primary"></div>
					</div>
				</div>
			</div>
			<div class="w-[180px] h-full border-y-[2.5px] border-primary-dark bg-secondary flex items-center pl-[52px] tracking-[.3em]">
				<router-link to="/" class="flex flex-col text-[15px] text-primary font-fredoka font-semibold">
					<p>KUKUH</p>
					<P>SATRIO</P>
				</router-link>
			</div>
			<div class="md:w-[calc(100%-180px)] xl:w-[880px] h-full border-y-[2.5px] border-r-[2.5px] border-primary-dark bg-primary rounded-r-lg flex items-center px-10">
				<ul class="flex justify-center gap-[72px] text-lg text-secondary font-fredoka font-semibold tracking-widest w-full">
					<li><router-link to="/" v-scroll-to="'#about'">ABOUT</router-link></li>
					<li><router-link to="/" v-scroll-to="'#projects'">PROJECTS</router-link></li>
					<!-- <li><router-link to="/" v-scroll-to="'#skills'">SKILLS</router-link></li> -->
					<li><router-link to="/shortenlink">SHORTENLINK</router-link></li>
				</ul>
				<ul class="flex gap-3 items-center justify-center w-[250px]">
					<li>
						<a href="https://www.instagram.com/kukuhsatrio_/" target="_blank" class="w-12 h-12 rounded-full bg-primary-snow flex justify-center items-center hover:bg-primary hover:w-[52px] hover:h-[52px] hover:border-2 hover:border-ringyellow">
							<i class="bi bi-instagram text-lg text-secondary"></i>
						</a>
					</li>
					<li>
						<a href="https://www.behance.net/satriodesign" target="_blank" class="w-12 h-12 rounded-full bg-primary-snow flex justify-center items-center hover:w-[52px] hover:h-[52px] hover:border-[2.5px] hover:border-ringyellow">
							<i class="bi bi-behance text-lg text-secondary"></i>
						</a>
					</li>
					<li>
						<a href="https://github.com/satrio92" target="_blank" class="w-12 h-12 rounded-full bg-primary-snow flex justify-center items-center hover:w-[52px] hover:h-[52px] hover:border-[2.5px] hover:border-ringyellow">
							<i class="bi bi-github text-lg text-secondary"></i>
						</a>
					</li>
				</ul>
			</div>
			<router-link to="/" class="w-[55px] h-[55px] rounded-[4px] bg-primary flex justify-center items-center absolute left-[54px]">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1254 1.13927C24.6601 1.33899 25.1804 1.56242 25.6854 1.80802C26.588 2.24696 27.4417 2.75669 28.2414 3.32839L13.7851 17.7747L20.8522 24.8894L17.5517 28.1906L7.17348 17.8154L20.0985 4.90863C13.4704 3.75401 6.9397 7.8333 5.16489 14.457C3.94181 19.0216 5.27892 23.669 8.296 26.8748L4.96203 30.2087C0.795934 25.8504 -1.06174 19.4866 0.61278 13.2372C3.16482 3.7129 12.9546 -1.93926 22.479 0.61278C23.0416 0.763535 23.5907 0.939548 24.1254 1.13927Z" fill="white"/>
					<path d="M6.70417 31.8572L12.0603 32.7499L27.0503 17.7689L16.5477 7.53578L13.3713 10.696L20.4389 17.8089L6.70417 31.8572Z" fill="black" fill-opacity="0.2"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0643 30.699L28.0143 17.7715L17.5117 7.53841L14.3352 10.6987L21.4028 17.8115L7.09277 32.1071C8.35714 33.063 9.76463 33.8607 11.2937 34.463L11.2937 34.463C11.9215 34.7103 12.5698 34.9246 13.2371 35.1034C22.7615 37.6555 32.5513 32.0033 35.1033 22.479C36.8148 16.0918 34.8366 9.5852 30.4752 5.22217L27.1423 8.55505C30.3542 11.7664 31.8113 16.5568 30.5513 21.2593C28.7271 28.0672 21.8787 32.1872 15.0643 30.699Z" fill="white"/>
				</svg>
			</router-link>
		</div>
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