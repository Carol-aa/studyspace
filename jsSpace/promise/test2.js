
// demo2
class myPromise {
    constructor(exectuor) {
        this.state = "pending"
        this.value = null
        this.reason = null
        this.callbacks = [];
        // this.onFulfilled = null;
        // this.onRejected = null;//加入 pending 状态下的判断
        const resolve = (value) => {
            if (this.state !== "pending") return
            this.value = value;
            this.state = "fulfilled"
            // this.onFulfilled(value)
            this.callbacks.forEach(callback => callback.fulfilled())
        }
        const rejected = (reason) => {
            if (this.state !== "pending") return
            this.state = "rejected"
            this.reason = reason
            // this.onRejected(reason)
            this.callbacks.forEach(callback => callback.rejected())
        }
        try {
            exectuor(resolve, rejected)
        }
        catch (err) {
            reject(err)
        }
    }
    then (onFulfilled, onRejected) {

        if (typeof onFulfilled !== "function") onFulfilled = value => value
        if (typeof onRejected !== "function") onRejected = reason => { throw reason }

        let promise = new myPromise((resolve, reject) => {
            if (this.state === "fulfilled") {
                setTimeout(() => {
                    try {
                        // resolve(onFulfilled(this.value))
                        this.resolvePromise(promise, onFulfilled(this.value), resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
            if (this.state === "rejected") {
                setTimeout(() => {
                    try {
                        // resolve(onRejected(this.reason))
                        this.resolvePromise(promise, onRejected(this.reason), resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
            if (this.state === "pending") {
                // this.onFulfilled = onFulfilled
                // this.onRejected = onRejected//到rejected中执行
                this.callbacks.push({
                    fulfilled: () => {
                        setTimeout(() => {
                            try {
                                // resolve(onFulfilled(this.value))
                                this.resolvePromise(promise, onFulfilled(this.value), resolve, reject)
                            } catch (err) {
                                reject(err)
                            }
                        })
                    },
                    rejected: () => {
                        setTimeout(() => {
                            try {
                                // resolve(onRejected(this.reason))
                                this.resolvePromise(promise, onRejected(this.reason), resolve, reject)
                            } catch (err) {
                                reject(err)
                            }
                        })
                    }
                })
            }
        })
        return promise;
    }
    resolvePromise (promise, result, resolve, reject) {
        if (promise === result) reject(new TypeError("circle!!!!"))
        if (result && typeof result === "object" || typeof result === "function") {
            let called;
            try {
                let then = result.then
                if (typeof then === "function") {
                    then.call(result, value => {
                        if (called) return;
                        called = true
                        this.resolvePromise(promise, value, resolve, reject)
                    }, reason => {
                        if (called) return;
                        called = true;
                        reject(reason)
                    })
                } else {
                    if (called) return;
                    called = true
                    reject(reason)
                }

            } catch (err) {
                if (called) return
                called = true
                reject(err)
            }
        }
        else {
            resolve(result)
        }
    }
}

new Promise((resolve, reject) => {
    resolve()
}).then().then(() => { console.log(2) })
console.log(1)