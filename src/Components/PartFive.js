import React from 'react';

const PartFive = () => {

    const scrollToTop = (e) => {
        e.preventDefault()
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
       }

    return (
        <div className='five'>
          <div className='end-headings'>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className='hr'></div>
          <div className='logo-2'></div>
          <div className='media'>
            <i class="fab ficon fa-twitter"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab ficon fa-instagram"></i>
            <i class="fab ficon fa-facebook-f"></i>
          </div>
          <div className='end-lines'>
            <p>Terms of service - Privacy policy -  © 2021 Tritatech</p>
            <p>Website By TritaTech</p>
          </div>
          <div className='back-to-top'>
            <button id='btn' onClick={scrollToTop} class="fas fa-2x fa-chevron-up" title='Back to top'></button>
            <p>BACK TO TOP</p>
          </div>
        </div>
    )
}

export default PartFive
