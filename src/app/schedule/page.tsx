import { Metadata } from 'next';
import Button from '@/components/Button';
import { programData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Schedule | AI Mastery Program',
  description:
    'View the complete schedule for our 2-weekend AI education program. Learn when each session takes place and what to prepare.',
};

export default function Schedule() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Schedule
            </h1>
            <p className="text-xl text-gray-600">
              Two intensive weekends designed to transform your understanding and use of AI
            </p>
          </div>
        </div>
      </section>

      {/* Format Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Program Format
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-gray-900 font-semibold mb-2">Weekends</div>
                <p className="text-gray-600 text-sm">
                  Friday, Saturday, Sunday for two consecutive weekends
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
                <div className="text-gray-900 font-semibold mb-2">Full Days</div>
                <p className="text-gray-600 text-sm">
                  Each day packed with lectures, exercises, and hands-on projects
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">~8</div>
                <div className="text-gray-900 font-semibold mb-2">Hours/Day</div>
                <p className="text-gray-600 text-sm">
                  Intensive learning with breaks for questions and practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Detailed Timeline
            </h2>

            {programData.map((week, weekIndex) => (
              <div key={week.id} className="mb-16 last:mb-0">
                <div className="bg-primary-600 text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold mb-2">{week.title}</h3>
                  <p className="text-primary-100">{week.subtitle}</p>
                </div>

                <div className="bg-white border-2 border-primary-600 rounded-b-lg overflow-hidden">
                  {week.days.map((day, dayIndex) => (
                    <div
                      key={day.id}
                      className={`p-6 ${
                        dayIndex !== week.days.length - 1
                          ? 'border-b border-gray-200'
                          : ''
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-primary-600 font-bold text-lg">
                              Day {weekIndex * 3 + dayIndex + 1}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {day.title}
                          </h4>
                          <p className="text-gray-600 mb-3">{day.subtitle}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>9:00 AM - 5:00 PM</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span>[Location TBD]</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What to Bring & Prepare
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Required</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Laptop (Mac, Windows, or Linux)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">Charger and power adapter</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Curiosity and willingness to learn
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">Open and critical mindset</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optional</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">Notebook and pen for notes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">Water bottle and snacks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">Questions and project ideas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      External mouse (for comfort during long sessions)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Program Setup */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Before You Arrive
            </h2>
            <p className="text-center text-gray-600 mb-12">
              No prior setup required! We'll guide you through all installations on Day 1.
            </p>
            <div className="bg-white p-8 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We'll Set Up Together
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">→</span>
                  <span className="text-gray-600">
                    Python and necessary development tools
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">→</span>
                  <span className="text-gray-600">
                    Cursor (AI-assisted coding editor)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">→</span>
                  <span className="text-gray-600">Git for version control</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">→</span>
                  <span className="text-gray-600">
                    Jupyter Lab for interactive coding
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">→</span>
                  <span className="text-gray-600">Access to AI models and APIs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Secure your spot in the next cohort and start your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/program">View Full Program</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
