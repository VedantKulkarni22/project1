import React from 'react';
import TestCard from './TestCard';
import '../Styles/TestContainer.css'
import Navbar from "./Navbar"

export default function TestContainer() {
  return (
    <>
      <Navbar />
      <div id="TestCardContainer" className="w-75 shadow-lg bg-body mx-auto rounded-3 my-5">
        <TestCard />
      </div>
    </>
  )
}
