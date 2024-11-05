import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { fromRank, fromTier, toRank, toTier, price } = req.body;

    // Create order in database
    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        fromRank,
        fromTier,
        toRank,
        toTier,
        price,
        status: 'PENDING'
      }
    });

    // Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(price * 100),
      currency: 'eur',
      metadata: {
        orderId: order.id
      }
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}