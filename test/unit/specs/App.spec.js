import {shallow} from 'vue-test-utils';
import {createRenderer} from 'vue-server-renderer';
import App from '@/App.vue';

describe('App', () => {
  test('App renders', () => {
    let app = shallow(App);
    expect(app.find('#app')).toBeTruthy();
  });

  test('Snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(App);

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
