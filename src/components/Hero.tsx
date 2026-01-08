import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build tools that optimize your life — <br className="hidden md:block" />
            <span className="text-primary-600">don't let AI use you</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A 2-weekend intensive program teaching you to understand AI, think critically,
            and build real tools that improve your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/program">View Program</Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
