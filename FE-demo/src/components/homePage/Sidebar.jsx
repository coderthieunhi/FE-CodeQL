import React from 'react';

// No changes needed here, this is already well-structured.
function Sidebar({ isCollapsed, onToggle }) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onToggle}
          style={{ cursor: 'pointer', padding: '8px' }} // Added padding to make it look less cramped
        >
          <path 
            d="M4 6H20M4 12H20M4 18H20" 
            stroke="currentColor" // This will inherit the white color from the sidebar's CSS
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span>QuitSmoke</span>
      </div>
      <nav className="navigation">
        <a href="#" className="active">
          <span className="icon">🏠</span> <span>Dashboard</span>
        </a>
        <a href="#"><span className="icon">🏆</span> <span>Achievements</span></a>
        <a href="#"><span className="icon">💬</span> <span>Community</span></a>
        <a href="#"><span className="icon">📚</span> <span>Resources</span></a>
        <a href="#"><span className="icon">⚙️</span> <span>Settings</span></a>
      </nav>
    </aside>
  );
}

// Small correction: remove the conditional logic from the JSX text nodes.
// The CSS (`.sidebar.collapsed span`) will handle hiding them.
export default Sidebar;