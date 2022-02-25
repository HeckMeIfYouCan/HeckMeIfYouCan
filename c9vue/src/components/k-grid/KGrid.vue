<template>
    <div :class="'k-grid col-min-' + colMin"
         :style="'' +
          'column-gap: '+colGap+'px; ' +
          'row-gap: '+rowGap+'px; ' +
          'justify-self: '+justify+';' +
          'align-self: '+align+';' +
          'justify-items: '+justifyItems+';' +
          'align-items: '+alignItems+';' ">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class KGrid extends Vue {
        // 100, 200, 300, 400, 500 full
        @Prop({default: '100'}) colMin: string | undefined;
        @Prop({default: '0'}) colGap: number | undefined;
        @Prop({default: '0'}) rowGap: number | undefined;
        @Prop({default: 'center'}) justifyItems: string | undefined;
        @Prop({default: 'center'}) alignItems: string | undefined;
        @Prop({default: 'center'}) justify: string | undefined;
        @Prop({default: 'center'}) align: string | undefined;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/ -->
<style lang="scss">
    .k-grid {
        display: grid;
        //justify-items: center;    // along row axis: start end center stretch
        //align-items: end;      // along col axis: start end center stretch

        // min col width 100px .. 1fr; auto-fit: wrap cols to rows
        //grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

        &.col-min-full {
            grid-template-columns: repeat(auto-fit, 100%);
        }

        // create col min size options 100  .. 500 in 20px steps
        @for $i from 0 through 25 {
            &.col-min-#{$i*20+100} {
                grid-template-columns: repeat(auto-fit, minmax($i*20+100px, 1fr));
            }
        }
    }
</style>
