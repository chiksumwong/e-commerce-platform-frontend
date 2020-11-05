<template>
    <div>
        <footer class="bg-info">
            <div class="container">
                <b-row>
                    <b-col sm>
                        <p class="text-left">
                            <b-button @click="switchFrontSize('S')" variant="info" style="font-size:12px;">A</b-button>
                            <b-button @click="switchFrontSize('M')" variant="info" style="font-size:16px;">A</b-button>
                            <b-button @click="switchFrontSize('L')" variant="info" style="font-size:20px;">A</b-button>
                        </p>
                    </b-col>
                    <b-col sm>
                        <p class="text-center text-white">
                            <b-button disabled variant="info">
                                Copyright &copy; Wong Chik Sum 2020
                            </b-button>
                        </p>
                    </b-col>
                    <b-col sm>
                        <p class="text-right">
                            <b-button  @click="switchLang('en')" variant="info">ENG</b-button>
                            <b-button @click="switchLang('tw')" variant="info">TW</b-button>
                            <b-button @click="switchLang('cn')" variant="info">CN</b-button>
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
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 65px;
        padding: 5px;
    }
</style>