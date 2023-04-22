import data1 from './data.js';
import data3 from './data2.js';

const body = document.getElementById('body');

const homeNavLink = document.getElementById('home-nav-link');
homeNavLink.addEventListener('click', () => {
  window.location.href = '/about.html';
});

const bodySection = document.createElement('section');
bodySection.style.display = 'flex';
bodySection.style.flexDirection = 'column';
bodySection.setAttribute('class', 'section-view-port');
bodySection.setAttribute('id', 'section-view-port-id');
bodySection.style.backgroundColor = '#aaa';
bodySection.style.width = '100%';

const sectionMobileHeader = document.createElement('section');
sectionMobileHeader.style.flexDirection = 'column';
sectionMobileHeader.setAttribute('class', 'section-mobile-header');
sectionMobileHeader.setAttribute('id', 'section-header-mobile-id');
sectionMobileHeader.style.height = '10rem';
sectionMobileHeader.style.backgroundColor = '#fff';

const navMobile = document.createElement('nav');
navMobile.style.display = 'flex';
navMobile.style.justifyContent = 'start';
navMobile.style.alignItems = 'center';
navMobile.setAttribute('class', 'header-mobile-nav');
navMobile.setAttribute('id', 'mobileMenuid');
navMobile.style.width = '100%';
navMobile.style.height = '100%';
navMobile.style.backgroundColor = '#fff';

const headerMobile = document.createElement('img');
headerMobile.style.display = 'flex';
headerMobile.setAttribute('class', 'header-mobile-img');
headerMobile.src = './Images/menu.svg';
headerMobile.style.height = '15%';
headerMobile.style.margin = '2rem';
navMobile.appendChild(headerMobile);
sectionMobileHeader.appendChild(navMobile);

body.appendChild(sectionMobileHeader);

const sectionHeader = document.createElement('section');
sectionHeader.style.flexDirection = 'column';
sectionHeader.setAttribute('class', 'section-header');
sectionHeader.setAttribute('id', 'section-header-desktop-id');
sectionHeader.style.height = '20%';
sectionHeader.style.backgroundColor = '#fff';

const headerTop = document.createElement('div');
headerTop.style.display = 'flex';
headerTop.style.justifyContent = 'end';
headerTop.setAttribute('class', 'header-top');
headerTop.style.height = '40%';
headerTop.style.width = '100%';
headerTop.style.backgroundColor = '#272a31';

const headerTopUl = document.createElement('ul');
headerTopUl.style.display = 'flex';
headerTopUl.style.gap = '1rem';
headerTopUl.style.marginRight = '10%';
headerTopUl.setAttribute('class', 'header-top-ul');
for (let i = 0; i < 5; i += 1) {
  if (i === 0) {
    const headerTopUlLi = document.createElement('img');
    headerTopUlLi.style.display = 'flex';
    headerTopUlLi.setAttribute('class', 'header-top-ul-li');
    headerTopUlLi.src = './Images/facebook-icon.svg';
    headerTopUlLi.style.height = '20px';
    headerTopUl.appendChild(headerTopUlLi);
  } else if (i === 1) {
    const headerTopUlLi = document.createElement('img');
    headerTopUlLi.style.display = 'flex';
    headerTopUlLi.setAttribute('class', 'header-top-ul-li');
    headerTopUlLi.src = './Images/twitter.svg';
    headerTopUlLi.style.height = '20px';
    headerTopUl.appendChild(headerTopUlLi);
  } else if (i === 2) {
    const headerTopUlLi = document.createElement('li');
    headerTopUlLi.style.display = 'flex';
    headerTopUlLi.setAttribute('class', 'header-top-ul-li');
    headerTopUlLi.textContent = 'English';
    headerTopUlLi.style.color = '#fff';
    headerTopUlLi.style.fontFamily = 'Lato, sans-serif';
    headerTopUl.appendChild(headerTopUlLi);
  } else if (i === 3) {
    const headerTopUlLi = document.createElement('li');
    headerTopUlLi.style.display = 'flex';
    headerTopUlLi.setAttribute('class', 'header-top-ul-li');
    headerTopUlLi.textContent = 'My Page';
    headerTopUlLi.style.color = '#fff';
    headerTopUlLi.style.fontFamily = 'Lato, sans-serif';
    headerTopUl.appendChild(headerTopUlLi);
  } else if (i === 4) {
    const headerTopUlLi = document.createElement('li');
    headerTopUlLi.style.display = 'flex';
    headerTopUlLi.setAttribute('class', 'header-top-ul-li');
    headerTopUlLi.textContent = 'Logout';
    headerTopUlLi.style.color = '#fff';
    headerTopUlLi.style.fontFamily = 'Lato, sans-serif';
    headerTopUl.appendChild(headerTopUlLi);
  }
}
headerTop.appendChild(headerTopUl);

const headerBottom = document.createElement('div');
headerBottom.style.display = 'flex';
headerBottom.style.justifyContent = 'end';
headerBottom.style.alignItems = 'center';
headerBottom.style.height = '60%';
headerBottom.style.marginTop = '1rem';
headerBottom.style.marginBottom = '1rem';
headerBottom.style.gap = '1rem';
headerBottom.setAttribute('class', 'header-bottom');

const headerBottomDiv = document.createElement('div');
headerBottomDiv.style.display = 'flex';
headerBottomDiv.style.width = '100%';
headerBottomDiv.style.marginLeft = '10%';
headerBottomDiv.style.gap = '1rem';
headerBottomDiv.setAttribute('class', 'header-bottom-div');

const headerBottomDiv1 = document.createElement('div');
headerBottomDiv1.style.display = 'flex';
headerBottomDiv1.setAttribute('class', 'header-bottom-div1');

const headerBottomImg = document.createElement('img');
headerBottomImg.style.display = 'flex';
headerBottomImg.setAttribute('class', 'header-bottom-img');
headerBottomImg.src = './Images/cc.svg';
headerBottomImg.style.height = '3rem';
headerBottomDiv1.appendChild(headerBottomImg);

const headerBottomDiv2 = document.createElement('div');
headerBottomDiv2.style.display = 'flex';
headerBottomDiv2.style.flexDirection = 'column';
headerBottomDiv2.setAttribute('class', 'header-bottom-div2');

const headerBottomTxt1 = document.createElement('p');
headerBottomTxt1.style.display = 'flex';
headerBottomTxt1.setAttribute('class', 'header-bottom-txt1');
headerBottomTxt1.textContent = 'CC Global';

const headerBottomTxt2 = document.createElement('p');
headerBottomTxt2.style.display = 'flex';
headerBottomTxt2.setAttribute('class', 'header-bottom-txt2');
headerBottomTxt2.textContent = 'Submit 2015';

headerBottomDiv2.appendChild(headerBottomTxt1);
headerBottomDiv2.appendChild(headerBottomTxt2);
headerBottomDiv.appendChild(headerBottomDiv1);
headerBottomDiv.appendChild(headerBottomDiv2);
headerBottom.appendChild(headerBottomDiv);

const headerBottomUl = document.createElement('ul');
headerBottomUl.style.display = 'flex';
headerBottomUl.style.width = '100%';
headerBottomUl.style.alignItems = 'center';
headerBottomUl.style.marginRight = '10%';
headerBottomUl.style.gap = '2rem';
headerBottomUl.style.justifyContent = 'end';
headerBottomUl.setAttribute('class', 'header-bottom-ul');
for (let i = 0; i < 6; i += 1) {
  const headerBottomUlLi = document.createElement('li');
  headerBottomUlLi.style.display = 'flex';
  headerBottomUlLi.setAttribute('class', 'header-top-ul-li');
  if (i === 0) {
    headerBottomUlLi.textContent = 'About';
    headerBottomUlLi.style.color = '#ec5242';
    headerBottomUlLi.addEventListener('click', () => {
      window.location.href = '/about.html';
    });
  } else if (i === 1) {
    headerBottomUlLi.textContent = 'Program';
  } else if (i === 2) {
    headerBottomUlLi.textContent = 'Join';
  } else if (i === 3) {
    headerBottomUlLi.textContent = 'Sponsor';
  } else if (i === 4) {
    headerBottomUlLi.textContent = 'News';
  } else if (i === 5) {
    headerBottomUlLi.textContent = 'CC Campain';
    headerBottomUlLi.style.padding = '0.5rem';
    headerBottomUlLi.style.border = '3px solid #ec5242';
    headerBottomUlLi.style.color = '#ec5242';
  }
  headerBottomUl.appendChild(headerBottomUlLi);
}
headerBottom.appendChild(headerBottomUl);

sectionHeader.appendChild(headerTop);
sectionHeader.appendChild(headerBottom);
bodySection.appendChild(sectionHeader);

const body1Section = document.createElement('section');
body1Section.style.display = 'flex';
body1Section.setAttribute('class', 'section-body1');
body1Section.setAttribute('id', 'section-body1-id');
body1Section.style.backgroundColor = '#d3d3d3';

const body1div1 = document.createElement('div');
body1div1.style.display = 'flex';
body1div1.style.flexDirection = 'column';
body1div1.style.width = '100%';
body1div1.setAttribute('class', 'body1-div1');

const body1txt1 = document.createElement('p');
body1txt1.style.display = 'flex';
body1txt1.setAttribute('class', 'body1-txt1');
body1txt1.setAttribute('id', 'body1-txt1');
body1txt1.textContent = '"Hello! Sharing world"';
body1txt1.style.color = '#ec5242';
body1txt1.style.marginTop = '5%';
body1txt1.style.fontFamily = 'Lato, sans-serif';
body1txt1.style.marginLeft = '10%';
body1txt1.style.fontSize = '2rem';
body1txt1.style.fontWeight = '400';
body1div1.appendChild(body1txt1);

const body1txt2 = document.createElement('h1');
body1txt2.style.display = 'flex';
body1txt2.setAttribute('class', 'body1-txt2');
body1txt2.setAttribute('id', 'body1-txt2');
body1txt2.textContent = 'Creative commons global summit 2015';
body1txt2.style.color = '#ec5242';
body1txt2.style.fontFamily = 'COCOGOOSE, sans-serif';
body1txt2.style.marginRight = '47%';
body1txt2.style.marginLeft = '10%';
body1txt2.style.fontSize = '3rem';
body1txt2.style.fontWeight = '700';
body1txt2.style.minWidth = '280px';
body1txt2.style.fontStyle = 'bold';
body1txt2.style.textTransform = 'uppercase';
body1div1.appendChild(body1txt2);

const body1txt3 = document.createElement('p');
body1txt3.style.display = 'flex';
body1txt3.setAttribute('class', 'body1-txt3');
body1txt3.textContent = 'A joyful celebration believing in the value of openess and sharing, creating a positive charge with people from over 80 countries is taking place in October, in Korea.';
body1txt3.style.color = '#272a31';
body1txt3.style.marginLeft = '10%';
body1txt3.style.fontFamily = 'Lato, sans-serif';
body1txt3.style.fontSize = '12px';
body1txt3.style.marginRight = '50%';
body1txt3.style.marginTop = '2%';
body1txt3.style.marginBottom = '2%';
body1txt3.style.border = '1px solid #fff';
body1txt3.style.padding = '1rem';
body1div1.appendChild(body1txt3);

const body1txt4 = document.createElement('p');
body1txt4.style.display = 'flex';
body1txt4.setAttribute('class', 'body1-txt4');
body1txt4.textContent = '2015.10.15(THU) ~ 16(FRI)';
body1txt4.style.color = '#272a31';
body1txt4.style.marginLeft = '10%';
body1txt4.style.fontFamily = 'COCOGOOSE, sans-serif';
body1txt4.style.marginBottom = '1%';
body1txt4.style.fontSize = '2rem';
body1txt4.style.fontWeight = '700';
body1txt4.style.fontStyle = 'bold';
body1div1.appendChild(body1txt4);

const body1txt5 = document.createElement('p');
body1txt5.style.display = 'flex';
body1txt5.setAttribute('class', 'body1-txt5');
body1txt5.textContent = '@ National Museum of Korea, Art Center Nabi and more';
body1txt5.style.color = '#272a31';
body1txt5.style.marginLeft = '10%';
body1txt5.style.marginBottom = '10%';
body1txt5.style.fontFamily = 'Lato, sans-serif';
body1txt5.style.fontSize = '1rem';
body1txt5.style.fontWeight = '400';
body1txt5.style.fontStyle = 'bold';
body1div1.appendChild(body1txt5);

body1Section.appendChild(body1div1);
bodySection.appendChild(body1Section);

body.appendChild(bodySection);

const body2Section = document.createElement('section');
body2Section.style.display = 'flex';
body2Section.style.justifyContent = 'center';
body2Section.style.alignItems = 'center';
body2Section.style.flexDirection = 'column';
body2Section.setAttribute('class', 'section-body2');
body2Section.style.width = '100%';

const body2txt1 = document.createElement('p');
body2txt1.style.display = 'flex';
body2txt1.style.justifyContent = 'center';
body2txt1.setAttribute('class', 'body2-txt1');
body2txt1.textContent = 'Live On';
body2txt1.style.color = '#fff';
body2txt1.style.fontFamily = 'Lato, sans-serif';
body2txt1.style.marginBottom = '1%';
body2txt1.style.marginTop = '2%';
body2txt1.style.fontSize = '1.5rem';
body2txt1.style.fontStyle = 'normal';

const body2Hr = document.createElement('hr');
body2Hr.style.display = 'flex';
body2Hr.style.marginBottom = '2rem';
body2Hr.style.width = '2%';

const body2div1 = document.createElement('div');
body2div1.style.display = 'flex';
body2div1.style.width = '100%';
body2div1.style.height = '50%';
body2div1.style.justifyContent = 'center';
body2div1.style.alignItems = 'center';
body2div1.style.gap = '0.5rem';
body2div1.setAttribute('class', 'body2-div1');
body2div1.setAttribute('id', 'body2-div1-id');

function fillMainProgram(incomDiv, proName, proImg, proDesc) {
  const body2Div = document.createElement('div');
  body2Div.style.display = 'flex';
  body2Div.setAttribute('class', 'body2-div');
  body2Div.setAttribute('id', 'body2-div-id');
  body2Div.style.backgroundColor = '#272a31';
  body2Div.style.height = '100%';
  body2Div.style.opacity = '0.8';
  body2Div.onmouseover = function()
  {
    body2Div.style.border = '1px solid white';
  };
  body2Div.onmouseout = function()
  {
    body2Div.style.border = '1px solid #272a31';
  };

  const body2Divtxt1 = document.createElement('p');
  body2Divtxt1.style.display = 'flex';
  body2Divtxt1.style.justifyContent = 'center';
  body2Divtxt1.setAttribute('class', 'body2-div-txt1');
  body2Divtxt1.textContent = proName;
  body2Divtxt1.style.color = '#ec5242';
  body2Divtxt1.style.fontFamily = 'COCOGOOSE, sans-serif';
  body2Divtxt1.style.fontSize = '1rem';
  body2Divtxt1.style.margin = '2rem';
  body2Divtxt1.style.fontStyle = 'normal';

  const body2Divtxt2 = document.createElement('p');
  body2Divtxt2.style.display = 'flex';
  body2Divtxt2.style.justifyContent = 'center';
  body2Divtxt2.setAttribute('class', 'body2-div-txt2');
  body2Divtxt2.textContent = proDesc;
  body2Divtxt2.style.color = '#fff';
  body2Divtxt2.style.margin = '1rem';
  body2Divtxt2.style.fontFamily = 'Lato, sans-serif';
  body2Divtxt2.style.fontSize = '0.7rem';
  body2Divtxt2.style.fontStyle = 'normal';

  const body2DivImg = document.createElement('img');
  body2DivImg.style.display = 'flex';
  body2DivImg.src = proImg;
  body2DivImg.style.justifyContent = 'center';
  body2DivImg.style.height = '2rem';
  body2DivImg.style.marginTop = '1rem';
  body2DivImg.style.marginBottom = '1rem';
  body2DivImg.style.alignItems = 'center';
  body2DivImg.setAttribute('class', 'setion2-dynamic-img');

  body2Div.appendChild(body2DivImg);
  body2Div.appendChild(body2Divtxt1);
  body2Div.appendChild(body2Divtxt2);

  incomDiv.appendChild(body2Div);
}

for (let i = 0; i < data1.length; i += 1) {
  fillMainProgram(body2div1, data1[i].programName, data1[i].programImg, data1[i].programDesc);
}

const body2txt2 = document.createElement('p');
body2txt2.style.justifyContent = 'center';
body2txt2.setAttribute('class', 'body2-txt1');
body2txt2.setAttribute('id', 'body2-txt1-see1');
body2txt2.textContent = 'See the whole program';
body2txt2.style.color = '#fff';
body2txt2.style.fontFamily = 'Lato, sans-serif';
body2txt2.style.textTransform = 'uppercase';
body2txt2.style.paddingBottom = '5px';
body2txt2.style.borderBottomStyle = 'solid';
body2txt2.style.marginBottom = '8%';
body2txt2.style.marginTop = '2%';
body2txt2.style.fontSize = '1rem';
body2txt2.style.fontStyle = 'normal';

const body2txt22 = document.createElement('p');
body2txt22.style.justifyContent = 'center';
body2txt22.setAttribute('class', 'body2-txt1');
body2txt22.setAttribute('id', 'body2-txt1-see2');
body2txt22.textContent = 'Join CC Global Submit 2015';
body2txt22.style.color = '#fff';
body2txt22.style.fontFamily = 'Lato, sans-serif';
body2txt22.style.textTransform = 'capitalize';
body2txt22.style.padding = '5%';
body2txt22.style.marginBottom = '8%';
body2txt22.style.marginTop = '2%';
body2txt22.style.fontSize = '1rem';
body2txt22.style.fontStyle = 'bold';
body2txt22.style.backgroundColor = '#ec5242';

body2Section.appendChild(body2txt1);
body2Section.appendChild(body2Hr);
body2Section.appendChild(body2div1);
body2Section.appendChild(body2txt2);
body2Section.appendChild(body2txt22);
body.appendChild(body2Section);

const body3Section = document.createElement('section');
body3Section.style.display = 'flex';
body3Section.style.flexDirection = 'column';
body3Section.style.justifyContent = 'center';
body3Section.setAttribute('class', 'section-body3');
body3Section.style.backgroundColor = '#fff';
body3Section.style.width = '100%';

const sec3TxtDiv = document.createElement('div');
sec3TxtDiv.style.display = 'flex';
sec3TxtDiv.style.flexDirection = 'column';
sec3TxtDiv.style.width = '100%';
sec3TxtDiv.style.justifyContent = 'center';
sec3TxtDiv.style.alignItems = 'center';
sec3TxtDiv.setAttribute('class', 'section3-txt-div');

const body3txt1 = document.createElement('p');
body3txt1.style.display = 'flex';
body3txt1.style.justifyContent = 'center';
body3txt1.setAttribute('class', 'body2-txt1');
body3txt1.textContent = 'Featured Speakers';
body3txt1.style.color = '#272a31';
body3txt1.style.fontFamily = 'Lato, sans-serif';
body3txt1.style.marginBottom = '1%';
body3txt1.style.marginTop = '2%';
body3txt1.style.fontSize = '1.5rem';
body3txt1.style.fontStyle = 'normal';

const body3Hr = document.createElement('hr');
body3Hr.style.display = 'flex';
body3Hr.style.border = '1px solid #ec5242';
body3Hr.style.width = '5%';
body3Hr.style.marginBottom = '2rem';

const sec3Div = document.createElement('div');
sec3Div.style.display = 'flex';
sec3Div.style.flexWrap = 'wrap';
sec3Div.style.width = '100%';
sec3Div.style.justifyContent = 'center';
sec3Div.style.alignItems = 'center';
sec3Div.style.gap = '0.5rem';
sec3Div.setAttribute('class', 'section3-div');
sec3Div.setAttribute('id', 'section3-div-id');

const sec3BtmDiv = document.createElement('div');
sec3BtmDiv.style.width = '80%';
sec3BtmDiv.style.justifyContent = 'center';
sec3BtmDiv.style.alignItems = 'center';
sec3BtmDiv.style.gap = '1rem';
sec3BtmDiv.style.margin = '1rem';
sec3BtmDiv.style.padding = '1rem';
sec3BtmDiv.style.border = '1px solid #d3d3d3';
sec3BtmDiv.setAttribute('class', 'section3-bottom-div');
sec3BtmDiv.setAttribute('id', 'section3-bottom-div-id');

const sec3BtmDivTxt = document.createElement('p');
sec3BtmDivTxt.style.display = 'flex';
sec3BtmDivTxt.style.flexDirection = 'column';
sec3BtmDivTxt.textContent = 'More';
sec3BtmDivTxt.setAttribute('class', 'seaction3-second-div');

const sec3BtmDivImg = document.createElement('img');
sec3BtmDivImg.style.display = 'flex';
sec3BtmDivImg.setAttribute('class', 'sec3BtmDivImg-img');
sec3BtmDivImg.src = './Images/about_down_arrow.svg';
sec3BtmDivImg.style.height = '10px';

sec3BtmDiv.appendChild(sec3BtmDivTxt);
sec3BtmDiv.appendChild(sec3BtmDivImg);

function fillFeaturedSpeackers(incomSec3Div, spkrImg, spkrName, spkrTitle, spkrDesc) {
  const section3Div = document.createElement('div');
  section3Div.style.display = 'flex';
  section3Div.setAttribute('class', 'seaction3-each-div');
  section3Div.style.backgroundColor = '#fff';
  section3Div.style.height = '100%';

  const section3Div1 = document.createElement('div');
  section3Div1.style.display = 'flex';
  section3Div1.setAttribute('class', 'seaction3-first-div');
  section3Div1.style.width = '35%';
  section3Div1.style.margin = '0.5rem';

  const section3Div1Img = document.createElement('img');
  section3Div1Img.style.display = 'flex';
  section3Div1Img.style.width = '100%';
  section3Div1Img.src = spkrImg;
  section3Div1Img.style.justifyContent = 'center';
  section3Div1Img.style.alignItems = 'center';
  section3Div1Img.setAttribute('class', 'setion3-first-div-img');

  const section3Div2 = document.createElement('div');
  section3Div2.style.display = 'flex';
  section3Div2.style.flexDirection = 'column';
  section3Div2.setAttribute('class', 'seaction3-second-div');
  section3Div2.style.width = '65%';
  section3Div2.style.margin = '0.5rem';

  const section3Div2txt1 = document.createElement('p');
  section3Div2txt1.style.display = 'flex';
  section3Div2txt1.style.fontFamily = 'COCOGOOSE, sans-serif';
  section3Div2txt1.setAttribute('class', 'body2-div-txt1');
  section3Div2txt1.textContent = spkrName;
  section3Div2txt1.style.fontStyle = 'normal';
  section3Div2txt1.style.color = '#272a31';
  section3Div2txt1.style.fontSize = '0.8rem';

  const section3Div2txt2 = document.createElement('p');
  section3Div2txt2.style.display = 'flex';
  section3Div2txt2.style.fontFamily = 'Lato, sans-serif';
  section3Div2txt2.setAttribute('class', 'body2-div-txt2');
  section3Div2txt2.textContent = spkrTitle;
  section3Div2txt2.style.fontStyle = 'italic';
  section3Div2txt2.style.color = '#ec5242';
  section3Div2txt2.style.fontSize = '0.7rem';

  const section3Hr = document.createElement('hr');
  section3Hr.style.display = 'flex';
  section3Hr.style.border = '1px solid #d3d3d3';
  section3Hr.style.width = '8%';
  section3Hr.style.marginBottom = '0.5rem';
  section3Hr.style.marginTop = '0.5rem';

  const section3Div2txt3 = document.createElement('p');
  section3Div2txt3.style.display = 'flex';
  section3Div2txt3.style.justifyContent = 'center';
  section3Div2txt3.style.fontFamily = 'Lato, sans-serif';
  section3Div2txt3.setAttribute('class', 'body2-div-txt3');
  section3Div2txt3.textContent = spkrDesc;
  section3Div2txt3.style.fontStyle = 'normal';
  section3Div2txt3.style.color = '#272a31';
  section3Div2txt3.style.fontSize = '0.8rem';

  section3Div2.appendChild(section3Div2txt1);
  section3Div2.appendChild(section3Div2txt2);
  section3Div2.appendChild(section3Hr);
  section3Div2.appendChild(section3Div2txt3);

  section3Div1.appendChild(section3Div1Img);
  section3Div.appendChild(section3Div1);
  section3Div.appendChild(section3Div2);
  incomSec3Div.appendChild(section3Div);
}

for (let i = 0; i < data3.length; i += 1) {
  fillFeaturedSpeackers(sec3Div, data3[i].speackerImg, data3[i].speackerName,
    data3[i].speackerTitle, data3[i].speackerDesc);
}

sec3TxtDiv.appendChild(body3txt1);
sec3TxtDiv.appendChild(body3Hr);
body3Section.appendChild(sec3TxtDiv);
sec3Div.appendChild(sec3BtmDiv);
body3Section.appendChild(sec3Div);

body.appendChild(body3Section);

const footerSection = document.createElement('section');
footerSection.style.flexDirection = 'column';
footerSection.setAttribute('class', 'section-footer');
footerSection.setAttribute('id', 'section-footer-id');
footerSection.style.height = '20%';
footerSection.style.backgroundColor = '#f2f2f2';

const footerSectionPart1 = document.createElement('div');
footerSectionPart1.style.display = 'flex';
footerSectionPart1.style.flexDirection = 'column';
footerSectionPart1.setAttribute('class', 'section-footer-part1');
footerSectionPart1.style.height = '20%';
footerSectionPart1.style.backgroundColor = '#272a31';

const footer1Div1 = document.createElement('div');
footer1Div1.style.display = 'flex';
footer1Div1.style.flexDirection = 'column';
footer1Div1.style.width = '100%';
footer1Div1.style.justifyContent = 'center';
footer1Div1.style.alignItems = 'center';
footer1Div1.style.gap = '5%';
footer1Div1.style.paddingTop = '2rem';
footer1Div1.setAttribute('class', 'footer-div1');

const footerTxt0 = document.createElement('p');
footerTxt0.style.display = 'flex';
footerTxt0.style.justifyContent = 'center';
footerTxt0.setAttribute('class', 'footer-div1-txt');
footerTxt0.textContent = 'Partner';
footerTxt0.style.color = '#fff';
footerTxt0.style.fontFamily = 'Lato, sans-serif';
footerTxt0.style.fontSize = '1rem';
footerTxt0.style.fontStyle = 'normal';

const footerHr = document.createElement('hr');
footerHr.style.display = 'flex';
footerHr.style.justifyContent = 'center';
footerHr.style.width = '3%';

const footer1Div2 = document.createElement('div');
footer1Div2.style.display = 'flex';
footer1Div2.style.width = '100%';
footer1Div2.style.justifyContent = 'center';
footer1Div2.style.alignItems = 'center';
footer1Div2.style.marginLeft = '3rem';
footer1Div2.style.marginRight = '3rem';
footer1Div2.style.marginBottom = '3rem';
footer1Div2.style.marginTop = '3rem';
footer1Div2.style.gap = '5%';
footer1Div2.setAttribute('class', 'footer-div1');

for (let i = 0; i < 5; i += 1) {
  const footer1Div = document.createElement('div');
  footer1Div.style.display = 'flex';
  footer1Div.style.justifyContent = 'center';
  footer1Div.style.alignItems = 'center';
  footer1Div.setAttribute('class', 'footer1-div');

  const footer1Txt = document.createElement('p');
  footer1Txt.style.display = 'flex';
  footer1Txt.style.justifyContent = 'center';
  footer1Txt.style.alignItems = 'center';
  footer1Txt.setAttribute('class', 'footer1-txt');

  if (i === 0) {
    footer1Txt.textContent = 'mozilla';
    footer1Txt.style.fontFamily = 'Lato, sans-serif';
    footer1Txt.style.fontSize = '2rem';
    footer1Txt.style.fontWeight = '700';
    footer1Txt.style.fontStyle = 'bold';
    footer1Txt.style.color = '#ccc';
  } else if (i === 1) {
    footer1Txt.textContent = 'Google';
    footer1Txt.style.fontFamily = 'sans-serif';
    footer1Txt.style.fontSize = '1.5rem';
    footer1Txt.style.fontStyle = 'normal';
    footer1Txt.style.color = '#d3d3d3';
  } else if (i === 2) {
    footer1Txt.textContent = 'NAVER';
    footer1Txt.style.fontSize = '2rem';
    footer1Txt.style.fontWeight = '700';
    footer1Txt.style.fontStyle = 'bold';
    footer1Txt.style.color = '#ccc';
    footer1Txt.style.fontFamily = 'COCOGOOSE, sans-serif';
  } else if (i === 3) {
    footer1Txt.style.fontSize = '2rem';
    footer1Txt.style.fontStyle = 'normal';
    footer1Txt.style.color = '#ccc';
    footer1Txt.textContent = 'daumkakao';
  } else if (i === 4) {
    footer1Txt.style.fontSize = '2rem';
    footer1Txt.style.fontStyle = 'normal';
    footer1Txt.style.color = '#ccc';
    footer1Txt.textContent = 'airbnb';

    const footer1Div1Img = document.createElement('img');
    footer1Div1Img.style.display = 'flex';
    footer1Div1Img.style.justifyContent = 'center';
    footer1Div1Img.style.alignItems = 'center';
    footer1Div1Img.style.width = '2rem';
    footer1Div1Img.style.marginRight = '1rem';
    footer1Div1Img.setAttribute('class', 'footer1-img');
    footer1Div1Img.src = './Images/airbnb-icon.svg';

    footer1Div.appendChild(footer1Div1Img);
  }

  footer1Div.appendChild(footer1Txt);

  footer1Div2.appendChild(footer1Div);
}

footer1Div1.appendChild(footerTxt0);
footer1Div1.appendChild(footerHr);

footerSectionPart1.appendChild(footer1Div1);
footerSectionPart1.appendChild(footer1Div2);

footerSection.appendChild(footerSectionPart1);

body.appendChild(footerSection);

const footerSectionPart2 = document.createElement('div');
footerSectionPart2.style.display = 'flex';
footerSectionPart2.style.width = '100%';
footerSectionPart2.style.marginTop = '2rem';
footerSectionPart2.style.marginBottom = '2rem';
footerSectionPart2.style.justifyContent = 'center';
footerSectionPart2.style.alignItems = 'center';
footerSectionPart2.style.gap = '2rem';
footerSectionPart2.style.marginBottom = '3rem';
footerSectionPart2.style.marginTop = '3rem';
footerSectionPart2.setAttribute('class', 'footer-section-part2');

const footer2Div1 = document.createElement('div');
footer2Div1.style.display = 'flex';
footer2Div1.style.width = '20%';
footer2Div1.style.alignItems = 'center';
footer2Div1.setAttribute('class', 'footer2-div1');

const footer2Div1Img = document.createElement('img');
footer2Div1Img.style.display = 'flex';
footer2Div1Img.src = './Images/cc.svg';
footer2Div1Img.style.justifyContent = 'center';
footer2Div1Img.style.height = '2rem';
footer2Div1Img.style.fontSize = '2rem';
footer2Div1Img.style.alignItems = 'center';
footer2Div1Img.setAttribute('class', 'footer2-div1-img');

const footer2Div1Txt = document.createElement('p');
footer2Div1Txt.style.display = 'flex';
footer2Div1Txt.style.width = '100%';
footer2Div1Txt.style.justifyContent = 'center';
footer2Div1Txt.style.alignItems = 'center';
footer2Div1Txt.style.color = '#272a31';
footer2Div1Txt.style.fontSize = '1.5rem';
footer2Div1Txt.style.fontStyle = 'bold';
footer2Div1Txt.style.fontWeight = '700';
footer2Div1Txt.style.fontFamily = 'Lato, sans-serif';
footer2Div1Txt.textContent = 'Creative commons Korea';
footer2Div1Txt.setAttribute('class', 'footer2-div1-txt');

const footer2Div2 = document.createElement('div');
footer2Div2.style.display = 'flex';
footer2Div2.style.flexDirection = 'column';
footer2Div2.style.width = '50%';
footer2Div2.setAttribute('class', 'footer2-div2');

const footer2Div2Txt1 = document.createElement('p');
footer2Div2Txt1.style.display = 'flex';
footer2Div2Txt1.textContent = '2015 Creative commons Korea. Some Rights Reserved.';
footer2Div2Txt1.style.justifyContent = 'start';
footer2Div2Txt1.style.fontSize = '1rem';
footer2Div2Txt1.style.alignItems = 'center';
footer2Div2Txt1.setAttribute('class', 'footer2-div2-txt1');

const footer2Div2Txt2 = document.createElement('p');
footer2Div2Txt2.style.display = 'flex';
footer2Div2Txt2.textContent = 'የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው። 2015 የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው። 2015 የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው።';
footer2Div2Txt2.style.width = '100%';
footer2Div2Txt2.style.justifyContent = 'center';
footer2Div2Txt2.style.alignItems = 'center';
footer2Div2Txt2.style.fontSize = '1rem';
footer2Div2Txt2.setAttribute('class', 'footer2-div2-txt2');

footer2Div1.appendChild(footer2Div1Img);
footer2Div1.appendChild(footer2Div1Txt);
footer2Div2.appendChild(footer2Div2Txt1);
footer2Div2.appendChild(footer2Div2Txt2);

footerSectionPart2.appendChild(footer2Div1);
footerSectionPart2.appendChild(footer2Div2);

footerSection.appendChild(footerSectionPart2);
body.appendChild(footerSection);