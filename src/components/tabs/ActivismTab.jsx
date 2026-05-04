import { tactics } from '../../data/content.js';

/**
 * Content for the research on how Yasser Arafat achieved change
 * and their repertoire of contention (Part 2)
 */

export default function ActivismTab() {
    return(
        <div>
            <section id="contention">
            <h2>Repertoire of Contention</h2>
 
                <div className="info-box">
                "Repertoire of contention" (Charles Tilly) describes the full toolkit of tactics
                a movement uses to pursue change. Arafat's political programme evolved from "an
                emphasis on armed action as the sole means of struggle in 1968 to its eventual
                disappearance from the PLO's political programme altogether after 1990"
                (Agha &amp; Khalidi 2014).
                </div>
        
                <p>
                Arafat co-founded Fatah in 1959 and became PLO Chairman in 1969. Rather than
                building a rigid political party, he deliberately structured Fatah as a
                <em> haraka</em> — a broad national movement — "within which different political
                beliefs, competing ideologies and clashing agendas could jostle and compete, but
                nevertheless coexist" (Agha &amp; Khalidi 2014). This organizational choice was
                itself a tactic: it maximized Palestinian unity across ideological divisions,
                making the PLO harder to fracture. The Palestinian movement, as Agha &amp; Khalidi
                note, "never suffered from the collective arrests, mass purges, or summary
                executions that characterised violent repressive Arab regimes and marred so many
                revolutionary and liberation movements."
                </p>
        
                <p>
                Peteet (2016, 251) situates the PLO within a global pattern: both the PLO and the
                ANC "initially advocated a democratic secular state" and "established ties of
                solidarity" with each other. Both organizations were "banned and political activism
                suppressed" by the states they opposed, and both were labeled terrorists before
                gaining international recognition. This parallel trajectory — armed struggle
                followed by negotiated settlement — is key to understanding Arafat's repertoire
                as a whole.
                </p>
            </section>
        
            <section style={{ marginTop: 14 }}>
                <h2>Does Change Come from the Grassroots?</h2>
        
                <p>
                Arafat's approach was simultaneously grassroots and elite-driven. In the early
                years, Fatah's fedayeen operations built Palestinian national consciousness from
                the refugee camps outward. Agha &amp; Khalidi (2014) argue that "without armed
                struggle, the Palestinian issue would have remained no more than yet another refugee
                problem alongside the many other displacements lingering on the periphery of the
                world's conscience." Armed struggle was the movement's raison d'être — the tool
                that forced the Palestinian cause onto the global political map.
                </p>
        
                <p>
                The 1982 Israeli invasion of Lebanon, documented in Wagner's eyewitness account,
                tested the limits of this approach. Wagner (1983, 405) describes the scale of
                destruction: "massive air, sea and land bombardments had destroyed much of the
                cities and camps." The Palestine Research Centre — "the repository of documents
                relating to pre-1948 life in Palestine" and "its purpose the preservation of the
                culture and history of the Palestinians" — was emptied by Israeli soldiers (Wagner
                1983, 407). This destruction of Palestinian institutional memory was a deliberate
                strategic act, not collateral damage.
                </p>
        
                <p>
                The First Intifada (1987–91) was a genuine grassroots uprising that caught Arafat
                off-guard while he was in Tunis. He moved quickly to bring it under PLO leadership.
                By the 1990s, the balance shifted decisively toward top-level diplomacy: Oslo was
                negotiated entirely at the leadership level. Agha &amp; Khalidi (2014) note that
                for Arafat, "Oslo represented the prospect of relocating the Palestinian national
                movement back to its own soil and putting it on the path to statehood; the detailed
                text was irrelevant." His senior associates insist he never fully read the 1993
                Oslo Accords, that he operated on strategic instinct rather than textual precision.
                </p>
            </section>
        
            <section style={{ marginTop: 14 }}>
                <h2>Advocacy to the State</h2>
        
                <p>
                Arafat pursued state-level advocacy through the UN, the Arab League, and bilateral
                negotiations with Israel. His 1974 UN General Assembly address (the first ever by
                a non-state leader) was a landmark moment. Peteet (2016, 257) notes that by this
                point "the comparison between occupation and apartheid had garnered broad reach"
                internationally, and the PLO was simultaneously recognized as "sole legitimate
                representative of the Palestinian people" by the Arab League.
                </p>
        
                <p>
                Advocacy to the state had a structural ceiling imposed by US power. Wagner (1983)
                documents how US Ambassador Dillon in Beirut could not even visit the Red Crescent
                hospital "because of US restrictions on meeting with the PLO." Wagner (1983, 409)
                observes that "Israel receives more economic and military aid from the US than any
                other nation in the world"; a condition that severely constrained what Palestinian
                diplomatic advocacy could achieve. Agha &amp; Khalidi (2014) describe how Arafat
                navigated this constraint pragmatically: "he remained open to dealing with even the
                most hardline elements in Israel," preferring to deal with Israeli hawks because he
                believed they, unlike moderates, could actually "carry out the necessary difficult
                decisions."
                </p>
            </section>
        
            <section id="tactics" style={{ marginTop: 14 }}>
                <h2>📋 Tactics Used &amp; Results</h2>
        
                <table className="xp-table">
                <thead>
                    <tr>
                    <th>Tactic</th>
                    <th>Period</th>
                    <th>Description</th>
                    <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {tactics.map((row, index) => (
                    <tr key={index}>
                        <td>{row.tactic}</td>
                        <td style={{ whiteSpace: 'nowrap' }}>{row.period}</td>
                        <td>{row.description || <em style={{ color: '#888' }}>[see content.js]</em>}</td>
                        <td>{row.result || <em style={{ color: '#888' }}>[see content.js]</em>}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </section>
        
            <section id="international" style={{ marginTop: 18 }}>
                <h2>🌐 International Connections</h2>
        
                <div className="info-box">
                Arafat understood himself as part of a global liberation movement, not just a
                regional conflict. This shaped both his tactics and the limits of what he could
                achieve diplomatically.
                </div>
        
                <p>
                Agha &amp; Khalidi (2014) describe the breadth of Arafat's international
                revolutionary network: "He saw himself as part of a global movement and as a member
                of an international revolutionary fraternity against injustice, part of the global
                struggle of oppressed peoples for freedom and liberation." Fatah hosted revolutionary
                movements from across Africa, Latin America, and Iran, "offering them refuge,
                military training, political support, and moral succour." The keffiyeh Arafat wore
                "came to symbolise revolution, not just the Palestinian struggle." Most significantly,
                Peteet (2016, 251) documents that "the PLO and the African National Congress (ANC)
                established ties of solidarity", a connection that would later inspire the
                Palestinian BDS movement.
                </p>
        
                <p>
                However, Wagner (1983) documents in real time what happened when these international
                connections ran up against US power. During the 1982 invasion, the PLO's ceasefire
                with Israel had been holding, UN observers recorded 2,125 violations of Lebanese
                airspace and 652 violations of Lebanon's territorial waters by Israel after the
                ceasefire, yet the US took no action (Wagner 1983, 401). The PLO had immediately
                and categorically denied involvement in the attack on Israeli diplomat Shlomo Argov,
                "a fact soon confirmed by Scotland Yard and United Kingdom Prime Minister Thatcher"
                (Wagner 1983, 403), yet Israel used it as a pretext for the full invasion.
                </p>
        
                <p>
                The Palestinian BDS movement that emerged decades later drew explicitly on the South
                African model. As Peteet (2016, 258) notes, "the 2005 launch of the Palestinian BDS
                campaign, a South African-derived model, aimed to compel Israeli compliance with
                international law." The comparison was deliberate: Palestinian activists recognized
                that international solidarity (economic boycotts, divestment, cultural isolation)
                had been the key tool that finally ended apartheid. Whether that model could work
                against Israeli occupation, given continued US support for Israel, remained an
                open question that Arafat's own era never resolved.
                </p>
            </section>
        </div>
    );
}