<template>
    <div class="data-processing">
        <h2>Data Processing</h2>
        <p>
            Please read and agree to the following consent before you continue with the study.
        </p>
        <p>
            <span>1</span>I am aware that the collection, processing
            and use of my data is voluntary. The survey can be canceled by me at any time without
            mentioning reasons and without
            causing me any disadvantages. In the event of cancellation, all data recorded of me will be irrevocably deleted.
        </p>

        <section>
            <p>
                <span>2</span>The purpose of this study is to evaluate audio patterns.
                I agree that for this purpose the following of my data will be processed:
            </p>

            <ul>
                <li>age in years</li>
                <li>gender</li>
            </ul>
        </section>

        <p>
            <span>3</span>
            I have been informed that the provided study code will only be used to merge the data
            from the different parts of the study.
        </p>

        <section>
            <p>
                <span>4</span>
                I  agree  that  my  data  will  be  collected,  processed,  used  and  stored  by
                Ludwig-Maximilians-Universit&auml;t (LMU) Munich as follows:
            </p>
            <ul>
                <li> I agree that the results and primary data of this study may be published by the LMU Munich
                    as a scientific publication. The data is published completely anonymously, i.e. the collected
                    data cannot be related to respective participants.</li>
                <li>The anonymized data is stored for an indefinite period of time.</li>
            </ul>
        </section>

        <p>
            <span>5</span>
            I  have been informed that my personal data collected in the context of the above purposes will
            be processed in compliance with the General Data Protection Regulation (GDPR and BayDSG).
        </p>
        <p>
            <span>6</span>
            Furthermore,  I  have  been  informed  that  I  can  amend  the  given  consent  without  stating
            any reasons with effect for the future or revoke it completely. I can send my declaration of cancellation
            by stating the study title &laquo;{{studyTitle}}&raquo; and my study code &laquo;{{studyCode}}&raquo; by post or email to
        </p>
        <p class="addr">
            LMU M&uuml;nchen
            <br>Lehrstuhl f&uuml;r Medieninformatik
            <br>{{contact}}
            <br>Frauenlobstr. 7a
            <br>80807 M&uuml;nchen
            <br><a href="mailto:{{mail}}">{{mail}}</a>
            </p>
        <p>
            In addition, after taking part in the study until {{deletionDate}},
            I have the opportunity to obtain the complete deletion of my data at LMU Munich by stating my
            study code, as long as the data can still be assigned to this code.
        </p>

        <p>
            <span>7</span>I am aware that according to the General Data Protection Regulation (GDPR)
            I have a right to receive information about my personal data stored at the LMU Munich.
            For this information and any further explanations, I can contact the study director by post or e-mail:
            </p>
        <p class="addr">
            LMU M&uuml;nchen
            <br />Lehrstuhl f&uuml;r Medieninformatik
            <br />{{contact}}
            <br />Frauenlobstr. 7a
            <br />80807 M&uuml;nchen
            <br /><a ng-href="mailto:" target="_blank">{{mail}}</a>
        </p>

        <p>
            I assure that I have read and understood the above consent and have been informed of my rights.
        </p>
        <p>
            I agree to the processing of my data by the LMU Munich.
        </p>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive} from "vue";

    export default defineComponent({
        name: 'DataProcessing',
        props: {
            studyTitle: String,
            studyCode: String,
            contact: String,
            deletionDate: String,
            mail: String,
        },
        data() {
            return {
                underatood: false,
                agreed: false
            }
        },
        setup(props, context) {
            console.log("setup");
            return {

            }
        }
    })
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";

    .data-processing {
        border-radius: 4px;
        border: 1px solid #f6f6f6;
        background-color: #fcfcfc;
        padding: 8px;
        font-size:14px;
        color: #777;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        overflow-y: scroll;

        h2 {
            color: #666;
            font-size: 18px;
        }
        p, ul, ol{
            margin: 0;
        }
        ul {
            li {
                margin-left: 30px;
            }
        }
        p {
            span {
                margin-right: 8px;
            }
        }
        a {
            color: inherit;
            text-decoration: underline;
        }

    }
</style>
