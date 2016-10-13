(function(){
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource ;
	var destinationType;

	function oneDeviceReady(){
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;


		document.getElementById("capturePhoto").onclick = function(){
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50, 
				destinationType : destinationType.DATA_URL
			});
		};
		function onPhotoDataSucess(imageData){
			var smallImage = document.getElementById('smallImage');

			smallImage.style.display = 'block';

			smallImage.src= "" + imageData;
		}
		function onFail(message){
			alert('Failed because: ' + message);
		}
	}

})();

