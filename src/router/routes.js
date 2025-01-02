const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', name: 'landing', component: () => import('pages/LandingPage.vue') },
      { path: '/terms', name: 'terms', component: () => import('pages/site/terms/TermsPage.vue') },
      { path: '/blog/blog-title-1', name:'blog1', component: () => import('pages/site/blog/BlogPage1.vue') },
      { path: '/blog/blog-title-2', name:'blog2', component: () => import('pages/site/blog/BlogPage2.vue') },
      { path: '/blog/blog-title-3', name:'blog3', component: () => import('pages/site/blog/BlogPage3.vue') },
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/app', name: 'dashboard', component: () => import('pages/IndexPage.vue') },
      // Public pages
      { path: '/app/dashboard', name: 'dashboard', component: () => import('pages/IndexPage.vue') },
      { path: '/app/news', name: 'news', component: () => import('pages/common/NewsPage.vue') },
      { path: '/app/support', name: 'app-support', component: () => import('pages/common/SupportPage.vue') },
      { path: '/app/help', name: 'app-help', component: () => import('pages/common/HelpPage.vue') },
      { path: '/app/releasenotes', name: 'releasenotes', component: () => import('pages/common/ReleasenotesPage.vue') },
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
