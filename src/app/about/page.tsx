import { Metadata } from 'next';
import Button from '@/components/Button';
import { targetAudience, corePhilosophy } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About | AI Mastery Program',
  description:
    'Learn about our philosophy and approach to AI education. We believe in empowering people to use AI as a tool, not becoming dependent on it.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AI Mastery
            </h1>
            <p className="text-xl text-gray-600">
              We believe AI is the most powerful tool humanity has ever created. Those who
              learn how to use it intentionally and responsibly will thrive in the coming
              years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                We are launching this 2-weekend AI education program to address a critical
                need: teaching people how to understand AI, think critically about it, and
                use it to build real tools that improve their lives — without becoming
                dependent, manipulated, or replaced by it.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Those who don't learn how to use AI deliberately risk becoming passive
                users — or victims of it. This program is designed to give you the
                knowledge, skills, and mindset to stay in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Core Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {corePhilosophy.map((principle, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-900 pt-1">{principle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No Prerequisites Required
                </h3>
                <p className="text-gray-600 text-lg">
                  You don't need any prior programming or AI experience. We start from the
                  fundamentals and build up to advanced concepts, ensuring everyone can
                  follow along.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Principles Over Tools
                </h3>
                <p className="text-gray-600 text-lg">
                  Understanding principles matters more than memorizing tools. We teach you
                  how to think about AI, not just how to use specific platforms that may
                  change tomorrow.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Hands-On Learning
                </h3>
                <p className="text-gray-600 text-lg">
                  Every concept is reinforced with practical exercises. You'll build real
                  applications and deploy them, gaining confidence through doing.
                </p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Ethics & Responsibility
                </h3>
                <p className="text-gray-600 text-lg">
                  We emphasize ethical use of AI and teach you how to maintain agency and
                  avoid over-dependence. The goal is empowerment, not automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Who Should Join
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              This program is designed for anyone who wants to use AI as a tool, not a
              crutch.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience) => (
                <div
                  key={audience.title}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Your Instructor
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  [Instructor Name]
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  [Add instructor bio here - background, experience with AI, teaching
                  philosophy, and why they created this program]
                </p>
                <p className="text-gray-600 text-lg">
                  "My goal is to empower people to understand and use AI without losing
                  their agency, creativity, or critical thinking skills."
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
            Ready to Take Control of AI?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our program and learn how to build tools that serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/program">View Program Details</Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
