import React from 'react'
import { render, screen, cleanup } from '../../../test-utils'
import userReducer from '../../../../features/user/UserSlice'
import signIn from '../../../../features/user/signIn/SignIn'

beforeEach(()=>{
  render(<signIn/>)
});

afterEach(()=>{
  cleanup()
})

test('Checking that sigIn component matches snapshot', () =>{
  const div = document.createElement('div')
  const component = render(<signIn/>, div)
  expect(component.container).toMatchSnapshot()
})
