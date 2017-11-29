import {shallow} from 'vue-test-utils';
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
});
