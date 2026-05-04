/**
 * A reusable "window frame" component — the blue title bar,
 * control buttons, menu bar, and address bar chrome.
 */

export default function WindowsXpWindow({
    title,
    icon = '🖥️',
    address = '',
    menuItems = ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'],
    children,
})
{
    return(
        <div className="windows-xp-window">
            {/* ── Title Bar ── */}
            <div className="title-bar">
                <div className="title-bar-text">
                <span style={{ fontSize: 16 }}>{icon}</span>
                {title}
                </div>

                {/* Control buttons — decorative only for this project */}
                <div className="title-bar-controls">
                <button className="tb-btn tb-btn-min" aria-label="Minimize">_</button>
                <button className="tb-btn tb-btn-max" aria-label="Maximize">□</button>
                <button className="tb-btn tb-btn-close" aria-label="Close">✕</button>
                </div>
            </div>

            {/* ── Menu Bar ── */}
            <div className="menu-bar">
                {/*
                .map() transforms each item in menuItems into a JSX element.
                The `key` prop is REQUIRED by React when rendering lists — it
                helps React identify which items changed and avoid re-rendering
                the whole list unnecessarily.
                */}
                {menuItems.map(item => (
                <div key={item} className="menu-item">{item}</div>
                ))}
            </div>

            {/* ── Address Bar (only shown if address is provided) ── */}
            {address && (
                <div className="address-bar">
                <span className="address-label">Address</span>
                <input
                    className="address-input"
                    type="text"
                    value={address}
                    readOnly  // controlled input — value comes from props, not user typing
                />
                <button className="go-btn">Go</button>
                </div>
            )}

            {/* ── Window Body — renders whatever children were passed in ── */}
            {children}
        </div>
    );
}