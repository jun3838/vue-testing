import {shallow} from 'vue-test-utils';
import {createRenderer} from 'vue-server-renderer';
import Hero from '@/components/Hero';

describe('Hero component', () => {
  it('should render with correct props', () => {
    let $mounted = shallow(Hero, {
      propsData: {
        text: 'Testing',
        background: '//picsum.photos/600/600',
      },
    });
    expect($mounted.find('h1').text()).toEqual('Testing');
    expect($mounted.find('.hero').html()).toContain('//picsum.photos/600/600');
  });

  test('Snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Hero);

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
