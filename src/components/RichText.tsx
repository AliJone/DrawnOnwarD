import React from 'react';

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Renders plain content strings with [text](url) links, so copy stays in the content files
const RichText: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    const external = /^https?:\/\//.test(href);
    parts.push(
      <a
        key={start}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="font-semibold text-brand-navy underline decoration-brand-teal/60 underline-offset-4 hover:text-brand-teal-ink"
      >
        {label}
      </a>,
    );
    last = start + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

export default RichText;
