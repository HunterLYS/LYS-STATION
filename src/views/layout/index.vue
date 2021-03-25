<template>
    <div class="layout" >
        <div class="tool-view">
             <Toolbar @onClickItem="onTabChange" />
        </div>
        <div class="content-view">
             <div class="main-view">
                <Main :list='list' />
            </div>
            <div class="user-view" >
                <User />
            </div>
        </div>
        
    </div>
    
</template>
<script>
import Toolbar  from './components/Toolbar.vue';
import Main  from './components/Main.vue';
import User  from './components/User.vue';

import { getDataList } from '../../utils/index.js';
export default {
    components:{
        Toolbar,
        Main,
        User
    },
     setup(props) {

        return {

        } 
    },
    data () {
        return {
            list: [],
            type: 1, 
            // filters: { ... }, // 3
            // searchQuery: '' // 2
        }
    },
    computed: {
        // filteredRepositories () { ... }, // 3
        // repositoriesMatchingSearchQuery () { ... }, // 2
    },
    watch: {
        // user: 'getUserRepositories' // 1
    },
    mounted () {
        this.getList(); // 1
    },
    methods: {
        getList(){
            this.list = getDataList(this.type);
        },
        onTabChange(type){
            this.type = type;
            this.getList();
        }
    },
}
</script>

<style scoped lang="scss">

.layout {
    // width: 100%;
    width: 100vw;
    // height: 100%;
    height: 100vh;
    // position: relative;
    box-sizing: border-box;
    background: #ffffff;
    overflow: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    
    .tool-view{
        width: 100vw;
        height: 220px;
        // background: #ffffff;
        box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1; 
    }

    .content-view{
        // top: 0;
        width: 100%;
        position: relative;
    }

    .user-view{
        width: 180px;
        right: 0;
        top: 0;
        // float: right;
        position: absolute;
        margin: 40px calc(100% - 100vw + 60px) 20px 20px;
        box-sizing: border-box;

    }

    .main-view{
        width: calc(100vw - 320px);
        position: relative;
    }

    //基础布局
    & > .nav-view {
        width: 100%;
        height: 56px;
        background: #ffffff;
        box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    // 基础布局
    & > .aa-view {
        width: calc(100vw - 200px);
        // height: calc(100vh - 56px);
        box-sizing: border-box;
        position: absolute;
        left: 0;
        background: #eff4f5;
        

        & > div {
            height: 100%;
            display: inline-block;
            vertical-align: top;

            &.left {
                height: 100%;
                background: #fff;
                box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
                position: relative;

                &.is-closable-240 {
                    width: 240px;
                }

                &.is-closable-55 {
                    width: 55px;
                }

                & > div {
                    &.sidebar {
                        width: 100%;
                        height: calc(100% - 55px);
                        overflow-x: hidden;
                        overflow-y: auto;
                    }

                    &.switch {
                        width: 55px;
                        height: 55px;
                        font-size: 25px;
                        line-height: 55px;
                        text-align: center;
                        color:  #1173FA;
                        color: var(--theme-color, #1173FA);
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                    }
                }
                
            }

            &.right {
                height: 100%;
                overflow: hidden;
                padding: 5px 5px 0;
                box-sizing: border-box;
                background-color: #eff4f5;

                &.is-closable-240 {
                    width: calc(100% - 240px);
                }

                &.is-closable-55 {
                    width: calc(100% - 55px);
                }

                & > div {
                    height: 100%;
                    width: 100%;
                    box-sizing: border-box;
                    &.router-menu {
                        width: 100%;
                        height: 40px;
                        overflow: hidden;
                        // margin-bottom: 5px;

                        &.height {
                            height: 0;
                        }
                    }

                    &.app-main {
                        width: 100%;
                        height: calc(100% - 30px);
                        // background: #fff;

                        &.height {
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>