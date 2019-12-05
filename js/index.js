const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//start

const navItem = document.querySelector('nav').querySelectorAll('a');
navItem.forEach(function(value, index) {value.text = siteContent.nav[`nav-item-${index+1}`]});


let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])

let mid_page_accent = document.getElementById("middle-img");
mid_page_accent.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const tagNameTrial = document.querySelectorAll('h4');
console.log(tagNameTrial);
tagNameTrial.forEach(function( currentValue ) {currentValue.style.color = 'red';
});

tagNameTrial[0].innerHTML = siteContent['main-content']['features-h4'];
tagNameTrial[1].innerHTML = siteContent['main-content']['about-h4'];
tagNameTrial[2].innerHTML = siteContent['main-content']['services-h4'];
tagNameTrial[3].innerHTML = siteContent['main-content']['product-h4'];
tagNameTrial[4].innerHTML = siteContent['main-content']['vision-h4'];
tagNameTrial[5].innerHTML = siteContent['contact']['contact-h4'];

const pGraphs = document.querySelectorAll('p');
console.log(pGraphs);

pGraphs[0].outerHTML = siteContent['main-content']['features-content'];
pGraphs[1].outerHTML = siteContent['main-content']['about-content'];
pGraphs[2].outerHTML = siteContent['main-content']['services-content'];
pGraphs[3].outerHTML = siteContent['main-content']['product-content'];
pGraphs[4].outerHTML = siteContent['main-content']['vision-content'];

const dISAwesome = document.querySelector('h1');
dISAwesome.innerHTML = siteContent['cta']['h1'];

const butt_on = document.querySelector('button');
