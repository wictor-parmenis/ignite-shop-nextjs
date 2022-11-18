import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../config/stripe";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    const {line_items} = req.body

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
      }
    
      if (!line_items) {
        return res.status(400).json({ error: 'Items not found.' });
      }

      if (line_items.length === 0) {
        return res.status(400).json({ error: 'Items not found' });
      }

    const {NEXT_PUBLIC_NEXT_URL} = process.env
    

    const cancelURL = `${NEXT_PUBLIC_NEXT_URL}/`
    const successURL = `${NEXT_PUBLIC_NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`


    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        cancel_url: cancelURL,
        success_url: successURL ,
        line_items,
    })
    

    return  res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}