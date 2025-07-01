import React from "react";

const Footer: React.FC = React.memo(() => {
  const user = "jawittdesigns";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-8 py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0"
      role="contentinfo"
    >
      <p>&copy; Jason Witt {currentYear}</p>
      <p>
        Email:{" "}
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline focus:underline"
          aria-label="Email Jason Witt"
        >
          {email}
        </a>
      </p>
      <p>
        <a
          href="/src/assets/Jason Witt Resume - 2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline focus:underline"
          aria-label="View Jason Witt Resume PDF"
        >
          View Resume (PDF)
        </a>
      </p>
    </footer>
  );
});

export default Footer;