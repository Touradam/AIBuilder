import { Week } from '@/lib/data';
import DayCard from './DayCard';

interface WeekSectionProps {
  week: Week;
}

export default function WeekSection({ week }: WeekSectionProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {week.title}
        </h2>
        <p className="text-xl text-gray-600">{week.subtitle}</p>
      </div>

      <div className="space-y-6">
        {week.days.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
}
