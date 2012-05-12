$(function() {
$.getJSON('posts.json',function(r){ 
  $(r).each(function(k,post){
    $('body').append(post.body);
  })
});
});
