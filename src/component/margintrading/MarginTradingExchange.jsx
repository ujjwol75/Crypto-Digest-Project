import React from 'react';
import Exchange from './Exchange';
import Pros from './Pros';
import Rate from './Rate';
import Rating from './Rating';

function MarginTradingExchange() {
    return (
        <div className='marginTradingExchange'>
            <table className='exchange'>
                <thead>
                <tr className='heading'>
                    <th>Exchange</th>
                    <th>Pros</th>
                    <th colSpan="2">Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><Exchange /></td>
                    <td><Pros/></td>
                    <td><Rating/></td>
                    <td><Rate/></td>
                </tr>
                <tr>
                    <td><Exchange /></td>
                    <td><Pros/></td>
                    <td><Rating/></td>
                    <td><Rate/></td>
                </tr>
                <tr>
                    <td><Exchange /></td>
                    <td><Pros/></td>
                    <td><Rating/></td>
                    <td><Rate/></td>
                </tr>
                <tr>
                    <td><Exchange /></td>
                    <td><Pros/></td>
                    <td><Rating/></td>
                    <td><Rate/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MarginTradingExchange;