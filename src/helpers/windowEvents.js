
const app = (function() {
	const subPub = Object.seal({
		key: 0,
		subscribers: {},
		subscribe: function(subscriber) {
			this.subscribers[this.key] = subscriber;
	
			return this.key++;
		},
		publish: function(args) {
			for (var sub in this.subscribers) {
				try {
					this.subscribers[sub](args);
				} catch(ignore) {}
			}
		},
		unsubscribe: function(key) {
			delete this.subscribers[key];
		},
	});
	const app = {};
	app.resizeEvent = Object.create(subPub);
	
	window.onload = () => {
		window.addEventListener('resize', evt => {
			app.resizeEvent.publish(evt);
		});
	};
	return app;
})();

export {
	app
};