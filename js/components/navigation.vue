<template>
    <nav class="nav" :class="$route.meta.navigationTheme">
        <ul>
            <li v-for="(navGroup, i) in navigation" :key="i">
                <router-link :to="navGroup[0]" :class="{'active': isActive(navGroup)}"></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'PNav',
    data: () => ({
        isScrolling: false
    }),
    computed: {
        navigation() {
            return this.$store.state.navigation;
        },
        flatNav() {
            return this.$store.getters.flatNav;
        }
    },
    methods: {
        isActive(navGroup) {
            return navGroup.indexOf(this.$route.fullPath) != -1;
        },
        scroll(direction) {
            if (!this.isScrolling) {
                const nextRoute = this.getNextRoute(direction);
                this.scrollDirection = direction > 0 ? 'down' : 'up';
                this.updateIsScrolling();
                this.$router.push(nextRoute);
            }
        },
        updateIsScrolling() {
            this.isScrolling = true;
            setTimeout(() => {
                this.isScrolling = false;
            }, 600);
        },
        getNextRoute(direction) {
            let nextRoute = '/';
            const activePath = this.$route.path;
            let nav = this.flatNav;
            // console.log('nav', nav);
            const activeRouteIndex = nav.indexOf(activePath);
            const nextRouteIndex = (activeRouteIndex + direction + nav.length) % nav.length;
            nextRoute = nav[nextRouteIndex];
            // console.log(`from: ${activeRouteIndex}, to: ${nextRouteIndex} (${nextRoute})`);
            return nextRoute;
        }
    },
    created() {
        window.addEventListener('wheel', (e) => {
            if (e.deltaY < -50 ) {
                this.scroll(-1);
            }
            if (e.deltaY > 50) {
                this.scroll(1);
            }
        });
    }
}
</script>