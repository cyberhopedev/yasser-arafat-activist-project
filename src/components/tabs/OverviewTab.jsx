import {timeline} from '../../data/content.js'
/**
 * Content for the research done for the historical overview
 * of Yasser Arafat (Part 1)
 */
export default function OverviewTab() {
    return(
    <div>
        <section id="context">
            <h2>Broader National &amp; International Context</h2>
            <div className="info-box">
                Q1: What broader national and international events informed Arafat's life,
                and how did these shape his understanding of race and Palestinian identity?
            </div>
            <p>
                Yasser Arafat was born in 1929 in Cairo to a Palestinian father and a mother of
                partial Egyptian descent, yet he always insisted he was Palestinian, born in
                Jerusalem, of fully Palestinian lineage. This insistence was not incidental. The
                dominant definition of "truly Palestinian" at the time required both birth in
                Jerusalem and two parents who were fully Palestinian. Arafat met neither criteria.
                His Egyptian accent, acquired during his Cairo childhood, "marked him out as an
                ostensible outsider, an unlikely contender for the leadership of an often fiercely
                insular national movement" (Agha &amp; Khalidi 2014). His persistent claim of full
                Palestinian identity reveals how Palestinian identity was actively constructed and 
                asserted, especially by those whose biographical facts placed them at the margins of 
                that definition.
            </p>

            <p>
                Arafat's political formation was rooted in the catastrophe of 1948. Agha &amp;
                Khalidi (2014) argue that his most enduring legacy "was to lead the Palestinians
                out of the material, political and moral devastation of the 1948 Nakba, which was the
                catastrophe which saw more than 700,000 Palestinians lose their homes." Fatah
                itself, as they note, "was born from the debris of 1948 and the fertile soil of
                Gaza, where dispossession, dispersal and statelessness provided determined
                recruits." It was the experience of statelessness that
                built Arafat's movement from the ground up.
            </p>

            <p>
                As anthropologist Julie Peteet (2016) argues, the founding of Israel initiated a
                settler colonial project built on "classification, distinction, and privilege."
                On the eve of the 1948-1949 war, Jews owned only six to seven percent of the land;
                the subsequent Absentee Property Law (1950) became the primary mechanism by which
                Palestinian land was transferred to the state. This foundational dispossession
                structured the entire political world Arafat would organize within.
            </p>

            <p>
                The Cold War provided the international architecture of Arafat's career.
                US-supplied military hardware, including the F-15s and F-16s documented by
                American minister Donald Wagner (1983) during the 1982 Israeli invasion of Lebanon,
                shaped the material conditions of Palestinian resistance. Wagner witnessed firsthand
                how US weapons were used against Palestinian civilian infrastructure: hospitals,
                clinics, schools, and refugee camps. Defense Minister Ariel Sharon framed PLO
                "terrorism" as one of "the main means by which the Soviets are preparing the ground
                for further expansion in the Middle East" (Wagner 1983, citing the Wall Street
                Journal), a Cold War framing that ensured US silence and continued arms resupply
                throughout the offensive.
            </p>

            <p>
                The 1967 Six-Day War was equally impactful. Israel's swift military victory
                discredited Arab nationalist governments. The occupation of the West Bank, Gaza Strip,
                and Eastern Jerusalem that followed created conditions under which, as Peteet (2016, 248)
                describes, Israeli policies of "separation and closure" produced a "spatially
                concentrated, confined, and immobilized Palestinian population, ruled by a state in
                which they are not citizens." It was in opposition to this administrative racialization
                that Palestinian national identity under Arafat's PLO took its clearest political form.

            </p>
            </section>

            <section id="timeline" style={{ marginTop: 18 }}>
                <h2>⭐ Key Moments Timeline</h2>
 
                <table className="xp-table">
                <thead>
                    <tr>
                    <th>Year</th>
                    <th>Event</th>
                    <th>Significance</th>
                    </tr>
                </thead>
                <tbody>
                    {timeline.map(row => (
                    <tr key={row.year}>
                        <td style={{ whiteSpace: 'nowrap' }}>{row.year}</td>
                        <td>{row.event}</td>
                        <td>{row.significance ? row.significance : <em style={{ color: '#888' }}>[see content.js]</em>}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </section>

            <section id="race" style={{ marginTop: 18 }}>
                <h2>🔬 Race Co-Constructed with Historical Factors</h2>
 
                <div className="info-box">
                    "Co-construction" means race is not a natural fact but is built alongside other
                    social categories: Colonial law, religion, class, diaspora, and territory.
                    The Palestinian case is a central example in the anthropological literature.
                </div>
        
                <p>
                    Peteet (2016) argues that both Israel and South Africa were states constructed
                    around classificatory systems that produced racial hierarchy. The broad categories
                    Arab/Jew — like Black/white in South Africa — were not descriptions of pre-existing
                    natural groups but the scaffolding upon which "inequality and a hierarchical social
                    order rested" (Peteet 2016, 249). For Palestinians, this classification was physically
                    inscribed: color-coded Israeli identity cards, a permit system governing movement, and
                    separate road networks divided the occupied population into multiple legal sub-categories
                    based on where they lived and their perceived security risk.
                </p>
        
                <p>
                    Being "Palestinian" under Israeli occupation was therefore not just an ethnic or
                    cultural identity — it was a legally imposed administrative category that determined
                    the conditions of daily life. As Peteet (2016, 264) notes, "the occupation divided
                    and hierarchized Palestinians into multiple categories which were then inscribed on
                    their identity cards": Jerusalem residency holders, West Bank residents, Gaza
                    residents, and Jordanian passport holders all occupied distinct legal positions with
                    distinct rights to mobility, employment, and family unification.
                </p>
        
                <p>
                    Palestinian identity was also co-constructed with religion, though within a secular
                    nationalist framework. Arafat's PLO was explicitly secular — Agha &amp; Khalidi (2014)
                    note that he "moulded Fatah not as a political party (<em>hizb</em>) with strict dogmas,
                    but as an all-encompassing national movement (<em>haraka</em>) within which different
                    political beliefs, competing ideologies and clashing agendas could jostle and compete,
                    but nevertheless coexist." Despite his early Muslim Brotherhood sympathies, Arafat
                    "believed that political Islam was a threat to the national character of the Palestinian
                    movement" (Agha &amp; Khalidi 2014). Yet the Israeli legal framework categorized
                    Palestinians partly through religion — Peteet (2016) notes Palestinian citizens of
                    Israel were divided into Muslim, Druze, Christian, and Bedouin categories "with varying
                    rights and duties accruing to each." Religious differentiation was a tool of
                    administrative classification that served the colonial state's interest in subdividing
                    the subject population.
                </p>
        
                <p>
                    Finally, Palestinian identity was co-constructed with diaspora geography. The mass
                    refugee population scattered across Jordan, Lebanon, Syria, and beyond was legally
                    stateless, yet understood itself as Palestinian in precisely the terms Arafat insisted
                    upon. The tension at the heart of Arafat's own biography — born in Cairo, of mixed
                    heritage, yet claiming Jerusalem — mirrors the larger tension between territorial
                    belonging and political solidarity. Arafat resolved this tension politically rather than
                    biologically, which is why the PLO consistently defined Palestinian identity through the
                    right of return and political aspiration rather than pure genealogy.
                </p>
        
                <p>
                    David Newman (1999) observes that competing national groups construct their identities
                    through "exclusive interpretation of territorial texts" — maps, place names, spatial
                    myths — that treat land as belonging exclusively to the self. Newman's methodological
                    point is that this "ingrained positioning" makes it genuinely hard for participants in
                    a conflict to read the other's narrative as legitimate, which is itself a political fact
                    that shapes what justice can look like.
                </p>
            </section>
    </div>
    );
}