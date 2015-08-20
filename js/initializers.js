$(function () {
  $('.dropdown').dropdown({
    transition: 'fade down',
    position: 'bottom center',
    action: 'hide',
    allowCategorySelection: true,
    on: 'hover',
    delay: {
      show: 200,
      hide: 300
    }
  })
});
