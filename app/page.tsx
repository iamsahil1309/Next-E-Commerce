import Carousal from '@/components/Carousal';
import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/stripe';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async () => {
  const products = await stripe.products.list({
    expand : ["data.default_price"],
    limit : 5,
  })

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to E-Commerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at best price.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
                href="/products"
              >
                Browse all Products
              </Link>
            </Button>
          </div>
          <Image
            alt="hero image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section className='py-8'>
        <Carousal products={products.data} />
      </section>
    </div>
  );
}

export default page
