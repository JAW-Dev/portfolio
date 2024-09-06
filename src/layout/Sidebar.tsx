import React from 'react';
// Components
import LinkWithIcon from '@/components/LinkWithIcon';
// Icons
import {
  LayoutDashboard,
  Presentation,
  CpuIcon
 } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-[calc(100vh-56px)] py-2 px-5 bg-primary dark:bg-slate-700 text-slate-300 border-t border-slate-500">
      <ul className="space-y-4">
        <li>
          <LinkWithIcon url="/" icon={LayoutDashboard} text="Dashboard" />
        </li>
        <li>
          <LinkWithIcon url="/projects" icon={Presentation} text="Projects" />
        </li>
        <li>
          <LinkWithIcon url="/tech" icon={CpuIcon} text="Tech" />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;