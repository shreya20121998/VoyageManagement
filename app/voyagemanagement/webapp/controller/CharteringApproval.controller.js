
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function( BaseController) {
      "use strict";
  
      return BaseController.extend("com.ingenx.nauti.voyagemanagement.controller.CharteringApproval", {
        onInit() {
         
        },
        onBackPress: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteTransactionDashboard");
        },
        onPressHome: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteHome");
        },

        onValueHelpRequest: function (oEvent) {
          // Open the value help dialog or perform any custom logic
        }
      
      });
    }
  );