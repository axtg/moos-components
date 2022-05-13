<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <breadcrumb-link />
        </ol>
    </nav>
</template>

<script>
// import BreadcrumbLink

export default {
    props: {
        path: {
            type: Array,
            default: ['Home']
        },
    }
}
</script>
