import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    slug: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'Chief Executive Officer',
    category: 'Management',
    image: '/images/placeholder.svg',
    bio: 'Alex brings over 15 years of industry experience, driving the company vision and strategic growth.',
    skills: ['Leadership', 'Strategy', 'Business Development'],
    metaTitle: 'Alex Johnson - CEO | SafiDotTech Team',
    metaDescription: 'Meet Alex Johnson, our CEO with 15 years of industry experience.'
  },
  {
    id: 'tm2',
    slug: 'sarah-lee',
    name: 'Sarah Lee',
    role: 'Lead Developer',
    category: 'Development',
    image: '/images/placeholder.svg',
    bio: 'Sarah is a full-stack expert who architects our most complex technical solutions with precision.',
    skills: ['React', 'Node.js', 'System Architecture'],
    metaTitle: 'Sarah Lee - Lead Developer | SafiDotTech Team',
    metaDescription: 'Meet Sarah Lee, our Lead Developer specializing in full-stack architecture.'
  },
  {
    id: 'tm3',
    slug: 'david-smith',
    name: 'David Smith',
    role: 'UI/UX Designer',
    category: 'Design',
    image: '/images/placeholder.svg',
    bio: 'David crafts intuitive and stunning user interfaces that elevate the digital products we build.',
    skills: ['Figma', 'User Research', 'Interaction Design'],
    metaTitle: 'David Smith - UI/UX Designer | SafiDotTech Team',
    metaDescription: 'Meet David Smith, our creative UI/UX Designer.'
  },
  {
    id: 'tm4',
    slug: 'emily-chen',
    name: 'Emily Chen',
    role: 'SEO Specialist',
    category: 'SEO',
    image: '/images/placeholder.svg',
    bio: 'Emily is a data-driven marketer who ensures our clients achieve top search engine rankings.',
    skills: ['Technical SEO', 'Keyword Research', 'Analytics'],
    metaTitle: 'Emily Chen - SEO Specialist | SafiDotTech Team',
    metaDescription: 'Meet Emily Chen, our dedicated SEO Specialist.'
  }
];
