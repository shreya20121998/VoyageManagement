sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.ingenx.nauti.voyagemanagement.controller.CaptureVoyageDetails", {
        onInit() {
        },

        onPressHome: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteHome");
        },

        onBackPress: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteTransactionDashboard");
        },
        onCaptureVoyagePlan: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCaptureVoyagePlan");
        },
        onCaptureVoyageActual: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCaptureVoyageActual");
        },

      });
    }
  );