import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const LinkWithIcon: React.FC<ButtonProps> = ({ url, icon: Icon, text }) => {
  return (
    <Link href={url} className="flex text-slate-300 hover:text-slate-200">
      <Icon className="mr-2" />
      {text}
    </Link>
  );
};

export default LinkWithIcon;