// bus.js
class Bus {
    EVENT_NEW_ARTICLE = "new-article";
    EVENT_SEARCH = "search";
    EVENT_CHANGE_SEARCH = "change-search";

    constructor() {
        this.list = {};  // 收集订阅
    }
    // 订阅
    $on(name, fn) {
        this.list[name] = this.list[name] || [];
        this.list[name].push(fn);
    }
    // 发布
    $emit(name, data) {
        if (this.list[name]) {
            this.list[name].forEach((fn) => {	fn(data);   });
        }
    }
    // 取消订阅
    $off(name) {
        if (this.list[name]) {
            delete this.list[name];
        }
    }
}
export default new Bus;
