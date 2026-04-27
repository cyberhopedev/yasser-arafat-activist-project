import { useState, useCallback } from 'react';

/** Styles */
import './styles/windows-xp-theme.css';
import './styles/components.css';

/** Components */
import Taskbar    from './components/Taskbar.jsx';
import XpWindow   from './components/WindowsXpWindow.jsx';
import Sidebar    from './components/Sidebar.jsx';
import TabBar     from './components/TabBar.jsx';

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

}

function NotepadWindow() {
    
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