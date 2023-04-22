const body = document.getElementById('body');

const aboutNavLink = document.getElementById('about-nav-link');
aboutNavLink.addEventListener('click', () => {
  window.location.href = '/index.html';
});


const bodySection = document.createElement('section');
bodySection.style.display = 'flex';
bodySection.style.flexDirection = 'column';
bodySection.setAttribute('class', 'section-one');
bodySection.style.backgroundColor = '#aaa';
bodySection.style.width = '100%';
// bodySection.style.height = '100vh';

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
headerBottomImg.addEventListener('click', () => {
  window.location.href = '/index.html';
});
headerBottomDiv1.appendChild(headerBottomImg);

const headerBottomDiv2 = document.createElement('div');
headerBottomDiv2.style.display = 'flex';
headerBottomDiv2.style.flexDirection = 'column';
headerBottomDiv2.setAttribute('class', 'header-bottom-div2');

const headerBottomTxt1 = document.createElement('p');
headerBottomTxt1.style.display = 'flex';
headerBottomTxt1.setAttribute('class', 'header-bottom-txt1');
headerBottomTxt1.textContent = 'CC Global';
headerBottomTxt1.addEventListener('click', () => {
  window.location.href = '/index.html';
});

const headerBottomTxt2 = document.createElement('p');
headerBottomTxt2.style.display = 'flex';
headerBottomTxt2.setAttribute('class', 'header-bottom-txt2');
headerBottomTxt2.textContent = 'Submit 2015';
headerBottomTxt2.addEventListener('click', () => {
  window.location.href = '/index.html';
});

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
    headerBottomUlLi.style.color = '#ec5242';
    headerBottomUlLi.style.border = '3px solid #ec5242';
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
body1Section.style.backgroundColor = '#f2f2f2';

const body1Container = document.createElement('div');
body1Container.style.display = 'flex';
body1Container.style.flexDirection = 'column';
body1Container.style.width = '100%';
body1Container.setAttribute('class', 'body1-container');

const body1ContDiv1 = document.createElement('div');
body1ContDiv1.style.display = 'flex';
body1ContDiv1.style.justifyContent = 'end';
body1ContDiv1.style.width = '100%';
body1ContDiv1.style.margin = '1rem';
body1ContDiv1.style.paddingRight = '10%';
body1ContDiv1.style.alignItems = 'center';
body1ContDiv1.style.gap = '0.6rem';
body1ContDiv1.setAttribute('class', 'body1-cont-div1');

const body1Div1Img1 = document.createElement('img');
body1Div1Img1.style.display = 'flex';
body1Div1Img1.setAttribute('class', 'body1-div1-img1');
body1Div1Img1.src = './Images/home-icon.svg';
body1Div1Img1.style.height = '10px';
body1ContDiv1.appendChild(body1Div1Img1);
body1Container.appendChild(body1ContDiv1);

const body1Div1Img2 = document.createElement('img');
body1Div1Img2.style.display = 'flex';
body1Div1Img2.setAttribute('class', 'body1-div1-img1');
body1Div1Img2.src = './Images/side_arrow.svg';
body1Div1Img2.style.height = '10px';
body1ContDiv1.appendChild(body1Div1Img2);
body1Container.appendChild(body1ContDiv1);

const body1Div1txt1 = document.createElement('p');
body1Div1txt1.style.display = 'flex';
body1Div1txt1.setAttribute('class', 'body1-txt1');
body1Div1txt1.textContent = 'መብቶች';
body1Div1txt1.style.color = '#272a31';
body1Div1txt1.style.fontFamily = 'Lato, sans-serif';
body1Div1txt1.style.fontSize = '0.8rem';
body1Div1txt1.style.fontWeight = '400';
body1ContDiv1.appendChild(body1Div1txt1);
body1Container.appendChild(body1ContDiv1);

const body1Div1Img3 = document.createElement('img');
body1Div1Img3.style.display = 'flex';
body1Div1Img3.setAttribute('class', 'body1-div1-img1');
body1Div1Img3.src = './Images/side_arrow.svg';
body1Div1Img3.style.height = '10px';
body1ContDiv1.appendChild(body1Div1Img3);
body1Container.appendChild(body1ContDiv1);

const body1Div1txt2 = document.createElement('p');
body1Div1txt2.style.display = 'flex';
body1Div1txt2.setAttribute('class', 'body1-txt1');
body1Div1txt2.textContent = 'የተጠበቁ';
body1Div1txt2.style.color = '#272a31';
body1Div1txt2.style.fontFamily = 'Lato, sans-serif';
body1Div1txt2.style.fontSize = '0.8rem';
body1Div1txt2.style.fontWeight = '400';
body1ContDiv1.appendChild(body1Div1txt2);
body1Container.appendChild(body1ContDiv1);

const body1txt2 = document.createElement('p');
body1txt2.style.display = 'flex';
body1txt2.setAttribute('class', 'body1-txt');
body1txt2.textContent = 'Creative commons global summit 2015';
body1txt2.style.color = '#ec5242';
body1txt2.style.fontFamily = 'Lato, sans-serif';
body1txt2.style.width = '60%';
body1txt2.style.marginLeft = '20%';
body1txt2.style.marginRight = '10%';
body1txt2.style.fontSize = '3.5rem';
body1txt2.style.fontWeight = '700';
body1txt2.style.fontStyle = 'bold';
body1txt2.style.textTransform = 'uppercase';
body1Container.appendChild(body1txt2);

const body1txtdiv = document.createElement('div');
body1txtdiv.style.display = 'flex';
body1txtdiv.style.justifyContent = 'center';
body1txtdiv.style.width = '100%';

const body1txt3 = document.createElement('p');
body1txt3.style.display = 'flex';
body1txt3.setAttribute('class', 'body1-txt');
body1txt3.textContent = 'A joyful celebration believing in the value of openess joyful  elieving in the value of openess joyful celebration believing in the value of openess  celebration believing in the value of openess joyful elebration believiness joyful celebration believing in the value of opeue of openess joyful celebration believing in the value of openess joyful celebraieving in the value value of openess joyful celebration believing in the value of  tion bof openess openess joyful celebration believing in the value of openess  celebration believing in the value of openess joyful ng in the value of openess joyful celebration believing in the value of openess joyful celebration believing in the elieving in the value of openess joyful celebration bel';
body1txt3.style.fontFamily = 'Lato, sans-serif';
body1txt3.style.fontSize = '12px';
body1txt3.style.width = '70%';
body1txt3.style.justifyContent = 'center';
body1txt3.style.alignItems = 'center';
body1txt3.style.marginTop = '3%';
body1txt3.style.lineHeight = '24px';
body1txt3.style.textAlign = 'center';
body1txt3.style.marginBottom = '4%';
body1txt3.style.fontWeight = '500';
body1txt3.style.fontStyle = 'normal';
body1txt3.style.backgroundColor = '#fff';
body1txt3.style.border = '1px solid #fff';
body1txt3.style.padding = '1rem';
body1txtdiv.appendChild(body1txt3);
body1Container.appendChild(body1txtdiv);

const body1txt5 = document.createElement('p');
body1txt5.style.display = 'flex';
body1txt5.style.justifyContent = 'center';
body1txt5.setAttribute('class', 'body1-txt5');
body1txt5.textContent = 'Pleas contact us per Email for any further questions about CC Global Submit 2015';
body1txt5.style.color = '#272a31';
body1txt5.style.fontFamily = 'Lato, sans-serif';
body1txt5.style.fontSize = '0.7rem';
body1txt5.style.fontStyle = 'normal';
body1Container.appendChild(body1txt5);

const body1txt4 = document.createElement('p');
body1txt4.style.display = 'flex';
body1txt4.setAttribute('class', 'body1-txt4');
body1txt4.style.justifyContent = 'center';
body1txt4.textContent = 'ccsubmit2015@cckorea.org';
body1txt4.style.color = '#272a31';
body1txt4.style.fontFamily = 'Lato, sans-serif';
body1txt4.style.marginTop = '1%';
body1txt4.style.marginBottom = '5%';
body1txt4.style.fontSize = '0.9rem';
body1txt4.style.fontWeight = '700';
body1txt4.style.fontStyle = 'bold';
body1Container.appendChild(body1txt4);

body1Section.appendChild(body1Container);
bodySection.appendChild(body1Section);

body.appendChild(bodySection);

const body2Section = document.createElement('section');
body2Section.style.display = 'flex';
body2Section.style.flexDirection = 'column';
body2Section.style.backgroundColor = '#fff';
body2Section.setAttribute('class', 'section-two');

const sectionTwoPart1 = document.createElement('div');
sectionTwoPart1.style.display = 'flex';
sectionTwoPart1.style.flexDirection = 'column';
sectionTwoPart1.setAttribute('class', 'section-two-part1');
sectionTwoPart1.style.width = '100%';
sectionTwoPart1.style.marginBottom = '2rem';
sectionTwoPart1.style.alignItems = 'center';

const body2div1 = document.createElement('div');
body2div1.style.display = 'flex';
body2div1.style.flexDirection = 'column';
body2div1.style.width = '100%';
body2div1.style.justifyContent = 'center';
body2div1.style.alignItems = 'center';
body2div1.style.gap = '0.5rem';
body2div1.setAttribute('class', 'body2-div1');

const body2Div1txt1 = document.createElement('p');
body2Div1txt1.style.display = 'flex';
body2Div1txt1.style.justifyContent = 'center';
body2Div1txt1.setAttribute('class', 'body2-txt1');
body2Div1txt1.textContent = 'Creative commons global summit 2015 Logo';
body2Div1txt1.style.color = '#272a31';
body2Div1txt1.style.fontFamily = 'Lato, sans-serif';
body2Div1txt1.style.fontSize = '1rem';
body2Div1txt1.style.marginTop = '2rem';
body2Div1txt1.style.fontWeight = '700';
body2div1.appendChild(body2Div1txt1);

const body2Hr = document.createElement('hr');
body2Hr.style.display = 'flex';
body2Hr.style.justifyContent = 'center';
body2Hr.style.width = '5%';
body2div1.appendChild(body2Hr);

const body2Div1txt2 = document.createElement('p');
body2Div1txt2.style.display = 'flex';
body2Div1txt2.style.justifyContent = 'center';
body2Div1txt2.style.alignItems = 'center';
body2Div1txt2.setAttribute('class', 'body2-txt1');
body2Div1txt2.textContent = 'Lorem inosborum quisum quisqunosboruisum quisqunm voluptatem sit. inosborum quisum quisqunosborum quisquam aliquam voluptatem sit. inosborum quisum quisqunosborum quisquam aliquam voluptatem sit.';
body2Div1txt2.style.color = '#272a31';
body2Div1txt2.style.width = '50%';
body2Div1txt2.style.fontFamily = 'Lato, sans-serif';
body2Div1txt2.style.fontSize = '1rem';
body2Div1txt2.style.marginBottom = '1rem';
body2Div1txt2.style.fontStyle = 'normal';
body2div1.appendChild(body2Div1txt2);

sectionTwoPart1.appendChild(body2div1);

const body2Div2Part2 = document.createElement('div');
body2Div2Part2.style.display = 'flex';
body2Div2Part2.style.flexDirection = 'column';
body2Div2Part2.style.width = '50%';
body2Div2Part2.style.justifyContent = 'center';
body2Div2Part2.style.gap = '0.5rem';
body2Div2Part2.setAttribute('class', 'body2-div2');

const body2Div2Part2Img1 = document.createElement('img');
body2Div2Part2Img1.style.display = 'flex';
body2Div2Part2Img1.src = './Images/ccGlobalSummit.png';
body2Div2Part2Img1.style.justifyContent = 'center';
body2Div2Part2Img1.style.width = '100%';
body2Div2Part2Img1.style.fontSize = '2rem';
body2Div2Part2Img1.style.alignItems = 'center';
body2Div2Part2Img1.setAttribute('class', 'footer2-div1-img');
body2Div2Part2.appendChild(body2Div2Part2Img1);

sectionTwoPart1.appendChild(body2Div2Part2);

body2Section.appendChild(sectionTwoPart1);

body.appendChild(body2Section);

const middleHr = document.createElement('hr');
middleHr.style.display = 'flex';
middleHr.style.justifyContent = 'center';
middleHr.style.width = '100%';
middleHr.setAttribute('class', 'middle-hr');
body2Section.appendChild(middleHr);

const sectionTwoPart2 = document.createElement('div');
sectionTwoPart2.style.display = 'flex';
sectionTwoPart2.style.flexDirection = 'column';
sectionTwoPart2.style.backgroundColor = '#fff';
sectionTwoPart2.style.marginBottom = '2rem';
sectionTwoPart2.setAttribute('class', 'section-two-part2');

const secTwoPart2Lev1 = document.createElement('div');
secTwoPart2Lev1.style.display = 'flex';
secTwoPart2Lev1.style.flexDirection = 'column';
secTwoPart2Lev1.style.width = '100%';
secTwoPart2Lev1.style.justifyContent = 'center';
secTwoPart2Lev1.style.alignItems = 'center';
secTwoPart2Lev1.style.gap = '0.5rem';
secTwoPart2Lev1.style.marginBottom = '2rem';
secTwoPart2Lev1.style.marginTop = '2rem';
secTwoPart2Lev1.setAttribute('class', 'section2-part2-level1');

const secTwoPart1Lev1Div1 = document.createElement('div');
secTwoPart1Lev1Div1.style.display = 'flex';
secTwoPart1Lev1Div1.style.flexDirection = 'column';
secTwoPart1Lev1Div1.style.margin = '1rem';
secTwoPart1Lev1Div1.style.width = '30%';
secTwoPart1Lev1Div1.style.justifyContent = 'center';
secTwoPart1Lev1Div1.style.alignItems = 'center';
secTwoPart1Lev1Div1.setAttribute('class', 'section2-part1-Level1-div1');

const secTwoPart1Lev1Div1Img1 = document.createElement('img');
secTwoPart1Lev1Div1Img1.style.display = 'flex';
secTwoPart1Lev1Div1Img1.src = './Images/concer11.png';
secTwoPart1Lev1Div1Img1.style.justifyContent = 'center';
secTwoPart1Lev1Div1Img1.style.width = '100%';
secTwoPart1Lev1Div1Img1.style.fontSize = '2rem';
secTwoPart1Lev1Div1Img1.style.alignItems = 'center';
secTwoPart1Lev1Div1Img1.setAttribute('class', 'footer2-div1-img');
secTwoPart1Lev1Div1.appendChild(secTwoPart1Lev1Div1Img1);

const secTwoPart2Lev1txt1 = document.createElement('p');
secTwoPart2Lev1txt1.style.display = 'flex';
secTwoPart2Lev1txt1.style.justifyContent = 'center';
secTwoPart2Lev1txt1.setAttribute('class', 'body2-txt1');
secTwoPart2Lev1txt1.textContent = 'See the past CC Global Summits';
secTwoPart2Lev1txt1.style.color = '#272a31';
secTwoPart2Lev1txt1.style.fontFamily = 'Lato, sans-serif';
secTwoPart2Lev1txt1.style.fontSize = '1rem';
secTwoPart2Lev1txt1.style.fontStyle = 'normal';
secTwoPart2Lev1.appendChild(secTwoPart2Lev1txt1);

const secTwoPart2Lev1Hr = document.createElement('hr');
secTwoPart2Lev1Hr.style.display = 'flex';
secTwoPart2Lev1Hr.style.justifyContent = 'center';
secTwoPart2Lev1Hr.style.width = '5%';
secTwoPart2Lev1.appendChild(secTwoPart2Lev1Hr);

const secTwoPart2Lev1txt2 = document.createElement('p');
secTwoPart2Lev1txt2.style.display = 'flex';
secTwoPart2Lev1txt2.style.justifyContent = 'center';
secTwoPart2Lev1txt2.setAttribute('class', 'body2-txt1');
secTwoPart2Lev1txt2.textContent = 'Take a look at the last two CC Global Summits which took place in Buenos and Aires and in Warsaw.';
secTwoPart2Lev1txt2.style.color = '#272a31';
secTwoPart2Lev1txt2.style.fontFamily = 'Lato, sans-serif';
secTwoPart2Lev1txt2.style.fontSize = '1rem';
secTwoPart2Lev1txt2.style.width = '75%';
secTwoPart2Lev1txt2.style.fontStyle = 'normal';
secTwoPart2Lev1.appendChild(secTwoPart2Lev1txt2);

sectionTwoPart2.appendChild(secTwoPart2Lev1);

const secTwoPart2Lev2 = document.createElement('div');
secTwoPart2Lev2.style.display = 'flex';
secTwoPart2Lev2.style.width = '100%';
secTwoPart2Lev2.style.justifyContent = 'center';
secTwoPart2Lev2.style.alignItems = 'center';
secTwoPart2Lev2.setAttribute('class', 'section2-part2-Level2');
secTwoPart2Lev2.setAttribute('id', 'section2-part2-Level2-id');

const secTwoPart2Lev2Div1 = document.createElement('div');
secTwoPart2Lev2Div1.style.display = 'flex';
secTwoPart2Lev2Div1.style.flexDirection = 'column';
secTwoPart2Lev2Div1.style.margin = '1rem';
secTwoPart2Lev2Div1.style.justifyContent = 'center';
secTwoPart2Lev2Div1.style.alignItems = 'center';
secTwoPart2Lev2Div1.setAttribute('class', 'section2-part2-Level2-div1');
secTwoPart2Lev2Div1.setAttribute('id', 'section2-part2-Level2-div1-id');

const secTwoPart2Lev2Div2Img1 = document.createElement('img');
secTwoPart2Lev2Div2Img1.style.display = 'flex';
secTwoPart2Lev2Div2Img1.src = './Images/concer11.png';
secTwoPart2Lev2Div2Img1.style.justifyContent = 'center';
secTwoPart2Lev2Div2Img1.style.width = '100%';
secTwoPart2Lev2Div2Img1.style.fontSize = '2rem';
secTwoPart2Lev2Div2Img1.style.alignItems = 'center';
secTwoPart2Lev2Div2Img1.setAttribute('class', 'footer2-div1-img');
secTwoPart2Lev2Div1.appendChild(secTwoPart2Lev2Div2Img1);

const secTwoPart2Lev2Div2 = document.createElement('div');
secTwoPart2Lev2Div2.style.display = 'flex';
secTwoPart2Lev2Div2.style.flexDirection = 'column';
secTwoPart2Lev2Div2.style.margin = '1rem';
secTwoPart2Lev2Div2.style.justifyContent = 'center';
secTwoPart2Lev2Div2.style.alignItems = 'center';
secTwoPart2Lev2Div2.setAttribute('class', 'section2-part2-Level2-div2');
secTwoPart2Lev2Div2.setAttribute('id', 'section2-part2-Level2-div2-id');

const secTwoPart2Lev2Div2Img2 = document.createElement('img');
secTwoPart2Lev2Div2Img2.style.display = 'flex';
secTwoPart2Lev2Div2Img2.src = './Images/concert22.png';
secTwoPart2Lev2Div2Img2.style.justifyContent = 'center';
secTwoPart2Lev2Div2Img2.style.width = '100%';
secTwoPart2Lev2Div2Img2.style.fontSize = '2rem';
secTwoPart2Lev2Div2Img2.style.alignItems = 'center';
secTwoPart2Lev2Div2Img2.setAttribute('class', 'footer2-div1-img');
secTwoPart2Lev2Div2.appendChild(secTwoPart2Lev2Div2Img2);

secTwoPart2Lev2.appendChild(secTwoPart2Lev2Div1);
secTwoPart2Lev2.appendChild(secTwoPart2Lev2Div2);

sectionTwoPart2.appendChild(secTwoPart2Lev2);

body2Section.appendChild(sectionTwoPart2);

body.appendChild(body2Section);

const footerSection = document.createElement('section');
footerSection.style.display = 'flex';
footerSection.style.flexDirection = 'column';
footerSection.setAttribute('class', 'section-footer');
footerSection.setAttribute('id', 'section-footer-id');
footerSection.style.height = '20%';

const footerSectionPart1 = document.createElement('div');
footerSectionPart1.style.flexDirection = 'column';
footerSectionPart1.setAttribute('class', 'section-footer-part1');
footerSectionPart1.setAttribute('id', 'section-footer-part1-about-id');
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
footer1Div2.style.flexWrap = 'wrap';
footer1Div2.style.justifyContent = 'center';
footer1Div2.style.alignItems = 'center';
footer1Div2.style.margin = '2rem';
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
    // body1txt2.style.fontFamily = 'COCOGOOSE, sans-serif';
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

const footerSectionPart2 = document.createElement('footer');
footerSectionPart2.style.display = 'flex';
footerSectionPart2.style.width = '100%';
footerSectionPart2.style.marginTop = '2rem';
footerSectionPart2.style.marginBottom = '2rem';
footerSectionPart2.style.justifyContent = 'center';
footerSectionPart2.style.alignItems = 'center';
footerSectionPart2.style.gap = '2rem';
footerSectionPart2.style.marginBottom = '3rem';
footerSectionPart2.style.marginTop = '3rem';
footerSectionPart2.style.minWidth = '500px';
footerSectionPart2.setAttribute('class', 'footer-section-part2');
footerSectionPart2.setAttribute('id', 'footer-section-part2-about-id');

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
// footer2Div1Txt.style.color = '#272a31';
footer2Div1Txt.style.fontSize = '1.5rem';
footer2Div1Txt.style.fontStyle = 'bold';
footer2Div1Txt.style.fontWeight = '700';
footer2Div1Txt.style.fontFamily = 'Lato, sans-serif';
footer2Div1Txt.textContent = 'Creative commons Korea';
footer2Div1Txt.setAttribute('class', 'footer2-div1-txt');
footer2Div1Txt.setAttribute('id', 'footer2-div1-txt-id');

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
footer2Div2Txt1.setAttribute('id', 'footer2-div2-txt1-id');

const footer2Div2Txt2 = document.createElement('p');
footer2Div2Txt2.style.display = 'flex';
footer2Div2Txt2.textContent = 'የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው። 2015 የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው። 2015 የፈጠራ የጋራ ኮሪያ። አንዳንድ መብቶች የተጠበቁ ናቸው።';
footer2Div2Txt2.style.width = '100%';
footer2Div2Txt2.style.justifyContent = 'center';
footer2Div2Txt2.style.alignItems = 'center';
footer2Div2Txt2.style.fontSize = '1rem';
footer2Div2Txt2.setAttribute('class', 'footer2-div2-txt2');
footer2Div2Txt2.setAttribute('id', 'footer2-div2-txt2-id');

footer2Div1.appendChild(footer2Div1Img);
footer2Div1.appendChild(footer2Div1Txt);
footer2Div2.appendChild(footer2Div2Txt1);
footer2Div2.appendChild(footer2Div2Txt2);

footerSectionPart2.appendChild(footer2Div1);
footerSectionPart2.appendChild(footer2Div2);

footerSection.appendChild(footerSectionPart2);
body.appendChild(footerSection);