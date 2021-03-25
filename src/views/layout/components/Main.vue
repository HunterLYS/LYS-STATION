<template>
    <section class="app-main" >
        <!-- <div v-for="item in repositories" :key="item">
            <span>{{item.name + ':' + item.count}}</span>
        </div> -->
        <!-- <button @click="aaaa">aaaaa</button> -->
        <div v-if="list.length > 0">
            <div class="card-view" v-for="item in list" :key='item'>
                <!-- :class="item.type == 1 ? 'item-row' : 'item-column'" -->
                <!-- :class="'item-row'" -->
                <div class="item-view" :class="item.type == 1 ? 'item-row' : 'item-column'" 
                    >

                    <!-- <img :src="require('../../../../public/static/image/pic_2.jpeg')"  @click="aaaa(item.img)"> -->

                    <!-- <img :src="getUrl(item.img)"  @click="aaaa(item.img)">  -->
                     <img :src="img"  @click="aaaa(item.img)"> 
                    <!-- <img :src="item.img"  @click="aaaa(item.img)"> -->
                    <!-- <el-image
                        :src="item.img"
                        :fit="fit"></el-image> -->
                    <div>
                        <div class="time">{{item.time}}</div>
                        <div class="title">{{item.title}}</div>
                        <div class="intro">{{item.intro}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else >
            empty
        </div>
    </section>
</template>
<script>
import { ref } from 'vue';
// import { fetchUserRepositories } from '../../../api/user.js';

// const counter = ref(0);


// let item  = {
//     title: 'test',
//     intro: '扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的',
//     content: '扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的扥东方东方东浮动广丰很刚风痕港风很刚发阿斯达所扥阿房东方东方东方森的',
//     time: '2021-03-11 12:28:32',
//     type: 1,
// }


export default {
    props: ['list'],

    setup(props) {
        // let repositories =ref( [])
        // const getUserRepositories = async () => {
        //    repositories.value = await fetchUserRepositories(props.user)
        // }

        return {
            // repositories,
            // getUserRepositories
        }
    },

    data() {
        return {
            img: require("../../../../public/static/image/pic_2.jpeg")
        }
    },

    mounted () {
        // this.getUserRepositories() // 1
    },
    watch: {
        // user: 'getUserRepositories' // 1
         list(val){
            
        }
    },

    methods: {
        aaaa(aaaa){
            // console.log(this.list)
            console.log(aaaa)
        },

        getUrl(url){
            // url = String(url);
            let img = require(url);
            return img;
        }
    },
}
</script>

<style lang="scss" scoped>
.app-main {
    width: 100%;
    // height: 100%;
    padding: 40px 0 40px 50px;
    box-sizing: border-box;
    // margin: 0 50px;
    // height: 100%;
    // position: relative;
    // // overflow: hidden;
    // overflow-x: auto;
    // overflow-y: auto;
    // &::-webkit-scrollbar { width: 0 !important }


    .card-view{
        box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        // width: 100%;
        border-radius: 5px;
        padding: 20px 30px;
        margin-bottom: 10px;
    }
    .card-view:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }


    .item-view{
        text-align: left;
        img{
            width: 60%;
            height: 100%;
            min-height: 130px;
            margin-left: 20px;
            margin-bottom: 20px;
            // height: 100px;
        }

        //  el-image{
        //     width: 60%;
        //     height: 100%;
        //     height: 100px;
        // }

        div {
            padding-left: 20px;
            // margin-left: 20px;
            text-align: left;
            width: 35%;
            box-sizing: border-box;


            .title{
                width: 100%;
                font-size: 20px;
                margin: 10px 0;
            }

            .time{
                width: 100%;
                font-size: 12px;
                color: rgb(26, 138, 4);
            }

            .intro{
                width: 100%;
                font-size: 12px;
                color: rgb(97, 95, 95);
            }
        }


        
    }

    .item-row{
        display: flex;
        flex-direction: row;

    }
    .item-column{
        display: flex;
        flex-direction: column;
    }

    
}




</style>