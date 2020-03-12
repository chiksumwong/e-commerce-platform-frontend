<template>
    <div>
        <footer class="bg-dark">
            <div class="container">
                <b-row>
                    <b-col>
                        <p class="text-left">
                            <b-button @click="switchFrontSize('S')" variant="dark" style="font-size:12px;">A</b-button>
                            <b-button @click="switchFrontSize('M')" variant="dark" style="font-size:16px;">A</b-button>
                            <b-button @click="switchFrontSize('L')" variant="dark" style="font-size:20px;">A</b-button>
                        </p>
                    </b-col>
                    <b-col>
                        <p class="text-center text-white">
                            <b-button disabled variant="dark">
                                Copyright &copy; Wong Chik Sum 2020
                            </b-button>
                        </p>
                    </b-col>
                    <b-col>
                        <p class="text-right">
                            <b-button  @click="switchLang('en')" variant="dark">ENG</b-button>
                            <b-button @click="switchLang('tw')" variant="dark">TW</b-button>
                            <b-button @click="switchLang('cn')" variant="dark">CN</b-button>
                        </p>
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