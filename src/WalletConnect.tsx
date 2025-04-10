import React, { useState } from 'react';
import { 
  useAccounts, 
  useWallets, 
  useConnectedWallets,
  useWalletConnector,
  useWalletDisconnector 
} from '@reactive-dot/react';
import { ConnectionButton, ConnectionDialog } from 'dot-connect/react.js';

const WalletConnect: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Get all available wallet providers
  const wallets = useWallets();
  // Get currently connected wallets
  const connectedWallets = useConnectedWallets();
  // Get all available accounts from connected wallets
  const accounts = useAccounts();
  
  // Hooks for connecting and disconnecting wallets
  const [connectState, connectWallet] = useWalletConnector();
  const [disconnectState, disconnectWallet] = useWalletDisconnector();

  return (
    <div className="wallet-connect">
      <h1>Polkadot Wallet Connection</h1>
      
      <div className="connection-section">
        <h2>Connect using DOTConnect Button</h2>
        <p>The simplest way to connect (recommended):</p>
        <ConnectionButton />
      </div>
      
      <div className="connection-section">
        <h2>Connect using Connection Dialog</h2>
        <button onClick={() => setDialogOpen(true)}>Open Connection Dialog</button>
        <ConnectionDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </div>
      
      <div className="connection-section">
        <h2>Manual Wallet Connection</h2>
        <p>Available wallets:</p>
        <ul>
          {wallets.map((wallet) => (
            <li key={wallet.id}>
              <div>
                <strong>{wallet.name}</strong>
                {connectedWallets.includes(wallet) ? (
                  <button 
                    onClick={() => disconnectWallet(wallet)}
                    disabled={disconnectState.isLoading}
                  >
                    Disconnect
                  </button>
                ) : (
                  <button 
                    onClick={() => connectWallet(wallet)}
                    disabled={connectState.isLoading}
                  >
                    Connect
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {accounts.length > 0 && (
        <div className="accounts-section">
          <h2>Connected Accounts</h2>
          <ul>
            {accounts.map((account, index) => (
              <li key={index}>
                <div>
                  <strong>Address:</strong> {account.address}
                </div>
                {account.name && (
                  <div>
                    <strong>Name:</strong> {account.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
