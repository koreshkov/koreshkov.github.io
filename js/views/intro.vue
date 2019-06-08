<template>
        <p-section>
        <div class="unit-8 is-color-invert scroll-fade">
            <div class="module-rte">
                <h1 class="text-center">
                How far your first<br />
                <code>index.html</code><br/>
                can take you?</h1>
            </div>
        </div>
    </p-section>
</template>

<script>
export default {
    metaInfo: {
        title: 'Intro'
    },
    data() {
        return {
        };
    },
    computed: {
        title() {
            return this.$route.fullPath;
        }
    }
}
</script>