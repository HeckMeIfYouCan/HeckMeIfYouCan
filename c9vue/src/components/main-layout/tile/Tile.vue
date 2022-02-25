<template>
    <router-link v-bind:to="link">
        <div class="tile">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"/><polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"/></g></g></svg>
                <div class="text">
                    <h3>{{title}}</h3>
                    <p>{{text}}</p>
                </div>
        </div>
    </router-link>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class NavButton extends Vue {
        @Prop() private title!: string;
        @Prop() private text?: string;
        @Prop() private link?: string;
    }
</script>

<style scoped lang="scss" src="./tile.scss">
</style>
