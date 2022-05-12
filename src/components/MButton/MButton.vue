<template>
    <button 
        class="
            py-2
            px-4
            font-semibold
            rounded-lg
            shadow-md
            text-white
            bg-green-500
            hover:bg-green-700"
        :type="type"
    >
        <!-- Use this slot to set the label -->
        <slot></slot>
    </button>
</template>

<script>
/**
 * **Description**
 * The custom HTML `<button>` component.
 * 
 * **Example**
 * 
 *  * ```html
 * <mbutton type="submit">Call to action</mbutton>
 * ```
 *
 * @author Xander Groesbeek
 */
export default {
    name: 'MButton',
    props: {
        /**
         * Use this directive to create two-way data bindings with the component.
         * It automatically picks the correct way to update the element based on the input type.
         */
        type: {
            type: String,
            required: true,
            default: 'submit'
        },
        /**
         * This Boolean property indicates that the user cannot interact with the control.
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style lang="css" scoped>
</style>
