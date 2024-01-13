function openAcc(item) {
    item.classList.toggle("active");
    var panel = item.nextElementSibling;
    if (panel.style.maxHeight) panel.style.maxHeight = null;
    else panel.style.maxHeight = panel.scrollHeight + "px";
}


try {
    document.querySelectorAll('.accordion').forEach(e => {
        e.setAttribute('onclick', 'openAcc(this)')
    })
} catch (err) { }

let clicked = false
function toggle() {
    if (clicked == false) {
        document.querySelector('#extend').style.display = 'block'
        document.querySelector('#toggle-icon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 1.4rem; height: 1.4rem; vertical-align: middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`
        clicked = true
        return
    }
    if (clicked) {
        document.querySelector('#extend').style.display = 'none'
        document.querySelector('#toggle-icon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 1.4rem; height: 1.4rem; vertical-align: middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`

        clicked = false
        return
    }
}
// <a href="/faucet.html"><li>Faucet repair & replacement</li></a>
// <a href="/toilet.html"><li>Toilet Repair & installation</li></a>
// <a href="/garbage.html"><li>Garbage Disposal</li></a>
// <a href="/water-heater.html"><li>Water heater repair & installation</li></a>
// <a href="/annual-plumbing.html"><li>Annual Plumbing Inspection Service</li></a>
if (window.matchMedia("(max-width: 768px)").matches) {
    document.body.innerHTML += `
  <div style="display: none; z-index:1000 !important;" class="overlay">
        <a href="tel:260-557-3616" target="_system" style="margin: 3rem 0 0 2rem; display: block; width: fit-content; height: fit-content; text-decoration: none; background: #FD5D5F; border-radius: 8px; padding: 0.9rem; color: white;" id="tel-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" style="width: 1.5rem; height: 1.5rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
            <ul>
              <a href="/"><li>HOME</li></a>
              <hr>
              <li style="display: flex; justify-content: space-between;" onclick="toggle()">SERVICES 
<span id="toggle-icon"><svg xmlns="http://www.w3.org/2000/svg" style="width: 1.4rem; height: 1.4rem; vertical-align: middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
              </li>
              <div id="extend" style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 10px; display: none;">
                <a href="/services.html"><li>Drain & Sewer line cleaning</li></a>
                <a href="/descaling.html"><li>Descaling (High speed drain cleaning)</li></a>
                <a href="/milling.html"><li>High speed milling</li></a>
                <a href="/sewer-pipe-inspections.html"><li>Sewer Camera inspections</li></a>


              </div>
              <hr>
              <a href="/service-areas.html"><li>AREAS SERVICED</li></a>
              <hr>
              <a href="/blog.html"><li>BLOG</li></a>
              <hr>
              <a href="/faq.html"><li>FAQ</li></a>
              <hr>
              <a href="/gallery.html"><li>GALLERY</li></a>
              <hr>
              <a href="/community.html"><li>COMMUNITY FIRST</li></a>
              <hr>
              <a href="/24-emergency.html"><li>24-EMERGENCY SERVICE</li></a>
              <hr>
              <a href="/careers.html"><li>CAREERS</li></a>
              <hr>
              <a target="_blank" href='https://www.lightstream.com/?fact=14133&irad=88401&irmp=3792986'><li>Financing</li></a>
            </ul>
        </div>
  </div>`

    //     <div style="margin-top: 1.5rem;">
    //   <a href="faucet.html">Faucet repair & replacement</a>
    //   <a href="toilet.html">Toilet Repair & installation</a>
    //   <a href="garbage.html">Garbage Disposal</a>
    //   <a href="water-heater.html">Water heater repair & installation</a>
    //   <a href="/annual-plumbing.html">Annual Plumbing Inspection Service</a>
    // </div>
} else document.body.innerHTML += `
<div style="z-index:1000 !important;" class="overlay">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <div class="overlay-content">
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between;">
          <a href="tel:260-557-3616" target="_system" style="text-decoration: none; background: #FD5D5F; border-radius: 8px; padding: 0.6rem; color: white; font-weight: 500; display: none; margin-right: 0.5rem; font-size: 0.9rem;" id="tel-mobile">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.7rem; width: 1.2rem; height: 1.2rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call
          </a>
          <br>
          <a href="#contact-now" style="display: none; margin-right: 1rem; text-decoration: none; background: #FD5D5F; border-radius: 8px; padding: 0.6rem; color: white; font-weight: 500; font-size: 0.9rem;" id="book-mobile">
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.7rem; width: 1.2rem; height: 1.2rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Schedule
          </a>
        </div>
        <div class="overlay-links">
        <div>
        <h1 style="color: white;">SERVICES</h1>
          <a href="services.html">Drain & Sewer line cleaning</a>
          <a href="descaling.html">Descaling (High Speed drain cleaning)</a>
          <a href="milling.html">High speed milling</a>
          <a href="sewer-pipe-inspections.html">Sewer Camera inspections</a>
        </div>
        <div>
        <h1 style="color: white;">INFORMATION</h1>
          <a href="blog.html">Blog</a>
          <a href="faq.html">FAQ</a>
          <a href="gallery.html">Gallery</a>
          <a href="community.html">Community First</a>
          <a target="_blank" href='https://www.lightstream.com/?fact=14133&irad=88401&irmp=3792986'>Financing</a>
        </div>
        <div style="margin-top: 1.5rem;">
          <a href="service-areas.html">Areas Serviced</a>
          <a href="24-emergency.html">24 Hour Service</a>
          <a href="careers.html">Careers</a>
        </div>
        </div>
      </div>
    </div>`

function openNav() {
    document.querySelector(".overlay").style.display = "block";
    setTimeout(() => document.querySelector(".overlay").style.height = "100%", 200)
}

function closeNav() {
    document.querySelector(".overlay").style.display = "none"
    setTimeout(() => document.querySelector(".overlay").style.height = "0%", 200)
}


document.getElementById('navigation').innerHTML += ` 
<section>
<header style="position: fixed; top: 0; right: 0; left: 0rem; width: 100vw;">
  <div class='header-branding'>
    <h1 class='header-branding__title'>
      <a href="/">
      <img style="filter: brightness(120%); margin-left: -1rem; margin-bottom: 0; width: 5rem; height: 5rem;" src="assets/logo.png" alt="Drain Doctor Logo">
      </a>          
    </h1>
    <a class='header-branding__link' href="tel:260-557-3616" target="_system" style="text-decoration: none; background: #FD5D5F; border-radius: 8px; padding: 0.6rem; color: white; font-weight: 500; margin-right: 0.5rem; font-size: 0.9rem;">
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.7rem; width: 1.2rem; height: 1.2rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      Call
    </a>
    <a class='header-branding__link' href="#contact-now" target="_system" style="text-decoration: none; background: #FD5D5F; border-radius: 8px; padding: 0.6rem; color: white; font-weight: 500; margin-right: 0.5rem; font-size: 0.9rem;">
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.7rem; width: 1.2rem; height: 1.2rem; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      Schedule
    </a>
  </div>
  <div id="mobile-nav">
  </div>
  <span class="hide-menu" style="margin-right: -2rem; margin-top: -0.5rem; display: none; font-size:30px;cursor:pointer" onclick="openNav()">
    <span style="display: none; font-size: 1.2rem !important; margin-top: -0.7rem;" class="hide">Menu</span> 
    <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </span>

  <div class='header-links'>
    <div class="dropdown">
      <a class="dropbtn link">Services</a>
      <div class="dropdown-content">
        <a style="font-size: 0.9rem" href="services.html">Drain and sewer cleaning</a>
        <a style="font-size: 0.9rem" href="sewer-pipe-inspections.html">Sewer Camera inspections</a>
        <a style="font-size: 0.9rem; display: none" href="faucet.html">Faucet repair & replacement</a>
        <a style="font-size: 0.9rem; display: none" href="toilet.html">Toilet Repair & installation</a>
        <a style="font-size: 0.9rem; display: none" href="garbage.html">Garbage Disposal</a>
        <a style="font-size: 0.9rem; display: none" href="water-heater.html">Water heater repair & installation</a>
        <a style="font-size: 0.9rem; display: none" href="/annual-plumbing.html">Annual Plumbing Inspection Service</a>
        <a style="font-size: 0.9rem" href="descaling.html">Descaling</a>
        <a style="font-size: 0.9rem" href="careers.html">Careers</a>
      </div>
    </div>
    <a class="link" href='service-areas.html'>Areas Serviced</a>
    <a class="link" href='blog.html'>Blog</a>
    <a class="link" href='faq.html'>FAQ</a>
    <a class="link" href='gallery.html'>Gallery</a>
    <a class="link" target="_blank" href='https://www.lightstream.com/?fact=14133&irad=88401&irmp=3792986'>Financing</a>
    
  </div>
</header>
</section>
`

document.getElementById('footer').innerHTML += `
<footer>
      <div style="margin-bottom: 1rem; width: 12rem; display: flex; justify-content: space-between;">
        <a target="_blank" style="background:rgb(255, 89, 89); padding: 0.4rem 0.4rem 0 0.4rem; border-radius: 100rem; " href="https://m.yelp.com/biz/drain-doctor-fort-wayne">
        <img style="filter: invert(100%); width: 2.5rem; height: 2.3rem" src="https://logoeps.com/wp-content/uploads/2014/06/49072-yelp-logo-icon-vector-icon-vector-eps.png" alt="Yelp">
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.Facebook.com/calldraindoctor">
          <svg fill="white" style="background:rgb(255, 89, 89); padding: 0.4rem; border-radius: 100rem; width: 3rem; height: 3rem" viewBox="0 0 36 36">
            <path d="M20.762 0C14.563 0 13.152 4.601 13.152 7.544L13.152 11.658L9.562 11.658L9.562 18.016L13.144 18.016C13.144 26.175 13.144 36 13.144 36L20.684 36C20.684 36 20.684 26.076 20.684 18.016L25.77 18.016L26.438 11.658L20.692 11.658L20.692 7.924C20.692 6.517 21.628 6.191 22.287 6.191L26.345 6.191L26.345 0.024L20.762 0Z"></path>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/drain-doctor-llc">
          <svg fill="white" style="background:rgb(255, 89, 89); padding: 0.4rem; border-radius: 100rem; width: 3rem; height: 3rem" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://business.google.com/locations">
          <svg fill="white" style="background:rgb(255, 89, 89); padding: 0.4rem; border-radius: 100rem; width: 3rem; height: 3rem" viewBox="0 0 36 36">
            <path xmlns="http://www.w3.org/2000/svg" d="M26.862 15.617c-1.177 1.036-2.73 1.666-4.43 1.666c-1.7 0-3.254-0.63-4.43-1.666c-1.177 1.036-2.73 1.666-4.43 1.666c-1.7 0-3.254-0.63-4.43-1.666c-1.177 1.036-2.73 1.666-4.43 1.666c-0.378 0-0.746-0.038-1.108-0.098v15.439C3.6 33.826 4.591 34.8 5.815 34.8h24.37C31.409 34.8 32.4 33.826 32.4 32.624V17.185c-0.361 0.06-0.73 0.098-1.108 0.098C29.592 17.284 28.038 16.652 26.862 15.617zM28.89 30.563c-1.372 1.724-3.902 2.231-5.963 1.554c-2.186-0.702-3.776-2.855-3.728-5.112c-0.109-2.788 2.389-5.364 5.244-5.398c1.454-0.121 2.87 0.431 3.972 1.332c-0.451 0.485-0.911 0.965-1.403 1.415c-0.968-0.576-2.136-1.014-3.268-0.625c-1.828 0.509-2.934 2.618-2.258 4.366c0.559 1.825 2.831 2.827 4.61 2.06c0.922-0.323 1.53-1.153 1.796-2.047c-1.056-0.02-2.113-0.008-3.168-0.036c-0.002-0.614-0.006-1.226-0.002-1.841c1.76-0.002 3.526-0.007 5.288 0.007C30.118 27.744 29.891 29.354 28.89 30.563zM31.2 1.2H4.8L0 9.988c0 2.045 1.438 3.749 3.374 4.238c0.361 0.091 0.734 0.155 1.126 0.155c2.485 0 4.5-1.967 4.5-4.394c0 2.426 2.015 4.394 4.5 4.394S18 12.415 18 9.988c0 2.426 2.015 4.394 4.5 4.394s4.5-1.967 4.5-4.394c0 2.426 2.015 4.394 4.5 4.394c0.391 0 0.763-0.064 1.126-0.155C34.562 13.736 36 12.034 36 9.988L31.2 1.2z"></path>
          </svg>
        </a>
      </div>
      <div style="display: flex; ">
        <a class="no-hover" target="_blank" rel="noopener noreferrer" href="https://youtube.com/channel/UCXCiGZC-XfddnzD8jv1S1Jg">
          <svg fill="white" style="background:rgb(255, 89, 89); padding: 0.4rem; border-radius: 100rem; width: 3rem; height: 3rem" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon fill="rgb(255, 89, 89)" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
        <a class="no-hover" style="width: 3rem; height: 3rem; padding: 0.1rem; border-radius: 100rem; background:rgb(255, 89, 89);" target="_blank" rel="noopener noreferrer" href="https://pin.it/1Gusyac">
        <img style="filter: invert(100%);  padding: 0.4rem; border-radius: 100rem; width: 100%; height: 100% " src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png" alt="Pinterest">
        </a>
        <a class="no-hover" style="width: 3rem; height: 3rem; padding: 0.1rem; border-radius: 100rem; background:rgb(255, 89, 89);" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calldraindoctor?r=nametag">
        <img style="padding: 0.4rem; border-radius: 100rem; width: 100%; height: 100% " src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-white-border-icon-png-large.png" alt="Pinterest">
        </a>
        <a class="no-hover" style="width: 3rem; height: 3rem; padding: 0.1rem; border-radius: 100rem; background:rgb(255, 89, 89);" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@calldraindoc">
        <img style="filter: invert(100%); padding: 0.4rem; border-radius: 100rem; width: 100%; height: 100% " src="https://www.designbust.com/download/1019/png/tiktok_logo_png_transparent512.png" alt="Tiktok">
        </a>
      </div>
      <div id="footer-flex" style="display: flex; ">
        <div style="margin-right: 5rem"><br>
          <h2>
            Information
          </h2>
          <a href="services.html">Services</a>
          <a href="sewer-pipe-inspections.html">Sewer Camera inspections</a>
          <a href="service-areas.html">Areas Serviced</a>
          <a href="blog.html">Blog</a>
          <a href="faq.html">FAQ</a>
          <a href="gallery.html">Gallery</a>
          <a href="community.html">Community First</a>
          <a href="24-emergency.html">24 Hour Service</a>
          <a target="_blank" href='https://www.lightstream.com/?fact=14133&irad=88401&irmp=3792986'>Financing</a>

        </div>
        <div style="margin-right: 5rem"><br>
          <h2>
            Legal
          </h2>
          <a href="terms.html">Terms Of Service</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="pledge.html">Safe Pledge</a>
          <a href="cancellation.html">Cancellation Policy</a>
        </div>
        <div style="margin-right: 5rem"><br>
          <h2>
            Contact Us
          </h2>
          <a href="tel:260-557-3616" target="_system">Phone: 260-557-3616</a>
          <p style="margin-top: 1rem; margin-bottom: 1rem; text-transform: none; font-weight: 600;">Fax: ‎260‎-5‎72-0‎6‎05</p>
          <p style="font-weight: 600;">2212 Maplecrest Rd ste 7
            <br>
            Fort Wayne, Indiana 46815
          </p>
          <br>
        </div>

        <div><br>
                <p style="text-align: left">
                    <h2>Business Hours:</h2>
                    <b>Monday-Friday:</b> 9:00am-5:00pm.
                    <br>
                    <b>Saturday-Sunday:</b> Appointment Only
                    <br>
                    24/7 service available.
                    <br>
                    Additional fees for after-hours, weekend, and holiday service.
                </p>

        </div>
      </div>
<br>
                <img style="display: block; width: 14rem; height: auto;" src="assets/payment.png" alt="Payment">

      <p style="margin-top: 2rem;"> Copyright Ⓒ ${new Date().getFullYear()} Drain Doctor. All rights reserved.</p>
      <span style="color: #999">
      If you are using a screen reader and having difficulty with this website, please call 260-557-3616.</span>
    </footer>
`