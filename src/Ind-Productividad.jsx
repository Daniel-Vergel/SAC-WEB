import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'


{/* EJEMPLO */}
const data01 = [
   
    {
      "name": "En proceso",
      "value": 3,
      "color": "#03BAD9"
    },
    {
      "name": "En espera",
      "value": 1,
      "color": "#EF6A1F"
    },
    {
      "name": "Resueltos",
      "value": 114,
      "color": "#00E0A4"
    },
   
  ];

export const IndProductividad = () => {
  return (
    <>
    {/*frame 973*/}
    <div className='grid w-472 h-249 ml-10 border-l border-r border-t border-b rounded-10 border-gray3'>

        {/*frame 1117*/}
            <div className=' grid grid-flow-col w-440 h-32 ml-10 mt-10'>
                <div className=' grid w-257 h-21  translate-y-5.5   font-trebuchet font-bold text-16 text-blue2 '>
                    Índice de productividad 
                </div>

                <div className='grid justify-end translate-y-8'>
                <svg className='grid -mt-5' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#E6F3FA"/>
                    <path d="M8.5 18.5C7.8125 18.5 7.22396 18.2552 6.73438 17.7656C6.24479 17.276 6 16.6875 6 16C6 15.3125 6.24479 14.724 6.73438 14.2344C7.22396 13.7448 7.8125 13.5 8.5 13.5C9.1875 13.5 9.77604 13.7448 10.2656 14.2344C10.7552 14.724 11 15.3125 11 16C11 16.6875 10.7552 17.276 10.2656 17.7656C9.77604 18.2552 9.1875 18.5 8.5 18.5ZM16 18.5C15.3125 18.5 14.724 18.2552 14.2344 17.7656C13.7448 17.276 13.5 16.6875 13.5 16C13.5 15.3125 13.7448 14.724 14.2344 14.2344C14.724 13.7448 15.3125 13.5 16 13.5C16.6875 13.5 17.276 13.7448 17.7656 14.2344C18.2552 14.724 18.5 15.3125 18.5 16C18.5 16.6875 18.2552 17.276 17.7656 17.7656C17.276 18.2552 16.6875 18.5 16 18.5ZM23.5 18.5C22.8125 18.5 22.224 18.2552 21.7344 17.7656C21.2448 17.276 21 16.6875 21 16C21 15.3125 21.2448 14.724 21.7344 14.2344C22.224 13.7448 22.8125 13.5 23.5 13.5C24.1875 13.5 24.776 13.7448 25.2656 14.2344C25.7552 14.724 26 15.3125 26 16C26 16.6875 25.7552 17.276 25.2656 17.7656C24.776 18.2552 24.1875 18.5 23.5 18.5Z" fill="#4B4B4B"/>
                </svg>
                </div>

            </div>

            <hr className=' grid absolute translate-y-52 w-440 ml-10  bg-cyan2' />

        {/*frame 1132*/}
            <div className=' grid absolute grid-flow-col translate-y-64 w-440 h-152 ml-10  '>

                {/*Chart Graphic*/}
                    <div className='flex w-152 h-152  '>

                    <PieChart className='  ' width={162} height={165}  style={{ transform: 'scaleX(-1)' }}>   
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="45%" innerRadius={57} outerRadius={80} fill="#82ca9d"  stroke="transparent">
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>

                    {/*frame 1131*/}
                    <div className=' grid absolute w-68 h-42 translate-x-42 translate-y-55 '>

                        {/*frame 1128*/}
                            <div className=' w-46 h-28 translate-x-10 '>
                                <p className='grid justify-center font-trebuchet font-bold text-24 text-black1 -mt-5'>80%</p>
                            </div>

                        {/*frame 1129*/}
                            <div className=' w-68 h-14 '>
                                <p className='grid justify-center font-trebuchet font-bold text-12 -mt-3 text-gray2 '>efectividad</p>
                            </div>
                    </div>



                    </div>

                {/*frame 1129*/}
                    <div className='grid w-272 h-151 ml-13 '>

                        {/*frame 13*/}
                            <div className=' grid w-272 h-95 -mt-7  border-b border-gray5  '>

                            {/*frame 7*/}
                                <div className='grid grid-flow-col w-272 h-19 font-trebuchet font-bold text-16   '>
                                        <p className='  tracking-1 '> Total de Actividades </p>
                                        <p className='grid justify-end tracking-1 '>118</p>
                                </div>

                    

                            {/*frame 10*/}
                                <div className=' grid grid-flow-col w-272 h-19 font-trebuchet text-14 text-gray2'>
                                        
                                    <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-cyan3"></div>                             
                                        <p className=' grid ml-6 tracking-1 '>En proceso </p>
                                        <p className=' grid justify-end tracking-1'> 3 </p>
                                </div>

                            {/*frame 13*/}
                            <div className=' grid grid-flow-col w-272 h-19 font-trebuchet text-14 text-gray2'>
                                        
                                        <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-orange2"></div>                             
                                            <p className=' grid ml-6 tracking-1 '>En espera </p>
                                            <p className=' grid justify-end tracking-1'> 1 </p>
                                    </div>

                            {/*frame 12*/}
                            <div className=' grid grid-flow-col w-272 h-19 font-trebuchet text-14 text-gray2'>
                                        
                                        <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-green3"></div>                             
                                            <p className=' grid ml-6 tracking-1 '>Resueltos </p>
                                            <p className=' grid justify-end tracking-1'> 114 </p>
                                    </div>
                                
                            </div>
                            
                            {/*frame 14*/}
                            <div className='grid w-272 h-46 mt-10 '>

                            {/*frame 12*/}
                                <div className=' grid grid-flow-col w-272 h-19 '>
                                    <div className='font-trebuchet text-13 tracking-1 text-gray1'> Tiempo promedio de respuesta* </div>
                                    <div className=' grid justify-end -mt-3 font-trebuchet font-bold text-16 tracking-1 text-black1  '> 0H 3M </div>
                                </div>

                            {/*frame 13*/}
                                <div className=' grid grid-flow-col w-272 h-19 '>
                                    <div className='font-trebuchet text-13 tracking-1 text-gray1'> Tiempo promedio de solución </div>
                                    <div className=' grid justify-end -mt-3 font-trebuchet font-bold text-16 tracking-1 text-black1  '> 9H 20M </div>
                                </div>

                            </div>
                        </div>
                    </div>
            <div className=' translate-x-16 translate-y-85 font-trebuchet text-10 text-gray9'> *Tiempo entre asignación y registro de la primera interacción en una actividad </div>
        </div>
    </>
)
}
  
