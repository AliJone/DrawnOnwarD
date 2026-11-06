import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';

// Facts from the owner's fact sheet (5 Nov 2026), by role rather than by name so the page stays true as the team changes
const team = [
  { role: 'Full-stack engineers', people: 3, experience: '4 to 8 years', stack: 'Node.js, Next.js, Nuxt, React, Vue, .NET, Go' },
  { role: 'Mobile and full-stack engineer', people: 1, experience: '8 years', stack: 'React Native, Flutter, Node.js, Next.js, React, Vue' },
  { role: 'DevOps engineer', people: 1, experience: '9 years', stack: 'Cloud infrastructure, CI/CD' },
  { role: 'UI/UX designers', people: 2, experience: '5+ years', stack: 'Product and interface design' },
  { role: 'QA engineers', people: 2, experience: '5+ years, manual and automation', stack: 'Test automation' },
  { role: 'Project manager', people: 1, experience: '10 years, multiple certifications', stack: 'Delivery management' },
];

const howWeWork = [
  'Free project roadmap within one business day: scope, timeline and a budget range you can take to your co-founder or investors.',
  'Fixed price, agreed before any code is written.',
  'Weekly live demos and milestone payments, so you see working software before you pay.',
  'You own 100% of the code and IP from the first commit. NDA on request. We never ask for equity.',
  'The engineers on your first call are the engineers who build your product.',
];

const h2 = 'mt-14 text-2xl font-semibold text-brand-navy md:text-3xl';
const body = 'mt-4 leading-relaxed text-brand-ink/80';

const AboutPage: React.FC = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container mx-auto max-w-4xl px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <nav aria-label="Breadcrumb" className="text-sm text-brand-teal-ink">
        <a href="/" className="hover:text-brand-navy">Home</a>
        <span aria-hidden="true"> / </span>
        <span>About</span>
      </nav>
      <h1 className="display-heading mt-6 text-4xl md:text-6xl">About DrawnOnwarD</h1>
      <span aria-hidden="true" className="teal-rule mt-5" />
      <p className="mt-8 text-lg leading-relaxed text-brand-ink/80 md:text-xl">
        DrawnOnwarD is a ten-person software agency founded in 2024. We build B2B SaaS MVPs, web apps and mobile apps for startup founders and growing teams, and we place senior tech leads inside client engineering teams. We are based in Pakistan, with engineers in Maryland (USA), Germany and Estonia.
      </p>

      <h2 className={h2}>Who runs it</h2>
      <p className={body}>
        DrawnOnwarD was founded by{' '}
        <a href="https://www.linkedin.com/in/ali-jone-merchant/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline underline-offset-4">
          Ali Jone Merchant
        </a>
        , a full-stack engineer with seven years of experience in Go, React, Node.js, Next.js, Nuxt and Vue. Ali runs the company and works hands-on on client builds.
      </p>

      <h2 className={h2}>The team</h2>
      <p className={body}>Ten people. Our engineers average 8 years of experience, and there is no bench of trainees to hand your product to.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-paper text-xs uppercase tracking-[0.12em] text-brand-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Role</th>
              <th scope="col" className="px-4 py-3 font-semibold">People</th>
              <th scope="col" className="px-4 py-3 font-semibold">Experience</th>
              <th scope="col" className="px-4 py-3 font-semibold">Stack</th>
            </tr>
          </thead>
          <tbody>
            {team.map((group) => (
              <tr key={group.role} className="border-t border-brand-line text-brand-ink">
                <td className="px-4 py-3 font-medium text-brand-navy">{group.role}</td>
                <td className="px-4 py-3">{group.people}</td>
                <td className="px-4 py-3">{group.experience}</td>
                <td className="px-4 py-3">{group.stack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className={h2}>How we work</h2>
      <ol className="mt-4 space-y-3">
        {howWeWork.map((step, index) => (
          <li key={step} className="flex items-start gap-4 text-brand-ink">
            <span aria-hidden="true" className="display-heading inline-flex h-9 w-9 shrink-0 items-center justify-center bg-brand-teal text-lg text-brand-navy">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="pt-1.5">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className={h2}>Where and when we work</h2>
      <p className={body}>
        Our team works from Pakistan, Maryland (USA), Germany and Estonia. We are live with clients from 7 pm to midnight Pakistan time, which covers US Eastern mornings and European afternoons, and we work asynchronously the rest of the day.
      </p>

      <h2 className={h2}>What we build with</h2>
      <p className={body}>
        Web: Next.js, Nuxt, React and Vue on Node.js, Go or .NET. Mobile: React Native and Flutter. We choose the stack so that a future in-house team can take over without a rewrite.
      </p>

      <h2 className={h2}>Pricing</h2>
      <p className={body}>
        Scoped builds from $5,000 to $15,000. B2B SaaS MVPs from $15,000 to $40,000. Data or API platforms from $40,000 to $80,000. Tech leads for hire are priced per engagement. Full detail in the{' '}
        <a href="/#pricing" className="font-semibold text-brand-navy underline underline-offset-4">pricing section</a>.
      </p>

      <h2 className={h2}>Not to be confused with</h2>
      <p className={body}>
        DrawnOnwarD the software agency is not affiliated with the Canadian artist collective Drawnonward, the Jeremy Wade performance piece, or the children's books titled Drawn Onward.
      </p>

      <CtaBand />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
