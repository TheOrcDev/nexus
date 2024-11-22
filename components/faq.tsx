import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Nexus?",
    answer:
      "Nexus is an AI-powered project management tool designed to streamline your workflow, provide intelligent insights, and boost team productivity.",
  },
  {
    question: "How does the AI work in Nexus?",
    answer:
      "Nexus uses advanced machine learning algorithms to analyze your project data, team performance, and industry trends to provide actionable insights and predictions.",
  },
  {
    question: "Is Nexus suitable for small teams?",
    answer:
      "Nexus is designed to scale with your needs. We offer plans suitable for individuals, small teams, and large enterprises alike.",
  },
  {
    question: "Can I integrate Nexus with other tools?",
    answer:
      "Yes, Nexus offers a wide range of integrations with popular tools and platforms. We also provide an API for custom integrations.",
  },
  {
    question: "How secure is my data with Nexus?",
    answer:
      "We take data security very seriously. Nexus employs industry-standard encryption, regular security audits, and complies with GDPR and other data protection regulations.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
