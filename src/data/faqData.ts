// src/data/faqData.ts
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    id: 2,
    question: 'How do I know if this is right for my business?',
    answer:
      'We analyze your current business scale and provide custom digital solutions tailored to your target goals.',
  },
  {
    id: 3,
    question: 'How much does a project cost?',
    answer:
      'Project costs vary depending on features, complexity, and scope. Contact us for a detailed custom quote.',
  },
  {
    id: 4,
    question: 'How long does it take?',
    answer:
      'A typical MVP project takes 4–8 weeks, while enterprise platforms may scale based on milestones.',
  },
  {
    id: 5,
    question: 'Can I start with a small project first?',
    answer:
      'Absolutely. We highly recommend starting with a Minimum Viable Product (MVP) to validate your vision.',
  },
];
