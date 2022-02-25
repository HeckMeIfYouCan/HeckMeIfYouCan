<template>
    <footer class="footer">
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/impressum" class="link">Impressum</router-link>
        <router-link to="/privacy" class="link">Datenschutz</router-link>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        msg: String,
    },
})
export default class Footer extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer {
        width: 100%;
        height:80px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        column-gap: 20px;

        .link {
            font-size: 12px;
            color: #aaa;
        }
    }
</style>
