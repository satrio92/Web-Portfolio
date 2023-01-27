<template>
	<div id="project-card" class="flex gap-[72px] items-center justify-center w-full h-full">
		<div class="w-[435px] h-[560px] flex items-center relative">
			<div class="w-[320px] h-[480px] bg-primary-snow absolute left-0 rounded-2xl border-[5px] border-secondary overflow-hidden">
				<img src="../assets/image/projects/crypverse/second.png" alt="crypverse second image">
			</div>
			<div class="w-[320px] h-[560px] bg-black opacity-50 absolute left-[125px] top-[15px] rounded-2xl"></div>
			<div class="w-[320px] h-[560px] bg-primary-snow absolute left-[115px] rounded-2xl border-[5px] border-secondary overflow-hidden">
				<img src="../assets/image/projects/crypverse/main.png" alt="crypverse main image" class="h-full">
			</div>
		</div>
		<div class="w-[470px] flex flex-col gap-8">
			<div class="flex flex-col gap-[12px]">
				<div class="relative">
					<div class="w-16 h-16 rounded-[6px]"></div>
					<div class="w-16 h-16 rounded-[6px] bg-black opacity-50 absolute top-1 left-1"></div>
					<div class="w-16 h-16 rounded-[6px] bg-primary-snow overflow-hidden absolute top-0 left-0">
						<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
							<g clip-path="url(#clip0_300_280)">
							<rect width="64" height="64" rx="6" fill="white"/>
							<path d="M72 -9.5C78 60 31.5 77 -4.5 74V-9.5H72Z" fill="#FFD33E"/>
							<path d="M32 10.4615L51.0526 21.4615V43.4616L32 54.4616L12.9474 43.4616V21.4615L32 10.4615Z" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="31.8462" cy="10.1538" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="50.9229" cy="21.5385" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="50.9229" cy="43.0769" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="31.8462" cy="53.8461" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="12.4615" cy="43.0769" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="12.4615" cy="21.5385" r="2.15385" fill="white" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M31.6924 12.4615V18" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M48.9233 22.3077L44.1541 25.8462" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M48.9228 42L43.9998 38.6154" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M31.8459 51.2307V45.6923" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M14.6155 42.0001L19.3847 38.7693" stroke="#0B1E37" stroke-width="1.23077"/>
							<path d="M14.7693 22.4615L19.2308 25.5385" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="31.5383" cy="32" r="11.6923" stroke="#FFBC8C" stroke-width="3.07692"/>
							<circle cx="31.6923" cy="32.1539" r="13.6923" stroke="#0B1E37" stroke-width="1.23077"/>
							<circle cx="31.8461" cy="28.6154" r="2.76923" stroke="#0B1E37" stroke-width="1.53846"/>
							<path d="M30.3076 31.3846H32.1538V36.9231C32.1538 37.6028 31.6027 38.1539 30.923 38.1539C30.5831 38.1539 30.3076 37.8784 30.3076 37.5385V31.3846Z" fill="#0B1E37"/>
							<rect x="34.6155" y="36.923" width="1.53846" height="4.30769" rx="0.769231" transform="rotate(90 34.6155 36.923)" fill="#0B1E37"/>
							<rect x="34" y="33.8462" width="1.53846" height="3.07692" rx="0.769231" transform="rotate(90 34 33.8462)" fill="#0B1E37"/>
							</g>
							<defs>
							<clipPath id="clip0_300_280">
							<rect width="64" height="64" rx="6" fill="white"/>
							</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<p class="text-[28px] text-secondary font-semibold">{{ name }}</p>
			</div>
			<div class="flex flex-col gap-[15px]">
				<h4 class="text-5xl text-secondary font-semibold tracking-tighter">Secure your account data with Crypverse</h4>
				<div class="flex gap-1">
					<div class="px-3 py-[5px] bg-ringyellow rounded-md text-xs text-primary-dark font-semibold">WEB APP</div>
					<div class="px-3 py-[5px] bg-ringyellow rounded-md text-xs text-primary-dark font-semibold">CRYPTOGRAPHY</div>
					<div class="px-3 py-[5px] bg-ringyellow rounded-md text-xs text-primary-dark font-semibold">SECURITY</div>
				</div>
			</div>
			<p class="text-lg text-secondary font-medium">Aliquet porttitor lacus imperdiet proin fermentum porta non pulvinar neque porttitor lacus luctus accumsan tortor posuere ac ut consequat.</p>
			<div class="relative">
				<div class="w-[192px] h-[52px] bg-black opacity-50 rounded-md absolute top-[6px] left-[6px]"></div>
				<button class="bg-marineyellow w-[192px] h-[52px] rounded-md overflow-hidden pr-[5px] pb-[5px] absolute hover:top-1 hover:left-1 transition-all duration-300 ease-in">
					<a href="#">
						<div class="w-full h-full bg-ringyellow rounded-[4px] text-[22px] text-primary-dark font-semibold flex items-center justify-center">Check Now!</div>
					</a>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'ProjectCard',
    components: {},
		props: ['name']
}
</script>