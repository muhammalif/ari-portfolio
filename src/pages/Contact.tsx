import { FormEvent, useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Message simulated.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-edge max-w-container-max mx-auto w-full">
      <header className="mb-24 md:w-8/12">
        <h1 className="font-display-xl text-display-xl text-primary mb-6 dark:text-white">
          Let's Build the Future Together!
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl dark:text-neutral-300">
          Ready to start a conversation? Whether you have a project in mind or simply want to
          connect, I'm here to collaborate. Reach out directly or leave a message below.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-5 flex flex-col gap-12 pt-8 border-t border-surface-variant dark:border-neutral-700">
          <div className="group flex items-start gap-6">
            <div className="mt-1 text-on-surface-variant dark:text-neutral-400">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </div>
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2 dark:text-neutral-400">
                Phone
              </h3>
              <a
                className="font-headline-md text-headline-md text-primary hover:text-secondary transition-colors block dark:text-white dark:hover:text-orange-400"
                href="tel:083823393910"
              >
                0838-2339-3910
              </a>
            </div>
          </div>
          <div className="group flex items-start gap-6">
            <div className="mt-1 text-on-surface-variant dark:text-neutral-400">
              <span className="material-symbols-outlined text-[24px]">mail</span>
            </div>
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2 dark:text-neutral-400">
                Email
              </h3>
              <a
                className="font-headline-md text-headline-md text-primary hover:text-secondary transition-colors block break-all dark:text-white dark:hover:text-orange-400"
                href="mailto:septianari108@gmail.com"
              >
                septianari108@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-7 pt-8 border-t border-surface-variant dark:border-neutral-700">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase mb-8 dark:text-orange-400">
            Inquiry Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-label-caps text-label-caps text-on-surface-variant uppercase dark:text-neutral-400"
              >
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors placeholder:text-surface-dim dark:text-white dark:border-neutral-600 dark:focus:border-white"
                id="name"
                name="name"
                placeholder="Your Full Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-label-caps text-label-caps text-on-surface-variant uppercase dark:text-neutral-400"
              >
                Email
              </label>
              <input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors placeholder:text-surface-dim dark:text-white dark:border-neutral-600 dark:focus:border-white"
                id="email"
                name="email"
                placeholder="hello@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-label-caps text-label-caps text-on-surface-variant uppercase dark:text-neutral-400"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-transparent border-0 border-b border-outline-variant rounded-none px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-surface-dim dark:text-white dark:border-neutral-600 dark:focus:border-white"
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:bg-surface-tint transition-colors duration-300 rounded-none dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Submit Inquiry
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;