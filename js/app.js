class PageScrolling {
  sections = document.querySelectorAll("section");
  links = document.querySelectorAll(".links");
  navbarHeight = document.querySelector(".navbar__menu").offsetHeight;
  sectionNumber;
  setSectionsValue() {
    document.getElementById("sec1").innerHTML = "SECTION1";

    document.getElementById("sec2").innerHTML = "SECTION2";

    document.getElementById("sec3").innerHTML = "SECTION3";

    document.getElementById("sec4").innerHTML = "SECTION4";
  }
  rmClassByNameFromNodelist(className, nodeList) {
    nodeList.forEach((element) => element.classList.remove(`${className}`));
  }
  addClassByNameToElement(className, element) {
    element.classList.add(`${className}`);
  }
  detectSectionNumber() {
    this.sectionNumber = this.sections.length - 1;
    while (
      window.scrollY + this.navbarHeight <
        this.sections[this.sectionNumber].offsetTop &&
      this.sectionNumber
    ) {
      this.sectionNumber -= 1;
    }
    //     detectSectionNumber()
    //     {
    //   this.sectionNumber= 0 ;
    //   while(this.sectionNumber<this.sections.length && window.scrollY + this.navbarHeight > this.sections[this.sectionNumber].offsetTop +this.sections[this.sectionNumber].offsetHeight){
    //     this.sectionNumber+=1;
    //         }
    //     }
  }
  activeLink() {
    this.rmClassByNameFromNodelist("active", this.links);
    this.addClassByNameToElement("active", this.links[this.sectionNumber]);
  }
  layerChange() {
    this.rmClassByNameFromNodelist("layer", this.sections);

    this.addClassByNameToElement("layer", this.sections[this.sectionNumber]);
  }
  scroll = new SmoothScroll('.navbar__menu a[href*="#"]', {
    speed: 1000,
  });
  
}

let pageScrolling = new PageScrolling();
pageScrolling.setSectionsValue();

function scroll() {
  pageScrolling.detectSectionNumber();
  pageScrolling.activeLink();
  pageScrolling.layerChange();
}

scroll();
window.addEventListener("scroll", scroll);


btn = document.querySelector(".fa-bars");
nav = document.querySelector("#navbar__list");
this.btn.addEventListener("click", () => {
  this.nav.classList.toggle("open");
});
