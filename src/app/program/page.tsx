import { Metadata } from 'next';
import Button from '@/components/Button';
import WeekSection from '@/components/WeekSection';
import { programData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Program Structure | AI Mastery Program',
  description:
    'Explore our comprehensive 2-weekend curriculum covering AI fundamentals, programming, building applications, and AI agents.',
};

export default function Program() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Structure
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive 6-day journey from AI fundamentals to building your own AI
              agents. Click on each day to expand and see detailed topics.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-700">2 Weekends</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary-600"
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
                <span className="text-gray-700">6 Full Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">No Prerequisites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What You'll Accomplish
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Week 1</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Understand how AI and machine learning work</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Learn programming fundamentals with Python</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Build and deploy your first applications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Week 2</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Master AI agents and agentic workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Build your own AI agent application</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Develop ethical AI practices and long-term skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {programData.map((week) => (
              <WeekSection key={week.id} week={week} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Learning Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Understand</h3>
                <p className="text-gray-600">
                  Learn the concepts and principles behind AI technology
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build</h3>
                <p className="text-gray-600">
                  Apply knowledge by creating real, working applications
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Master</h3>
                <p className="text-gray-600">
                  Develop agency and ethical practices for long-term success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your AI Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            This comprehensive program will transform how you think about and use AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/schedule">View Schedule</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
