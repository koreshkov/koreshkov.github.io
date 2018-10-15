export default {
    metaInfo: {
        title: 'Contact'
    },
    template: `
        <p-section :backdrop="''">
            <div class="unit-8 is-color-invert scroll-fade">
                <div class="module-rte">
                    <label class="label">/contact</label>
                    <h1>Feel free to contact me</h1>
                    <div class="row">
                        <div class="col-6">
                            <form @submit.prevent="sendEmail()">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="name" v-model="message.name" required />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="email" v-model="message.email" required />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="subject" v-model="message.subject" required />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="message" v-model="message.text" required></textarea>
                                </div>
                                <div class="form-btn">
                                    <button class="btn is-primary" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-5 offset-1">
                            <div class="social-link">
                                <img class="social-link-icon" src="/images/linkedin.svg">
                                <div class="social-link-info">
                                    <h3 class="social-link-title">Linked In</h3>
                                    <p class="social-link-url"><a href="https://www.linkedin.com/in/andrei-koreshkov/" target="_blank" href="">https://www.linkedin.com/in/andrei-koreshkov/</a></p>
                                </div>
                            </div>
                            <div class="social-link">
                                <img class="social-link-icon" src="/images/github.svg">
                                <div class="social-link-info">
                                    <h3 class="social-link-title">Github</h3>
                                    <p class="social-link-url"><a href="https://github.com/koreshkov" target="_blank" href="">https://github.com/koreshkov</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </p-section>
    `,
    data() {
        return {
            message: {
                name: '',
                email: '',
                subject: '',
                text: ''
            }
        };
    },
    computed: {
        title() {
            return this.$route.fullPath;
        }
    },
    methods: {
        sendEmail() {
            const mailSubject = encodeURI(this.message.subject);
            const mailBody = encodeURI(`From: ${this.message.email}.
${this.message.text}
${this.message.name}.`);
            const mailTo = `mailto:koreshkov.andrei@gmail.com?subject=${mailSubject}&body=${mailBody}`;
            // alert(mailTo);
            window.location = mailTo;
        }
    }
};
