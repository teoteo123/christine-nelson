import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'dlodvfqq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

async function seed() {
  const transaction = client.transaction()

  // Site Settings (singleton)
  transaction.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteTitle: 'Christine Nelson',
    tagline: "Charlotte's Premier Personal Stylist",
    contactEmail: 'hello@christinenelson.com',
    contactPhone: '',
    address: 'Charlotte, North Carolina',
    socialLinks: [
      { _key: 'ig', platform: 'Instagram', url: 'https://instagram.com' },
      { _key: 'pi', platform: 'Pinterest', url: 'https://pinterest.com' },
      { _key: 'li', platform: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  })

  // Services
  const services = [
    {
      _id: 'service-personal-styling',
      title: 'Personal Styling',
      slug: { _type: 'slug', current: 'personal-styling' },
      description: "A comprehensive styling experience tailored to your lifestyle, body type, coloring, and personal goals. Together we'll define your signature style and build a wardrobe that makes getting dressed effortless and exciting.",
      whatsIncluded: [
        'In-depth style consultation & lifestyle assessment',
        'Color and body analysis',
        'Personalized style guide & mood board',
        'Curated outfit recommendations',
        'Shopping list with links to purchase',
        'Two follow-up styling check-ins',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
      displayOrder: 1,
      ctaText: 'Book This Service',
    },
    {
      _id: 'service-closet-edit',
      title: 'Closet Edit & Organization',
      slug: { _type: 'slug', current: 'closet-edit' },
      description: "Transform your overflowing closet into a curated, functional wardrobe. We'll go through every piece together — keeping what works, releasing what doesn't, and identifying gaps to fill. You'll walk away with a closet that sparks joy.",
      whatsIncluded: [
        'Full wardrobe audit & assessment',
        'Keep, donate, and consign sorting',
        'Outfit creation from existing pieces',
        'Gap analysis & shopping recommendations',
        'Organization system setup',
        'Seasonal rotation guidance',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop',
      displayOrder: 2,
      ctaText: 'Book This Service',
    },
    {
      _id: 'service-special-event',
      title: 'Special Event Styling',
      slug: { _type: 'slug', current: 'special-event-styling' },
      description: "Whether it's a wedding, gala, work conference, or milestone birthday — look and feel absolutely unforgettable. I'll help you find the perfect outfit and coordinate every detail from head to toe.",
      whatsIncluded: [
        'Event & dress code consultation',
        'Outfit sourcing & selection',
        'Accessories, shoes & jewelry coordination',
        'Hair & makeup style direction',
        'Fitting coordination',
        'Day-of styling support available',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop',
      displayOrder: 3,
      ctaText: 'Book This Service',
    },
    {
      _id: 'service-travel-packing',
      title: 'Travel & Packing Styling',
      slug: { _type: 'slug', current: 'travel-packing' },
      description: "Never overpack again. I'll create a chic, versatile capsule wardrobe for your trip — whether it's a weekend getaway or a month-long adventure. Every piece works together for maximum outfit combinations with minimal luggage.",
      whatsIncluded: [
        'Destination & itinerary review',
        'Custom capsule wardrobe plan',
        'Mix-and-match outfit guide',
        'Packing checklist & layout',
        'Weather-appropriate recommendations',
        'Shopping for any needed pieces',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
      displayOrder: 4,
      ctaText: 'Book This Service',
    },
    {
      _id: 'service-personal-shopping',
      title: 'Personal Shopping',
      slug: { _type: 'slug', current: 'personal-shopping' },
      description: "Hate shopping? Love shopping but always buy the wrong things? Let me do the heavy lifting. I'll source pieces that fit your style, budget, and lifestyle — so you can skip the overwhelm and go straight to looking amazing.",
      whatsIncluded: [
        'Pre-shopping style consultation',
        'Curated selections based on your needs & budget',
        'In-store accompanied shopping or virtual shopping',
        'Outfit styling & try-on session',
        'Returns & exchanges coordination',
        'Ongoing seasonal refresh packages available',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop',
      displayOrder: 5,
      ctaText: 'Book This Service',
    },
  ]

  for (const s of services) {
    const { imageUrl, ...rest } = s
    transaction.createOrReplace({ ...rest, _type: 'service' })
  }

  // Testimonials
  const testimonials = [
    { _id: 'testimonial-1', clientName: 'Jennifer W.', location: 'Charlotte, NC', rating: 5, quote: 'Christine completely transformed my wardrobe — and my confidence. I get compliments every single day now. She has an incredible eye for what works with your body type and lifestyle.', serviceType: 'Personal Styling', featured: true },
    { _id: 'testimonial-2', clientName: 'Amanda K.', location: 'Charlotte, NC', rating: 5, quote: "The closet edit was life-changing. I went from a closet stuffed with clothes I never wore to a curated collection where everything works together. Best investment I've made in myself.", serviceType: 'Closet Edit', featured: true },
    { _id: 'testimonial-3', clientName: 'Rachel D.', location: 'Waxhaw, NC', rating: 5, quote: "I hired Christine for my daughter's wedding and I have never felt more beautiful. She understood exactly what I wanted — elegant but not overdone. Truly a gifted stylist.", serviceType: 'Special Event', featured: true },
    { _id: 'testimonial-4', clientName: 'Melissa T.', location: 'Charlotte, NC', rating: 5, quote: 'As a busy executive, I needed a professional wardrobe that felt polished but still like me. Christine nailed it. She even taught me how to mix and match pieces I already owned.', serviceType: 'Personal Styling', featured: true },
    { _id: 'testimonial-5', clientName: 'Laura B.', location: 'Huntersville, NC', rating: 5, quote: 'I was dreading packing for a two-week European trip until Christine stepped in. She created a capsule travel wardrobe that was stylish, versatile, and fit in a carry-on!', serviceType: 'Travel Packing', featured: true },
  ]

  for (const t of testimonials) {
    transaction.createOrReplace({ ...t, _type: 'testimonial' })
  }

  // Blog Posts
  const blogPosts = [
    { _id: 'blog-morning-rituals', title: 'The Morning Rituals That Changed Everything', slug: { _type: 'slug', current: 'morning-rituals' }, excerpt: 'I used to wake up reaching for my phone. Now my mornings look completely different — and it started with one tiny shift that took less than five minutes.', category: 'Intentional Living', author: 'Christine Nelson', publishedAt: '2026-01-12T12:00:00Z', readTime: '5 min read' },
    { _id: 'blog-creative-block', title: 'What I Do When the Creative Well Runs Dry', slug: { _type: 'slug', current: 'creative-block' }, excerpt: "Creative blocks aren't the enemy — they're a signal. Here's how I've learned to listen to them instead of fighting through, and why that makes all the difference.", category: 'Creativity', author: 'Christine Nelson', publishedAt: '2025-12-28T12:00:00Z', readTime: '7 min read' },
    { _id: 'blog-slow-living', title: "Slow Living Isn't What You Think It Is", slug: { _type: 'slug', current: 'slow-living' }, excerpt: "It's not about doing less or moving to the countryside. Slow living is a mindset shift — and it's more accessible (and more radical) than Instagram makes it look.", category: 'Lifestyle', author: 'Christine Nelson', publishedAt: '2025-12-05T12:00:00Z', readTime: '6 min read' },
    { _id: 'blog-home-reset', title: 'A Weekend Home Reset That Actually Sticks', slug: { _type: 'slug', current: 'home-reset' }, excerpt: "Forget the 30-day declutter challenges. This simple weekend reset focuses on systems, not purging — and it's transformed how my home feels day to day.", category: 'Home & Space', author: 'Christine Nelson', publishedAt: '2025-11-18T12:00:00Z', readTime: '4 min read' },
    { _id: 'blog-writing-practice', title: "Why Everyone Needs a Writing Practice (Even If You're Not a Writer)", slug: { _type: 'slug', current: 'writing-practice' }, excerpt: "Writing isn't just for published authors. It's one of the most powerful tools for self-awareness, clarity, and processing the beautiful mess of being human.", category: 'Writing', author: 'Christine Nelson', publishedAt: '2025-10-30T12:00:00Z', readTime: '8 min read' },
  ]

  for (const p of blogPosts) {
    transaction.createOrReplace({ ...p, _type: 'blogPost' })
  }

  // Press Features - Publications (print)
  const publications = [
    { _id: 'press-pub-1', publicationName: 'Charlotte Observer', type: 'print', title: 'Top 10 Stylists Changing the Fashion Scene in Charlotte', subtype: 'Feature Article', date: '2024-06-01' },
    { _id: 'press-pub-2', publicationName: 'Charlotte Magazine', type: 'print', title: 'Best of Charlotte: Personal Services', subtype: 'Award Recognition', date: '2024-03-01' },
    { _id: 'press-pub-3', publicationName: 'StyleBlueprint', type: 'print', title: 'How to Refresh Your Wardrobe Without Starting From Scratch', subtype: 'Expert Interview', date: '2024-01-15' },
    { _id: 'press-pub-4', publicationName: 'SouthPark Magazine', type: 'print', title: "The Art of the Capsule Wardrobe: A Charlotte Stylist's Guide", subtype: 'Feature Profile', date: '2023-09-01' },
    { _id: 'press-pub-5', publicationName: 'Charlotte Agenda', type: 'print', title: '15 Charlotte Women Entrepreneurs to Watch', subtype: 'Feature List', date: '2023-06-01' },
    { _id: 'press-pub-6', publicationName: 'Southern Living', type: 'print', title: 'Southern Style: Personal Stylists Reinventing Wardrobes Across the South', subtype: 'Regional Feature', date: '2023-03-01' },
  ]

  for (const p of publications) {
    transaction.createOrReplace({ ...p, _type: 'pressFeature' })
  }

  // Press Features - TV
  const tvAppearances = [
    { _id: 'press-tv-1', publicationName: 'Charlotte Today (WCNC)', type: 'tv', title: 'Spring Wardrobe Essentials Every Woman Needs', topic: 'Spring Wardrobe Essentials Every Woman Needs', subtype: 'Recurring Style Segment', date: '2024-04-01' },
    { _id: 'press-tv-2', publicationName: 'Good Morning Charlotte (WBTV)', type: 'tv', title: 'Holiday Party Outfit Guide', topic: 'Holiday Party Outfit Guide', subtype: 'Guest Segment', date: '2024-12-01' },
    { _id: 'press-tv-3', publicationName: 'Charlotte Today (WCNC)', type: 'tv', title: 'Closet Detox: How to Edit Your Wardrobe Like a Pro', topic: 'Closet Detox: How to Edit Your Wardrobe Like a Pro', subtype: 'Recurring Style Segment', date: '2023-09-01' },
    { _id: 'press-tv-4', publicationName: 'QC Morning (FOX 46)', type: 'tv', title: 'Budget-Friendly Style Tips for the New Year', topic: 'Budget-Friendly Style Tips for the New Year', subtype: 'Guest Expert', date: '2023-01-15' },
    { _id: 'press-tv-5', publicationName: 'Charlotte Today (WCNC)', type: 'tv', title: 'Building a Travel Capsule Wardrobe', topic: 'Building a Travel Capsule Wardrobe', subtype: 'Recurring Style Segment', date: '2023-06-01' },
  ]

  for (const t of tvAppearances) {
    transaction.createOrReplace({ ...t, _type: 'pressFeature' })
  }

  // Press Features - Speaking
  const speaking = [
    { _id: 'press-speak-1', publicationName: "Charlotte Women's Conference", type: 'speaking', title: 'Dress for the Life You Want: The Psychology of Personal Style', topic: 'Dress for the Life You Want: The Psychology of Personal Style', date: '2024-05-01' },
    { _id: 'press-speak-2', publicationName: 'Junior League of Charlotte — Annual Luncheon', type: 'speaking', title: 'Reinventing Your Wardrobe at Any Age', topic: 'Reinventing Your Wardrobe at Any Age', date: '2024-02-01' },
    { _id: 'press-speak-3', publicationName: 'Lake Norman Chamber of Commerce — Women in Business Series', type: 'speaking', title: 'The Power of Personal Branding Through Style', topic: 'The Power of Personal Branding Through Style', date: '2023-10-01' },
    { _id: 'press-speak-4', publicationName: 'Charlotte Moms Network — Fall Workshop', type: 'speaking', title: 'Mom Style: Looking Put-Together in 10 Minutes or Less', topic: 'Mom Style: Looking Put-Together in 10 Minutes or Less', date: '2023-09-01' },
    { _id: 'press-speak-5', publicationName: 'CPCC Continuing Education — Style Workshop Series', type: 'speaking', title: 'Color Analysis & Body Type Dressing', topic: 'Color Analysis & Body Type Dressing', date: '2022-11-01' },
  ]

  for (const s of speaking) {
    transaction.createOrReplace({ ...s, _type: 'pressFeature' })
  }

  // About page
  transaction.createOrReplace({
    _id: 'page-about',
    _type: 'page',
    title: 'About',
    slug: { _type: 'slug', current: 'about' },
    sections: [
      {
        _key: 'story',
        sectionTitle: 'My Story',
        body: [
          { _key: 'p1', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c1', _type: 'span', text: 'My journey into personal styling started, like many great stories, completely by accident. Growing up in a small North Carolina town, I was always the friend everyone called before a job interview, a first date, or a big event. "What should I wear?" was the question I heard more than any other — and I loved answering it.', marks: [] }] },
          { _key: 'p2', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c2', _type: 'span', text: 'After graduating from UNC Charlotte with a communications degree, I spent several years in fashion retail and visual merchandising. But I kept finding myself drawn to the one-on-one moments — the woman in the fitting room who finally found a dress that made her stand up straighter, the executive who realized her wardrobe could actually support her ambitions.', marks: [] }] },
          { _key: 'p3', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c3', _type: 'span', text: "That's when I knew: my calling wasn't just about clothes. It was about confidence, identity, and helping women see themselves the way the world already does — as capable, beautiful, and worthy of showing up fully.", marks: [] }] },
          { _key: 'p4', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c4', _type: 'span', text: "I pursued my certification through AICI, trained at the Fashion Institute of Technology, and launched my styling practice right here in Charlotte over a decade ago. Since then, I've had the honor of working with hundreds of women — from busy moms to C-suite executives — each one teaching me something new about what style really means.", marks: [] }] },
        ],
      },
    ],
  })

  console.log('Committing transaction...')
  const result = await transaction.commit()
  console.log('Seeded successfully!', result)
}

seed().catch(console.error)
