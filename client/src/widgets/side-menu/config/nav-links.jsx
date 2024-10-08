import { Article, Phone, Table } from '@phosphor-icons/react';

export const NavLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <Table size={20} weight='bold' />,
  },
  {
    label: 'О нас',
    href: '/about',
    icon: <Article size={20} weight='bold' />,
  },
  {
    label: 'Контакты',
    href: '/contacts',
    icon: <Phone size={20} weight='bold' />,
  },
];
