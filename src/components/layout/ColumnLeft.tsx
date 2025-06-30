import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
};

const ColumnLeft: React.FC<ColumnProps> = ({ children }) => {
  return <aside className="w-full text-left flex-1">{children}</aside>;
};

export default ColumnLeft;