({
	doInit : function(component, event, helper) {
		// Prepare the action to load account record
        var action = component.get("c.getAccounts");
        //parameters
        action.setParams({'limitResults': component.get('v.limitResults')});
        console.log(action.getParams());
        // Configure response handler
        action.setCallback(this, function(response) {
            if(!component.isValid()) return;
            var state = response.getState();
            if(state === "SUCCESS") {
                var accountsList = response.getReturnValue();
            	component.set("v.accountsList", accountsList);
                var opts = [];
                
                
                for (var i = 0; i < accountsList.length; i++) {
                	opts.push({label: accountsList[i].Name, value: accountsList[i].Id});
                }
                component.find('accListCmp').set("v.options", opts);
                
                //select the first account found (if any)
                component.set('v.selectedAccountId', (accountsList && accountsList.length > 0 )?accountsList[0].Id:null);
                
                //triggers the contact list for the first selected account
                helper.getContacts(component);
            } else {
            	console.log('Problem getting account, response state: ' + state, response.getError());
            }
        });
        $A.enqueueAction(action);
	},
    
    selectAccount : function(component, event, helper) {
        helper.getContacts(component);
    },
})