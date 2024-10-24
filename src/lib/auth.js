import { authState, LocalStorageKeys } from "@/const";
import { applyActionCode, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut as Loggout } from "@firebase/auth";

/**
 * Verify Email via firebase authentication
 * @param {string} oobCode メールアドレス認証コード
 * @throws { error } error.code 例外時のメッセージ
 */
export async function emailVerify(oobCode) {
    const auth = getAuth();
    await applyActionCode(auth, oobCode)
    return true
}

/**
 * Create user with email and password, and then send verify email via Firebase auth
 * @param {string} email 
 * @param {string} password 
 * @returns {boolean}
 */
export async function signup(email, password, store) {
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);

    const body = {
        state: authState.unVerified,
        expired: new Date().toISOString()
    }
    store.save(body, LocalStorageKeys.auth);

    return true
}

/**
 * Signining with email and password, if failed, resend verification email and signout
 * @param {string} email 
 * @param {string} password 
 * @param {object} store 
 * @returns {boolean}
 */
export async function signin(email, password, store) {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if (!userCredential.user.emailVerified) {
        // COMMENT: 再度メール認証を送り、サインアウトする
        await sendEmailVerification(userCredential.user);
        await signOut()

        return false
    }

    // COMMENT: storeの状態をsigninにする
    const body = {
        state: authState.loggedIn,
        expired: new Date().toISOString()
    }

export async function verifyEmail(oobCode) {
    const auth = getAuth(app);
    await applyActionCode(auth, oobCode);
    return true
}

export function isSignedIn() {
    
    const auth = getAuth(app)
    return auth.currentUser && auth.currentUser.emailVerified
}

export async function reloadAuth() {
    const auth = getAuth(app);
    await auth.currentUser.reload();
}

export async function signOut() {
    const auth = getAuth(app);
    await Loggout(auth);
}