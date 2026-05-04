import { useState, useEffect } from 'react';
import { quickFacts, navLinks } from '../data/content.js';

/*
  Component that represents the blue left-panel inside the IE-style explorer window.
  Contains navigation links, quick facts, and a progress bar.
*/

/**
 * Updates the sidebar based on where the user is navigating to
 * 
 * onNavigate — function(tab) called when a nav link is clicked
 */
export default function Sidebar({ onNavigate }) {
  // Track progress bar fill (0–100).
  // We animate it to 100 after mount to show "page loaded."
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // requestAnimationFrame waits for the next browser paint,
    // then we set progress to 100 — triggering the CSS transition.
    // setTimeout gives React one tick to mount, so the CSS
    // transition actually plays instead of snapping to 100.
    const timer = setTimeout(() => setProgress(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="explorer-sidebar">

      {/* ── Navigation Section ── */}
      <div style={{ marginBottom: 14 }}>
        <div className="sidebar-title">📌 Sections</div>

        {/*
          navLinks is an array from content.js.
          We map it to <button> elements instead of <a> tags
          because clicking them triggers JS (tab switch) rather
          than navigating to a URL.
        */}
        {navLinks.map(link => (
          <button
            key={link.section}
            className="sidebar-link"
            onClick={() => onNavigate(link.tab, link.section)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* ── Quick Facts Section ── */}
      <div style={{ marginBottom: 14 }}>
        <div className="sidebar-title">ℹ️ Quick Facts</div>
        <div style={{ color: 'white', fontSize: 10, padding: '4px 8px', lineHeight: 2 }}>
          {/*
            Object.entries() converts { key: value, ... } into
            an array of [key, value] pairs we can map over.
            This avoids hard-coding each fact as JSX.
          */}
          {Object.entries(quickFacts).map(([label, value]) => (
            <div key={label}>
              <strong>{label}:</strong> {value}
            </div>
          ))}
        </div>
      </div>

      {/* ── Progress Bar Section ── */}
      <div style={{ marginBottom: 14 }}>
        <div className="sidebar-title">📊 Progress</div>
        <div style={{ padding: '4px 8px', color: 'white', fontSize: 10, marginBottom: 4 }}>
          Research completion:
        </div>
        <div className="xp-progress-wrap" style={{ margin: '0 8px 8px' }}>
          {/*
            Inline style with a JS variable: width is controlled by `progress` state.
            When progress changes (0 → 100), React re-renders and the CSS transition
            in components.css animates the bar smoothly.
          */}
          <div
            className="xp-progress-bar"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>

    </div>
  );
}