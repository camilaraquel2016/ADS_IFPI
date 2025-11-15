export class Monitor {
    locked = false;
    waiting = [];
    async lock() {
        if (!this.locked) {
            this.locked = true;
            return;
        }
        return new Promise(resolve => {
            this.waiting.push(resolve);
        });
    }
    unlock() {
        if (this.waiting.length > 0) {
            const next = this.waiting.shift();
            if (next)
                next();
        }
        else {
            this.locked = false;
        }
    }
}
//# sourceMappingURL=monitor.js.map