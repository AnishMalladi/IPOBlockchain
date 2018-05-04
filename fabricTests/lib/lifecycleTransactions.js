/*
    FUNCTION DEFINITIONS
*/

/**
* A transaction processor function description
* @param {org.ipoblockchain.Transactions} engagementLetter A human description of the parameter
* @transaction
*/
function onEngagementLetter(engagementLetter) {

    // get assetRegistry for asset engagementLetter
    const registry = await getAssetRegistry('org.ipoblockchain.Assets.engagementLetter');
    let existCheck = registry.exists(engagementLetter.letterID);
    if (existCheck == false){
        console.log('engagement letter is not found...');
        return; 
    } else {
        console.log('engagement letter found!');
    }
    
    let currentOwner = engagementLetter.owner;
    let isEmployee = currentOwner instanceof Employee;
    
/*  currentOwnerType = "notCompany";
    if (checkType == true) {
        let currentOwnerType = "Company";
    } */

    if (engagementLetter.el.letterHash != engagementLetter.newHash){
        // delete sigs
        engagementLetter.el.companySig = null;
        engagementLetter.el.underwriterSig = null;
    }

    if (isEmployee==true){
        engagementLetter.el.companySig = engagementLetter.signature;
    } else {
        engagementLetter.el.underwriterSig = engagementLetter.signature;
    }

    // engagementLetter.el.lastUpdate = 
}