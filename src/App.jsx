import { useState, useCallback } from 'react';

/** Styles */
import './styles/windows-xp-theme.css';
import './styles/components.css';

/** Components */
import Taskbar    from './components/Taskbar.jsx';
import WindowsXpWindow from './components/WindowsXpWindow.jsx';
import Sidebar    from './components/Sidebar.jsx';
import TabBar     from './components/TabBar.jsx';

/** Tab content panels */
import OverviewTab  from './components/tabs/OverviewTab.jsx';
import ActivismTab  from './components/tabs/ActivismTab.jsx';
import AnalysisTab  from './components/tabs/AnalysisTab.jsx';
import SourcesTab   from './components/tabs/SourcesTab.jsx';

/** Data/content to put on the page from my research */
import { desktopIcons } from './data/content.js';

/** Media/Pictures */
import profilePic from './assets/Yasser_Arafat.jpeg';

/** Mapping of the tab to it's ID */
const TAB_MAP = {
  overview: <OverviewTab />,
  activism: <ActivismTab />,
  analysis: <AnalysisTab />,
  sources:  <SourcesTab />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const navigate = useCallback((tab, sectionId) => {
    setActiveTab(tab);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, []);

  return (
    <>
      <Taskbar activeTab={activeTab} />

      <div style={styles.desktop}>
        {/* Left column: desktop icons */}
        <div style={styles.icons}>
          {desktopIcons.map(icon => (
            <button
              key={icon.label}
              className="desktop-icon"
              onClick={() => icon.tab && setActiveTab(icon.tab)}
              title={icon.label}
            >
              <div className="icon-img">{icon.emoji}</div>
              <div className="icon-label">{icon.label}</div>
            </button>
          ))}
        </div>

        {/* Right column: main XP window */}
        <div>
          <WindowsXpWindow
            title="Yasser Arafat — Activist Profile — Microsoft Internet Explorer"
            icon="🌐"
            address="http://arafat-activist-profile.edu/index.html"
          >
            <div style={{ margin: 3, border: '1px solid #aaa' }}>
              <div className="explorer-layout">
                <Sidebar onNavigate={navigate} />

                <div className="explorer-main">
                  {/* Page header banner with Arafat's picture */}
                  <div style={styles.pageHeader}>
                    <img src={profilePic} alt ="Yasser Arafat Picture" style={{ width: 60, 
                                  height: 60, 
                                  borderRadius: '50%', 
                                  border: '2px solid white',
                                  marginBottom: 8,
                                  objectFit: 'cover' }}
                    />
                    <h1 style={styles.pageTitle}>Yasser Arafat</h1>
                    <div style={styles.pageSubtitle}>
                      Palestinian Liberation Leader · Activist · Statesman
                    </div>
                  </div>

                  <TabBar activeTab={activeTab} onChange={setActiveTab} />

                  {/*
                    Lookup the active tab component from TAB_MAP.
                    This avoids a messy if/else chain — O(1) lookup
                    using a plain object as a hash map.
                  */}
                  <div className="window-content" style={{ border: 'none', margin: 0 }}>
                    {TAB_MAP[activeTab]}
                  </div>
                </div>
              </div>
            </div>
          </WindowsXpWindow>

          <NotepadWindow />
        </div>
      </div>
    </>
  );
}

function NotepadWindow() {
    return (
    <WindowsXpWindow
      title="research_notes.txt — Notepad"
      icon="📝"
      menuItems={['File', 'Edit', 'Format', 'Help']}
    >
      <div className="window-content" style={{
        fontFamily: 'Courier New, monospace',
        fontSize: 11,
        lineHeight: 1.8,
        whiteSpace: 'pre-wrap',
      }}>
        {/*
          Template literals (the backticks ` `) preserve newlines and spacing.
          Combined with `whiteSpace: 'pre-wrap'` above, the text renders exactly
          as it's typed here — including indentation and blank lines. This is
          how you embed plain text inside JSX without React collapsing whitespace.
        */}
        {`research_notes.txt  --  working file, do not cite

================================================================
WHY THIS PROJECT?
================================================================
Picked Arafat because he sits on the seam between two
"repertoires" we keep reading about in class -- armed struggle
and diplomacy. Most figures fall cleanly on one side; he doesn't.
Agha & Khalidi (2014) basically argue you can't separate the
two phases without losing the story. That tension is the spine
of the project.


================================================================
THINGS I KEEP COMING BACK TO
================================================================
- Identity is CONSTRUCTED, not inherited.
  Arafat's Egyptian accent and Cairo birth made him a "wrong"
  Palestinian by 1950s purity standards (Agha & Khalidi 2014).
  He insisted on the identity anyway. Useful counter-example
  to essentialist framings of nationalism.

- Peteet's "work of comparison" idea is doing a lot of lifting.
  The Israel/Palestine <-> apartheid SA comparison isn't just
  rhetorical -- the PLO and ANC literally collaborated. BDS is
  the receipt. (Peteet 2016, ~p.257)

- Wagner (1983) is short but devastating. The looting of the
  Palestine Research Centre is the detail I can't shake --
  destroying the *archive* of a people is a specific kind of
  violence that the rest of the literature names less directly.

- Newman (1999) keeps me honest. "Ingrained positioning" -- the
  reminder that I'm reading all of this from somewhere too.


================================================================
QUESTIONS I HAVEN'T RESOLVED
================================================================
Q1. Did Oslo "succeed" or "fail"?
    Depends entirely on the frame.
      success-frame: mutual recognition, PA institutions,
                     return to Palestinian soil
      failure-frame: Peteet (2016, 251) -- "formalized
                     separation," non-contiguous entities,
                     Israel keeps the real levers
    Probably need to argue both are true at the same time.

Q2. Was the 1988 acceptance of UN 242 a strategic concession
    or a surrender? Class readings lean concession; some of
    the secondary stuff I skimmed leans surrender. Worth a
    second pass before final draft.

Q3. The Rwanda comparison feels weaker than the SA one.
    Identity-card mechanism is real, but the analogy strains
    on the genocide axis. Either tighten it or drop it -- a
    half-baked comparison is worse than no comparison.
    (Newman 1999 basically warns about this exact failure
    mode.)


================================================================
TODO BEFORE TURN-IN
================================================================
[x] Timeline: 1929 -> 2004 anchor events
[x] Tactics table with results column
[x] Sources tab w/ key arguments
[ ] Tighten Rwanda comparison or cut it
[ ] Add 1-2 sentences on the 1974 UN speech as a turning
    point -- right now it's just listed, not analyzed
[ ] Find a primary-source Arafat quote for the Activism tab
    (UN '74 speech transcript, maybe?)
[ ] Re-read Newman to make sure the framing intro doesn't
    sound like I'm taking a "side" -- comparative analysis
    ≠ advocacy
[ ] Spell-check pass (caught "Palestianian" once already...)


================================================================
MISC
================================================================
- The XP aesthetic was a goof at first but I think it actually
  works -- the project is partly about *how* a movement gets
  archived and represented, and an early-2000s desktop is its
  own kind of archive. Arafat died in 2004; XP shipped in 2001.
  Coincidence, but a useful one.

- If I had more time: a fifth tab on the post-Arafat PA period
  to follow Agha & Khalidi's "bleak future" thread.

-- end of file --
`}
      </div>
    </WindowsXpWindow>
    );
}

/** App specific styles */
const styles = {
desktop: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    gap: 10,
    maxWidth: 1100,
    margin: '0 auto',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 8,
  },
  pageHeader: {
    background: 'linear-gradient(to right, #1a3f8f, #4a7fc0, #1a3f8f)',
    padding: '14px 20px',
    margin: '-12px -12px 14px',
    color: 'white',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: 20,
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    color: 'white',
    borderBottom: 'none',
  },
  pageSubtitle: {
    fontSize: 12,
    opacity: 0.85,
    marginTop: 4,
  },
};