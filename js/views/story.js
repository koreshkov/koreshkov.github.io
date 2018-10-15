export default {
    metaInfo: {
        title: 'Story'
    },
    template: `
        <p-section :backdrop="'bg-r-6'">
            <div class="unit-2 scroll-fade">
            </div>
            <transition name="scroll" mode="out-in">
                <router-view :key="$route.path"></router-view>
            </transition>
        </p-section>
    `,
    data() {
        return {
            animationName: 'year-up'
        };
    },
    methods: {
        showYear(year) {
            return this.$route.params.year == year;
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 38) {
                this.animationName = 'year-up';
            }
            if (e.keyCode == 40) {
                this.animationName = 'year-down';
            }
        });
        window.addEventListener('wheel', (e) => {
            if (e.deltaY < 0 ) {
                this.animationName = 'year-up';
            }
            if (e.deltaY > 0) {
                this.animationName = 'year-down';
            }
        });
    }
};
