'use client';

import { useState } from 'react';
import { Day } from '@/lib/data';

interface DayCardProps {
  day: Day;
}

export default function DayCard({ day }: DayCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary-400 transition-colors">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
          <p className="text-gray-600">{day.subtitle}</p>
        </div>
        <div className="ml-4">
          <svg
            className={`w-6 h-6 text-primary-600 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mt-4 mb-3">Topics Covered:</h4>
          <ul className="space-y-2">
            {day.topics.map((topic, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></span>
                <span className="text-gray-600">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
