














(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource; 
    var destinationType;
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        var myApp = new Framework7({

            // Default title for modals
            modalTitle: 'My App',		
            material: true,
            // If it is webapp, we can enable hash navigation:
            pushState: true,

            // Hide and show indicator during ajax requests
            onAjaxStart: function (xhr) {
                myApp.showIndicator();
            },
            onAjaxComplete: function (xhr) {
                myApp.hideIndicator();
            }
        });
        var $$ = Dom7;

        var mainView = myApp.addView('.view-main', {
            domCache: true,

        });

        var anotherView = myApp.addView('.another-view', {
            domCache: true,
        });
        $$('.result').on('click', function () {
            mainView.router.load({ pageName: 'result' });
         });
        
        $$('.declare').on('click', function () {
            ///////////////////////get form data////////////////////////

            mainView.router.load({ pageName: 'regions' });

        });
        $$('.submit').on('click', function () {
            ///////////////////////get form data////////////////////////

            mainView.router.load({ pageName: 'submit' });

        });
         document.getElementById("capturePhoto").onclick = function () {
                navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,

                destinationType: destinationType.DATA_URL
            }); 
        }

    };
    function onPhotoDataSuccess(imageData) {
       
        var smallImage = document.getElementById('smallImage');
       
        smallImage.style.display = 'block';
 
        smallImage.src = "data:image/jpeg;base64," + imageData;
      
    }



    function onPhotoURISuccess(imageURI) {
        
        var largeImage = document.getElementById('largeImage');
       
        largeImage.style.display = 'block';
    
        largeImage.src = imageURI;
      
    }  

    function getPhoto(source) {
        
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
         
                destinationType: destinationType.FILE_URI,
       
        sourceType: source });
   
}

function onFail(message) {
  
    alert('Failed because: ' + message);
   
}


})();