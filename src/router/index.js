import Vue from 'vue'
import Router from 'vue-router'
import Wellcome from '@/components/Wellcome'
import RecognizeIdol from '@/components/RecognizeIdol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wellcome',
      component: RecognizeIdol
    }
  ]
})
