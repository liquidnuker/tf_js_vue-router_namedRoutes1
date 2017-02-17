import Vue from './js/vendor/vue.min.js';
import VueRouter from './js/vendor/vue-router.min.js';

Vue.use(VueRouter);

const Home = {
  template: '<div>This is Home</div>'
};

const Foo = {
  template: '<div>This is Foo</div>'
};

const Bar = {
  template: '<div>This is Bar {{ $route.params.id }}</div>'
};

const userId = "759676";

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/foo',
    name: 'foo',
    component: Foo
  }, {
    path: '/bar/:id',
    name: 'bar',
    component: Bar
  }]
});

// const app = new Vue({
//   router
// }).$mount('#app');

const app = new Vue({
  router,
  template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: ${userId} }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');

// <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>