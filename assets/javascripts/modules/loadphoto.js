$(document).ready(function(){
  //You might want to do if check to see if localstorage set for theImage here
  var img = new Image();
  img.src = localStorage.theImage;

  $('.photo-upload').html(img);

  $("body").on("change",".photo-choose-file",function(){
      //Equivalent of getElementById
      var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
      var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

      var reader = new FileReader();
      reader.onload = function(e) {
           // Create a new image.
           var img = new Image();

           img.src = reader.result;
           localStorage.theImage = reader.result; //stores the image to localStorage
           $(".photo-upload").html(img);
       }
       reader.readAsDataURL(file);//attempts to read the file in question.
       window.location.href = '/prototype_170331/uploadphoto/';

    });
});
