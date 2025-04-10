import { Suspense } from 'react';
import { ReactiveDotProvider, ChainProvider } from '@reactive-dot/react';
import { config } from './config';
import WalletConnect from './WalletConnect';
import 'dot-connect/font.css';

function App() {
  return (
    <ReactiveDotProvider config={config}>
      <ChainProvider chainId="polkadot">
        {/* Suspense is required for data fetching with ReactiveDOT */}
        <Suspense fallback={<div>Loading Polkadot data...</div>}>
          <WalletConnect />
        </Suspense>
      </ChainProvider>
    </ReactiveDotProvider>
  );
}

export default App;
