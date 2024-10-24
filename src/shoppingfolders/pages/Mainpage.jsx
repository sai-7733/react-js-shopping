
import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import womenCollection from '../components/womenCollection'
import Footer from '../components/Footer'


import {Gents,Ladies} from '../data'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] =useState(Ladies)
  console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion = {gentsFashion}/>
        <womenCollection ladiesFashion={ladiesFashion}/>
        <Footer />
    </div>
  )
}

export default Mainpage