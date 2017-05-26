({
	getContacts : function(component) {
		var evt = $A.get("e.c:Demo02ContactListUpdateEvt");
        evt.setParams({'accountId': component.get('v.selectedAccountId')});
        evt.fire();
	}
})