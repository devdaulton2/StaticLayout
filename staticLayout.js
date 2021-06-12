/*window.scroll(function () {
    if ($(window).scrollTop() >= 10) {
    $('.topNav').css('background','#10141b');
    } else {
    $('.topNav').css('background','transparent');
    }
    }); */

window.onscroll = () => {
    const nav =
    document.querySelector('.tablink');
    if(this.scroll <= 10) nav.className = '';
    } else {
    nav.className = 'scroll';
};
