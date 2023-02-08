import { BLOCKCHAIN_NAME, Configuration } from 'rubic-sdk';

export const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: [
                "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                "https://rpc.ankr.com/eth",
            ],
        },
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: ["https://bsc-dataseed.binance.org"],
        },
    }
}
