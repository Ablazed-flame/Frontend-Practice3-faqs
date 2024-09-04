const faq = document.querySelectorAll(".faq");
faq.forEach((faqele)=>{
  const svgs = faqele.querySelectorAll("svg");
  svgs.forEach((svg)=>{
    svg.addEventListener("click",()=>{
        const desc = faqele.querySelector(".desc");
        desc.classList.toggle("inactive");
        svgs[0].classList.toggle("inactive");
        svgs[1].classList.toggle("inactive");
    });
  });
});