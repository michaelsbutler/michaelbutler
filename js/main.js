// Minimal JS for smooth scrolling and simple behavior
document.addEventListener("DOMContentLoaded", function() {
  // smooth anchor scroll for same-page anchors (if used)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
