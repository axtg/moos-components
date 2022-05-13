<template>
    <div id="alert-1" :class="'flex p-4 mb-4 bg-'+variant+'-100 border-t-4 border-'+variant+'-500 dark:bg-'+variant+'-200'" role="alert">
        <icon :name="icon" class="mr-2 w-4 h-4 fill-indigo-400 group-hover:fill-white" />
        <div class="ml-3 text-sm font-medium text-blue-700">
            {{ $slot }}
        </div>
        <button 
            type="button" 
            :class="'ml-auto -mx-1.5 -my-1.5 bg-'+variant+'-100 dark:bg-'+variant+'-200 text-'+variant+'-500 rounded-lg focus:ring-2 focus:ring-'+variant+'-400 p-1.5 hover:bg-'+variant+'-200 dark:hover:bg-'+variant+'-300 inline-flex h-8 w-8'" 
            :aria-label="action"
            data-dismiss-target="#alert-1" 
        >
            <span class="sr-only">{{ action }}</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</template>

<script>
import { MIcon as Icon } from '../index.js'

export default {    
    components: {
        Icon,
    },

    props: {
        action: {
            type: String,
            default: 'Close'
        },
        icon: {
            type: String,
            default: 'cheveron-right'
        },
        variant: {
            type: String,
            default: 'primary',
        },
    }
}
</script>