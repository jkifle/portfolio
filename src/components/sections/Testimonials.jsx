import SectionLabel from '../ui/SectionLabel';
import TestimonialCard from '../ui/TestimonialCard';

const TESTIMONIALS = [
  {
    quote: "Joseph shipped the Merged Dashboards feature end-to-end within his first weeks. His initiative in architecting the LiteLLM middleware saved us $30k in API overhead — a genuine impact from an intern.",
    name: "Senior Engineer", title: "Nexus — Knoxville, TN", initials: "NX",
  },
  {
    quote: "He built our cryogenic performance dashboard in React and D3.js with remarkable precision. His ability to translate complex simulation data into actionable visualizations is exceptional for a researcher at any level.",
    name: "Research Advisor", title: "UTK Tickle College of Engineering", initials: "UTK",
  },
  {
    quote: "Joseph's Retail Item Locator is still in daily production use. He asked the right questions, designed a clean relational schema, and delivered a tool that measurably reduced handle time for our staff.",
    name: "Client", title: "Retail Environment — Winter 2025", initials: "CL",
  },
];

export default function Testimonials() {
  return (
    <section style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid var(--border)' }}>
      <div className="section-pad-top" style={{ borderBottom: '1px solid var(--border)' }}>
        <SectionLabel index="04" label="Testimonials" />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '0.95' }}>
          What people say.
        </h2>
      </div>
      <div className="three-col">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{ background: 'var(--paper)' }}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </section>
  );
}