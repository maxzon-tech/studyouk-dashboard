import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'categories',
    path: '/dashboard/category',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'courses',
    path: '/dashboard/course',
    icon: getIcon(fileTextFill)
  },

  {
    title: 'students',
    path: '/dashboard/student',
    icon: getIcon(peopleFill)
  },
  {
    title: 'enrolment',
    path: '/dashboard/enrol',
    icon: getIcon(personAddFill)
  },
  {
    title: 'report',
    path: '/dashboard/report',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'message',
    path: '/dashboard/message',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'manage profile',
    path: '/dashboard/manage_profile',
    icon: getIcon(alertTriangleFill)
  }

  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon(peopleFill)
  // },
  // {
  //   title: 'category',
  //   path: '/dashboard/categories',
  //   icon: getIcon(shoppingBagFill)
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
