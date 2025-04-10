# Polkadot Wallet Connection Setup Reference Sheet

## Project Setup

1. **Initialize a new React project:**

   ```bash
   mkdir my-wallet-app
   cd my-wallet-app
   npm init -y
   ```

2. **Install core dependencies:**

   ```bash
   npm install @reactive-dot/react @reactive-dot/core polkadot-api dot-connect react@19.x react-dom@19.x
   ```

3. **Install optional wallet providers:**

   ```bash
   npm install @reactive-dot/wallet-ledger @reactive-dot/wallet-walletconnect
   ```

4. **Install development dependencies:**

   ```bash
   npm install --save-dev @types/react @types/react-dom typescript @vitejs/plugin-react vite
   ```

5. **Download Polkadot metadata:**

   ```bash
   npx papi add dot -n polkadot
   npx papi
   ```

6. **Update package.json:**
   - Set `"type": "module"`
   - Add scripts: `"dev": "vite"`, `"build": "tsc && vite build"`, etc.
   - Add `"postinstall": "npx papi"`

## Key Files

1. **config.ts:**
   - Import necessary providers and wallet types.
   - Configure chains (usually Polkadot) with light client provider.
   - Define wallet providers (Injected, Ledger, WalletConnect, etc.).
   - Register DOTConnect custom elements.

2. **reactive-dot.d.ts:**
   - Define type interfaces for ReactiveDOT.
   - Ensure TypeScript recognizes your config.

3. **WalletConnect.tsx:**
   - Use hooks: `useWallets`, `useConnected
