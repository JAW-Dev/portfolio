import React from "react";

const Footer: React.FC = () => {
  const user = "jawittdesigns";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  return (
    <footer
      className="border-t mt-8 py-4 text-center text-sm flex justify-between items-center"
      role="contentinfo"
    >
      <p>
        &copy; Jason Witt 2025
      </p>
      <p>
        Email:{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline"
          aria-label="Email Jason Witt"
        >
          {`${user} @ ${domain}`}
        </a>
      </p>
      <p>
        <a
          href="/src/assets/Jason Witt Resume - 2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Resume (PDF)
        </a>
      </p>
    </footer>
  );
};

export default Footer;