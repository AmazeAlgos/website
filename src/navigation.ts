import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [{ text: 'About', href: getPermalink('/about') }],
    },
    {
      title: 'Resources',
      links: [{ text: 'Blog', href: getPermalink('/blog') }],
    },
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Pricing', href: '#pricing' },
        { text: 'Login', href: 'https://app.stockalpha.in/login' },
        { text: 'Signup', href: 'https://app.stockalpha.in/signup' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Shipping Policy', href: getPermalink('/shipping') },
        { text: 'Refund Policy', href: getPermalink('/refund') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
   Copyright © ${new Date().getFullYear()} Stock Alpha. All rights reserved.
  `,
};
