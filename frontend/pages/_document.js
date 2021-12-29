import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content="La Miranda at Torrox village - Vacation home to rent"/>
                    <meta name="keywords" content="Torrox, Frigiliana, house for rent, vacation"/>
                    <meta name="format-detection" content="telephone=no"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <title>La Miranda - Torrox</title>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}