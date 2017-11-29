import {shallow} from 'vue-test-utils';
import {createRenderer} from 'vue-server-renderer';

import App from '@/App.vue';

describe('App.vue', () => {
  it('should render', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('#app')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const render = createRenderer();
    const app = shallow(App);

    expect(app).toMatchSnapshot();
  });
});
