import { authState } from "@/const";

class Store {
    #key;
    user = null

    constructor(key = null) {
        this.#key = key;
        this.user = null;
    }

    isNotBrowser() {
        if (typeof window === 'undefined' || !window.localStorage) throw Error('localstorageを使用できません');
    }

    isCheckKey(key) {
        this.isNotBrowser();
        const isExistsKeyInStore = localStorage.getItem(key);
        if (!isExistsKeyInStore) {
            const initialState = {
                state: authState.loggedOut,
                expired: new Date().toISOString()
            }
            this.save(initialState, key);
            console.log("ストアを作成しました")
        }
        return true   
    }

    isCheckToday(date, key = this.#key) {
        const today = new Date();
        today.setHours(0,0,0,0);

        const userStateDate = new Date(date);
        userStateDate.setHours(0,0,0,0);

        if ((today.getTime() === userStateDate.getTime())) return 

        console.warn("ユーザーのログイン状態が古いままです");
        const logout = {
            state: authState.loggedOut,
            expired: new Date().toISOString()
        }
        this.save(logout, key);
        throw new Error("サインアップ又はサインインが必要です")
    }

    save(body, key = this.#key) {
    
        localStorage.setItem(key, JSON.stringify(body));

        this.user = body;
    }

    get(key = this.#key) {
        this.isCheckKey(key);

        if (this.user) return this.user;
        
        const rawItem = localStorage.getItem(key);
        const item = JSON.parse(rawItem);

        if (!item) throw new Error("中身が空です")
        this.isCheckToday(item.expired)

        this.user = item;
        return item;
    }

    // COMMENT: ほぼ使用しない想定
    delete(key = this.#key) {
        this.isCheckKey(key);

        localStorage.removeItem(key);
        this.user = null;
    }
}

export default Store