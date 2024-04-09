sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("com.ingenx.nauti.voyagemanagement.controller.Home", {
            onInit: function () {
 
            },
           
            onPress1: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteCreateVoyage");
            },
            onPress2: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBiddingController");
            },
            onPress3: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteTransactionDashboard")
            },
            onPress4: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterDashboard")
            }
        });
    });