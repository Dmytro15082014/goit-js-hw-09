import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},a="feedback-form-state",s=document.querySelector(".feedback-form"),o=s.elements.email,l=s.elements.message;s.addEventListener("input",n);s.addEventListener("submit",m);i();function n(e){e.target.name==="email"?(t.email=e.target.value,localStorage.setItem(a,JSON.stringify(t.email))):(t.message=e.target.value,localStorage.setItem(a,JSON.stringify(t.message))),localStorage.setItem(a,JSON.stringify(t))}function m(e){e.preventDefault(),localStorage.removeItem(a),s.reset()}function i(){const e=JSON.parse(localStorage.getItem(a));console.log(e),e&&(o.value=e.email,l.value=e.message)}
//# sourceMappingURL=2-form.js.map
