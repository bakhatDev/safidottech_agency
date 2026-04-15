import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Design & Development', href: '/services/web-design-development' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Frontend Development', href: '/services/frontend-development' },
      { label: 'Backend Development', href: '/services/backend-development' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get In Touch', href: '/contact' }
];
