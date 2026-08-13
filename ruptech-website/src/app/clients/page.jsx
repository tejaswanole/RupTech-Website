import ClientLogoGrid from '@/components/ClientLogoGrid';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';
import { CLIENTS } from '@/lib/constants';

export const metadata = {
  title: 'Our Clients & Testimonials',
  description:
    'Ruptech Engineers is trusted by leading names across power, electrical, and manufacturing sectors — CG Power, Schneider Electric, L&T, Exide, ISMT, and more.',
};

const caseStudies = [
  {
    sector: 'Power Sector',
    title: 'High-Capacity Distribution Box Supply',
    challenge: 'Requirement for 200+ custom-sized M.S. distribution boxes within a 45-day delivery window with consistent powder coating and IP rating compliance.',
    solution: 'Deployed dedicated production line for the project, with batch laser cutting and standardized jig-based bending for dimensional consistency across all units.',
    outcome: 'All 200+ units delivered 3 days ahead of schedule with zero rejections at client QA stage.',
    featured: true,
  },
  {
    sector: 'Solar / EV Infrastructure',
    title: 'EV Charger Enclosure Rollout',
    challenge: 'Outdoor-rated IP65 enclosures for EV charging stations requiring weather resistance and precise cutout positioning.',
    solution: 'CNC laser-cut enclosures with powder coat + zinc phosphating pre-treatment for outdoor durability.',
    outcome: 'Successfully supplied enclosures for 50+ charging stations across Maharashtra.',
    featured: false,
  },
];

const testimonials = [
  {
    quote: '[Testimonial to be collected — focus on reliability, precision, and adherence to tight manufacturing tolerances. Highlighting long-term partnership value.]',
    name: 'Director of Procurement',
    company: 'Leading Power Systems Manufacturer',
    role: '',
    isPending: true,
  },
  {
    quote: '[Testimonial to be collected — focus on ability to scale production rapidly while maintaining stringent quality control standards.]',
    name: 'VP of Engineering',
    company: 'Global Automation Corp',
    role: '',
    isPending: true,
  },
  {
    quote: '[Testimonial to be collected — focus on proactive problem-solving during the prototyping phase and seamless transition to full-scale manufacturing.]',
    name: 'Chief Technical Officer',
    company: 'Renewable Energy Solutions Ltd.',
    role: '',
    isPending: true,
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-md">Our Clients</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Trusted by leading names across manufacturing, power, and infrastructure. We deliver engineering
            excellence that meets the exacting standards of industry leaders.
          </p>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <ClientLogoGrid clients={CLIENTS} size="lg" />
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-surface-container py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-lg">Technical Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className={`${cs.featured ? 'md:col-span-8' : 'md:col-span-4'} bg-surface-container-lowest border border-outline-variant rounded overflow-hidden`}
              >
                <div className={`${cs.featured ? 'h-48' : 'h-32'} bg-surface-container-high`} />
                <div className="p-lg">
                  <div className="mb-sm">
                    <span className="bg-surface-container px-sm py-xs rounded font-label-caps text-label-caps text-primary">
                      {cs.sector}
                    </span>
                  </div>
                  <h3 className={`${cs.featured ? 'font-headline-md text-headline-md' : 'font-headline-sm text-headline-sm'} mb-md`}>
                    {cs.title}
                  </h3>
                  <div className="space-y-sm">
                    {[['CHALLENGE', cs.challenge], ['SOLUTION', cs.solution], ['OUTCOME', cs.outcome]].map(([label, text]) => (
                      <div key={label}>
                        <h4 className="font-mono-label text-mono-label text-primary">{label}:</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-lg text-center">Partner Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-inverse-surface py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mb-sm">
            Want to Become a Ruptech Partner?
          </h2>
          <p className="font-body-md text-body-md text-surface-variant mb-lg">
            Reach out to discuss your manufacturing requirements.
          </p>
          <CTAButton href="/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </>
  );
}
