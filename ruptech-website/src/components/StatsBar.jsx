import { BUSINESS } from '@/lib/constants';

const defaultStats = [
  { value: String(BUSINESS.established), label: 'Established' },
  { value: BUSINESS.area, label: 'sqft Manufacturing Facility' },
  { value: BUSINESS.turnover, label: 'Annual Turnover (FY 2023-24)' },
  { value: BUSINESS.capital, label: 'Capital Invested' },
];

export default function StatsBar({ stats = defaultStats }) {
  return (
    <section className="bg-surface-container border-y border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter py-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter divide-x divide-outline-variant">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-sm">
              <div className="font-headline-lg text-headline-lg text-primary mb-xs">{stat.value}</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
