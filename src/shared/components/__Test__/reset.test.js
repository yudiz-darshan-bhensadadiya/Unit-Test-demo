import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TripForm from '../TripForm'

describe('TripForm', () => {
  it('should reset form on reset button click', async () => {
    render(<TripForm />)

    // Fill in some data in the form fields
    const firstNameInput = screen.getByPlaceholderText('Enter your Name')
    const lastNameInput = screen.getByPlaceholderText('Enter your Surname')
    const employeeIdInput = screen.getByPlaceholderText('eg: 1947')
    const emailInput = screen.getByPlaceholderText('eg: example@gmail.com')
    const contactInput = screen.getByPlaceholderText('eg: 9876543210')

    fireEvent.change(firstNameInput, { target: { value: 'sahil' } })
    fireEvent.change(lastNameInput, { target: { value: 'kikani' } })
    fireEvent.change(employeeIdInput, { target: { value: '1950' } })
    fireEvent.change(emailInput, { target: { value: 'sahil@kikani.com' } })
    fireEvent.change(contactInput, { target: { value: '9876543210' } })

    expect(firstNameInput).toHaveValue('sahil');
    expect(lastNameInput).toHaveValue('kikani');
    expect(employeeIdInput).toHaveValue('1950');
    expect(emailInput).toHaveValue('sahil@kikani.com');
    expect(contactInput).toHaveValue('9876543210');
   

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(employeeIdInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(contactInput).toHaveValue('');
  })
})
