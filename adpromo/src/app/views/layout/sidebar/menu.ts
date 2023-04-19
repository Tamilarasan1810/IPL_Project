import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },
  // {
  //   label: 'grade1',
  //   icon: 'columns',
  //   link: '/courses/grade1',
  // },
  {
    label: 'Authentication',
    icon: 'unlock',
    subItems: [
      // {
      //   label: 'Login',
      //   link: '/auth/login',
      // },
      {
        label: 'Register',
        link: '/auth/register',
      },
      {
        // label: 'Register2',
        label: 'Login',
        link: '/auth/register2',
      },
      {
        label: 'Profile',
        link: '/auth/profile',
      },
    ],
  },

  {
    label: 'Courses',
    icon: 'columns',
    subItems: [
      {
        label: 'Grade 1',
        link: '/courses/grade1',
      },
    ],
  },

  // {
  //   label: 'Icons',
  //   icon: 'smile',
  //   subItems: [
  //     {
  //       label: 'Feather icons',
  //       link: '/icons/feather-icons',
  //     },
  //     {
  //       label: 'Mdi icons',
  //       link: '/icons/mdi-icons',
  //     },
  //     {
  //       label: 'g1',
  //       link: '/icons/g1',
  //     },
  //   ],
  // },
];
