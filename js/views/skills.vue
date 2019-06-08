<template>
    <p-section :backdrop="'bg-l-7'">
        <transition name="scroll" mode="out-in">
            <router-view :key="$route.path"></router-view>
        </transition>
    </p-section>
</template>

<script>
export default {
    metaInfo: {
        title: 'Skills'
    },
    template: `

    `,
    data() {
        return {
        };
    }
};
</script>



