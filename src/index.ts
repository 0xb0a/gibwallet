#!/usr/bin/env node

import base58 from "bs58";

import chalk from "chalk";

import { TipLink } from "@tiplink/api";

(async () => {
    const link = await TipLink.create();

    console.log(
        `\nPrivate Key (Unit8Array)\n${chalk.bold.red(JSON.stringify(Object.values(link.keypair.secretKey)))}\n`
    );

    console.log(
        `\nPrivate Key (Base58)\n${chalk.bold.red(base58.encode(Object.values(link.keypair.secretKey)))}\n`
    );

    console.log(
        `\nPublic Key\n${chalk.bold.green(link.keypair.publicKey.toBase58())}\n`
    );

    console.log(
        `\n🌐 Tiplink URL\n${chalk.bold.blue(link.url)}\n`
    );
})();

