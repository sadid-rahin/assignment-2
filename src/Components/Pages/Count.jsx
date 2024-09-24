import React from 'react';
let Datas = [
    
{
    first : '53k',
title1 : 'Happy project',
},
{
    first : '10k',
title1 : 'Project Done',
},
{
    first : '120',
title1 : 'Gets Award',
},
{
    first : '10',
title1 : 'Operated Years',
},




]

const Count = () => {
    return (
        <div >
            <div className='flex '>
            <div className=" bg-no-repeat m-auto   ">
                <img  className='h-[584px] -mt-[300px]  max-w-[1170px]' src="/src/assets/images 01.png" alt="" />
            </div>
            <div className=' bg-no-repeat  '>
                <img className=' h-56 w-48' src="/src/assets/Rectangle 46.png" alt="" />
                 </div>
            </div>
            <div className='lg:flex text-center justify-center gap-48  items-center mt-32 '> 
                {
                    Datas.map((Data) => (
                        <div key={Data.first}>
                            <h2 className='text-6xl text-common_color1 font-extrabold text-center' >{Data.first}</h2>
                            <h3 className='text-4xl font-semibold'>{Data.title1}</h3>
                        </div>
                        
                    ))
                }
              
            </div>
        </div>
        
    );
};

export default Count;