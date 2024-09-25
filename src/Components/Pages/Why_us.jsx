import React from 'react';
let Whys = [
    {
        img: "/src/assets/Group 1000006904.png",
        one: "We solve real-world problems through people and the web."
    },
    {
        img: "/src/assets/Group 1000006904.png",
        one: "We make processes and technology work efficiently together."
    },
    {
        img: "/src/assets/Group 1000006904.png",
        one: "We advance improve existing technology through research and development."
    },
    {
        img: "/src/assets/Group 1000006904.png",
        one: "We develop long-lasting and scalable solutions, relationships partnerships."
    },
]

const Why_us = () => {
    return (
        <div>
            <div className='lg:flex justify-center items-center gap-36 mt-28 ' >
                <div className=''>
                    {
                        Whys.map((Why) => (
                            <div key={Whys.img} className='flex gap-5 pt-5 '>
                                <img src= {Why.img} alt="" />
                                <p>{Why.one}</p>
                            </div>
                        ))
                    }
                </div>
                <div className=' text-center lg:text-left'>
                    <h3 className='font-bold text-5xl'>Why Us</h3>
                    <p className='text-lg lg:max-w-80 py-8'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
                    <button className='text-xl font-bold bg-common_color1 rounded-2xl px-8 py-2'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Why_us;