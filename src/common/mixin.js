import backTop from 'components/content/backtop/backtop.vue'

export const mixin={
    data(){
        return {
            isshow:true
        }
    },
    components:{
        backTop
    },
    methods:{
        backtop(){
            this.$refs.scroll.scrollTo(0,0,500)
             },
    }
}