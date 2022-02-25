<template>
    <router-view />
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

    .txt-highlight {
        color: $txt-highlight-color;
    }

    .main-container {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        .main-content {
            padding: 20px 10px 10px 10px;
            box-sizing: border-box;
            flex-grow: 1;
        }
    }

    #app {
        width: 100%;
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
    }
</style>
