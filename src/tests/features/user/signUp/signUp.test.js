import React from 'react'
import { render, screen, cleanup } from '../../../test-utils'
import userReducer from '../../../../features/user/UserSlice'
import signUp from '../../../../features/user/signUp/signUp'

beforeEach(()=>{
  render(<signUp/>)
});

afterEach(()=>{
  cleanup()
})

test('Checking that signUp component matches snapshot', () =>{
  const div = document.createElement('div')
  const component = render(<signUp/>, div)
  expect(component.container).toMatchSnapshot()
})
