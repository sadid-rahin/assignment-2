import React from 'react';
let cards = [
    {
        header : 'What We Do',
        descriptions : 'We are now a team of strategists, engineers, designers, and marketers who both use and develop technology ',
        btn : 'Contact Us'
    },
    {
        image : '/src/assets/web-design 1.png',
        header : "web Design & Dev",
        descriptions : "Social Media has changed the way we interact & do business while creating",
        btn : "Read more"
    },
    {
        image : '/src/assets/growth 1.png',
        header : "Software Dev ",
        descriptions : "Content Marketing is the other fold of online advertisement. If you are looking to build",
        btn : "Read more"
    },
    {
        image : '/src/assets/social-marketing 1.png',
        header : "Content Writing",
        descriptions : "Social Media has changed the way we interact & do business while creating a new avenue.",
        btn : "Read more"
    },
    {
        image : '/src/assets/social-media 1.png',
        header : "Digital Marketing",
        descriptions : "Social Media has changed the way we interact & do business while creating a new avenue. ",
        btn : "Read more"
    },
    {
        image : '/src/assets/presentation (3) 1.png',
        header : "Support & Training",
        descriptions : "Content Marketing is the other fold of online advertisement. If you are looking to build ",
        btn : "Read more"
    },
]

const We_do = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3 gap-5 mt-20 container mx-auto'>
                {
                    cards.map((card) => (
                        <div key={card.header} className=' text-center hover:bg-Overlay bg-opacity-50 p-5 rounded-lg hover:text-white'>
                        <img className='mx-auto' src={card.image} alt="card.image" />
                        <h2>{card.header}</h2>
                        <p className='py-5 w-80 mx-auto'>{card.descriptions}</p>
                        <button className='border-2 px-5 py-2 rounded-lg border-common_color1 hover:bg-common_color1'>{card.btn}</button>
                    </div>
                    
                    
                       
                    
                    ))
                }
            </div>
        </div>
    );
};

export default We_do;