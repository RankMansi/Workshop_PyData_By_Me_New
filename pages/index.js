// pages/index.js

import React from 'react';
import Timeline from '../components/Timeline';
import '../styles/tailwind.css';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Timeline />
    </div>
  );
}
