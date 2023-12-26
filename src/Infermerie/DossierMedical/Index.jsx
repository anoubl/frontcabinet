import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import SearchBar from './SearchBar';
import "./Search.css"
function Index() {
  const [Search , setSearch]=useState("");
  return (
    <>
    <Dashboard>
     <SearchBar/>
    </Dashboard>
    </>
  )
}

export default Index