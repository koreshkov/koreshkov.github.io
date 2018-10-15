export default {
    metaInfo: {
        title: 'Skills'
    },
    template: `
        <p-section :backdrop="'bg-l-7'">
            <transition name="scroll" mode="out-in">
                <router-view :key="$route.path"></router-view>
            </transition>
        </p-section>
    `,
    data() {
        return {
        };
    }
};
