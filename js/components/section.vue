<template>
    <section class="section" :class="backdrop">
        <div class="section-content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'p-section',
    props: [
        'backdrop'
    ],
    data() {
        return {
            deltaY: 0
        }
    },
    created() {
    }
}
</script>

