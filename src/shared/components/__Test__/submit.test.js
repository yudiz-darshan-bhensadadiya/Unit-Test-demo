/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import TripForm from '../TripForm'

describe('TripForm', () => {
  it('should add data to the table on Save button click', async () => {
    render(<TripForm />)

    const firstNameInput = screen.getByPlaceholderText('Enter your Name')
    const lastNameInput = screen.getByPlaceholderText('Enter your Surname')
    const employeeIdInput = screen.getByPlaceholderText('eg: 1947')
    const emailInput = screen.getByPlaceholderText('eg: example@gmail.com')
    const contactInput = screen.getByPlaceholderText('eg: 9876543210')

    fireEvent.change(firstNameInput, { target: { value: 'sahil' } })
    fireEvent.change(lastNameInput, { target: { value: 'kikani' } })
    fireEvent.change(employeeIdInput, { target: { value: '1950' } })
    fireEvent.change(emailInput, { target: { value: 'sahilkikani111@gmal.com' } })
    fireEvent.change(contactInput, { target: { value: '9876543210' } })

    const saveButton = screen.getByText('Save')
    fireEvent.click(saveButton)

    await waitFor(() => {
      const tableRow1 = screen.getByText('sahil', { exact: false })
      const tableRow2 = screen.getByText('kikani', { exact: false })

      expect(tableRow1).toBeInTheDocument()
      expect(tableRow2).toBeInTheDocument()
    })
  })
})
