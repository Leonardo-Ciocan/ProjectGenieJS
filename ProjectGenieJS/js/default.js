// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
			   
			    var helper = new RuntimeComponent1.CoreAppHelper();
			    helper.extendViewIntoTitleBar(true);

			    var titleBar = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;
			    titleBar.buttonForegroundColor = Windows.UI.Colors.gray;

			    titleBar.buttonBackgroundColor = new Windows.UI.ColorHelper.fromArgb(0,0,0,255);
			    titleBar.backgroundColor = new Windows.UI.ColorHelper.fromArgb(10, 255, 255, 255);

			    startUI(false);
			    var virtualKeyboard = Windows.UI.ViewManagement.InputPane.getForCurrentView();
			    virtualKeyboard.addEventListener("showing", function (event) {
			        event.ensuredFocusedElementInView = false; // Prevent visual viewport resize.
			    }, false);
			    window.addEventListener("resize", function () {
			        console.log(window.innerWidth <= 520);
			        if (window.innerWidth <= 520) {
			            startUI(true);
			        }
			        else {
			            startUI(false);
			        }
			        
			    });


			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
			args.setPromise(WinJS.UI.processAll());
		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();
