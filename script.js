var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

/*video*/
var urls = [
  'https://www.youtube.com/embed/5mJlMfThQiA',
  'https://www.youtube.com/embed/AlhEt7FYkIM',
  'https://www.youtube.com/embed/uPQ7bsIW3gc',
  'https://www.youtube.com/embed/9M2zMz0JJbM' 

];

function changeIframe(index){
  document.getElementById("video").setAttribute('src', urls[index]);
}
