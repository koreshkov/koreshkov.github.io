<template>
    <p-section :backdrop="'bg-r-7'">
        <div class="unit-1 scroll-fade"></div>
        <div class="unit-7 scroll-fade">
            <div class="module-rte">
                <label class="label">/hobbies</label>
                <h1>What am I <b>fond of</b>?</h1>
                <div class="row">
                    <div class="col-6" v-for="(hobby, i) in hobbies" :key="i">
                        <img class="skill-icon" :src="'/images/' + hobby.icon" v-if="hobby.icon">
                        <h3 class="skill-title">{{hobby.title}}</h3>
                        <p v-html="hobby.summary"></p>
                    </div>
                </div>
            </div>
        </div>
    </p-section>
</template>

<script>
export default {
    metaInfo: {
        title: 'Hobbies'
    },
    data() {
        return {
            hobbies: [{
                title: 'Photography',
                icon: 'photography.svg',
                summary: `It's a greate opportunity to freeze a moment, catch an emotion and use different technics to express myself or have fun with friends.`
            }, {
                title: '3D + vector graphics',
                icon: 'graphics.svg',
                summary: 'Occasionally I create 3D sketches of my ideas and also make some printable stuff like postcards and stickers.'
            }]
        };
    }
};
</script>



