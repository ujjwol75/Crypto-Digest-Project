import React from 'react'

function CryptoNewsDetails() {
    return (
        <div className="cryptoNewsDetails-wrapper">
            <h2 style={{ 'color': 'black' }}>Crypto News</h2>
            <div className="cryptoNewsDetails">
                <p>Cryptocurrencies represent an internet-based medium of exchange that
                    takes advantage of cryptographical functions in order to conduct financial transactions.
                    They leverage blockchain technology to achieve decentralization, immutability,
                    and transparency.</p>

                <p>According to the latest crypto news, there are thousands of cryptocurrencies in existence.
                    However, the most popular ones include Bitcoin, Ethereum, Ripple, Binance
                    Coin, Bitcoin Cash, Tezos, Tron, Litecoin, and EOS, acquire more than 80%
                    of the total market cap.</p>

                <p>Decentralized cryptocurrencies such as Bitcoin, have one substantial advantage - no
                    single authority can control them. Instead, they are governed by an algorithm that’s
                    pre-programmed and defined.This takes away the human factor and
                    makes the entire network transparent and immutable.</p>

                <p>Cryptos can be sent directly between two parties, in a rapid and cheap process,
                    compared to traditional bank transfers. Since there is no central authority or
                    a middleman, the users can go through the process without having
                    to worry about complying with different rules.</p>
            </div>
        </div>
    )
}

export default CryptoNewsDetails