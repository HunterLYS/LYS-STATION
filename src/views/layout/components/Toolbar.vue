<template>
    <section class="app-main">
        <div class="title-view">
                L Y S   &nbsp;&nbsp;   S T A T I O N
        </div>
        <div class="title-intra">To be alive is to be happy.</div>
        <div class="baner-view">
            <div class="tab-view" >
                <div>
                    <div  v-for="item in typeList" :key="item.type"  >
                        <span :tabindex="item.type" @click.stop="onClickItem(item)"> {{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    </section>
</template>
<script>
import { ref } from 'vue';


export default {
    

     setup(props) {
       

        return {
           
        }
    },

    data() {
        return {
            typeList: [
                {
                    type: 1,
                    title: 'ONE'
                },
                {
                    type: 2,
                    title: 'TEO'
                },
                {
                    type: 3,
                    title: 'THREE'
                },
                {
                    type: 4,
                    title: 'FOUR'
                }
            ]
        }
    },

    mounted () {
        
    },
    methods: {
        onClickItem(item){
            this.$emit('onClickItem', item.type);
        }
    },
}
</script>

<style lang="scss" scoped>
.app-main {
    width: 100%;
    height: 220px;
    // height: 100%;
    position: relative;
    // overflow-x: auto;
    // overflow-y: auto;
    // &::-webkit-scrollbar { width: 0 !important }
    
    // background-repeat:repeat-x;
    // background-position:0 0 ;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    box-sizing: border-box;

    padding: 40px;
    text-align: center;
    //  margin-right: calc(100% - 100vw );


    .title-view{
        font-size: 22px;
        color: black;
    }

    .title-intra{
        font-size: 12px;
        color: rgb(2, 61, 116);
    }

    .baner-view{
         background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
        background-image: url('../../../../public/static/image/pic_1.jpeg');
        height: 180px;
    }

    .tab-view{
        // width: 100%;
        
        display: flex;
        flex-direction: row;
        // margin-top: 10px;
        width: calc(100vw - 140px);
        
        text-align: center;
        justify-items: center;
        align-items: center;

        div {
            display: flex;
            flex-direction: row;
            margin: 10px auto;

            div{
                text-align: center;
                width: 100px;
                font-size: 14px;
                // line-height: 20px;
                // color: white;

                span{
                    margin: 0 auto;
                    text-align: center;
                }

                span:focus {
                    color: #0e6b31;
                    border: none;
                   
                }
            }

        }


        
        // div:focus {
        //     // background-color:red;
        //     color: rgb(0, 255, 98);
            
        // }
        

        // div:active {
        //     // background-color:red;
        //     color: rgb(0, 255, 98);
        // }
    }
    
}
</style>