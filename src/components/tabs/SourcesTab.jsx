import { sources } from '../../data/content.js';
/**
 * Tab that holds the sources in a bibliography
 */

export default function SourcesTab() {
    return(
        <div>
            <section id="sources">
                <h2>📄 Bibliography &amp; Sources</h2>
                <div className="info-box">
                    Below are the sources I used for this project!
                </div>

                    {sources.map(src => (
                        <div key={src.id} style={{
                            border: '1px solid #aaa',
                            borderLeft: '4px solid #3a6bc8',
                            borderRadius: 3,
                            padding: '10px 14px',
                            marginBottom: 10,
                            background: '#f8f8ff',
                            fontSize: 11,
                        }}>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
                            <span style={{
                                background: '#0a246a', color: 'white',
                                borderRadius: 8, padding: '1px 8px',
                                fontSize: 10, whiteSpace: 'nowrap', flexShrink: 0,
                            }}>
                                {src.type}
                            </span>
                                <strong style={{ lineHeight: 1.5 }}>{src.citation}</strong>
                            </div>
                        </div>
                    ))}

                    {/* Quick citation reference */}
                <h2 style={{ marginTop: 18 }}>Quick In-Text Citation Reference</h2>
                    <table className="xp-table">
                    <thead>
                        <tr><th>Source</th><th>In-Text (Chicago author-date)</th><th>Key Pages to Cite</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Wagner 1983</td>
                        <td>(Wagner 1983, p.#)</td>
                        <td>401 — ceasefire violations; 403 — Argov attack denial; 405 — scale of bombardment; 407 — Palestine Research Centre; 409 — US arms to Israel</td>
                        </tr>
                        <tr>
                        <td>Peteet 2016</td>
                        <td>(Peteet 2016, p.#)</td>
                        <td>248–249 — classification systems; 250 — settler colonial comparison; 251 — PLO/ANC solidarity; 257 — Arafat's UN address; 264 — identity cards; 265 — race coded as culture; 270 — permit vs. passbook</td>
                        </tr>
                        <tr>
                        <td>Newman 1999</td>
                        <td>(Newman 1999, p.#)</td>
                        <td>1 — Rabin/Arafat vs. Blair/Adams; 2 — Israeli "exceptionalism" narrative; 4 — territorial texts and identity formation</td>
                        </tr>
                        <tr>
                        <td>Agha &amp; Khalidi 2014</td>
                        <td>(Agha &amp; Khalidi 2014)</td>
                        <td>p.1 — Nakba legacy; p.2 — Egyptian accent as outsider; p.7 — haraka vs. hizb; p.9 — armed struggle evolution; p.10 — three-part legacy assessment</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}