import { app } from "@/firebase";
import {
  applyActionCode,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut as Loggout,
} from "@firebase/auth";

/**
 * Verify Email via firebase authentication
 * @param {string} oobCode メールアドレス認証コード
 * @throws { error } error.code 例外時のメッセージ
 */
export async function emailVerify(oobCode) {
  const auth = getAuth(app);
  try {
    await applyActionCode(auth, oobCode);
    return true;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
}

/**
 * Create user with email and password, and then send verify email via Firebase auth
 * @param {string} email
 * @param {string} password
 * @returns {Promise<boolean>}
 */
export async function signup(email, password) {
  const auth = getAuth(app);

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await sendEmailVerification(userCredential.user);

  return true;
}

/**
 * Signining with email and password, if failed, resend verification email and signout
 * @param {string} email
 * @param {string} password
 * @param {object} store
 * @returns {Promise<boolean>}
 */
export async function signin(email, password) {
  const auth = getAuth(app);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential.user.emailVerified) {
    // COMMENT: 再度メール認証を送り、サインアウトする
    await sendEmailVerification(userCredential.user);
    await signOut();

    return false;
  }

  return true;
}

export function isSignedIn() {
  const auth = getAuth(app); //セミコロンがなかったので追加
  return auth.currentUser && auth.currentUser.emailVerified;
}

export async function reloadAuth() {
  const auth = getAuth(app);
  if (auth.currentUser) {
    await auth.currentUser.reload();
  } else {
    console.warn("reloadAuth: No current user.");
  }
}

export async function signOut() {
  const auth = getAuth(app);
  await Loggout(auth);
}
