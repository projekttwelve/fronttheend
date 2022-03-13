import React from 'react'
import { render, screen, cleanup } from '../../test-utils'
import home from '../../../features/home/home'

beforeEach(()=>{
  render(<home/>)
});

afterEach(()=>{
  cleanup()
})

test('Checking that sigIn component matches snapshot', () =>{
  const div = document.createElement('div')
  const component = render(<home/>, div)
  expect(component.container).toMatchSnapshot()
})
