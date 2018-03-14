
$(document).ready(function() {


      var cats = ['cat1','cat2','cat3','cat4','cat5'];


      $.each(cats, function(index,cat) {
        var clicks = 0;

        $('.first-section ul').append(`<li class='${cat}'>${cat}</li>`);


        $(`li.${cat}`).click(function() {
           $('.first-section div').remove()
           $('.first-section').append(`<div class =${cat}><span class='name'>${cat}</span><span>clicks</span><span class='counter'></span>
                                      <image src='images/${cat}.jpg' class=${cat}></div>`);
           $(`.${cat} .counter`).append(`<span>${clicks}</span>`);

          $(`img.${cat}`).click(function() {
             $(`div.${cat} .counter span`).remove();
             clicks++;
             $(`.${cat} .counter`).append(`<span>${clicks}</span>`);
          });

        });


       });

});//End ready
