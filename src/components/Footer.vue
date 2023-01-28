<template>
  <div class="w-full h-[300px] bg-primary mt-16 flex justify-center gap-[235px] items-center">
		<div class="flex items-center gap-3">
			<router-link to="/" class="w-[75px] h-[75px] bg-primary-snow border-2 border-secondary rounded-lg flex items-center justify-center shadow-lg">
				<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2421 0.982137C34.8789 1.42071 36.437 2.00624 37.9062 2.72072L37.9061 2.72078C39.2188 3.35921 40.4605 4.1006 41.6236 4.93211L20.5963 25.9449L30.8757 36.2936L26.0751 41.0952L10.9794 26.0041L29.7794 7.23068C20.1385 5.55134 10.6394 11.4848 8.05788 21.1192C6.27884 27.7587 8.22377 34.5187 12.6123 39.1815L7.76299 44.0309C1.70316 37.6914 -0.998956 28.4351 1.43673 19.345C5.14878 5.49141 19.3885 -2.72991 33.2421 0.982137Z" fill="white"/>
					<path d="M10.297 46.4285L18.0877 47.7269L39.8914 25.9363L24.6149 11.0518L19.9946 15.6486L30.2747 25.9946L10.297 46.4285Z" fill="black" fill-opacity="0.2"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4575 44.7438L41.2934 25.9407L26.0169 11.0562L21.3966 15.653L31.6767 25.999L10.8623 46.7922C12.7014 48.1826 14.7487 49.343 16.9729 50.219L16.973 50.2188C17.8859 50.5784 18.8286 50.89 19.799 51.15C33.6526 54.8621 47.8923 46.6408 51.6044 32.7872C54.0937 23.4968 51.2164 14.0327 44.8726 7.68652L40.0249 12.5343C44.6967 17.2054 46.8162 24.1732 44.9834 31.0131C42.3301 40.9154 32.3692 46.9081 22.4575 44.7438Z" fill="white"/>
				</svg>
			</router-link>
			<router-link to="/" class="text-[36px] text-secondary font-semibold w-7 leading-10 tracking-[.2em]">KUKUH SATRIO</router-link>
		</div>
		<div class="flex flex-col gap-7">
			<ul class="flex border-2 border-secondary rounded-lg bg-primary-snow text-lg text-secondary font-medium">
				<router-link to="/" class="py-7 px-12" active-class="bg-ringyellow text-primary-dark font-semibold" exact>HOME</router-link>
				<router-link to="/about" class="py-7 px-12" active-class="bg-ringyellow text-primary-dark font-semibold" exact>ABOUT</router-link>
				<router-link to="/projects" class="py-7 px-12" active-class="bg-ringyellow text-primary-dark font-semibold" exact>PROJECTS</router-link>
				<router-link to="/contact" class="py-7 px-12" active-class="bg-ringyellow text-primary-dark font-semibold" exact>CONTACT</router-link>
			</ul>
			<div class="flex justify-between items-center">
				<div class="flex text-xs text-secondary">
					<div class="pr-2 border-r-2 border-secondary py-[1px]">2023</div>
					<div class="pl-2 py-[1px]">COPYRIGHT ALL RIGHTS RESERVED</div>
				</div>
				<div class="flex gap-7">
					<a href="https://www.instagram.com/kukuhsatrio_/" target="_blank" class="w-[60px] h-[60px] rounded-lg border-2 border-secondary bg-primary-snow flex items-center justify-center text-[28px] text-secondary">
						<i class="bi bi-instagram"></i>
					</a>
					<a href="https://www.behance.net/satriodesign" target="_blank" class="w-[60px] h-[60px] rounded-lg border-2 border-secondary bg-primary-snow flex items-center justify-center text-[28px] text-secondary">
						<i class="bi bi-behance"></i>
					</a>
					<a href="https://github.com/satrio92" target="_blank" class="w-[60px] h-[60px] rounded-lg border-2 border-secondary bg-primary-snow flex items-center justify-center text-[28px] text-secondary">
						<i class="bi bi-github"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	components: {}
}
</script>
