sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/risks/test/integration/FirstJourney',
		'riskmanagement/risks/test/integration/pages/RiskList',
		'riskmanagement/risks/test/integration/pages/RiskObjectPage'
    ],
    function(JourneyRunner, opaJourney, RiskList, RiskObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRiskList: RiskList,
					onTheRiskObjectPage: RiskObjectPage
                }
            },
            opaJourney.run
        );
    }
);