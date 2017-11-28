import Vue from 'vue';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('should display without crashing', () => {
    let $html = new Vue(Hero).$mount;
    expect($html).toMatchSnapshot();
  });
});
