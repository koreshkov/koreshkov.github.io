<template>
    <div>
        <p-nav></p-nav>
        <main class="main" :class="navDirection">
            <transition name="scroll" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
export default {
    metaInfo: {
        titleTemplate: '%s - My index.html'
    },
    data: () => ({
    }),
    computed: {
        navDirection() {
            return this.$store.state.navDirection
        }
    }
};
</script>


