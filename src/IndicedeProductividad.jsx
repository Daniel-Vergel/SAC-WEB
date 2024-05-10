import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'


{/* EJEMPLO */}
const data01 = [
    {
      "name": "Escalados a Coord.",
      "value": 6,
      "color": "#3E4EB8"
    },
    {
      "name": "En proceso",
      "value": 29,
      "color": "#03BAD9"
    },
    {
      "name": "En espera",
      "value": 23,
      "color": "#EF6A1F"
    },
    {
      "name": "Resueltos",
      "value": 997,
      "color": "#00E0A4"
    },
   
  ];


export const IndicedeProductividad = () => {
  return (
        <>
        {/*frame 973*/}
        <div className='grid absolute w-367 h-282  border-l border-r border-t border-b rounded-10 border-gray3'>

            {/*frame 1117*/}
                <div className=' grid w-347 h-32 ml-10 mt-10   '>
                    <div className=' grid w-257 h-21  translate-y-5.5  font-trebuchet font-bold text-16 text-blue2 '>
                        Índice de productividad de equipo
                    </div>
                </div>

                <hr className=' grid w-347 bg-cyan2 ml-10 mt-1 mb-1' />

            {/*frame 1132*/}
                <div className=' grid w-347 h-214 ml-10 '>

                {/*frame 1126*/}
                    <div className='flex w-347 h-135 border-b border-gray5'>

                    {/*Chart Graphic*/}
                        <div className='flex w-125 h-125 '>

                        <PieChart className='  ' width={160} height={162}  style={{ transform: 'scaleX(-1)' }}>   
                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="34%" innerRadius={57} outerRadius={80} fill="#82ca9d"  stroke="transparent">
                                {
                                    data01.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))
                                }
                            </Pie>
                        </PieChart>

                        {/*frame 1131*/}
                        <div className=' grid absolute w-68 h-42 translate-x-29 translate-y-42 '>

                            {/*frame 1128*/}
                                <div className=' w-46 h-28 translate-x-10 '>
                                    <p className='grid justify-center font-trebuchet font-bold text-24 text-black1 -mt-5'>97%</p>
                                </div>

                            {/*frame 1129*/}
                                <div className=' w-68 h-14 '>
                                    <p className='grid justify-center font-trebuchet font-bold text-12 -mt-3 text-gray2 '>efectividad</p>
                                </div>
                        </div>



                        </div>

                    {/*frame 13*/}
                        <div className=' grid w-192 h-119  translate-x-149  '>

                        {/*frame 7*/}
                            <div className='grid grid-flow-col w-186 h-19 font-trebuchet font-bold text-16   '>

                                    <div className=' w-142 h-19 tracking-1 '>
                                        Actividades SWIT 
                                    
                                    </div>  
                                    <div className='grid justify-end ml-11 tracking-1 '>
                                        1055
                                    </div>

                            </div>

                        {/*frame 12*/}
                            <div className=' grid grid-flow-col w-186 h-19 font-trebuchet text-14 text-gray2'>

                                    <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-blue4"></div>

                                    <div className='  grid justify-end w-142 h-19 '>
                                        Escalados a Coord.                                       
                                    </div>  
                                    <div className=' grid justify-end w-3 tracking-1 ml-45 '>
                                        6
                                    </div>

                            </div>

                        {/*frame 10*/}
                            <div className=' grid grid-flow-col w-186 h-19 font-trebuchet text-14 text-gray2'>
                                    
                                    <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-cyan3"></div>

                                    <div className=' grid w-142 h-19  tracking-1  '>
                                        <p className='ml-6'>En proceso </p>
                                    </div>  
                                    <div className=' grid justify-end  w-6  tracking-1 ml-6'>
                                        29
                                    </div>

                            </div>

                        {/*frame 13*/}
                            <div className=' grid grid-flow-col w-186 h-19 font-trebuchet text-14 text-gray2'>
                                    
                                    <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-orange2"></div>

                                    <div className='grid w-142  h-19   '>
                                        <p className='ml-6'>En espera </p>                                      
                                    </div>  
                                    <div className=' grid justify-end  w-6  tracking-1 ml-6 '>
                                        23
                                    </div>

                            </div>

                        {/*frame 14*/}
                            <div className=' grid grid-flow-col w-186 h-19 font-trebuchet text-14 text-gray2'>
                                    
                                    <div className=" absolute translate-y-2 w-14 h-14 rounded-full bg-green3"></div>

                                    <div className=' w-142  h-19  tracking-1  '>
                                        <p className='ml-6'>Resueltos </p>                                        
                                    </div>  
                                    <div className=' grid justify-end  w-6 tracking-1 ml-6 '>
                                        997
                                    </div>

                            </div>
                            
                        </div>
        </div>

    {/*frame 14*/}
        <div className=' grid w-347 h-69 mt-10 '>

            <div className='grid grid-flow-col w-347 h-19 '>
                <div className=' font-trebuchet text-14 text-gray1'>Actividades de hoy</div>
                <div className='flex justify-end font-trebuchet font-bold text-16'>19</div>
            </div>
            <div className=' grid grid-flow-col w-347 h-19  '>
                <div className=' font-trebuchet text-14 text-gray1'>Actividades de previas</div>
                <div className='flex justify-end font-trebuchet font-bold text-16'>39</div>
            </div>
            <div className=' grid grid-flow-col w-347 h-19 '>
                <div className=' font-trebuchet text-14 text-gray1'>Actividades de Impactadas</div>
                <div className='flex justify-end font-trebuchet font-bold text-16'>35</div>
            </div>
        


        </div>

    </div>

</div>
        </>
  )
}
