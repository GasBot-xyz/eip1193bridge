# Eip1193Bridge

Experimental [eip1193Bridge](https://github.com/ethers-io/ethers.js/blob/ethers-v5-beta/packages/experimental/src.ts/eip1193-bridge.ts) implementation with support for Ethers V6 and (maybe) V5.

This package provides an adapter to help legacy Ethereum providers conform to the newer EIP-1193 standard.

## Installation

```
yarn add eip1193bridge
```

or

```
npm install eip1193bridge
```

## Usage

```
import { Eip1193Bridge } from 'eip1193bridge'

...

const provider = new BrowserProvider(window.ethereum)
const signer = await providerV6.getSigner()
const bridge = new Eip1193Bridge(signer, provider)
```

## Use Cases

- Modernizing legacy dApps
- Ensuring provider compatibility across different wallet implementations
- Building cross-version compatible Ethereum applications
- Standardizing provider interfaces in multi-wallet applications
