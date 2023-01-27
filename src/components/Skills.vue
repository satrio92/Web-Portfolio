<template>
    <div id="skills" class="w-full bg-primary flex justify-center py-16">
        <div class="flex flex-col items-end pr-16 gap-[52px]">
            <div class="w-[240px] h-[80px] py-3 rounded-lg flex items-center justify-center bg-ringyellow text-[32px] text-primary-dark font-semibold cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in">My Skills</div>
            <ul class="flex flex-col items-end text-[28px] text-secondary font-medium gap-[30px]">
                <li>Programming</li>
                <li>Design</li>
                <li>Editing</li>
            </ul>
        </div>
        <div class="w-[716px] pl-[88px] border-l-4 border-primary-dark flex gap-[72px] flex-wrap">
            <div class="w-[160px] h-[160px] rounded-lg bg-primary-snow border-2 border-secondary cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in" v-for="item in 11" :key="item.id"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    components: {}
}
</script>