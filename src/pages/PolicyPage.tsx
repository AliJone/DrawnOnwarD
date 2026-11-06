import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PolicyPageProps {
  kind: 'privacy' | 'terms';
}

interface PolicySection {
  id?: string;
  heading: string;
  text: string;
}

const LAST_UPDATED = '7 November 2026';

// Written to match what the site actually does: a contact form, email, Google Fonts, no cookies of our own
const privacy: PolicySection[] = [
  { heading: '1. Who we are', text: 'DrawnOnwarD is a software agency based in Pakistan. Contact: info@drawnonward.org.' },
  { heading: '2. What we collect', text: 'When you use the contact form we receive the name, email address and message you type, so that we can reply. If you email us, we keep the correspondence. We do not ask for payment details on this site.' },
  { heading: '3. How we use it', text: 'To answer your enquiry, prepare your project roadmap and, if you become a client, to deliver the work. We do not sell personal data and we do not send marketing email without your consent.' },
  { heading: '4. Who else sees it', text: 'Form submissions are delivered to us through a form-handling provider and our email provider. Fonts are loaded from Google Fonts, which receives your IP address when the page loads. If we add analytics, we will name the provider here.' },
  { id: 'cookies', heading: '5. Cookies', text: 'This site sets no cookies of its own. Third-party services named above may set their own; your browser settings let you block or delete them.' },
  { heading: '6. How long we keep it', text: 'Enquiries for as long as needed to respond and, for clients, for the duration of the engagement and the legal retention period after it.' },
  { heading: '7. Your rights', text: 'You can ask what we hold about you, ask us to correct or delete it, or object to its use, by emailing info@drawnonward.org.' },
  { heading: '8. Changes', text: 'We will post any change here with a new date.' },
];

const terms: PolicySection[] = [
  { heading: '1. Scope', text: 'These terms cover your use of drawnonward.org. Client engagements are governed by the written statement of work and agreement signed for each project, which take precedence over these terms.' },
  { heading: '2. Use of the site', text: 'Use the site lawfully and do not attempt to disrupt it.' },
  { heading: '3. Content and trademarks', text: "The site's text, design and DrawnOnwarD marks belong to DrawnOnwarD. Client names and logos belong to their owners and appear with permission." },
  { heading: '4. Project terms', text: 'Stated so founders can rely on them: fixed quote after a free roadmap; milestone payments; weekly demos; the client owns 100% of the code and intellectual property from the first commit; NDA on request; no equity requested.' },
  { heading: '5. Warranty and liability', text: 'The website is provided as is, without warranty. Our liability for your use of the website is limited to the extent the law allows. Nothing here limits what we owe a client under a signed agreement.' },
  { heading: '6. Changes', text: 'The current version is always at this address, with its date.' },
];

const PolicyPage: React.FC<PolicyPageProps> = ({ kind }) => {
  const sections = kind === 'privacy' ? privacy : terms;
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 pb-20 pt-32 md:px-8 md:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-brand-teal-ink">
          <a href="/" className="hover:text-brand-navy">Home</a>
          <span aria-hidden="true"> / </span>
          <span>{title}</span>
        </nav>
        <h1 className="display-heading mt-6 text-4xl md:text-6xl">{title}</h1>
        <span aria-hidden="true" className="teal-rule mt-5" />
        <p className="mt-6 text-sm text-brand-muted">Last updated {LAST_UPDATED}.</p>
        {sections.map((section) => (
          <section key={section.heading} id={section.id} className="mt-10 scroll-mt-28">
            <h2 className="text-xl font-semibold text-brand-navy">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{section.text}</p>
          </section>
        ))}
        <p className="mt-12 text-sm text-brand-muted">
          Questions: <a href="mailto:info@drawnonward.org" className="font-medium text-brand-navy underline underline-offset-4">info@drawnonward.org</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
