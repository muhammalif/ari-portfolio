const Contact = () => {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto w-full">
      <header className="mb-24 md:w-8/12">
        <h1 className="font-display-xl text-4xl md:text-display-xl text-primary mb-6 dark:text-white">
          Let's Build the Future Together!
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl dark:text-neutral-300">
          Ready to start a conversation? Whether you have a project in mind or simply want to
          connect, I'm here to collaborate. Reach out directly via phone or email.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-12 flex flex-col md:flex-row gap-12 md:gap-24 pt-8 border-t border-surface-variant dark:border-neutral-700">
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
      </div>
    </main>
  );
};

export default Contact;