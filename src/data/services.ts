import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 's1',
    slug: 'web-design-development',
    title: 'Web Design & Development',
    description: 'We create beautiful, responsive, and high-performance websites tailored to your specific business needs. Our solutions are designed to engage your users and drive conversions.',
    shortDesc: 'Custom web solutions built to perform.',
    icon: 'web-icon',
    features: ['Responsive Design', 'Custom UI/UX', 'SEO Optimized', 'Fast Load Times'],
    metaTitle: 'Web Design & Development Services | SafiDotTech',
    metaDescription: 'Expert web design and development services tailored to elevate your online presence.'
  },
  {
    id: 's2',
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your visibility on search engines and attract more organic traffic to your website with our proven SEO strategies. We help you rank higher for the keywords that matter most.',
    shortDesc: 'Boost your online visibility and traffic.',
    icon: 'seo-icon',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    metaTitle: 'SEO Services | SafiDotTech',
    metaDescription: 'Boost your website ranking with our comprehensive Search Engine Optimization services.'
  },
  {
    id: 's3',
    slug: 'frontend-development',
    title: 'Frontend Development',
    description: 'Engaging, interactive, and seamless frontend experiences built with modern technologies like React, Vue, and Next.js. We ensure your application looks great and functions flawlessly across all devices.',
    shortDesc: 'Modern user interfaces and experiences.',
    icon: 'frontend-icon',
    features: ['React & Next.js', 'Responsive UI', 'Interactive Features', 'Web Accessibility'],
    metaTitle: 'Frontend Development Services | SafiDotTech',
    metaDescription: 'Create engaging user experiences with our expert frontend development services.'
  },
  {
    id: 's4',
    slug: 'backend-development',
    title: 'Backend Development',
    description: 'Robust, scalable, and secure backend architectures to power your web applications and manage your data efficiently. Our solutions provide the strong foundation your project needs.',
    shortDesc: 'Scalable and secure server-side solutions.',
    icon: 'backend-icon',
    features: ['Node.js & Express', 'Database Design', 'API Development', 'Cloud Environment'],
    metaTitle: 'Backend Development Services | SafiDotTech',
    metaDescription: 'Build robust and scalable web applications with our top-tier backend development services.'
  }
];
