/*
  Component that represents the horizontal tab control that switches between content panels.
*/

/**
 * Tab constants with a unique ID, label, and emoji
 */
const TABS = [
  { id: 'overview',  label: '📖 Overview'  },
  { id: 'activism',  label: '✊ Activism'  },
  { id: 'analysis',  label: '📚 Analysis'  },
  { id: 'sources',   label: '📄 Sources'   },
];

/**
 * Updates the content panel based on which tab it is changed to
 * 
 * activeTab — string id of the currently shown tab
 * onChange  — function(tabId) called when user clicks a tab
 */
export default function TabBar({ activeTab, onChange }) {
  return (
    <div className="tab-bar">
      {TABS.map(tab => (
        <button
          key={tab.id}
          /*
            Conditional className: if this tab is the active one,
            add the "active" CSS class (which makes it look raised).
            Template literals (`...`) let us embed JS expressions in strings.
          */
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}