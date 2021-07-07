// pages/api/auth/forgot
import { createContact } from "../../lib/sendinblue"

console.log("SENDINBLUEKEY:", process.env.SENDINBLUEKEY);

async function handler(req, res) {
    await createContact(req.body.email, {} , req.body.listIds)
    return res.json({ ok: true });
}

export default handler;
