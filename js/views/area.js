export default {
    metaInfo: {
        title: 'Skills'
    },
    template: `
        <div class="unit-7">
            <div class="module-rte scroll-fade" v-if="showSkills(area.name)" v-for="area in skills">
                <label class="label">/skills</label>
                <h1 v-html="area.title"></h1>
                <div class="row">
                    <div :class="'col-' + Math.floor(12 / area.items.length)" v-for="skill in area.items">
                        <img class="skill-icon" :src="'/images/' + skill.icon" v-if="skill.icon">
                        <h3 class="skill-title">{{skill.title}}</h3>
                        <p v-html="skill.summary"></p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            skills: [{
                name: 'frontend',
                title: 'What do I use for <b>the frontend</b>?',
                items: [{
                    title: 'HTML5',
                    icon: 'html5.svg',
                    summary: 'SEO friendly, semantic and valid layout markup using benefits of modern HTML5 standart.'
                }, {
                    title: 'CSS3',
                    icon: 'css3.svg',
                    summary: 'Responsive website layout based in latest features of CSS3 and builded with pre-processors like SASS and LESS.'
                }, {
                    title: 'JavaScript',
                    icon: 'js.svg',
                    summary: 'JavaScript applications that follows latest standarts and based on SPA frameworks like VueJS and Angular.'
                }]
            }, {
                name: 'tools',
                title: 'What <b>build tools</b> do I use?',
                items: [{
                    title: 'NodeJS',
                    icon: 'nodejs.svg',
                    summary: 'JavaScript run-time environment that runs frontend development tools.'
                }, {
                    title: 'Gulp',
                    icon: 'gulp.svg',
                    summary: 'Task runner that is used to manage whole range of tools involved in frontend development.'
                }, {
                    title: 'Webpack',
                    icon: 'webpack.svg',
                    summary: 'Module bundler that is supposed to process huge variety of frontend files and create assets and bundles.'
                }]
            }, {
                name: 'backend',
                title: 'What do I use for <b>the backend</b>?',
                items: [{
                    title: '.Net',
                    icon: 'dotnet.svg',
                    summary: 'C# as server-side language and .Net framework.'
                },{
                    title: 'MSSQL',
                    icon: 'mssql.svg',
                    summary: 'Relational database with the primary function of storing and retrieving data.'
                },{
                    title: 'Umbraco CMS',
                    icon: 'umbraco.svg',
                    summary: 'Open source and easy to use CMS platform that is written in C#.'
                }]
            }, {
                name: 'graphics',
                title: 'What <b>graphic apps</b> do I use?',
                items: [{
                    title: 'Photoshop',
                    icon: 'photoshop.svg',
                    summary: 'For web design and prototypes, image editing and photo manipulations.'
                }, {
                    title: 'Illustrator',
                    icon: 'illustrator.svg',
                    summary: 'For work on icons, logos, illustrations and prints of different size from business cards to banners.'
                }]
            }]
        };
    },
    methods: {
        showSkills(area) {
            return this.$route.params.area == area;
        }
    }
};
