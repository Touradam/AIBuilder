import Hero from '@/components/Hero';
import Button from '@/components/Button';
import { targetAudience, programStats, corePhilosophy } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Program Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {programStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Master AI — Don't Let It Master You
            </h2>
            <p className="text-xl text-gray-600">
              This program focuses on understanding, building, and using AI intentionally
              and responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Understanding AI
              </h3>
              <p className="text-gray-600">
                Learn what AI really is, how it works, and how to think critically about
                its capabilities and limitations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Practical Skills
              </h3>
              <p className="text-gray-600">
                Gain hands-on experience building real applications, from web apps to AI
                agents, with modern development tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Literacy & Ethics
              </h3>
              <p className="text-gray-600">
                Develop agency and ethical awareness to use AI as a tool for empowerment,
                not dependence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who This Program Is For
            </h2>
            <p className="text-xl text-gray-600">
              Anyone who wants to use AI as a tool, not a crutch. No prior technical
              experience required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((audience) => (
              <div
                key={audience.title}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-400 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Philosophy
            </h2>
            <p className="text-xl text-primary-100">
              These principles guide everything we teach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {corePhilosophy.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <p className="text-lg">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Master AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next cohort and learn how to build AI tools that empower you, not
            replace you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/program">Explore the Program</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
