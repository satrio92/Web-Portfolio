<template>
  <div id="article-card" class="w-full flex justify-center py-12">
		<div class="w-[1000px] h-[255px] rounded-xl border-[6px] border-primary-dark bg-primary overflow-hidden relative">
			<svg xmlns="http://www.w3.org/2000/svg" width="496" height="250" viewBox="0 0 496 250" fill="none">
				<path d="M352 311.5L496 -38H-43.5V311.5H352Z" fill="#FFD33E"/>
			</svg>
			<img src="../assets/image/book.png" alt="book illustration" class="absolute bottom-0 left-0">
			<p class="text-[32px] text-secondary font-semibold w-[450px] absolute top-7 left-[500px]">Read my article about coding design and many more</p>
			<div class="w-[190px] h-[55px] rounded-[6px] bg-black opacity-50 absolute bottom-7 left-[529px]"></div>
			<button >
				<a href="#" class="w-[190px] h-[55px] rounded-[6px] border-2 border-primary-dark flex absolute bottom-8 left-[525px] overflow-hidden items-center group hover:bottom-7 hover:left-[529px] transition-all duration-300 ease-in">
					<div class="w-[36px] h-full bg-ringyellow"></div>
					<div class="w-full h-full bg-secondary text-lg text-primary font-medium flex items-center justify-center">Read Article</div>
					<div class="w-8 h-8 rounded-full bg-primary absolute left-[14px] flex items-center justify-center text-white -rotate-90 group-hover:rotate-0">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M4.875 14.1686L6.80399 9.54292C7.00942 9.0503 7.00942 8.49599 6.80399 8.00337L4.875 3.37764L13.5 8.77315L4.875 14.1686ZM5.61638 15.0158L14.2403 9.62027C14.3611 9.51468 14.4579 9.38445 14.5243 9.23834C14.5906 9.09223 14.625 8.93362 14.625 8.77315C14.625 8.61267 14.5906 8.45406 14.5243 8.30795C14.4579 8.16184 14.3611 8.03161 14.2403 7.92602L5.6175 2.53052C4.88738 1.89377 3.75 2.41127 3.75 3.37764L5.67899 8.00337C5.88442 8.49599 5.88442 9.0503 5.67899 9.54292L3.75 14.1686C3.74981 14.3849 3.81197 14.5967 3.92903 14.7785C4.04609 14.9604 4.21309 15.1046 4.41003 15.194C4.60697 15.2834 4.8255 15.3141 5.03945 15.2825C5.2534 15.2509 5.45371 15.1583 5.61638 15.0158Z" fill="white"/>
						</svg>
					</div>
				</a>
			</button>
		</div>
		</div>  
</template>

<script>
export default {
	name: 'ArticleCard',
	components: {}
}
</script>