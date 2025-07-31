
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Rocket, Building, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: 'Starter Presence Pack',
    icon: Star,
    price: 149,
    priceUnit: 'One-time',
    perfectFor: 'Solo entrepreneurs, barbers, tutors, local services',
    inclusions: [
      '1-Page Responsive Website (Home, Contact, About in a scroll)',
      'Custom design to match your brand',
      'Contact form + Google Maps Embed',
      'WhatsApp “click to chat” button',
      'Mobile and tablet optimization',
      '1 round of revision'
    ],
    delivery: '3–5 days',
    addOns: 'Custom email (e.g., info@yourdomain.com): $15'
  },
  {
    name: 'Business Boost Pack',
    icon: Rocket,
    price: 399,
    priceUnit: 'One-time',
    perfectFor: 'Small companies, dentists, real estate agents, cafés',
    inclusions: [
      'Up to 5 custom-designed pages',
      'Google Business Profile creation & optimization',
      'WhatsApp and Call integrations',
      'SEO setup: keywords, meta tags, alt text',
      'High-speed optimized',
      'Free domain & hosting setup (1 year)',
      '2 rounds of revisions'
    ],
    delivery: '5–7 days',
    specialNote: 'Makes your business look established and professional across all channels.'
  },
  {
    name: 'Corporate Launch Pack',
    icon: Building,
    price: 699,
    priceUnit: 'One-time',
    perfectFor: 'Clinics, law firms, architects, consultants, agencies',
    inclusions: [
      '6–10 page dynamic website',
      'Brand Identity Integration',
      'Blog/News section for content updates',
      'High-performance SEO setup',
      'Google Analytics integration',
      'Secure SSL (https) + GDPR-ready',
      'Speed & mobile performance audit'
    ],
    delivery: '7–10 days',
    bonus: '3 Months Maintenance FREE'
  },
  {
    name: 'E-Commerce Starter Pack',
    icon: ShoppingCart,
    price: 899,
    priceUnit: 'One-time',
    perfectFor: 'Small product stores, handmade crafts, service packages',
    inclusions: [
      'E-commerce website with up to 20 products',
      'Add-to-cart, checkout, payments integration',
      'Shipping rules & tax setup',
      'Product gallery & filter layout',
      'Admin panel training video',
      'WhatsApp order automation (optional)'
    ],
    delivery: '7–12 days',
    upsell: 'Upscale to full Shopify/WordPress store later ($1400+)'
  }
];

export default function PricingPage() {
  return (
    <section className="py-12 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            Find the Perfect Plan
          </h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for every stage of your business. Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="flex flex-col h-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <pkg.icon className="w-10 h-10 mx-auto text-accent mb-2"/>
                <CardTitle className="text-2xl font-bold font-headline">{pkg.name}</CardTitle>
                <CardDescription>{pkg.perfectFor}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center my-4">
                    <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.priceUnit}</span>
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div className="mt-4 text-sm text-center font-semibold">Delivery: {pkg.delivery}</div>
              </CardContent>
              <CardFooter className="flex flex-col mt-auto p-6">
                {pkg.addOns && <p className="text-xs text-center text-muted-foreground mb-4">{pkg.addOns}</p>}
                {pkg.specialNote && <p className="text-xs text-center text-accent font-semibold mb-4">{pkg.specialNote}</p>}
                {pkg.bonus && <p className="text-xs text-center text-green-600 font-semibold mb-4">Bonus: {pkg.bonus}</p>}
                {pkg.upsell && <p className="text-xs text-center text-muted-foreground mb-4">{pkg.upsell}</p>}

                <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                </Button>

                {pkg.name === 'Starter Presence Pack' && <p className="text-xs text-muted-foreground mt-2">Free site preview before payment</p>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
