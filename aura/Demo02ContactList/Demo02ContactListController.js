({
	updateContacts : function(component, event, helper) {

        component.set('v.contactsList', []);
        component.set('v.isLoading', true);
        if(!event.getParam('accountId')) return;
        
		// Prepare the action to load account record
        var action = component.get("c.getContactsByAccount");
        //set parameters
        action.setParams({'accountId': event.getParam('accountId')});
        // Configure response handler
        action.setCallback(this, function(response) {
            component.set('v.isLoading', false);
            if(!component.isValid()) return;
            var state = response.getState();
            if(state === "SUCCESS") {
            	component.set("v.contactsList", response.getReturnValue());
                console.log(component.get("v.contactsList"));
            } else {
            	console.log('Problem getting account, response state: ' + state);
            }
        });
        $A.enqueueAction(action);
	}
})