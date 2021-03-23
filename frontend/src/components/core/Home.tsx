import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

export default function Home() {
  const state = useSelector((state) => state);
  return <Layout>Home{JSON.stringify(state)}</Layout>;
}
