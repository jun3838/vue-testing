import Vue from 'vue';
import App from '@/App';

test('App', () => {
  let html = new Vue(App).$mount;
  expect(html).toMatchSnapshot();
});
