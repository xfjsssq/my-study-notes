// Web Crypto API utility for PAT encryption (V2 ready)

const ALGO = "AES-GCM";
const KEY_ALGO = "PBKDF2";
const SALT_LENGTH = 16;
const IV_LENGTH = 12;
const ITERATIONS = 100_000;

const isClient = typeof window !== "undefined" && typeof localStorage !== "undefined";

function getSalt(): ArrayBuffer {
  if (!isClient) return new Uint8Array(SALT_LENGTH).buffer as ArrayBuffer;
  const stored = localStorage.getItem("crypto_salt");
  if (stored) {
    const bytes = new Uint8Array(stored.length);
    for (let i = 0; i < stored.length; i++) bytes[i] = stored.charCodeAt(i);
    return bytes.buffer as ArrayBuffer;
  }
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  localStorage.setItem("crypto_salt", btoa(String.fromCharCode(...salt)));
  return salt.buffer as ArrayBuffer;
}

async function deriveKey(pat: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const km = await crypto.subtle.importKey("raw", enc.encode(pat), KEY_ALGO, false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: KEY_ALGO, salt: getSalt(), iterations: ITERATIONS, hash: "SHA-256" }, km, { name: ALGO, length: 256 }, false, ["encrypt", "decrypt"]);
}

export async function encryptData(pat: string, plaintext: string): Promise<string> {
  const key = await deriveKey(pat);
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: ALGO, iv }, key, new TextEncoder().encode(plaintext)));
  const packed = new Uint8Array(IV_LENGTH + ct.length);
  packed.set(iv, 0); packed.set(ct, IV_LENGTH);
  return btoa(String.fromCharCode(...packed));
}

export async function decryptData(pat: string, encoded: string): Promise<string> {
  const key = await deriveKey(pat);
  const packed = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
  const iv = packed.slice(0, IV_LENGTH).buffer as ArrayBuffer;
  const ciphertext = packed.slice(IV_LENGTH).buffer as ArrayBuffer;
  const dec = await crypto.subtle.decrypt({ name: ALGO, iv }, key, ciphertext);
  return new TextDecoder().decode(dec);
}

export function isCryptoAvailable(): boolean {
  return typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof crypto.subtle.encrypt === "function";
}