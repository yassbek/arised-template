import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs01 = [
    {
      question: "What is ArIA and how does it work?",
      answer:
        "ArIA is our intelligent automation agent that visually integrates with your legacy software — no APIs or code changes required. It observes workflows, learns user behavior, and automates repetitive tasks intelligently.",
    },
    {
      question: "What is Arised Academy?",
      answer:
        "Arised Academy is a conversational training platform. It simulates realistic dialogue scenarios to train your team in customer service, sales, HR, and more — powered by LLMs.",
    },
    {
      question: "How do I start a project with Arised?",
      answer:
        "It usually begins with a short workshop to map out your use case. After that, we build a pilot solution, which we refine and scale collaboratively.",
    },
    {
      question: "Is setup complicated?",
      answer:
        "Not at all. ArIA is plug-and-play with your existing software, and Academy runs in any browser. No installation, no tech headaches.",
    },
    {
      question: "Do you offer live demos?",
      answer:
        "Yes! Reach out through our contact form and we’ll schedule a personalized walkthrough of either platform.",
    },
  ];

  const faqs02 = [
    {
      question: "What plans are available?",
      answer:
        "We offer modular pricing depending on your needs — from starter pilots to enterprise-scale automation and training. Academy also offers a per-seat or per-module model.",
    },
    {
      question: "Can we customize our training content?",
      answer:
        "Absolutely. You can start with ready-made scenarios, or have us build custom dialog flows tailored to your team, brand voice, and use cases.",
    },
    {
      question: "What kind of support does Arised provide?",
      answer:
        "We offer guided onboarding, real-time monitoring tools, and ongoing support through Slack, email, or direct calls — depending on your plan.",
    },
    {
      question: "Do you offer discounts for nonprofits or schools?",
      answer:
        "Yes — especially for education-focused partners using Project Noor or Arised Academy. Reach out for a tailored quote.",
    },
    {
      question: "Can we switch or upgrade plans later?",
      answer:
        "Yes, our plans are designed to scale with you. You can upgrade, expand usage, or add features as your needs evolve.",
    },
  ];
  

  const faqs03 = [
    {
      question: "Can multiple users access the platform?",
      answer:
        "Yes. You can invite collaborators, assign roles, and track performance across users — whether in ArIA or Academy.",
    },
    {
      question: "Can I manage training roles or permissions?",
      answer:
        "Yes. In Academy, you can control access per scenario or module, and assign training tasks to specific roles or departments.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We follow strict GDPR-compliant standards, offer secure hosting, and provide optional on-premise deployments for high-security clients.",
    },
    {
      question: "Can I integrate ArIA with my internal systems?",
      answer:
        "Yes — visually via the UI. ArIA doesn't require APIs, but we can also add logic hooks or hybrid connections if needed.",
    },
    {
      question: "Can I brand the Academy for internal use?",
      answer:
        "Yes, we offer white-labeling options, so your teams feel like they're using your own internal platform — not a third-party tool.",
    },
  ];
  

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Getting started */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Getting Started</h2>
              <div className="space-y-2">
                {faqs01.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Profile & plans */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Plans, Pricing & Support</h2>
              <div className="space-y-2">
                {faqs02.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Accounts */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Using the Platform</h2>
              <div className="space-y-2">
                {faqs03.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
