import React , {useState} from 'react'
import {ethers} from 'ethers'
const Navbar = () => {
  
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Login');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
            console.log(ethers.utils)
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		window.location.reload();
	}
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Feature</a></li>
      <li><a>Team</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">OneOBit</a>
  </div>
  <div class="navbar-center hidden lg:flex outline outline-offset-2 outline-4 rounded-2xl">
    <ul class="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Feature</a></li>
      <li><a>Team</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button  class="btn" onClick={connectWalletHandler}>{connButtonText}</button>
  </div>
</div>
    );
};

export default Navbar;