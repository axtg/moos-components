<template>
    <div>
        <div class="relative">
            <input 
                ref="input"
                type="text" 
                id="filled_success" 
                :value="modelValue"
                aria-describedby="filled_success_help" 
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                placeholder=" " 
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <label for="filled_success" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Filled success</label>
        </div>
        <p 
            id="filled_success_help" 
            class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
            <span class="font-medium">Well done!</span> Some success message.
        </p>
    </div>
<!-- 
    <input
        ref="input"
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    > -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
defineProps({
    modelValue: String,
});
defineEmits(['update:modelValue']);
const input = ref(null);
onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
defineExpose({ focus: () => input.value.focus() });
</script>