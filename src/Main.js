import React, { Component } from 'react';
import "../"
class Main extends Component {
    state = {  }
    render() { 
        return ( <div className="super_container">
	
 <header className="header trans_400">
            <div className="header_content d-flex flex-row align-items-center justify-content-center trans_400">
    
              
                <div className="logo">
                    <a href="#">
                        <div>V<span>o</span>gue</div>
                        <div>hair</div>
                    </a>
                    <div className="hamburger"><div></div><div></div><div></div></div>
                </div>
    
                
                <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li className="active"><a href="index.html">Home<div><div></div><div></div><div></div></div></a></li>
                        <li><a href="about.html">About Us<div><div></div><div></div><div></div></div></a></li>
                        <li><a href="services.html">Services<div><div></div><div></div><div></div></div></a></li>
                        <li><a href="articles.html">Articles<div><div></div><div></div><div></div></div></a></li>
                        <li><a href="contact.html">Contact<div><div></div><div></div><div></div></div></a></li>
                    </ul>
                </nav>
    
               
                <div className="app trans_400">
                    <div className="app_button_container d-flex flex-row align-items-center justify-content-start">
                        <div className="app_button trans_400 d-flex flex-row align-items-center justify-content-start">
                            <div className="app_button_icon"><img src="images/woman.svg" alt="https://www.flaticon.com/authors/freepik"></img></div>
                            <div>Book an Appointment</div>
                        </div>
                        <div className="app_button_close">close</div>
                    </div>
                </div>
                <div className="app_content d-flex flex-column align-items-start justify-content-center">
                    <div className="app_form_container text-right">
                        <form action="#" id="app_form" className="app_form">
                            <input type="text" className="app_input" placeholder="Full Name" required="required"></input>
                            <input type="email" className="app_input" placeholder="Email Address" required="required"></input>
                            <input type="text" className="app_input" placeholder="Phone Number" required="required"></input>
                            <input type="text" className="app_input" placeholder="Desired Date" required="required"></input>
                            <select className="app_input app_select">
                                <option disabled="" selected="">Select Service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                                <option>Service 4</option>
                            </select>
                            <button className="app_form_button">submit</button>
                        </form>
                    </div>
                </div>	
            </div>
        </header>
    
     
        
        <div className="menu">
            <nav className="menu_nav">
                <ul className="d-flex flex-column align-items-start justify-content-start">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    
     
        <div className="home">
    
      
            <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                    
                   
                    <div className="owl-item home_slide">
                        <div className="background_image" style="background-image:url(images/index.jpg)"></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            <div className="home_title"><h1>The <span>hair</span> that you dream</h1></div>
                                            <div className="home_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien cursus faucibus finibus.</p>
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                  
                    <div className="owl-item home_slide">
                        <div className="background_image" style="background-image:url(images/index.jpg)"></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            <div className="home_title"><h1>The <span>hair</span> that you dream</h1></div>
                                            <div className="home_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien cursus faucibus finibus.</p>
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
             
                    <div className="owl-item home_slide">
                        <div className="background_image" style="background-image:url(images/index.jpg)"></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            <div className="home_title"><h1>The <span>hair</span> that you dream</h1></div>
                                            <div className="home_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien cursus faucibus finibus.</p>
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        
            <div className="scroll_down scroll_to d-flex flex-column align-items-center justify-content-center" data-scroll-to="#services">
                <div className="scroll_icon"></div>
                <div>Scroll Down</div>
            </div>
    
            
            <div className="slide_progress">
                <div className="slide_num">01.</div>
                <div className="slide_bar"><div></div></div>
            </div>
        </div>
    
        
    
        <div className="services" id="services">
            <div className="parallax_background" data-image-src="images/services.jpg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="section_title_container">
                            <div className="section_title"><h1>Our Services</h1></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque.</p>
                        </div>
                    </div>
                </div>
                <div className="row services_row">
                    <div className="col">
                        <div className="section_expander">
    
                            <div className="services_slider_container">
                                <div className="owl-carousel owl-theme services_slider">
                                    
                                   
                                    <div className="owl-item">
    
                                        
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src="images/mirror.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Hair Dressing</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                       
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src="images/facial-mask.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Ombre Hair</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                
                                    <div className="owl-item">
                                        
                                    
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src="images/makeup.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Hair Coloring</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_2"><div><img src="images/cream.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Treatments</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                  
                                    <div className="owl-item">
                                        
                                      
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_flip"><div><img src="images/make-up.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Cutting & Trimming</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                       
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_3"><div><img src="images/cream-2.svg" className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Keratin Streightening</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div className="testimonials">
            <div className="parallax_background" data-image-src="images/testimonials.jpg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="section_title_container">
                            <div className="section_title"><h1>Testimonials</h1></div>
                            <p>Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="row testimonials_row">
                    <div className="col">
                        <div className="section_expander">
                            
                         
                            <div className="testimonials_slider_container">
                                <div className="owl-carousel owl-theme testimonials_slider">
                                    
                                   
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src="images/author_1.jpg" alt="img"></img></div>
                                                <div className="testimonial_title">The perfect hair</div>
                                                <div className="testimonial_text">
                                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                  
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src="images/author_2.jpg" alt="img"></img></div>
                                                <div className="testimonial_title">I just love my hair</div>
                                                <div className="testimonial_text">
                                                    <p>Mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                   
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src="images/author_3.jpg" alt="img"></img></div>
                                                <div className="testimonial_title">The best hair salon</div>
                                                <div className="testimonial_text">
                                                    <p>Retiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="testimonials_more">
                                <div className="testimonials_more_button ml-auto mr-auto trans_200"><a href="#">load more</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
   
    
        <footer className="footer">
            <div className="parallax_background" data-image-src="images/footer.jpg"></div>
  
            <div className="footer_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container">
                                <div className="section_title"><h1>Get in touch</h1></div>
                                <p>Maximus mauris sceleri sque, at rutrum nulla dictum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_row">
                        <div className="col-lg-4 footer_col">
                            <div className="contact_info">
                                <div className="footer_title">Contact Info</div>
                                <div className="contact_info_list">
                                    <ul>
                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div><div className="contact_info_icon"><img src="images/placeholder.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">4127 Raoul Wallenber4127 Raoul Wallen berg Place</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon"><img src="images/phone-call.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">203-808-8613</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon"><img src="images/message.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">milothemes@gmail.com</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer_title">Leave a comment</div>
                            <div className="contact_form_container">
                                <form action="#" id="contact_form" className="contact_form">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Name" className="contact_input" required="required"></input>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="E-mail" className="contact_input" required="required"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div><input type="text" placeholder="Subject" className="contact_input"></input></div>
                                    <div><textarea className="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
                                    <button className="contact_form_button">send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bar d-flex flex-row align-items-center justify-content-start">
                <div className="copyright">
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
   </div>
            </div>
        </footer>
    </div>
     );
    }
}
 
export default Main;