import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('display', () => {
    it('renders succesfully', () => {
        render(<Display />)
    })
    it('renders an h2 with ball count', () => {
        const {getAllByText} = render(<Display />)

        getAllByText(/balls/i)
    })
    it('renders an h2 with strike count', () => {
        const {getAllByText} = render(<Display />)

        getAllByText(/strikes/i)
    })
    it('renders ball count', () => {
        const {getAllByText} = render(<Display ball='1' />)

        getAllByText(/1/i)
    })
    it('renders strike count', () => {
        const {getAllByText} = render(<Display strike='2' />)

        getAllByText(/2/i)
    })
})