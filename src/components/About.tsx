
import React from 'react';
import { Puzzle, Handshake, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import WaveDecoration from './WaveDecoration';

// Deck-style fact blocks: navy text on teal, sharp corners, icon on the left
const facts = [
  {
    icon: Puzzle,
    text: 'DrawnOnwarD is a ten-person software agency founded in 2024. We are based in Pakistan with engineers in Maryland (USA), Germany and Estonia, and our engineers average 8 years of experience.',
  },
  {
    icon: Handshake,
    text: 'We build web products in Next.js, Nuxt, React and Vue on Node.js, Go or .NET, and mobile apps in React Native or Flutter. We also place senior tech leads inside teams that need to move faster.',
  },
  {
    icon: ShieldCheck,
    text: 'Every project starts with a free roadmap and a fixed quote, runs on weekly demos and milestone payments, and you own 100% of the code and IP from the first commit. NDA on request. We never ask for equity.',
  },
];

const About: React.FC = () => (
  <section id="about" className="scroll-mt-20 py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading title="About us" />
          <p className="-mt-6 mb-8 max-w-2xl text-lg leading-relaxed text-brand-muted">
            Founded by{' '}
            <a
              href="https://www.linkedin.com/in/ali-jone-merchant/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-navy underline underline-offset-4"
            >
              Ali Jone Merchant
            </a>
            . Live with clients from 7 pm to midnight Pakistan time: US Eastern mornings and European afternoons.
          </p>
          <ul className="space-y-5">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-5 bg-brand-teal p-6 text-brand-navy shadow-md">
                <Icon className="mt-0.5 h-9 w-9 shrink-0" aria-hidden="true" />
                <p className="text-base font-medium leading-relaxed md:text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Cover-page composition from the deck: framed wordmark, the owner's tagline, line waves */}
        <div className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-xl ring-1 ring-brand-line md:p-14">
          <WaveDecoration className="-left-40 -top-28 h-[300px] w-[460px] text-brand-navy/50" />
          <WaveDecoration className="-bottom-28 -right-40 h-[300px] w-[460px] text-brand-navy/50" flip />
          <div className="relative">
            <img src="/logo-256.webp" alt="DrawnOnwarD monogram" width={256} height={256} loading="lazy" decoding="async" className="mx-auto h-28 w-28" />
            <div className="mt-8 border-[3px] border-brand-navy px-6 py-8 text-center md:px-8">
              <p className="display-heading text-4xl tracking-[0.14em] md:text-5xl">Drawn Onward</p>
              <p className="display-heading mt-4 text-sm tracking-[0.2em] text-brand-teal-ink md:text-base">Innovating forward, reflecting excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
