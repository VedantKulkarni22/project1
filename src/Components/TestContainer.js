import React from 'react';
import TestCard from './TestCard';
import '../Styles/TestContainer.css'

export default function TestContainer() {
  return (
    <div id="TestCardContainer" className="w-75 shadow-lg bg-body mx-auto rounded-3 my-5">
      <TestCard/>
    </div>
  )
}
