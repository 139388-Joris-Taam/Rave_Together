class RateLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.requests = new Map();
    }

    isAllowed(ip) {
        const currentTime = Date.now();
        const ipData = this.requests.get(ip);

        if (!ipData) {
            this.requests.set(ip, { timestamp: currentTime, count: 1 });
            return true;
        }

        const elapsedTime = currentTime - ipData.timestamp;

        if (elapsedTime > this.interval) {
            this.requests.set(ip, { timestamp: currentTime, count: 1 });
            return true;
        }

        if (ipData.count < this.limit) {
            ipData.count++;
            this.requests.set(ip, ipData);
            return true;
        }

        return false;
    }
}

module.exports = RateLimiter;
