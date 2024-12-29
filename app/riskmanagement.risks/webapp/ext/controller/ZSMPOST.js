sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        ZSMPOST: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
