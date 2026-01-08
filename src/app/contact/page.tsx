import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AI Mastery Program',
  description:
    'Get in touch with us to learn more about the AI Mastery Program. Find answers to frequently asked questions.',
};

export default function Contact() {
  const faqs = [
    {
      question: 'Do I need any prior programming experience?',
      answer:
        'No! This program is designed for complete beginners. We start from the fundamentals and build up progressively. The only prerequisite is curiosity and willingness to learn.',
    },
    {
      question: 'What if I miss a day?',
      answer:
        'We recommend attending all sessions for the best learning experience. However, we provide materials and recordings for students who need to miss a session. You can catch up between weekends.',
    },
    {
      question: 'Will I receive a certificate?',
      answer:
        'Yes, upon successful completion of the program, you will receive a certificate of completion that demonstrates your understanding of AI fundamentals and practical skills.',
    },
    {
      question: 'What programming language will we use?',
      answer:
        'We primarily use Python, which is the most popular language for AI and machine learning. It\'s beginner-friendly and widely used in the industry.',
    },
    {
      question: 'Can I work on my own projects during the program?',
      answer:
        'Absolutely! In Week 2, you\'ll have opportunities to work on personal projects. We encourage you to bring your own ideas and we\'ll help you build them.',
    },
    {
      question: 'What kind of laptop do I need?',
      answer:
        'Any modern laptop (Mac, Windows, or Linux) from the last 5 years should work fine. You don\'t need a powerful machine - most work will be done using cloud resources.',
    },
    {
      question: 'Is there a maximum class size?',
      answer:
        'Yes, we keep groups small (typically 15-20 students) to ensure everyone gets personalized attention and can ask questions freely.',
    },
    {
      question: 'Will there be ongoing support after the program?',
      answer:
        'Yes! You\'ll get access to our alumni community where you can continue learning, ask questions, and share your projects with fellow graduates.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help you start your AI journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="bg-gray-50 p-8 rounded-lg">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries and program information
                </p>
                <a
                  href="mailto:info@aimastery.example"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  info@aimastery.example
                </a>
              </div>

              {/* Location */}
              <div className="bg-gray-50 p-8 rounded-lg">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  Program location details will be provided upon enrollment
                </p>
                <p className="text-gray-500">[City, Country]</p>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-8 rounded-lg">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with program news and AI insights
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 p-8 rounded-lg">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600 mb-4">We typically respond within 24 hours</p>
                <p className="text-gray-500">Monday - Friday, 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Find answers to common questions about the program
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reach Out</h3>
                <p className="text-gray-600">
                  Contact us via email with your questions or interest in joining
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn More</h3>
                <p className="text-gray-600">
                  We'll provide detailed information about upcoming cohorts and enrollment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Started</h3>
                <p className="text-gray-600">
                  Secure your spot and begin your journey to AI mastery
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're here to help you make an informed decision
            about your AI education.
          </p>
          <a
            href="mailto:info@aimastery.example"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Send Us an Email
          </a>
        </div>
      </section>
    </>
  );
}
