import { useState, useEffect } from 'react';

/*
  Component that represents the Windows XP taskbar fixed at the bottom of the screen.
*/

/**
 * Helper that formats a Date object as "H:MM AM/PM"
 * @param {*} date 
 */
function formatTime(date) {
  let hours   = date.getHours();          // 0–23
  const minutes = String(date.getMinutes()).padStart(2, '0'); // "9" -> "09"
  const ampm  = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;              // convert 0 -> 12 for 12-hour display
  return `${hours}:${minutes} ${ampm}`;
}

/**
 * Handles logic for the taskbar style
 * @param {*} activeTab
 * @parm {*}  onTabClick
 */
export default function Taskbar({ activeTab, onTabClick }) {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
  const interval = setInterval(() => {
    setTime(formatTime(new Date())); // update state → React re-renders clock
  }, 1000);

    return () => clearInterval(interval);
}, []);

return (
  <div style={styles.taskbar}>
    {/* ── Start Button ── */}
    <button style={styles.startBtn}>⊞ start</button>

    {/* ── Active Window Button ── */}
    <div style={styles.activeWindow}>
      🌍 Yasser Arafat — Final Project [{activeTab}]
    </div>

    {/* ── System Tray Clock ── */}
    <div style={styles.clock}>{time}</div>
  </div>
  );
}

/**
 * Inline styles for just the taskbar
 */
const styles = {
  taskbar: {
    position: 'fixed',      // stays at bottom even when page scrolls
    bottom: 0, left: 0, right: 0,
    height: 38,
    background: 'linear-gradient(to bottom, #245edb, #1941a5)',
    borderTop: '1px solid #6fa0e0',
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px',
    gap: 4,
    zIndex: 1000,           // appear above all other elements
    boxShadow: '0 -2px 6px rgba(0,0,0,0.4)',
    fontFamily: 'Tahoma, Trebuchet MS, sans-serif',
  },
  startBtn: {
    height: 30,
    padding: '0 14px 0 10px',
    background: 'linear-gradient(to bottom, #3fad3f, #1a6e1a)',
    border: '1px solid #1a5c1a',
    borderRadius: '0 12px 12px 0',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: "'Franklin Gothic Medium', Tahoma, sans-serif",
    cursor: 'pointer',
    textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
    boxShadow: 'inset 0 1px 0 #7dcc7d',
    letterSpacing: '0.5px',
  },
  activeWindow: {
    flex: 1,
    background: 'rgba(0,0,80,0.5)',
    border: '1px inset rgba(255,255,255,0.3)',
    padding: '0 10px',
    height: 28,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: 11,
    borderRadius: 2,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis', // "..." when text is too long
  },
  clock: {
    color: 'white',
    fontSize: 11,
    padding: '0 10px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(0,0,100,0.3)',
    height: 28,
    display: 'flex',
    alignItems: 'center',
    minWidth: 70,
    justifyContent: 'center',
  },
};