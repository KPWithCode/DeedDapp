import React from 'react';
import './balance.css';
import Web3 from 'web3'
import Deed from '../../contracts/Deed.json';

let web3;
let deed;

const Balance = () => {

    const initWeb3 = () => {
        return new Promise((resolve, reject) => {
            if (typeof window.ethereum !== 'undefined') {
                const web3 = new Web3(window.ethereum);
                window.ethereum.enable()
                    .then(() => {
                        resolve(
                            new Web3(window.ethereum)
                        )
                    })
                    .catch(e => {
                        reject(e);
                    });
                    return;
            }
            if (typeof window.web3 !== 'undefined') {
                return resolve(
                    new Web3(window.web3.currentProvider)
                )
            }
            resolve(new Web3('http://localhost:9545'))
        });
    };
    // contract instance
    const initContract = async () => {
        const networkId = await web3.eth.net.getId();
        return new web3.eth.Contract(
            // abi
            Deed.abi,
            // address of smart contract
            Deed   
                .networks[networkId]
                .address
        )
    }
    return (
        <div className="main-balance">
            <h1>Check your balance below</h1>
        </div>
    )
}

export default Balance;