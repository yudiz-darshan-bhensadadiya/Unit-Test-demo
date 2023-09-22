/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import TripForm from '../TripForm'

describe('TripForm', () => {
    it('should error message display for form', async () => {
      render(<TripForm />);
  
      const saveButton = screen.getByText('Save')
      fireEvent.click(saveButton)

      await waitFor(() => {
        const error1 = screen.getByText('First Name is required.', { exact: false })
        const error2 = screen.getByText('Last Name is required.', { exact: false })
        const error3 = screen.getByText('Employee ID is required.', { exact: false })
        const error4 = screen.getByText('Email Id is required.', { exact: false })
        const error5 = screen.getByText('Contact Number is required.', { exact: false })
        const error6 = screen.getByText('Department is required.', { exact: false })
        const error7 = screen.getByText('This field is required.', { exact: false })


  
        expect(error1).toBeInTheDocument()
        expect(error2).toBeInTheDocument()
        expect(error3).toBeInTheDocument()
        expect(error4).toBeInTheDocument()
        expect(error5).toBeInTheDocument()
        expect(error6).toBeInTheDocument()
        expect(error7).toBeInTheDocument()
      })

      
    });
  });