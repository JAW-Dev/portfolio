import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="h-[calc(100vh-56px)] py-2 px-5 bg-primary dark:bg-slate-700 text-slate-300 border-t border-slate-500">
      <ul className="space-y-4">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;