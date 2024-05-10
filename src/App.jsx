
import './App.css'
import { ReportedeEfectividad } from './ReportedeEfectividad'

import { Frame1014 } from './frame1014'
import { Frame990 } from './frame990'


ReportedeEfectividad

function App() {


  return (
    <>
      <nav className=' flex w-full bg-white h-72 border-b shadow-lg border-cyan-500 '>

          <div className='flex items-center'>
                  <img 
                          src="https://cs3.com.co/uploads/2/2019-04/logo_cs3_2.png" 
                          alt="logo cs3"
                          className=' w-32 h-14 ml-16 mr-2'
                  />
                    <div className='font-semibold text-xs text-cyan-800'>
                        <div>
                          COMERCIALIZADORA DE SOFTWARE,
                        </div>
                        <div>
                          SERVICIOS T SUMINISTROS S.A.S.
                        </div>
                    </div>
           </div>
      </nav>
      <Frame1014/> 
      <ReportedeEfectividad/> 
      <Frame990/>   
      <nav className=' fixed flex w-204 h-full bg-slate-900'>
        <div>

        </div>
      </nav>
    </>
  )
}

export default App
