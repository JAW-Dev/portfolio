import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
};

const ColumnRight: React.FC<ColumnProps> = ({ children }) => {
  return <div className="w-full lg:max-w-2xl text-left">{children}</div>;
};

export default ColumnRight;