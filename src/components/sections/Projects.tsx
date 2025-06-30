import React from 'react';

import ColumnLeft from '../layout/ColumnLeft';
import ColumnRight from '../layout/ColumnRight';

import { projects } from '../../data/projectsData';

const Projects: React.FC = () => {
  return (
    <section
      className="container mx-auto px-4"
      aria-label="Projects showcase"
    >
      {projects.map((project, index) => (
        <article
          key={index}
          className="flex flex-col lg:flex-row gap-8 items-center border-t border-gray-300 py-16"
          tabIndex={-1} // Allows keyboard users to focus each project article if needed
          aria-labelledby={`project-title-${index}`}
        >
          <ColumnLeft>
            <div className="flex flex-col items-start">
              <h2
                id={`project-title-${index}`}
                className="text-2xl font-bold mb-4 pb-2"
              >
                {index + 1}. {project.title}
              </h2>
              <p>{project.description}</p>
              <a
                href={project.url}
                className="text-blue-600 hover:underline focus:underline py-8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
              >
                {project.url}
              </a>
            </div>
          </ColumnLeft>

          <ColumnRight>
            <a
              href={project.url}
              className="text-blue-600 hover:underline focus:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website`}
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-auto rounded mb-4 shadow-sm"
              />
            </a>
          </ColumnRight>
        </article>
      ))}
    </section>
  );
};

export default Projects;
