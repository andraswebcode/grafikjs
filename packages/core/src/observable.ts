class Observable {
	private _listeners: any = {};

	public on(eventName, listener) {
		if (typeof eventName === 'object') {
			for (let key in eventName) {
				this.on(key, eventName[key]);
			}
		} else if (typeof eventName === 'string' && eventName.indexOf(' ') !== -1) {
			eventName.split(' ').forEach((en) => this.on(en, listener));
		} else {
			if (!this._listeners[eventName]) {
				this._listeners[eventName] = [];
			}
			if (this._listeners[eventName].indexOf(listener) === -1) {
				this._listeners[eventName].push(listener);
			}
		}

		return this;
	}

	public once() {
		return this;
	}

	public off(eventName, listener) {
		if (typeof eventName === 'object') {
			for (let key in eventName) {
				this.off(key, eventName[key]);
			}
		} else {
			const listeners: Function[] = this._listeners[eventName];
			if (listeners) {
				const index = listeners.indexOf(listener);
				if (index !== -1) {
					listeners.splice(index, 1);
				}
			}
		}

		return this;
	}

	public trigger(eventName: string, ...args: any[]) {
		const listeners: Function[] = this._listeners[eventName];
		const allListeners: Function[] = this._listeners.all;

		if (listeners) {
			for (let i = 0; i < listeners.length; i++) {
				listeners[i].call(this, ...args, eventName);
			}
		}

		if (allListeners) {
			for (let i = 0; i < allListeners.length; i++) {
				allListeners[i].call(this, ...args, eventName);
			}
		}

		return this;
	}
}

export { Observable };
