import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
};

const ColumnRight: React.FC<ColumnProps> = React.memo(({ children }) => {
  return (
    <div
      className="w-full lg:max-w-2xl text-left"
      tabIndex={-1}
      aria-label="Section right column"
    >
      {children}
    </div>
  );
});

export default ColumnRight;