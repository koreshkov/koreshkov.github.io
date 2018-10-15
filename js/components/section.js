export default {
    name: 'p-section',
    props: [
        'backdrop'
    ],
    template: `
        <section class="section" :class="backdrop">
            <div class="section-content">
                <slot></slot>
            </div>
        </section>
    `,
    data() {
        return {
            deltaY: 0
        }
    },
    created() {
    }
}