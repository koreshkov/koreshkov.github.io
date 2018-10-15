export default {
    metaInfo: {
        title: 'Intro'
    },
    template: `
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
    `,
    data() {
        return {
        };
    },
    computed: {
        title() {
            return this.$route.fullPath;
        }
    }
};
