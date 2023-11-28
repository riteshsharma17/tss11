import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoutes from './Routes/AllRoutes'
 let Demo = ()=>{
    return(
        <>
      <Header/>
        <div className='container' style={{minHeight : '450px'}}>
            <AllRoutes/>
        </div>
           <Footer/>
        </>
    )
} 
 export default Demo;