import Vue from 'vue';
import Router from 'vue-router';
import OrthoCaseSheet from '@/views/OrthoCaseSheet.vue';
import DiabetesCaseSheet from '@/views/DiabetesCaseSheet.vue';
import EntCaseSheet from '@/views/EntCaseSheet.vue';
import AyurvedaCaseSheet from '@/views/AyurvedaCaseSheet.vue';
import PediatricCaseSheet from '@/views/PediatricCaseSheet.vue';


// Import other components as needed

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/orthopedic',
      name: 'orthopedic',
      component: OrthoCaseSheet
    },

    {
      path: '/diabetes',
      name: 'diabetes',
      component: DiabetesCaseSheet
    },

    {
      path: '/ent',
      name: 'ent',
      component: EntCaseSheet
    },

    {
      path: '/ayurveda',
      name: 'ayurveda',
      component: AyurvedaCaseSheet
    },

    {
      path: '/pediatric',
      name: 'pediatric',
      component: PediatricCaseSheet
    },
   
  

    // Define other routes as needed
  ]
});
