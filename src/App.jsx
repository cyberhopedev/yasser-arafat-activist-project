import { useState, useCallback } from 'react';

/** Styles */
import './styles/windows-xp-theme.css';
import './styles/components.css';

/** Components */
import Taskbar         from './components/Taskbar.jsx';
// NOTE: The local name on the LEFT of `from` is what the rest of this file
// must use in JSX. JSX `<Foo />` compiles to `React.createElement(Foo, ...)`,
// so `Foo` is just a regular variable lookup. If the import name doesn't
// match the JSX tag, React tries to render `undefined` and you get a blank
// page (with a "X is not defined" ReferenceError in the browser console).
import WindowsXpWindow from './components/WindowsXpWindow.jsx';
import Sidebar         from './components/Sidebar.jsx';
import TabBar          from './components/TabBar.jsx';

/** Tab content panels */
import OverviewTab  from './components/tabs/OverviewTab.jsx';
import ActivismTab  from './components/tabs/ActivismTab.jsx';
import AnalysisTab  from './components/tabs/AnalysisTab.jsx';
import SourcesTab   from './components/tabs/SourcesTab.jsx';

/** Data/content to put on the page from my research */
import { desktopIcons } from './data/content.js';

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
                  {/* Page header banner */}
                  <div style={styles.pageHeader}>
                    <div style={{ fontSize: 28, marginBottom: 4 }}>🌍</div>
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