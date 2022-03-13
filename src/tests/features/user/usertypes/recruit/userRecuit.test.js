import React from 'react'
import { render, screen, cleanup } from '../../../../test-utils.js'
import userRecuit from '../../../../../features/user/usertypes/recruit/userRecruit.js'

beforeEach(()=>{
  render(<userRecuit/>)
});

afterEach(()=>{
  cleanup()
})

test('Checking that sigIn component matches snapshot', () =>{
  const div = document.createElement('div')
  const component = render(<userRecuit/>, div)
  expect(component.container).toMatchSnapshot()
})
