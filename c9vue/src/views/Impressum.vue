<template>
    <MainLayout>
        <KGrid col-min="full"
               col-gap="20" row-gap="20"
               alignItems="start" justifyItems="start"
               class="small-print">

            <KGridCell align="start" justify="start">
                <h1>Impressum</h1>
                <p>Dies ist keine kommerzielle Website. Wir nutzen chapek9.org lediglich für private und universitäre
                    Forschungszwecke im Rahmen einer Promotion im Bereich Mensch-Maschine Interaktion.
                </p>
            </KGridCell>

            <KGridCell align="start" justify="start">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    {{name}}r<br/>
                    {{street}}<br/>
                    {{address}}<br/>
                    {{country}}
                </p>
            </KGridCell>

            <KGridCell align="start" justify="start">
                <h2>Kontakt</h2>
                <p>
                    {{phone}}<br/>
                    <a class="link" v-bind:href="'mailto:'+email"> {{email}}</a>
                </p>
            </KGridCell>

            <KGridCell align="start" justify="start">
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

            </KGridCell>
        </KGrid>
    </MainLayout>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import MainLayout from "@/components/main-layout/MainLayout.vue";
    import KGrid from "@/components/k-grid/KGrid.vue";
    import KGridCell from "@/components/k-grid/KGridCell.vue";

    @Component({
        components: {KGridCell, KGrid, MainLayout}
    })
    export default class Impressum extends Vue {
        name='Matthias Schmidmaier';
        street='Karlstr. 120';
        address='80335 München';
        country='Germany';
        email = 'matthias.schmidmaier@ifi.lmu.de';
        phone = '+49 (89) 26018735';
    }
</script>

<style scoped lang="scss">
    @import "../scss/_styles.scss";

    .small-print {
        text-align: left;

        p {
            font-size: $font-size-small;
            padding: 5px 0 20px 0;
            text-align: justify;
        }
    }
</style>
