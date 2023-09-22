import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TripForm from '../TripForm';


describe('TripForm', () => {
  it('should search for employee names', async () => {
    render(<TripForm />);

    const searchInput = screen.getByPlaceholderText('Search Employee Name');
    fireEvent.change(searchInput, { target: { value: 'sahil' } });

       expect(searchInput).toHaveValue('sahil');

       const items = await screen.findAllByText(/sahil/i)
       expect(items).toHaveLength(1) 

  });
});
