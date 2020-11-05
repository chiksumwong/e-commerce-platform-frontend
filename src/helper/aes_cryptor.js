const CryptoJS = require("crypto-js");

const Cryptor = {
  aes_ecb_encrypt: (text, key) => {
    text = CryptoJS.enc.Utf8.parse(text);
    key = CryptoJS.enc.Utf8.parse(key);
    let cipher = CryptoJS.AES.encrypt(text, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return cipher.toString();
  },
  aes_ecb_decrypt: (cipher, key) => {
    key = CryptoJS.enc.Utf8.parse(key);
    let bytes = CryptoJS.AES.decrypt(cipher, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return bytes.toString(CryptoJS.enc.Utf8).toString();
  },
  aes_cbc_encrypt: (text, key, iv) => {
    text = CryptoJS.enc.Utf8.parse(text);
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    let cipher = CryptoJS.AES.encrypt(text, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return cipher.toString();
  },
  aes_cbc_decrypt: (cipher, key, iv) => {
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    let bytes = CryptoJS.AES.decrypt(cipher, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return bytes.toString(CryptoJS.enc.Utf8).toString();
  }
};

export default Cryptor;
