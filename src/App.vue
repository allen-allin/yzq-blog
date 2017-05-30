<template>
    <div id="app">
        <nav>
            <mu-appbar title="" :style="{background: $route.name === 'homePage' ? 'transparent' : '#2196f3'}">
                <mu-flat-button label="主页" to="/" slot="left" />
                <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入搜索内容" />
                <mu-flat-button label="zys" to="/blog/zys" slot="right" />
                <mu-flat-button label="piousLove" to="/blog/piousLove" slot="right" />
                <mu-flat-button label="写博客" icon="add" labelPosition="before" to="/editBlog" slot="right" />
                <!-- <mu-flat-button label="expand_more" to="" slot="right"/> -->
            </mu-appbar>
        </nav>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    created() {
        // console.log(this.$route)
    }
}
</script>
<style scoped lang="scss">
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

.content {
    /*height: 100vh;*/
    -overflow: auto;
    background: #f7f5f7;
    position: absolute;
    width: 100%;
    top: 65px;
}

.appbar-search-field {
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
        color: #FFF;
    }
    .mu-text-field-hint {
        color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
        color: #FFF;
    }
    .mu-text-field-focus-line {
        background-color: #FFF;
    }
}
</style>
