({
	handleClick: function(component, event) {
        var counter = component.get("v.counter");
        counter = counter + 1;
        component.set("v.counter", counter);
    }

})