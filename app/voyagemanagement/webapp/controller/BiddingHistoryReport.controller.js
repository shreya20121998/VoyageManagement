sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.ingenx.nauti.voyagemanagement.controller.BiddingHistoryReport", {
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
        onSaveAs:function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteSaveAsVariant");
        },
         });
    }
  );
  