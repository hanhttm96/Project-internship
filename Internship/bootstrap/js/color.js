$(function(){
               $(".show-options").click(function(event){
                   event.preventDefault();
                   var configStatus = $('.config');
                   if (!configStatus.hasClass('open')) {
                        configStatus.addClass('open');
                   } else {
                        configStatus.removeClass('open');
                   }
                });
            });
      
// change color
            $('#greencolor').click(switchGreen);
            $('#pinkcolor').click(switchPink);
            $('#bluecolor').click(switchBlue);
            $('#whitecolor').click(switchWhite);

            function switchGreen(event) {
              event.preventDefault();
              $('body').attr('class', 'green');
              $('#CartCount').attr('class', 'badge-green');
              $('.header-main').attr('class', 'header-main fixed border-green');
            }

            function switchPink(event) {
              event.preventDefault();
              $('body').attr('class', 'pink');
              $('#CartCount').attr('class', 'badge-pink');
              $('.header-main').attr('class', 'header-main fixed border-pink');
            }

            function switchBlue(event) {
              event.preventDefault();
              $('body').attr('class', 'blue');
              $('#CartCount').attr('class', 'badge-blue');
              $('.header-main').attr('class', 'header-main fixed border-blue');
         
            }
            function switchWhite(event) {
              event.preventDefault();
              $('body').attr('class', 'white');
              $('#CartCount').attr('class', 'badge-black');
              $('.header-main').attr('class', 'header-main fixed border-black');
         
            }


            