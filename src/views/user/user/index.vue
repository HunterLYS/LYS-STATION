<template>
    <div class="layout">
        aaaaa
        <div class="main-view">
            <!-- <Main /> -->
        </div>
        
    </div>
    
</template>
<script>
// import { Main } from '@/views/layout/components/Main.vue';
export default {
    // components:{
    //     Main
    // }
}
</script>

<style scoped lang="scss">
.layout {
    width: 100%;
    min-height: 100vh;
    position: relative;

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
    & > .main-view {
        width: 100%;
        height: calc(100vh - 56px);
        box-sizing: border-box;
        position: absolute;
        top: 56px;
        left: 0;

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