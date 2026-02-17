import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact — Christine Nelson' };

export default function Contact() {
  return (
    <>
      <section className="bg-warm-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">Let&apos;s Connect</h1>
          <p className="text-warm-500 mt-4 max-w-xl mx-auto">
            Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-warm-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                  placeholder="Tell me what you're thinking..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-warm-900 mb-2">Email</h3>
              <p className="text-warm-600">hello@christinenelson.com</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-warm-900 mb-2">Based In</h3>
              <p className="text-warm-600">East Coast, USA</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-warm-900 mb-2">Follow Along</h3>
              <div className="flex gap-3">
                {['Instagram', 'Twitter', 'Pinterest', 'LinkedIn'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-sm text-accent hover:underline"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-warm-100 rounded-2xl p-6">
              <h3 className="font-serif text-lg font-bold text-warm-900 mb-2">Response Time</h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                I typically respond within 1–2 business days. For project inquiries, please include a brief overview of what you&apos;re looking for and your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
