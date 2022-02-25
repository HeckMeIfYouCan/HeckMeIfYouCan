<template>
    <div class="main-container">
        <div class="impressum-content main-content">
            <section>
                <h1>Impressum</h1>
                <p>Dies ist keine kommerzielle Website. Wir sie lediglich für private und universitäre
                    Forschungszwecke im Rahmen einer Promotion im Bereich Mensch-Maschine Interaktion.
                </p>
            </section>

            <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    {{name}}<br>
                    {{street}}<br>
                    {{address}}<br>
                    {{country}}
                </p>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>
                    {{phone}}<br>
                    <a class="link" v-bind:href="'mailto:'+email">{{email}}</a>
                </p>
            </section>

            <section>
                <h2>Haftungsausschluss (Disclaimer)</h2>

                <h3>Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                    Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                    diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                    Inhalte umgehend entfernen.
                </p>

                <h3>Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                    der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                    inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                    umgehend entfernen.</p>

                <h3>Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                    außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                    Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                    die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                    Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                    umgehend entfernen.</p>
            </section>
        </div>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Options({
    components: {
        Footer,
    },
})
export default class Impressum extends Vue {

    data() {
        return {
            name: 'Matthias Schmidmaier',
            street: 'Karlstr. 120',
            address: '80335 München',
            country: 'Germany',
            email: 'matthias.schmidmaier@ifi.lmu.de',
            phone: '+49 (89) 26018735'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/_styles.scss";

    .impressum-content {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        row-gap: 20px;
    }

    section {
        max-width: $max-content-width;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        text-align: left;

        h2 {
            text-align: left;
            margin: 0 0 5px 0;
        }

        p {
            text-align: justify;
            margin: 0 0 15px 0;
            font-size: $font-size-small;
        }
    }

</style>
