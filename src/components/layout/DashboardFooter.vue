<template>
    <div>
        <footer class="bg-primary">
            <div class="container">
                <b-row>
                    <b-col><p class="m-0 text-left">
                        <b-button @click="switchFrontSize('S')" variant="primary" style="font-size:12px;">A</b-button>
                        <b-button @click="switchFrontSize('M')" variant="primary" style="font-size:16px;">A</b-button>
                        <b-button @click="switchFrontSize('L')" variant="primary" style="font-size:20px;">A</b-button>
                    </p>
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
            switchFrontSize(size){
                if (size == 'S'){
                    document.querySelector('html').style.fontSize = '12px'
                }else if (size == 'M'){
                    document.querySelector('html').style.fontSize = '16px'
                }else if (size == 'L'){
                    document.querySelector('html').style.fontSize = '20px'
                }
            },
            switchLang(lang) {
                this.$i18n.locale = lang
                localStorage.setItem('locale', lang)
                console.log('clicked')
            },
        },
    }
</script>

<style>
</style>