const CryptoJS = require("crypto-js");
import { JSEncrypt } from "jsencrypt";

const Cryptor = {
  rsa_encrypt: (message, public_key) => {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(public_key);
    let cipher_text = encrypt.encrypt(message);
    return cipher_text;
  },
  rsa_decrypt: (cipher_text, private_key) => {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(private_key);
    let message = decrypt.decrypt(cipher_text);
    return message;
  },
  rsa_sign: (message, private_key) => {
    let sign = new JSEncrypt();
    sign.setPrivateKey(private_key);
    let signature = sign.sign(message, CryptoJS.SHA256, "sha256");
    return signature;
  },
  rsa_verify: (message, signature, public_key) => {
    let verify = new JSEncrypt();
    verify.setPublicKey(public_key);
    let verified = verify.verify(message, signature, CryptoJS.SHA256);
    return verified;
  },
  test_case: () => {
    console.log("Test RSA Start");

    let msg = "HI !";

    const private_a_key = `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEApj5ZR6RIVyTtPfKdvSrzfVd5riD9xjGCz7m6kNFt6TIurAv3
MtIxp1NVsWWxa4Qekjpp+T711wWGa+hxbofvIZb4YzUeK/G2kVUwx294DzswDtFY
4QCZ4+wLnKoUqrNrciYwpYajYFkxu01UrTWpETxcW4GdlorScsyi4smy6LIvnbvo
75MTfmQe4PbySgsFeY9AclpAoQB3pUrUGKx9A7m3gNGAnpcvSFovGFsl2Ef08eIn
ipkwD+AnPumrTJhmNod8mN7qBV1EOulzolCYWeFmOZ11rprVHjFwlGAl5UL44nV2
PUBaPDlsje1Bl7Gxk0Ps1icUCKQYRF0JQZY9dwIDAQABAoIBABikt3FiTgL1C2Ia
e/2Vx2B2Pihs5ZGit0R5wMlE8mkWMkr4vx0+gXPPa62PaJyKikmc9SaoiaLlQ8bt
PxtmdTFigtGaBy32d9zVZxS5Vm/Tk00vBWDdSPK7hAEmSUgArtXOCXoQGlnm/vNI
BFxkzvoqG3rJHQY67/Vqll7ODYJm4ld3FUYUO6eAp0n3rPcTJErWDWTefZ3oPutj
Z3Zyjq57wusED0sZhVRNJJu2PjvyMj+wjwOBV6tSgsJ4WcDOIXRyxcGDDRbt1gp7
wHKPPzixyfs70ZHug2cQuejnIPb54gMJKSSPLgKquJNEJlQUfaiy+pQVu6gveMuZ
LkNy75ECgYEAwhumSb5FwXO79jJDvfEPRWEJtnIITflID6e99lWSoZO0EapvxCV9
HEOoyXWtpAVXubld6+4YpRjx6VFSwb3FAb3IHUn/jiqZrbk9te5p93pbiUeqyW40
U+ORY+DDtVv9Ai247MU+yEZRkDlBSuqryK+iV70WTJ2otsIqEHeZymkCgYEA20A4
3CofB16untLu/ybIK/o1eokIOzcgSVPXXU4MoCWRnR8Bd8WTzfu/XYytuCeegwEA
Aub8rYUCsCkCE3Ov8Yoo2Zh51sGTDNcoswW6k0cOQ6/kKJvIkw2qv6/5QFZkvfK1
oNl4UbHLoeJyh3E2CJWdixv0uNJTwz4b1tvSDN8CgYB42cQfV5KQjiDxeHwKryIF
3ROx/q9C9Lgz3wj7bG29oXtUIFwzr++EAG/+9gBlBVqH7GwYbwXzDGPZEuPGcgNN
QT5tVdwBRG6n5ZQRSF27UffZscAYZz+3FxE3MQJIUPxmNddTur6K7JTtiWgoX5ES
gp89pyFSFDqthpev5vbeOQKBgCnC4tG0yDI8K6Ce5tz8wxX1U6hiX4n/5wtwh84C
5s6+OS0nUb1BifSrJfkoqZIxIbUsRJdI7goTEr8BIJ8Z4wJr4XoI2/Q27M5+UQdA
aRhSaXolD51YhuzTpplaaGyDyC6SA1x+77cH2ZSdMFlyC+u4q8hqa8OkdEX1F5Jm
Tm0bAoGBAIt2GRUMB/8DJy+Uk7T82PZkC2L2MQbhVWHlikd905fPSqyi36I9E1Gk
wQD2KonloUTdSK8G+qFmaEfq8abZ3E22vJxdYozq5Id4rszSuACvuVrKHDPWDOAO
vKGmMWKK1WeaYTpU/azvU0lkL2hZg8lP0nRz3x4vyx+wmwbTYk/w
-----END RSA PRIVATE KEY-----
    `;

    const public_a_key = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApj5ZR6RIVyTtPfKdvSrz
fVd5riD9xjGCz7m6kNFt6TIurAv3MtIxp1NVsWWxa4Qekjpp+T711wWGa+hxbofv
IZb4YzUeK/G2kVUwx294DzswDtFY4QCZ4+wLnKoUqrNrciYwpYajYFkxu01UrTWp
ETxcW4GdlorScsyi4smy6LIvnbvo75MTfmQe4PbySgsFeY9AclpAoQB3pUrUGKx9
A7m3gNGAnpcvSFovGFsl2Ef08eInipkwD+AnPumrTJhmNod8mN7qBV1EOulzolCY
WeFmOZ11rprVHjFwlGAl5UL44nV2PUBaPDlsje1Bl7Gxk0Ps1icUCKQYRF0JQZY9
dwIDAQAB
-----END PUBLIC KEY-----
    `;

    const private_b_key = `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAoerPM6XLUxN+o0R22RfsLQt67cJZpvAL++n2chJhRpmw+89i
AZuG5/3aFZT6Fs45K4E9xJBM6p7U3vUB6vHClfJeZF3IrEO9ItG6+/pOw+g/Gacu
ZcxswuqK1GuSjWDFQDdqAia94/YTcFkBBQ9FG+GXX33D6RLOpbvVL0xCslaBvTP0
eyBKVKZaa2Q3k+EnoL62a9MWuYW75iciRYpbWvL9BSpr21RnyxlXOF480uZqrAZ/
Zw8xXpTaxHfDc5ax1UJRq3TGItF/FvxLb8a6ZpaYrgD2grSYmEKs0upN2Sxdp5M4
BW1t7SSPvsoaGcYnqO6rBf96fVQt6LXOp5j08QIDAQABAoIBABSKHk2tbuzzcKGS
akcgvz95kNb/S/MeyU5j//S5eyiDD43p4UNV8NeV/qe1NcJV16+6ndTE/1TV4CgG
SX99upLd43Z05SNhFmmH1GHpfztfxz1gVUTpmTRin0jR+o2/pFYAkYyDUJxN12pt
h/EV3kzqoZKl+AelcJxahvEQifdoSNxq9wjGWk/btedZjC9VHUrWA1VBbxT0wfgd
JoxYdzhWg0WD477ohIYGi719mvTgmEbjGSRHu9k0ZTUNkv2AX/nQtAW4w+VCj5aM
HJIshxD9NVnA1ckDMUDDyeLagqKxr4ICZSB9E6ffC4Euk/JCd2Oa0yV/tR/JTeh9
DZqt06kCgYEAtSmFwWmqFYwRh2Nl5zBultb6PBd4jRgdTFE/SxvwhgV4vF9eL0Xv
OtzF/SNht4nWQrqu5recXWE3TDt5iy/BmgTW3LgDAUULWW/ghRyOxzutFqAf6ECp
VFcdUsJRyVMADL3Hb3BLl+TS54CpF4sd/RW3zsaE9nbE1ebXaGNb4s0CgYEA5M4R
5OxAZGoLlgMw7+bBm6zT6lzUOOjGvhvGy1aHI8ktGLkpbKxrpOppp0eVpFNYs0R8
5s/JC5qyPbRPf1Fyemx9cfNvgIkETtnRot+KYEh7CsMfaTH8aoQ2YDgXYugtoks+
j7IOYrqHaSPn6lACuYvNSxAjbbNfwxzcOcdMArUCgYEAkZa5A2KjaYWTYLak4lKt
zVMe7sP+AYXrpbV1pCrj9RDYoqoRyvPs+eUKyBBzK0j+g8n7XTcZ1oGWKxFw8EaE
0/4nnmHTKGYQZOPgD5mPtNVkmNY+TiwI6NrJmgTILX8ifxrU993LIlqmk512RpFq
nEWj3ez0Vg3EyhIl8qJG6dECgYBB0DB/e6FOAN7SSJqz9tkr0TunhwoYUISSPGUj
KgF3Pq+1E9Whh7ry1eaMEmAtwzeZYRLYRV5b8yRf8VSIl8HpCvnOZCpne4H8uFS/
l7My3MZfox6O4KztaphFdvzrG0O9Eg2twZa3uVWn3Ycg8+DExDzJ4Zt/O4BJHC0Q
hY4MnQKBgAdPHcDuKRgpQF8mKIFSKD3UeQP6TzKH6kIP/pJMZ+lJEFJiKrs+3yPs
D4uPlieESD5zJND90lo2Ms/AxIxIqidFkK4NVTU3PKxiCrU055WoydiSZ8mbDZxj
fPlgbtV81OAMzTd/vpyc616nmNgR8Lh/iMaBv6S9heZQ7BmS1Juv
-----END RSA PRIVATE KEY-----
    `;

    const public_b_key = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoerPM6XLUxN+o0R22Rfs
LQt67cJZpvAL++n2chJhRpmw+89iAZuG5/3aFZT6Fs45K4E9xJBM6p7U3vUB6vHC
lfJeZF3IrEO9ItG6+/pOw+g/GacuZcxswuqK1GuSjWDFQDdqAia94/YTcFkBBQ9F
G+GXX33D6RLOpbvVL0xCslaBvTP0eyBKVKZaa2Q3k+EnoL62a9MWuYW75iciRYpb
WvL9BSpr21RnyxlXOF480uZqrAZ/Zw8xXpTaxHfDc5ax1UJRq3TGItF/FvxLb8a6
ZpaYrgD2grSYmEKs0upN2Sxdp5M4BW1t7SSPvsoaGcYnqO6rBf96fVQt6LXOp5j0
8QIDAQAB
-----END PUBLIC KEY-----
    `;

    let encrypted = Cryptor.rsa_encrypt(msg, public_b_key);
    console.log("RSA Encrytpion:", encrypted);
    let signed = Cryptor.rsa_sign(msg, private_a_key);
    console.log("RSA Signed:", signed);

    let decrypted = Cryptor.rsa_decrypt(encrypted, private_b_key);
    console.log("RSA Decryption:", decrypted);
    let verified = Cryptor.rsa_verify(decrypted, signed, public_a_key);
    console.log("RSA Verify:", verified);

    // Decrypt and verify the message from backend
    let encrypted_msg =
      "SoteYMwzpYc+hxbk5ew3s7KkHorC3V5M2tAN38sqGdTbGIkhMZLr3+VTFmRX8zABpPIysekNK4fE2nVySJUWgI6WDJ0X4yozdv9LNUQnTfaYi4kD/UrfSeinFY0JkFOTcCpcPAqgiqvE3CpuSO5LfI5w4RaunBopQ99MwCnRYmdQjUAaH4D7DWdBZntq+z51i8hE5p7y7giTkDqXcPAfJO4sxwWgiWZUpN16Fvvrx0o2LY6Hc+sD9qCWpZhSdBe/hMW2Zi22T4yUJtUz4OjhsKvQY9Bc3Ll7umfMlNEMY7ynlsC/AAxzmZXb9RiZnX98g+neDtXBu4t5IZuw3soBHA==";
    let signed_signature =
      "Rb8AJjO72pM+SSe41oDgJoIM5e8jTTEOYFTQfQpiRX/s1DIuB3RxvPRaqKge2FOhKlOwiy6AjubZ/t7FIe/tgIzZ2D9kgPCM4JCootjD4yryaXtAaBJ2PnFJKQNjWlFOjSeoQa5G/k29owIlxarX9WpCGep10iKtx9l886J726ftPLKil536ECWEvKs839/Gvm1cpK94ccqYVHtpf4tWjdZyTEqnFSHK+3uaTY9a6F/8ZtDPkB2vM8nTt5jM3uJLq0Z+rtY1YYut+A/2hHGUk/Nw1BXOsxnNiJJUm8N8RDANgx1/Q/iOUfatfhcRrwMyECxQ/sdx4oBrzcb7KG4P7w==";

    let decrypted_msg = Cryptor.rsa_decrypt(encrypted_msg, private_b_key);
    console.log("RSA Decryption From Backend:", decrypted_msg);

    let verified_res = Cryptor.rsa_verify(
      decrypted_msg,
      signed_signature,
      public_a_key
    );
    console.log("RSA Verify From Backend:", verified_res);
  }
};

export default Cryptor;
