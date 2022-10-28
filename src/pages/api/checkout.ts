import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../config/stripe";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    const {priceId} = req.body

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed." });
      }
    
      if (!priceId) {
        return res.status(400).json({ error: 'Price not found.' });
      }

    const {NEXT_URL} = process.env

    console.log('passed .env');
    

    const cancelURL = `${NEXT_URL}/`
    const successURL = `${NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        cancel_url: cancelURL,
        success_url: successURL ,
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    })

    console.log('passed stripe', checkoutSession);
    

    return  res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}