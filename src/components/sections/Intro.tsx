import React from 'react';

import ColumnLeft from '../layout/ColumnLeft';
import ColumnRight from '../layout/ColumnRight';

const Intro: React.FC = React.memo(() => {
  return (
    <section className="container mx-auto px-4 py-32" aria-label="Introductory section about Jason Witt">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <ColumnLeft>
          <h2 className="text-6xl font-bold mb-4">Hi, I'm Jason</h2>
        </ColumnLeft>

        <ColumnRight>
          <p className="text-2xl">
            I'm a software engineer who loves building useful, reliable, and scalable tools. I’ve worked across a range of industries and project sizes, from lean startups to enterprise-level platforms, always focused on creating clean, maintainable solutions that actually solve problems.
          </p>
        </ColumnRight>
      </div>
    </section>
  );
});

export default Intro;
