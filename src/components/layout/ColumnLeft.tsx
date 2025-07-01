import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
};

const ColumnLeft: React.FC<ColumnProps> = React.memo(({ children }) => {
  return <aside className="w-full text-left flex-1" tabIndex={-1} aria-label="Section left column">{children}</aside>;
});

export default ColumnLeft;