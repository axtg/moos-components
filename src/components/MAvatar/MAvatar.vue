<template>
    <div class="relative">
        <img v-if="image" :class="['w-10 h-10', style]" :src="img" alt="">
        <svg v-else class="w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
        </svg>
        <span :class="['absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full', 'bg-'+status+'-400']"></span>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: null
        },
        status: {
            type: String,
            default: 'green'
        },
        size: {
            type: String,
            default: 'sm'
        },
        style: {
            type: String,
            default: 'rounded'
        },
    }
}
</script>
