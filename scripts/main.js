
$(document).ready(function() {

     /*<----- Main ----->*/

  var model = {
      currentCat: null,
      cats: [
      {
        clicks: 0,
        name: 'cat1',
        img: 'images/cat1.jpg'
      },
      {
        clicks: 0,
        name: 'cat2',
        img: 'images/cat2.jpg'
      },
      {
        clicks: 0,
        name: 'cat3',
        img: 'images/cat3.jpg'
      },
      {
        clicks: 0,
        name: 'cat4',
        img: 'images/cat4.jpg'
      },
      {
        clicks: 0,
        name: 'cat5',
        img: 'images/cat5.jpg'
      }

     ]

  };

  /*<----- Organization ----->*/

  var organization = {

   getCatList: function() {
    return  model.cats;
   },
   setCurrentCat: function(cat) {
     model.currentCat = cat;
   },
   getCurrentCat: function() {
     return model.currentCat;
   },
   addClicks: function() {
     model.currentCat.clicks++
   },
   getClicks: function() {
     return model.currentCat.clicks;
   },
   setClicks: function(clicks) {
     model.currentCat.clicks = clicks;
   },
   setName: function(name) {
     model.currentCat.name = name;
   }

  };

  /*<----- View ----->*/

  var catList = organization.getCatList();

  // Add cat names list on top of the page.

  for(var i = 0; i < catList.length; i++) {
     $('#cat-list').append('<li>'+catList[i].name+'</li>');
  }

  // Add the first cat details before any click.

  organization.setCurrentCat(catList[0]);
  var currentCat = organization.getCurrentCat();
  $('#name').append(currentCat.name);
  $('#clicks').append(currentCat.clicks);
  $('#cat-image').attr('src',currentCat.img);
  $('#input-name').val(currentCat.name);
  $('#input-clicks').val(currentCat.clicks);

  // Add current cat details when click a cat name on top.

  $('#cat-list li').click(function(e) {
    for(var i = 0; i < catList.length; i++) {
     if(catList[i].name === e.target.innerHTML) {
       organization.setCurrentCat(catList[i]);
     }
   }
    var getCat = organization.getCurrentCat();

    $('#name').html('');
    $('#clicks').html('');
    $('#clicks').append(getCat.clicks);
    $('#cat-image').attr('src','');

    $('#name').append(getCat.name);
    $('#cat-image').attr('src',getCat.img);


  });

    //Add and Increase clicks for each cat.

    $('#cat-image').click(function() {

    organization.addClicks();

    $('#clicks').html('');

    var getClicks = organization.getClicks();
    $('#clicks').append(getClicks);
    $('#input-clicks').val(getClicks);

    });

    // Open the form area for changes.

    $('#admin-button').click(function() {
     $('#admin-form').removeClass('hidden');
    });

    //Close the form area for changes.

    $('#cancel-button').click(function() {
     $('#admin-form').addClass('hidden');
    });

    //Submit changes in cat's properties


    $('#admin-form').submit(function(e) {

      var name = $('#input-name').val();
      var clicks = $('#input-clicks').val();
      var getCat = organization.getCurrentCat();

      organization.setName(name);
      organization.setClicks(clicks);


      $('#name').html('');
      $('#name').append(getCat.name);
      $('#clicks').html('');
      $('#clicks').append(getCat.clicks);

      $('#admin-form').addClass('hidden');

      e.preventDefault();

    });


  //When submit the form get values and apply changes.


  $('#cat-list li').click(function(e) {

    var getCat = organization.getCurrentCat();

    $('#input-name').val('');
    $('#input-clicks').val('');
    $('#input-name').val(getCat.name);
    $('#input-clicks').val(getCat.clicks);

  });

});//End ready
