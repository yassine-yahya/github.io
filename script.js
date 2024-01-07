
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('scrollToTopBtn').addEventListener('click', function () {
      scrollToTop();
  });

  document.getElementById('port').addEventListener('click', function () {
      scrollToProjects();
  });
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

function scrollToProjects() {
  var projectsSection = document.getElementById('project');
  projectsSection.scrollIntoView({
      behavior: 'smooth'
  });
}




