import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import Form from './Form'

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    handleSubmit: jest.fn(),
    register: jest.fn(),
    formState: { errors: {} },
  }),
}))

describe('Form', () => {
  test('renders Form component without crashing', () => {
    render(<Form />)
  })

  test('allows the user to fill out the form and submit it', async () => {
    const { getByPlaceholderText, getByText } = render(<Form />)
    const handleSubmit = jest.fn()

    fireEvent.change(getByPlaceholderText('text@email.com'), {
      target: { value: 'test@example.com' },
    })

    fireEvent.change(getByPlaceholderText('000 000 0000'), {
      target: { value: '123 456 7890' },
    })

    fireEvent.change(getByText('Select occasion'), {
      target: { value: 'birthday' },
    })

    fireEvent.click(getByText('Submit'))

    await waitFor(() => expect(handleSubmit).toHaveBeenCalled())
  })
})
