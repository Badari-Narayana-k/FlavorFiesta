import React, { useEffect, useState } from 'react';

import './hot.css';

function Hot() {
    
        const [drinks,setDrinks]=useState(true);
        const [about,setAbout]=useState(false);
        const [spcl,setSpcl]=useState(false);
        const [contact,setContact]=useState(false);


        const [iced,setIced]=useState(true);
        const [hot,setHot]=useState(false);
        const [fruit,setFruit]=useState(false);

        const handleCold=()=>
        {
            setIced(true);
            setHot(false);
            setFruit(false);
        }

        const handleHot=()=>
        {
            setIced(false);
            setHot(true);
            setFruit(false);
        }

        const handleFruit=()=>
        {
            setIced(false);
            setHot(false);
            setFruit(true);
        }

        const handleDrinks=()=>
        {
            setDrinks(true);
        setAbout(false);
        setSpcl(false);
        setContact(false);
        }

        const handleAbout=()=>
        {
            setDrinks(false);
        setAbout(true);
        setSpcl(false);
        setContact(false);
        }

        const handleSpcl=()=>
        {
            setDrinks(false);
            setAbout(false);
            setSpcl(true);
            setContact(false);
        }

        const handleContact=()=>
        {
            setDrinks(false);
        setAbout(false);
        setSpcl(false);
        setContact(true);
        }

  return (
    <div className="tm-container">
      <div className="tm-row">
        <div className="tm-left">
          <div className="tm-left-inner">
            <div className="tm-site-header">
              <i className="fas fa-coffee fa-3x tm-site-logo"></i>
              <h1 className="tm-site-name">Coffee swap</h1>
            </div>
            <nav className="tm-site-nav">
              <ul className="tm-site-nav-ul">
                <li className="tm-page-nav-item">
                  <a onClick={handleDrinks} className="tm-page-link active">
                    <i className="fas fa-mug-hot tm-page-link-icon"></i>
                    <span>Drink Menu</span>
                  </a>
                </li>
                <li className="tm-page-nav-item">
                  <a onClick={handleAbout} className="tm-page-link">
                    <i className="fas fa-users tm-page-link-icon"></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li className="tm-page-nav-item">
                  <a onClick={handleSpcl} className="tm-page-link">
                    <i className="fas fa-glass-martini tm-page-link-icon"></i>
                    <span>Special Items</span>
                  </a>
                </li>
                <li className="tm-page-nav-item">
                  <a onclick={handleContact} className="tm-page-link">
                    <i className="fas fa-comments tm-page-link-icon"></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="tm-right">
          <main className="tm-main">
          
          {drinks&&(<div id="drink" class="tm-page-content">
            <nav class="tm-black-bg tm-drinks-nav">
              <ul>
                <li>
                  <a onclick={handleCold} class="tm-tab-link active" data-id="cold">Iced Coffee</a>
                </li>
                <li>
                  <a onclick={handleHot} class="tm-tab-link" data-id="hot">Hot Coffee</a>
                </li>
                <li>
                  <a onclick={handleFruit} class="tm-tab-link" data-id="juice">Fruit Juice</a>
                </li>
              </ul>
            </nav>

            {iced && (
                <div id="cold" class="tm-tab-content">
              <div class="tm-list">
                <div class="tm-list-item">          
                  <img src="img/iced-americano.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Iced Americano<span class="tm-list-item-price">$10.25</span></h3>
                    <p class="tm-list-item-description">Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="img/iced-cappuccino.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Iced Cappuccino<span class="tm-list-item-price">$12.50</span></h3>
                    <p class="tm-list-item-description">Here is a list of 4 items or add more. You can use this template for commercial purposes.</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="img/iced-espresso.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Iced Espresso<span class="tm-list-item-price">$14.25</span></h3>
                    <p class="tm-list-item-description">You are not permitted to redistribute this template ZIP file on any other template websites.</p>
                  </div>
                </div>
                <div class="tm-list-item">          
                  <img src="img/iced-latte.png" alt="Image" class="tm-list-item-img"/>
                  <div class="tm-black-bg tm-list-item-text">
                    <h3 class="tm-list-item-name">Iced Latte<span class="tm-list-item-price">$11.50</span></h3>
                    <p class="tm-list-item-description">Contents are organized into 3 tabs. Please <a href="https://www.tooplate.com/contact" rel="nofollow" target="_parent">contact Tooplate</a> if you have anything to ask.</p>
                  </div>
                </div> 
                                       
              </div>
            </div> 

            )}

            {hot && (
                <div id="hot" class="tm-tab-content">
                <div class="tm-list">
                
                  <div class="tm-list-item">          
                    <img src="img/hot-americano.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Hot Americano<span class="tm-list-item-price">$8.50</span></h3>
                      <p class="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>              
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/hot-cappuccino.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Hot Cappuccino<span class="tm-list-item-price">$9.50</span></h3>
                      <p class="tm-list-item-description">Here is a list of 4 items that can add more as you need. Only content area will be scrolling.</p>                    
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/hot-espresso.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Hot Espresso<span class="tm-list-item-price">$7.50</span></h3>
                      <p class="tm-list-item-description">Left side logo and main menu are fixed. The video background is fixed.</p>              
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/hot-latte.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Hot Latte<span class="tm-list-item-price">$6.50</span></h3>
                      <p class="tm-list-item-description">Page contents are organized into 3 tabs to show different lists of items.</p>              
                    </div>
                  </div>
                           
                </div>
              </div>
  
            )}
            
            {fruit && (
                <div id="juice" class="tm-tab-content">
                <div class="tm-list">
                  <div class="tm-list-item">          
                    <img src="img/smoothie-1.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Strawberry Smoothie<span class="tm-list-item-price">$12.50</span></h3>
                      <p class="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>              
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/smoothie-2.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Red Berry Smoothie<span class="tm-list-item-price">$14.50</span></h3>
                      <p class="tm-list-item-description">Here is a list of 4 items or add more. You can use this template for commercial purposes.</p>                    
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/smoothie-3.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Pineapple Smoothie<span class="tm-list-item-price">$16.50</span></h3>
                      <p class="tm-list-item-description">Left side logo and main menu are fixed. The video background is fixed.</p>              
                    </div>
                  </div>
                  <div class="tm-list-item">          
                    <img src="img/smoothie-4.png" alt="Image" class="tm-list-item-img"/>
                    <div class="tm-black-bg tm-list-item-text">
                      <h3 class="tm-list-item-name">Spinach Smoothie<span class="tm-list-item-price">$18.50</span></h3>
                      <p class="tm-list-item-description">You are not allowed to redistribute the template ZIP file on other template sites.</p>              
                    </div>
                  </div>              
                </div>
              </div>
            )}



          </div>)}

            {about&&(
            <div id="about" className="tm-page-content">
              <div className="tm-black-bg tm-mb-20 tm-about-box-1">
                <h2 className="tm-text-primary tm-about-header">About Wave Cafe</h2>
                <div className="tm-list-item tm-list-item-2">
                  <img src="img/about-1.png" alt="Image" className="tm-list-item-img tm-list-item-img-big" />
                  <div className="tm-list-item-text-2">
                    <p>
                      "Lorem ipsum" is a placeholder text commonly used in the printing and typesetting industry to
                      demonstrate the visual form of a document or a typeface without relying on meaningful content.
                      It doesn't have any inherent meaning but resembles Latin words. Here's a standard Lorem Ipsum text:
                    </p>
                  </div>
                </div>
              </div>
              <div className="tm-black-bg tm-mb-20 tm-about-box-2">
                <div className="tm-list-item tm-list-item-2">
                  <div className="tm-list-item-text-2">
                    <h2 className="tm-text-primary">How we began</h2>
                    <p>
                      "Lorem ipsum" is a placeholder text commonly used in the printing and typesetting industry to
                      demonstrate the visual form of a document or a typeface without relying on meaningful content. It
                      doesn't have any inherent meaning but resembles Latin words. Here's a standard Lorem Ipsum text:
                    </p>
                  </div>
                  <img src="img/about-2.png" alt="Image" className="tm-list-item-img tm-list-item-img-big tm-img-right" />
                </div>
                <p>Donec non urna elit. Quisque ut magna in dui mattis iaculis eu finibus metus. Suspendisse vel mi a
                  lacus finibus vehicula vel ut diam. Nam pellentesque, mi quis ullamcorper.</p>
              </div>
            </div>
)}
            {spcl&&(
            <div id="special" className="tm-page-content">
              <div className="tm-special-items">
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-01.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Special One</h2>
                    <p className="tm-special-item-text">
                      Here is a short text description for the first special item. You are not allowed to redistribute
                      this template ZIP file.
                    </p>
                  </div>
                </div>
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-02.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Second Item</h2>
                    <p className="tm-special-item-text">Random matter about the food items that you don't want to
                      read.</p>
                  </div>
                </div>
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-03.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Third Special Item</h2>
                    <p className="tm-special-item-text">
                      Pellentesque in ultrices mi, quis mollis nulla. Quisque sed commodo est, quis tincidunt nunc.
                    </p>
                  </div>
                </div>
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-04.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Special Item Fourth</h2>
                    <p className="tm-special-item-text">
                      Vivamus finibus nulla sed metus sagittis, sed ultrices magna aliquam. Mauris fermentum.
                    </p>
                  </div>
                </div>
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-05.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Sixth Sense</h2>
                    <p className="tm-special-item-text">
                      Here is a short text description for the sixth item. This text is four lines.
                    </p>
                  </div>
                </div>
                <div className="tm-black-bg tm-special-item">
                  <img src="img/special-06.jpg" alt="Image" />
                  <div className="tm-special-item-description">
                    <h2 className="tm-text-primary tm-special-item-title">Seventh Item</h2>
                    <p className="tm-special-item-text">
                      Curabitur eget erat sit amet sapien aliquet vulputate quis sed arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
)}
            
            {contact&&(
            <div id="contact" className="tm-page-content">
              <div className="tm-black-bg tm-contact-text-container">
                <h2 className="tm-text-primary">Contact Wave</h2>
                <p>
                  "Lorem ipsum" is a placeholder text commonly used in the printing and typesetting industry to
                  demonstrate the visual form of a document or a typeface without relying on meaningful content. It
                  doesn't have any inherent meaning but resembles Latin words. Here's a standard Lorem Ipsum text:
                </p>
              </div>
              <div className="tm-black-bg tm-contact-form-container tm-align-right">
                <form action="" method="POST" id="contact-form">
                  <div className="tm-form-group">
                    <input type="text" name="name" className="tm-form-control" placeholder="Name" required />
                  </div>
                  <div className="tm-form-group">
                    <input type="email" name="email" className="tm-form-control" placeholder="Email" required />
                  </div>
                  <div className="tm-form-group tm-mb-30">
                    <textarea rows="6" name="message" className="tm-form-control" placeholder="Message" required></textarea>
                  </div>
                  <div>
                    <button type="submit" className="tm-btn-primary tm-align-right">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>)}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hot;
