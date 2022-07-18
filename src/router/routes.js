
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/IndexPage.vue') }
    ]
  },


  // auth pages

  {
    path: '/login',
    component: () => import('layouts/authpages.vue'),
    children: [
      { path: '/login', component: () => import('pages/Authpages/Login.vue') }
    ],
    children: [
      { path: '/on', component: () => import('pages/Authpages/On.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/authpages.vue'),
    children: [
      { path: '/register', component: () => import('pages/Authpages/Register.vue') }
    ]
  },
  {
    path: '',
    component: () => import('layouts/authpages.vue'),
    children: [
      { path: '/onboard', component: () => import('pages/Onboard.vue') }
    ]
  },

  // job seeker dashboard

  {
    path: '',
    component: () => import('layouts/JobseekerDashboard.vue'),
    children: [
      { path: '/seekerDashboard', component: () => import('pages/jobseeker/Jobseeker.vue'), name:'seekerDashboard' },
      { path: '/account', component: () => import('pages/jobseeker/Account.vue'), name:'account' },
      { path: '/reviews', component: () => import('pages/jobseeker/Reviews.vue'), name:'reviews' },
      { path: '/help', component: () => import('pages/jobseeker/Help.vue'), name:'help' },
      { path: '/jobs', component: () => import('pages/jobseeker/Jobs.vue'), name:'jobs' },
      { path: '/payment', component: () => import('pages/jobseeker/Payment.vue'),name:'payment' },
      { path: '/chat', component: () => import('pages/jobseeker/Chat.vue'), name:'chat' },
      { path: '/settings', component: () => import('pages/jobseeker/Settings.vue'), name:'settings' },
      
    ]
  },
  // job creator dashboard

  {
    path: '',
    component: () => import('layouts/JobcreatorDashboard.vue'),
    children: [
      { path: '/createJob', component: () => import('pages/jobcreator/Createjob.vue'), name:'createJob' },
      { path: '/creatorDashboard', component: () => import('pages/jobcreator/JobcreatorDashboard.vue'), name:'creatorDashboard' },
      { path: '/receipt', component: () => import('pages/jobcreator/Receipt.vue'), name:'receipt' },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
