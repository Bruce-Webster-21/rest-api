import crypto from "crypto";

const SECRET = "BRUCE-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, passoword: string) => {
  return crypto
    .createHmac("sha256", [salt, passoword].join("/"))
    .update(SECRET)
    .digest("hex");
};
