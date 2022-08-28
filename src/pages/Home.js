import React from 'react';
import DocumentTitle from 'react-document-title'
import Header from '../components/Header';
import Banner from '../components/Banner'

export default function Home() {
  return (
    <DocumentTitle title = 'Education in Finland'>
        <div>
            <Header />
            <Banner />
        </div>
    </DocumentTitle>
  )
}
