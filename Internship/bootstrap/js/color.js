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
            $('#blackcolor').click(switchBlack);

            function switchGreen(event) {
              event.preventDefault();
              $('#CartCount').attr('class', 'badge-green');
              $('.header-main').attr('class', 'header-main fixed border-green');
            }

            function switchPink(event) {
              event.preventDefault();
              $('#CartCount').attr('class', 'badge-pink');
              $('.header-main').attr('class', 'header-main fixed border-pink');
           
            }

            function switchBlue(event) {
              event.preventDefault();
              $('#CartCount').attr('class', 'badge-blue');
              $('.header-main').attr('class', 'header-main fixed border-blue');
            }
            function switchBlack(event) {
              event.preventDefault();
              $('#CartCount').attr('class', 'badge-black');
              $('.header-main').attr('class', 'header-main fixed border-black');
           
         
            }


            