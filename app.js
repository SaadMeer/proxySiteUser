const toggleBox = document.querySelector('.deskyop-arrow');


toggleBox.addEventListener('click', () => {
  const sidebarMain = document.querySelector('.sidebar-main-container');
  const sidebarSpan = document.querySelector('.sidebar-ul');
  const logoname = document.querySelector('.logoname');
  const logBtn = document.querySelector('.logout-btn');

  const dash1 = document.querySelector('.dash-li-1');
  const dash2 = document.querySelector('.dash-li-2');
  const dash3 = document.querySelector('.dash-li-3');
  const dash4 = document.querySelector('.dash-li-4');
  const dash5 = document.querySelector('.dash-li-5');
  const dash6 = document.querySelector('.dash-li-6');
  

  const bottomUserName = document.querySelector('.bottom-user-name');
  // const logoname = document.querySelector('.logoname');


  const leftarrowMenu = document.querySelectorAll('.leftarrow-menu');
  const sidebarli = document.querySelectorAll('.sidebar-li');
  const spans = sidebarSpan.getElementsByTagName("span");


  document.querySelector('.right-content-section').classList.toggle('right-content-section-flex')
  sidebarMain.classList.toggle("hide-sidebar");
  toggleBox.classList.toggle("toggle-box-container-show");
  logoname.classList.toggle("logonamehide");
  document.querySelector('.main-logo').style.marginLeft = '17px';
  logBtn.classList.toggle('logout-btn-none');
  bottomUserName.classList.toggle("bottom-user-name-hide");

  dash1.classList.toggle("dash-li-name-show-1");
  dash2.classList.toggle("dash-li-name-show-2");
  dash3.classList.toggle("dash-li-name-show-3");
  dash4.classList.toggle("dash-li-name-show-4");
  dash5.classList.toggle("dash-li-name-show-5");
  dash6.classList.toggle("dash-li-name-show-6");


  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.toggle("dislpay-none");

  }
  for (let i = 0; i < sidebarli.length; i++) {
    sidebarli[i].classList.toggle("sidebar-icon-center");
  }
  for (let i = 0; i < sidebarli.length; i++) {
    leftarrowMenu[i].classList.toggle("leftarrow-menu-hide");
  }

})


function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar-main-container');
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
}

// CheckOut Select
const checkoutSelects = document.querySelectorAll('.checkoutSelect');
let selectedCheckout = null;

checkoutSelects.forEach((select) => {
  select.addEventListener('click', () => {
    if (selectedCheckout) {
      selectedCheckout.classList.remove('selected');
    }
    select.classList.add('selected');
    selectedCheckout = select;
  });
});

$(".progress-1").each(function () {

  var $bar = $(this).find(".bar-1");
  var $val = $(this).find("span");
  var perc = parseInt($val.text(), 10);

  $({ p: 0 }).animate({ p: perc }, {
    duration: 3000,
    easing: "swing",
    step: function (p) {
      $bar.css({
        transform: "rotate(" + (50 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p | 0);
    }
  });
});


