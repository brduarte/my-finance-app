import React from 'react';
import Layout from './Layout.tsx';

export default function Home(): React.JSX.Element {
  function redirectToWalletPage() {
    console.log('redirectToWalletPage');
  }

  return (
    <Layout
      totalBalance={1000}
      actionBtnCardTotalBalance={redirectToWalletPage}
    />
  );
}
