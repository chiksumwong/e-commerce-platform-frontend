<template>
    <div>
        <footer class="bg-primary">
            <div class="container">
                <b-row>
                    <b-col><p class="m-0 text-left">A A A</p>
                    </b-col>
                    <b-col><p class="m-0 text-center text-white">Copyright &copy; Wong Chik Sum 2019 </p></b-col>
                    <b-col>
                        <b-button  @click="switchLang('en')" variant="primary">ENG</b-button>
                        <b-button @click="switchLang('tw')" variant="primary">TW</b-button>
                        <b-button @click="switchLang('cn')" variant="primary">CN</b-button>
                    </b-col>
                </b-row>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        methods: {
            switchLang(lang) {
                this.$i18n.locale = lang
                localStorage.setItem('locale', lang)
                console.log('clicked')
            },
        },
    }
</script>

<style>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        padding: 20px;
    }
</style>