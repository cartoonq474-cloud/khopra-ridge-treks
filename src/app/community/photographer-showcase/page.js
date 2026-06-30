import React from "react";
import Link from "next/link";
import Image from "next/image";
import PhotographerFaqInteractive from "./PhotographerFaqInteractive";

export const metadata = {
  title: "Trek Photographer Showcase: Real Himalayan Trek Photography from Nepal Trails",
  description: "Explore our trek photographer showcase featuring real Himalayan trek photography from Nepal's Annapurna trails — Poon Hill, Khopra Ridge, Khayer Lake, and more.",
};

export default function PhotographerShowcasePage() {
  const images = [
    {
      src: "/khopra-ridge-view.png",
      alt: "Sunset over Dhaulagiri I from the ridge lodge as the peak catches the last alpenglow of the day.",
      label: "Sunset Over Dhaulagiri",
      location: "Khopra Ridge Lodge",
      time: "Sunset / Alpenglow"
    },
    {
      src: "/khayer-lake.png",
      alt: "Sacred temple situated directly beside Khayer Lake, framed against the still alpine water.",
      label: "Sacred Khayer Lake Temple",
      location: "Khayer Lake (4,660m)",
      time: "Morning Reflections"
    },
    {
      src: "/forest-trail.png",
      alt: "Trekking pathway cutting through rhododendron trees during peak spring bloom.",
      label: "Rhododendron Forest Trail",
      location: "Tadapani to Dobato Forest",
      time: "Spring Bloom Corridor"
    },
    {
      src: "/ghandruk-village.png",
      alt: "Traditional stone houses in Ghandruk, showing the village's distinctive architecture against the Annapurna backdrop.",
      label: "Ghandruk Stone Village",
      location: "Ghandruk Village (1,940m)",
      time: "Morning Light"
    },
    {
      src: "/swanta-village.png",
      alt: "Terraced farming fields wrapping the hillside around Swanta village.",
      label: "Swanta Valley Fields",
      location: "Swanta Magar Village",
      time: "Harvest Season"
    },
    {
      src: "/poon-hill-sunrise.png",
      alt: "Sunrise light spreading across the Annapurna range as seen from the Poon Hill viewpoint.",
      label: "Poon Hill Gold Sunrise",
      location: "Poon Hill Viewpoint (3,210m)",
      time: "Dawn / Golden Hour"
    }
  ];

  const faqs = [
    {
      question: "What is trek photography and how is it different from travel photography?",
      answer: "Trek photography is shot on foot, mid-journey, often in changing weather and with limited time at each location. Unlike typical travel photography, there is rarely an opportunity to wait for ideal light or return for a second attempt, which makes timing and preparation far more important."
    },
    {
      question: "Which is the best trek in Nepal for photography?",
      answer: "For varied, reliable photography opportunities, the Annapurna foothills routes covering Poon Hill, Khopra Ridge, and Khayer Lake stand out because they combine sunrise viewpoints, alpine lakes, forest trails, and traditional villages within a single trekking circuit."
    },
    {
      question: "When is the best season for Himalayan landscape photography?",
      answer: "Spring (March to May) offers rhododendron blooms and generally clear mountain views, while autumn (October to November) provides the sharpest visibility and most stable weather. Each season produces a distinctly different look, so the right choice depends on whether you are prioritizing color or clarity."
    },
    {
      question: "Can I take good trekking photos with a phone camera?",
      answer: "Yes. Many of the images in this showcase were taken on standard smartphones rather than dedicated cameras. Using manual exposure controls, shooting during golden hour, and keeping the lens clean of trail dust matter more than the device itself."
    },
    {
      question: "What camera settings work best in high-altitude conditions?",
      answer: "A narrower aperture (around f/8 to f/11) helps keep both foreground and distant peaks sharp, while a slightly faster shutter speed compensates for the bright glare off snow and ice. Bracketing exposures is also useful given how dramatically light can shift between sky and shadowed terrain in the same frame."
    },
    {
      question: "How do you protect camera gear during long treks?",
      answer: "Keep batteries warm in an inner jacket pocket, store equipment in a padded, weather-resistant bag, and let gear acclimate gradually when moving between cold outdoor air and warm teahouses to avoid lens condensation."
    },
    {
      question: "Is drone photography allowed in Nepal's trekking regions?",
      answer: "Drone use within the Annapurna Conservation Area and similar protected zones is restricted and typically requires separate permits beyond standard trekking permits. Rules can change and vary by specific area, so it is worth confirming current regulations with local authorities before bringing a drone on this trek."
    },
    {
      question: "How do you protect camera gear in transitional mountain weather?",
      answer: "Weather in this region shifts quickly, often within the same hour, moving between clear skies, fog, and light precipitation. Rather than working against this, many of the strongest images in this showcase were taken during transitional weather, when light and cloud cover create more atmosphere than a plain blue sky."
    },
    {
      question: "Which viewpoints in Nepal are best for sunrise photography?",
      answer: "Poon Hill is the most accessible and reliable sunrise viewpoint on this circuit, while Khopra Ridge offers a higher, wider, and less crowded alternative for trekkers willing to add extra trekking days to reach it."
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex flex-col justify-between antialiased">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 flex-1">
        
        {/* Header Breadcrumb & Title */}
        <header className="border-b border-stone-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
            <Link href="/all-pages" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/community/community-tourism-khopra" className="hover:underline">Community Silo</Link>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-950 sm:text-5xl leading-tight">
            Trek Photographer Showcase: Real Himalayan Trek Photography from Nepal Trails
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed font-medium">
            Explore our trek photographer showcase featuring real Himalayan trek photography from Nepal's Annapurna trails — Poon Hill, Khopra Ridge, Khayer Lake, and more.
          </p>
        </header>

        {/* Introduction */}
        <article className="mt-12 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
          <p>
            Most photos of the Himalayas online are not what you will actually see on the trail. They are stock images, drone shots from professional expeditions, or heavily edited frames pulled from someone else's once-in-a-lifetime morning. This page is different.
          </p>
          <p>
            Every photograph here was taken by a real trekker or guide, on a real trekking day, in the Annapurna foothills. We built this trek photographer showcase to give you an honest look at what these routes look like in natural light, in changing weather, and from the actual vantage points you will stand on. No staged shots, no stock photography, no filters doing the heavy lifting.
          </p>
          <p>
            If you are planning a trek and want to know what to expect, or you are a photographer looking for inspiration before packing your camera bag, this gallery is built for you. We have organized the images by location and moment — sunrise and sunset, sacred lakes, forest trails, mountain villages, and the viewpoints that consistently deliver the best shots — so you can browse with purpose rather than scroll through a random photo dump.
          </p>

          <hr className="my-10 border-stone-200" />

          {/* Section 1 */}
          <section id="visual-journey" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              A Real Visual Journey Through Nepal's Trekking Routes
            </h2>
            <p>
              Trek photography is a different discipline from typical travel photography. You are not setting up a tripod in a controlled location with unlimited time. You are shooting between switchbacks, in thin air, often with cold fingers and a narrow window of good light before clouds roll in.
            </p>
            <p>
              That is exactly what makes these images valuable. They show the Annapurna region the way it actually presents itself to someone walking through it, not the way it looks after a professional crew spends a week waiting for ideal conditions.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Why Authentic Trek Photography Matters
            </h3>
            <p>
              Trekkers planning a trip to Khopra Ridge, Poon Hill, or the Annapurna Conservation Area need a realistic sense of scale, light, and terrain. Stock photography tends to flatten all of this into generic mountain imagery that could have been taken anywhere in the world.
            </p>
            <p>
              Real trek photography keeps the specific identity of a place intact. A photo of Dhaulagiri at sunrise from a ridge lodge tells you something a stock alpine photo never could: the exact angle, the time of year, and what a trekker standing in that spot actually experienced.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              How These Himalayan Trekking Photos Were Captured
            </h3>
            <p>
              Every image in this showcase was taken by a traveler or a local guide during an actual trek, using ordinary camera and phone equipment rather than professional expedition gear. That matters because it sets honest expectations. If a trekker with a standard mirrorless camera or smartphone captured this shot, you can capture something similar.
            </p>
            <p>
              Conditions on the ground shaped each photo just as much as the photographer did. Wind, cloud cover, altitude, and the time of day all played a role, and we have kept that context attached to each image rather than stripping it away for a cleaner-looking gallery.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 2 */}
          <section id="sunrise-sunset" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Sunrise and Sunset Photography in the Himalayas
            </h2>
            <p>
              Light is everything in mountain photography, and nowhere is that more obvious than in the Annapurna region during the half hour before sunrise and the half hour after sunset. These windows are short, but they consistently produce the most striking images on the trail.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Poon Hill Sunrise Over the Annapurna Range
            </h3>
            <p>
              Poon Hill is the single most photographed sunrise viewpoint on this trekking circuit, and for good reason. From the summit, the Annapurna range catches the first light of day while the valleys below are still in shadow, creating a contrast that is difficult to replicate anywhere else nearby.
            </p>
            <p>
              Arriving before dawn is essential. The viewpoint fills up during peak trekking season, and the best compositions come from claiming a spot on the eastern edge before the crowd gathers.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Dhaulagiri Alpenglow From Ridge Viewpoints
            </h3>
            <p>
              Alpenglow, the pink and gold light that briefly washes over snow-capped peaks just after sunset, is one of the more dramatic phenomena you can photograph on this trek. The image of Dhaulagiri I taken from a ridge lodge in this gallery captures that exact moment, when the peak holds onto color long after the surrounding sky has gone flat.
            </p>
            <p>
              Unlike sunrise shots, alpenglow photography rewards patience rather than positioning. You often only need to be on a ridge with an unobstructed western view and a few minutes of waiting.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Light Conditions in High-Altitude Trekking Photography
            </h3>
            <p>
              Thin air at altitude does something noticeable to light: it tends to be sharper and more contrasted than at sea level, with less atmospheric haze softening distant peaks. This is good news for landscape photography, but it also means your camera's automatic exposure settings will frequently underexpose bright snow and overexpose shadowed valleys in the same frame.
            </p>
            <p>
              Shooting in the golden hour, rather than at midday, helps manage this contrast naturally and gives images a warmth that flat daylight cannot match.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 3 */}
          <section id="lakes-landscapes" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Sacred Lakes and High-Altitude Landscapes
            </h2>
            <p>
              Some of the most photogenic spots on this trek are not mountain summits at all, but the quieter sacred sites tucked into the high-altitude landscape.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Khayer Lake and Its Alpine Surroundings
            </h3>
            <p>
              Khayer Lake sits at a high elevation in the Annapurna region, with a small temple positioned directly beside the water. The combination of still alpine water, prayer flags, and a backdrop of bare ridgelines gives this location a different photographic character than the lush forest sections of the trek.
            </p>
            <p>
              Reflections on the lake surface are strongest in calm morning conditions, before wind picks up later in the day and breaks the water's stillness.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              High-Altitude Photography Challenges and Mood
            </h3>
            <p>
              Weather around Khayer Lake and similar high-altitude points can shift quickly, with clear skies giving way to fog or light snow within an hour. Rather than treating this as an obstacle, experienced trek photographers use it to their advantage, since shifting cloud cover often produces more atmospheric and moody images than a flat blue sky.
            </p>
            <p>
              Cold temperatures at this elevation also drain camera batteries faster than usual, so carrying a spare battery close to your body for warmth is a practical habit worth building before you reach these sections.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 4 */}
          <section id="forest-pathways" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Forest Trails and Rhododendron Pathways
            </h2>
            <p>
              Between the high-altitude viewpoints, the trek passes through dense forest corridors that offer a completely different photographic mood: layered, green, and intimate rather than wide and open.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Rhododendron Forest Trails in Bloom
            </h3>
            <p>
              During spring, the forest sections of this route fill with blooming rhododendron trees, turning the trekking pathway into a corridor of red and pink against deep green foliage. The rhododendron forest trail featured in this gallery captures that seasonal transformation, which only lasts for a few weeks each year before the blooms fade.
            </p>
            <p>
              If photographing the bloom is a priority for you, timing your trek for spring rather than autumn or winter makes a meaningful difference to what you will see and capture.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Trekking Pathways Through Alpine Woodland
            </h3>
            <p>
              Forest trail photography rewards a different technique than open mountain shots. Using the trail itself as a leading line, with overhanging branches framing the top of the image, creates depth that a wide, empty landscape shot cannot achieve.
            </p>
            <p>
              Soft, diffused light filtering through the canopy is often more flattering here than harsh direct sun, which tends to create blown-out highlights in gaps between the trees.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 5 */}
          <section id="villages-culture" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Himalayan Villages and Cultural Trek Photography
            </h2>
            <p>
              The Annapurna foothills are home to several Magar and Gurung villages that bring a cultural dimension to trek photography, beyond pure landscape shots.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Ghandruk Stone Village and Mountain Lifestyle
            </h3>
            <p>
              Ghandruk is known for its traditional stone houses, many of which date back generations and sit with a direct view of the Annapurna range behind them. The Ghandruk stone village image in this gallery shows that architectural character clearly, with slate roofs and stacked stone walls that are distinct from construction elsewhere in Nepal.
            </p>
            <p>
              Photographing the village in the early morning, before the day's foot traffic picks up, gives you cleaner compositions of the stonework and the mountains together.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Swanta Valley Farming Landscapes
            </h3>
            <p>
              Swanta village is shaped by terraced farming fields that wrap around the hillside, a visual signature of subsistence agriculture in this part of the Annapurna region. The terraced fields photographed here show the rhythm of that farming landscape, with each tier following the natural contour of the slope.
            </p>
            <p>
              These terraces look noticeably different depending on the season, ranging from vivid green during planting months to a golden brown closer to harvest.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Capturing Human Stories on Trekking Routes
            </h3>
            <p>
              Some of the most memorable trek photography is not landscape at all, but the people who live and work along these routes. A teahouse owner preparing dal bhat, a child walking home from school in Swanta, or a porter resting at a ridge viewpoint can say more about a trek than another mountain panorama.
            </p>
            <p>
              When photographing people on the trail, a brief conversation and a simple ask for permission goes a long way, both ethically and toward getting a more natural, relaxed portrait.
            </p>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 6 */}
          <section id="best-locations" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Best Trek Photography Locations in Nepal
            </h2>
            <p>
              If your time is limited and you want to prioritize the viewpoints most likely to deliver strong images, a few spots on this circuit consistently outperform the rest.
            </p>

            <ul className="space-y-3 pl-6 list-disc text-stone-700">
              <li>
                <strong>Khopra Ridge Viewpoints:</strong> Khopra Ridge sits higher and further off the main Annapurna circuit than most trekkers venture, which means fewer crowds and a wider, less obstructed panorama. The ridge offers views across Dhaulagiri, Annapurna South, and Nilgiri Himal in a single frame.
              </li>
              <li>
                <strong>Poon Hill Sunrise Platform:</strong> Poon Hill remains the most reliable sunrise location on this trek, and its accessibility from Ghorepani makes it achievable even for trekkers with limited time or experience.
              </li>
              <li>
                <strong>Annapurna Conservation Area Trekking Routes:</strong> The wider Annapurna Conservation Area (ACAP) gives this trek its photographic range, from subtropical forest at lower elevations to alpine terrain near the high passes, presenting a broad variety of landscapes over a few days.
              </li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 7 */}
          <section id="photography-tips" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Trek Photography Tips From the Himalayas
            </h2>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Shooting in Unpredictable Mountain Weather
            </h3>
            <p>
              Weather in the Annapurna foothills can change within the same hour, and the temptation is to wait for &quot;perfect&quot; conditions before taking a photo. In practice, the more interesting images often come from embracing fog, partial cloud cover, or the moments just before or after rain.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              High-Altitude Camera Challenges
            </h3>
            <p>
              Cold temperatures shorten battery life significantly, and condensation can form on lenses when moving between warm teahouses and cold outdoor air. Keeping batteries insulated in an inner jacket pocket and letting your camera adjust to temperature gradually helps avoid both problems.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Composition Techniques for Mountain Scale
            </h3>
            <p>
              Mountains are difficult to photograph at true scale because there is rarely a familiar reference point in the frame. Including a person, a teahouse, or a stretch of trail in the foreground gives viewers something to measure the mountain against, making the resulting image feel far more immersive.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-6">
              Essential Gear for Trekking Photographers
            </h3>
            <p>
              You do not need professional expedition equipment to capture strong images on this trek. A few practical essentials matter more than camera specifications:
            </p>
            <ul className="space-y-2 pl-6 list-disc text-stone-700">
              <li>A lightweight mirrorless or DSLR camera, or a recent smartphone with manual exposure controls</li>
              <li>A polarizing filter to manage glare off snow and reduce haze in distant peaks</li>
              <li>Spare batteries kept warm in an inner pocket, since cold drains charge quickly</li>
              <li>A microfiber cloth for condensation and trail dust</li>
              <li>A small dry bag or rain cover, since weather can shift with little warning</li>
            </ul>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 8: Visual Showcase Gallery */}
          <section id="gallery-grid" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Community Trek Photography Gallery
            </h2>
            <p>
              The images below represent the trek photography gallery as it stands today, contributed by real travelers and guides who walked these routes. Each one includes its location and the moment it captures, so you can see exactly where and when it was taken.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 bg-stone-100 overflow-hidden">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">{img.location}</span>
                    <h3 className="font-extrabold text-stone-950 text-sm mt-1">{img.label}</h3>
                    <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">{img.alt}</p>
                    <span className="text-[9px] font-semibold text-stone-400 block mt-3 border-t border-stone-50 pt-2">Captured during: {img.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 9: Submit Form Box */}
          <section id="submit-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Submit Your Trek Photography
            </h2>
            <p>
              This showcase grows with every trekker who shares what they captured on the trail. If you took a photo of alpenglow over Nilgiri, a quiet moment in Swanta village, or anything else that captures what this trek actually looks and feels like, we want to see it.
            </p>
            <p>
              We feature photographs from verified clients who trekked with us, so submissions are reviewed before they go live on this page. This keeps the showcase honest and rooted in real trekking experiences rather than open to anyone with an unrelated photo to upload.
            </p>

            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-emerald-800 space-y-4 text-center mt-6">
              <h4 className="text-lg font-bold">Have Himalayan photos to share?</h4>
              <p className="text-xs leading-relaxed max-w-md mx-auto">
                Submit your verified trek photos and reviews to be showcased in our gallery and inspire future wilderness explorers.
              </p>
              <div className="pt-2">
                <Link
                  href="/review-submission"
                  className="inline-block rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-all"
                >
                  Submit Photo &amp; Review
                </Link>
              </div>
            </div>
          </section>

          <hr className="my-10 border-stone-200" />

          {/* FAQ Section */}
          <section id="faq-section" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-8">
              Frequently Asked Questions (FAQ)
            </h2>
            <PhotographerFaqInteractive faqs={faqs} />
          </section>

          <hr className="my-10 border-stone-200" />

          {/* Section 10: Conclusion */}
          <section id="conclusion" className="space-y-6 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              The Annapurna foothills do not need filters or staged compositions to look extraordinary. What this trek photographer showcase proves is that real conditions, real light, and real trekkers produce images that are just as striking as anything posed for a brochure, and considerably more honest about what you will actually see on the trail.
            </p>
            <p>
              Whether you are here to plan a trek with realistic expectations or to find inspiration for your own camera bag, we hope this gallery gave you a clearer picture of what Khopra Ridge, Poon Hill, Khayer Lake, and the surrounding villages have to offer.
            </p>
          </section>
        </article>

        {/* Sub-Silo Navigation Bar */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-stone-950">Explore More Photography Viewpoints</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold text-stone-600">
            <Link href="/viewpoints/best-photography-spots" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Best Photography Spots</span>
              <span>→</span>
            </Link>
            <Link href="/viewpoints/sunrise-at-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Sunrise Photography</span>
              <span>→</span>
            </Link>
            <Link href="/viewpoints/sunset-at-khopra-ridge" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Sunset Alpenglow</span>
              <span>→</span>
            </Link>
            <Link href="/viewpoints/best-viewpoints-khopra" className="p-4 bg-white border border-stone-200 rounded-2xl hover:text-emerald-600 hover:border-emerald-600 transition flex items-center justify-between shadow-sm">
              <span>Top Ridge Viewpoints</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-3xl bg-stone-950 p-8 sm:p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Himalayan Photography Tours</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to capture your own images on these trails?</h3>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Explore our Poon Hill, Khopra Ridge, and Sacred Khayer Lake trek packages to start planning your route, or submit your own trail photography to be featured in this community showcase.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/40"
              >
                Book Your Photo Adventure Now
              </Link>
              <Link
                href="/planning/khayer-lake-photography-guide"
                className="rounded-full bg-stone-800 px-8 py-3.5 text-sm font-bold text-stone-200 hover:bg-stone-700 transition-all border border-white/10"
              >
                Read Khayer Lake Photo Guide
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
