$('.btn').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  	// console.log($this.next());
  	// console.log($this.parent().parent());

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.next().addClass('show');
        $this.next().slideDown(350);
    }
});