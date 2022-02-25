<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "./scss/_styles.scss";

    html {
        width: 100%;
        height: 100%;
        //background-color: $bg-color;
    }

    body {
        width: 100%;
        height: 100%;
        font-size: $font-size;
    }

    html, body, div, p, a, h1, h2, h3, h4, h5, p, ul, li{
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $font-color;
    }

</style>
