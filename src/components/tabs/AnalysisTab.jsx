import { comparisons } from '../../data/content.js';

/**
 * Content for the research on how Yasser Arafat relates
 * to class material (Part 3)
 */

export default function AnalysisTab() {
    return(
        <div>
            <section id="classmat">
                <h2>How Does This Relate to Our Definition of Race?</h2>
        
                <div className="info-box">
                Key question: Is Palestinian identity — as constructed within Arafat's movement
                and by Israeli state power — biological essentialism (fixed, inherited, genetic)
                or cultural essentialism (cultural traits treated as fixed and defining)?
                Or does it challenge both frameworks?
                </div>
        
                <p>
                Palestinian identity as constructed and contested in Arafat's era does not fit
                neatly into either biological or cultural essentialism — it challenges both
                categories while drawing on elements of each. Peteet (2016) provides the key
                anthropological framework: she argues that both the Zionist and apartheid projects
                drew on "19th century formulas of peoplehood, nationalism, culture, and race," and
                that "Zionist discourse cast Palestinians as culturally irredeemable non-natives who
                belonged elsewhere." This is cultural essentialism — Palestinians were denied rights
                not purely on biological grounds, but through an ideological insistence that they
                did not culturally or historically belong to the land. Yet biological elements were
                also present: Peteet (2016, 265) notes that "race had become 'common-sensical for
                many Jewish nationalists, and, in significant ways, it framed membership and shaped
                the contours of national belonging in the Jewish state.'"
                </p>
        
                <p>
                From the Palestinian side, Arafat's PLO defined Palestinian identity primarily as a
                political solidarity category. Agha &amp; Khalidi (2014) describe how Arafat built
                Fatah as a <em>haraka</em> — "an all-encompassing national movement within which
                different political beliefs, competing ideologies and clashing agendas could jostle
                and compete, but nevertheless coexist." This secular, inclusive organizational form
                resisted biological or culturally essentialist definitions: Christians, Muslims,
                Marxists, and nationalists were all Palestinian. Yet the right of return — the
                PLO's central demand — is grounded in genealogy: in being descended from someone
                displaced from a specific place in 1948. This gives Palestinian identity a hereditary
                dimension alongside its political one.
                </p>
        
                <p>
                The most important analytical point is what Peteet (2016, 249) calls the "work" of
                racial classification: "Distilling social complexity into the categories Arab/Jew
                and Black/white/colored was the scaffolding upon which inequality and a hierarchical
                social order rested." Palestinian identity became a racial category not because
                Palestinianism has fixed biological or cultural content, but because the Israeli
                state's classification system produced it as a category of legal subordination.
                Race here is constructed relationally — through the encounter with state power —
                which aligns with the constructivist definition of race central to anthropological
                analysis.
                </p>
        
                <p>
                Peteet (2016, 265) makes a further distinction: "Ultimately, the Zionist construction
                of difference codes the racial as cultural, which can be as pernicious as race in
                elaborating difference." Coding difference as cultural — rather than biological —
                allows for a discourse of "irreconcilable cultural difference" that produces the same
                effects of exclusion and dispossession without the explicit language of race. This is
                exactly what cultural essentialism means in practice — and it maps directly onto
                the framework your course uses to distinguish types of racial construction.
                </p>
            </section>
        
            <section style={{ marginTop: 18 }}>
                <h2>Comparisons to Other Cases from Class</h2>
        
                <div className="info-box">
                Peteet's (2016) article is explicitly a comparative study of Israel/Palestine and
                apartheid South Africa as settler colonial formations. This comparison is built
                directly into the scholarly source, making it the strongest comparison for your paper.
                </div>
        
                {/* Israel/Palestine and South Africa — sourced directly from Peteet */}
                <div style={{
                border: '1px solid #aaa', borderLeft: '4px solid #3a6bc8',
                borderRadius: 3, padding: '10px 14px', marginBottom: 12,
                background: '#f8f8ff', fontSize: 11,
                }}>
                <strong style={{ fontSize: 12, color: '#0a246a' }}>
                    Israel/Palestine &amp; Apartheid South Africa (Peteet 2016)
                </strong>
                <p style={{ marginTop: 6 }}>
                    Peteet (2016, 250) argues both states were "settler colonial states and societies
                    once supported by imperial Britain, constituted by immigrants, and animated by
                    ideologies of separation and exclusivism that resulted in indigenous displacement
                    and dispossession." Key structural similarities include: racialized classification
                    systems (Arab/Jew and Black/white), land law that transferred approximately 87%
                    of indigenous land to settlers, and mobility control systems (Israel's permit
                    system vs. South Africa's passbook) — with South African observers arguing
                    Israel's system "in severity go[es] well beyond apartheid's pass system" (Peteet
                    2016, 270). The PLO and ANC established direct ties of solidarity, and the
                    Palestinian BDS campaign was explicitly modeled on the anti-apartheid movement.
                    The key difference: South Africa needed Black labor and therefore incorporated
                    the indigenous population economically while maintaining racial hierarchy. Israel
                    aimed at demographic dilution through displacement — "maximum territory with a
                    minimum number of Arabs."
                </p>
                </div>
        
                {/* Table for additional class cases */}
                <table className="xp-table">
                <thead>
                    <tr>
                    <th>Case (from class)</th>
                    <th>Similarity to Arafat / PLO</th>
                    <th>Key Difference</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisons.map((row, i) => (
                    <tr key={i}>
                        <td>{row.caseStudy || <em style={{ color: '#888' }}>[fill in content.js]</em>}</td>
                        <td>{row.similarity || <em style={{ color: '#888' }}>[fill in content.js]</em>}</td>
                        <td>{row.difference || <em style={{ color: '#888' }}>[fill in content.js]</em>}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <p style={{ marginTop: 6, color: '#666', fontSize: 10, fontStyle: 'italic' }}>
                Add cases from your class readings in src/data/content.js → comparisons array.
                </p>
            </section>
        
            <section id="thoughts" style={{ marginTop: 18 }}>
                <h2>💭 Final Thoughts</h2>
        
                <p>
                Agha &amp; Khalidi (2014) identify three legacies that frame how Arafat should be
                evaluated: "First, to lead the Palestinian people out of the state of political
                concussion that befell them after the loss of their homeland in 1948 and to put
                them and their cause back on the political map. Second, to lay the foundations for
                a potential resolution of the conflict with Israel. And third, to grasp the moment
                and relocate the Palestinian national movement back to its own soil." By their
                assessment, the first may be his most enduring legacy, the second remains "a tenuous
                and uncertain prospect at best," and the third "has yet to yield significant fruit."
                This three-part framework is a useful structure for any honest evaluation of a
                leader whose achievements and failures are so deeply intertwined.
                </p>
        
                <p>
                Wagner's (1983) eyewitness account of the 1982 Lebanon war makes viscerally clear
                what political abstractions miss: Palestinian civilians bore the direct cost of
                the struggle. Wagner (1983, 407) describes Israeli soldiers emptying the Palestine
                Research Centre, which held photographs and diaries Palestinians had given for
                safekeeping, and an Israeli soldier explaining the seized documents would show
                "how these terrorists think." The destruction of Palestinian institutional memory
                was strategic, aimed at severing the documentary
                basis of Palestinian national identity. Reading Wagner alongside Peteet's structural
                analysis shows how the macro-level comparison (settler colonialism as a system)
                and the micro-level account (specific acts of dispossession) illuminate each other.
                </p>
        
                <p>
                Newman (1999) offers a methodological lesson that applies directly here: the
                "ingrained positioning" of each side in a conflict makes it genuinely hard to read
                the other's narrative as legitimate. Newman uses the Rabin-Arafat handshake as his
                central example, an event that "readers, with diverse political persuasions and
                cultural backgrounds, immediately read their own subtexts into." This is why
                Peteet's comparative method matters: by placing Israel/Palestine within the broader
                category of settler colonial formations, comparison can "de-exceptionalize" the
                case and make structural patterns visible that a purely internal account would miss.
                </p>
        
                <p>
                What Arafat's case ultimately teaches about race is that racial categories are
                produced through political and legal processes, not discovered in nature. Palestinian
                identity became a racial category in the sociological sense not because it has fixed
                biological or cultural content, but because the Israeli state's classification system —
                its identity cards, permits, checkpoints, and laws — produced it as a category of
                legal subordination. Arafat's career was, in large part, an effort to transform that
                imposed category of subordination into a positive category of national belonging and
                political aspiration. That he achieved international recognition for the Palestinian
                people while failing to deliver a Palestinian state is the central paradox of his
                legacy, and a reminder that the outcome of political struggle is shaped as much by
                structural power as by the choices of individual leaders.
                </p>

            </section>
        </div>
    );
}