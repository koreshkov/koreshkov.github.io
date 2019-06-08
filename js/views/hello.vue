<template>
    <p-section :backdrop="'bg-l-5'">
        <div class="unit-5 scroll-fade">
                <div class="module-rte">
                    <label class="label">/hello</label>
                    <h1>My name is<br />Andrei Koreshkov</h1>
                    <p>
                        I'm a 32 years old web developer located in Saint Peterburg, Russia.<br/>
                        I have 7 years of experience in full-stack web development with the main focus on frontend.<br/>
                        I would like to tell you my story of first <code>index.html</code> and how far it took me.
                    </p>
                    <p>
                        <router-link to="/story/2002" class="btn">Read my story</router-link>
                    </p>
                </div>
        </div>
        <div class="unit-3 full-height bg-image-cover slide-fade-right" style="background-image: url('/images/IMG_3009.jpg');">
        </div>
    </p-section>
</template>

<script>
export default {
    metaInfo: {
        title: 'Hello'
    },
    data() {
        return {
        };
    }
};
</script>


