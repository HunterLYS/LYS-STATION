<template>
    <section class="app-main">
       
       <div class="card">
            <img  src="../../../../public/static/image/pic_user.jpeg" alt="">
            <div class="name-view">yong</div>
            <div class="intra-view">
                Hellow,everyone.My name is yong.This is my personal blog.To record my study and experience.
            </div>
       </div>
       
    
    </section>
</template>
<script>
import { ref } from 'vue';

const counter = ref(0);

export default {
    

     setup(props) {
      
        return {
           
        }
    },
    mounted () {
       
    }
}
</script>

<style lang="scss" scoped>
.app-main {
    width: 100%;
    height: 100%;
    // position: relative;
    // overflow: hidden;
    // overflow-x: auto;
    // overflow-y: auto;
    // &::-webkit-scrollbar { width: 0 !important }

    text-align: center;
    box-sizing: border-box;

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        border-radius: 5px;
        padding: 20px 10px;
        box-sizing: border-box;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }

    img{
        width: 70px;
        height: 70px;
        margin: 20px;
        border-radius: 30px ;
    }

    .name-view{
        font-size: 14px;
        color: rgb(3, 73, 114);
    }

    .intra-view{
        font-size: 12px;
        color: rgb(70, 71, 71);
        margin-top: 10px;
    }

}





</style>