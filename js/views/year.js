export default {
    metaInfo() {
        return {
            title: this.$route.params.year
        }
    },
    template: `
        <div class="unit-6">
            <div class="module-rte story-year scroll-fade" v-if="showYear(2002)">
                <time class="year">2002</time>
                <label class="label">/story</label>
                <h1>My first <code>index.html</code></h1>
                <p>I was in 10<sup>th</sup> grade when my friend showed me what magic can happend with the file named <code>index.html</code>. That was a moment when my long journey started.</p>
                <p>It was so exiting and impressing for me that since that moment I'd never missed an opportunity to get inside each site that looked interesting for me.</p>
                <p>My curiosity drived me through tonns of sites. I was discovering the ways that people use to structure code, solve issues and make their own magic. And that finaly gave me enough knowledge to build my first website on commercial base.</p>
            </div>
            <div class="module-rte story-year scroll-fade" v-if="showYear(2009)">
                <time class="year">2009</time>
                <label class="label">/story</label>
                <h1>My first web site</h1>
                <p>
                    It was a medium-sized company where I worked as a courier.
                    And for the further growth they needed a website.
                    That was my chance and I had no right to loose it.
                </p>
                <p>
                    I'd got a permission from the company chief and started my work.
                    After a month full of work, issues and discoveries website was build.
                    It consisted of pure HTML, CSS and JavaScript.
                </p>
                <p>It was very important for the company and a great challenge for me</p>
            </div>
            <div class="module-rte story-year scroll-fade" v-if="showYear(2011)">
                <time class="year">2011</time>
                <label class="label">/story</label>
                <h1>My first job in web agency</h1>
                <ul>
                    <li>My first touch of .Net framework, MVC and Razor</li>
                    <li>I've built my first single page application based on AngularJS</li>
                    <li>Got familliar with pre-processors</li>
                </ul>
            </div>
            <div class="module-rte story-year scroll-fade" v-if="showYear(2015)">
                <time class="year">2015</time>
                <label class="label">/story</label>
                <h1>I'm first time hired by international company</h1>
                <ul>
                    <li>Stated work with Node JS and building tools like Gulp and Webpack</li>
                    <li>Passed Microsoft Exam 70-480</li>
                    <li>Became sertificated Umbraco Master</li>
                    <li>Delivered lecture during "Summer Meetups" event</li>
                </ul>
            </div>
            <div class="module-rte story-year scroll-fade" v-if="showYear(2018)">
                <time class="year">2018</time>
                <label class="label">/story</label>
                <h1>What will be my next first time thing?</h1>
            </div>
        </div>
    `,
    data() {
        return {
        };
    },
    methods: {
        showYear(year) {
            return this.$route.params.year == year;
        }
    }
};
