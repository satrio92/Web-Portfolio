<template>
  <div id="contact" class="h-[546px] relative flex flex-col">
		<div class="w-full h-[265px] bg-primary"></div>
		<div class="w-full h-full bg-secondary"></div>
		<div class="w-full flex justify-center py-12 absolute">
			<div class="w-[1000px] h-[450px] rounded-xl border-[6px] border-primary-dark bg-ringyellow flex flex-col relative">
				<div class="absolute bottom-0 left-10">
					<label for="name">
						<img src="../assets/image/envelope.png" alt="envelope illustration">
					</label>
				</div>
				<div class="w-full h-full flex items-center justify-end pr-12">
					<div class="flex flex-col gap-6">
						<div class="flex gap-5">
							<input type="text" name="name" id="name" placeholder="Name" class="px-4 py-3 bg-secondary opacity-50 rounded-[6px] w-[280px] text-primary-dark font-medium outline-none">
							<input type="text" name="email" id="email" placeholder="Email" class="px-4 py-3 bg-secondary opacity-50 rounded-[6px] w-[280px] text-primary-dark font-medium outline-none">
						</div>
						<textarea name="message" id="message" placeholder="Message" cols="30" rows="5" class="px-4 py-3 bg-secondary opacity-50 rounded-[6px] w-[580px] text-primary-dark font-medium outline-none"></textarea>
					</div>
				</div>
				<div class="w-full h-[56px] bg-primary"></div>
				<div class="w-full h-[56px] bg-primary absolute bottom-0"></div>
				<div class="w-[210px] h-[55px] rounded-[6px] bg-black opacity-50 absolute bottom-7 right-[60px]"></div>
				<button class="w-[210px] h-[55px] rounded-[6px] border-2 border-primary-dark flex absolute bottom-8 right-16 overflow-hidden items-center group hover:bottom-7 hover:right-[60px] transition-all duration-300 ease-in">
					<div class="w-[36px] h-full bg-ringyellow"></div>
					<div class="w-full h-full bg-secondary text-lg text-primary font-medium flex items-center justify-center">Send Message</div>
					<div class="w-8 h-8 rounded-full bg-primary absolute left-[14px] flex items-center justify-center text-white group-hover:rotate-45">
						<i class="bi bi-send group-hover:-ml-[1px] group-hover:mt-[1px]"></i>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	components: {}
}
</script>