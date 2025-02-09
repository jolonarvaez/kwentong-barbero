import LinkButton from "@/components/reusables/link-button";
import NavLink from "@/components/reusables/nav-links";
import ProductCard from "@/components/reusables/product-card";
import Image from "next/image";
import { ContactForm } from "./client-components";
import { Section } from "./components";
import Locations from "@/components/reusables/locations";
import { SOCMED_LINKS } from "@/constants/config";
import { Button } from "@/components/ui/button";
export default function Home() {
  const locations = require("../../constants/locations.json");

  return (
    <main className="h-full">
      {/* Masthead */}
      <Section className="bg-[url('/landing-page.png')] bg-no-repeat bg-cover bg-center">
        <div className="h-screen -mt-[150px] flex justify-center items-center">
          <div className="flex flex-col items-center gap-5 text-white">
            <img
              className=""
              src="./kb-patch-1-white.png"
              alt="kb-logo"
              style={{
                objectFit: "contain",
                height: "15.625rem",
              }}
            />
            <div className="text-center font-bold text-4xl md:text-6xl max-w-[896px]">
              A shop that shears, shaves & shines so you stay sharp.
            </div>
            <p
              className="mb-2"
              style={{
                fontSize: "1.5rem",
              }}
            >
              Find us at:
            </p>
            <div className="flex flex-row space-x-4">
              <LinkButton
                href={SOCMED_LINKS.FACEBOOK}
                leftSideIcon="/facebook-icon.png"
              >
                Facebook
              </LinkButton>
              <LinkButton
                href={SOCMED_LINKS.INSTAGRAM}
                leftSideIcon="/instagram-icon.png"
              >
                Instagram
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Our story */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 lg:pt-24">
          <div className="col-span-2">
            <div className="flex flex-row items-center mb-4">
              <img
                className="mr-5"
                src="/kb-patch-3-black.png"
                alt="facebook-logo"
                style={{
                  objectFit: "contain",
                  height: "5.313rem",
                }}
              />
              <h2
                className="font-bold"
                style={{
                  fontSize: "2.875rem",
                }}
              >
                Our Story
              </h2>
            </div>

            <p
              style={{
                fontSize: "1.125rem",
              }}
              className="text-center sm:text-left"
            >
              Kwentong Barbero isn't just a place for quick haircuts—it's a home
              where gentlemen enjoy relaxation, engaging conversations, and
              timeless charm. Founded by Richard and Marissa Narvaez in Baguio
              City, this nostalgic barbershop blends modern grooming with
              old-world hospitality, drawing visitors seeking a memorable
              experience since its debut in September 2002.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/our-story/exceptional-1.jpg"
              width={355}
              height={450}
              className="w-full h-full object-cover bg-contain bg-center md:max-h-[400px]"
              alt=""
            />
          </div>
          <div className="w-full">
            <Image
              src="/our-story/emilio.jpg"
              width={355}
              height={450}
              className="w-full h-full object-cover bg-contain bg-center md:max-h-[400px]"
              alt=""
            />
          </div>
        </div>
        <a href="/our-story">
          {" "}
          <Button className="px-12 my-10 mx-auto">More of Our Story</Button>
        </a>
      </Section>

      {/* 3 Desciption */}
      <Section className="bg-dark-blue text-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-white ">
          <div className="flex flex-col space-y-5">
            <Image
              width={400}
              height={450}
              loading="lazy"
              src="/legacy.png"
              alt="legacy"
              className="w-full"
            />
            <h2
              className="font-bold"
              style={{
                fontSize: "2.875rem",
              }}
            >
              Legacy
            </h2>
            <p>
              Richard was getting his haircut at his old Session Road barbershop
              when his barber mentioned the shop was closing. The business was
              up for sale, and in typical barbershop fashion—small talk turned
              into big ideas. Now, after twenty-two years, Kwentong Barbero
              stands as a "throwback" barbershop offering modern and classy hair
              services, while honoring a gentler era of family-owned shops and
              personalized service. With two shops in Baguio City, one in
              Urdaneta City, and exciting plans brewing for a new venture,
              Kwentong Barbero continues to grow and innovate.
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            <Image
              width={400}
              height={450}
              loading="lazy"
              src="/craftsmanship.png"
              alt="craftsmanship"
              className="w-full"
            />
            <h2
              className="font-bold"
              style={{
                fontSize: "2.875rem",
              }}
            >
              Craftsmanship
            </h2>
            <p>
              Craftsmanship thrives with a blend of seasoned old-timer barbers
              adept at classic cuts and young, innovative barbers specializing
              in modern styles. Beyond grooming, they forge genuine connections
              through conversations about sports, politics, and life, often
              serving multiple generations of families. This personalized
              approach ensures each visit is not just about a haircut but about
              forming lasting friendships, setting Kwentong Barbero apart in the
              hair care industry.
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            <Image
              width={400}
              height={450}
              loading="lazy"
              src="/vintage.png"
              alt="vintage"
              className="w-full"
            />

            <h2
              className="font-bold"
              style={{
                fontSize: "2.875rem",
              }}
            >
              Vintage
            </h2>
            <p>
              Kwentong Barbero Barbershop exudes a hyperstylish vintage vibe
              with its 1940s barber chairs, black and white checkerboard floor,
              subway tiles, brick walls, and nostalgic film posters, reminiscent
              of the Prohibition Era. Despite its quaint gentleman’s club
              appearance, it warmly welcomes ladies and children, creating a
              comforting neighborhood shop atmosphere.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Locations */}
      <Section className="mt-10">
        <div
          className="flex flex-col items-center gap-6 mb-10"
          id="our-locations"
        >
          <img
            loading="lazy"
            src="/kb-archway-black.png"
            alt="kb-archway-black.png"
            style={{
              height: "11rem",
            }}
          />
          <h2
            className="font-bold"
            style={{
              fontSize: "3.625rem",
            }}
          >
            Our Locations
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white">
          {locations.map((location: any, index: any) => (
            <Locations key={index} {...location} />
          ))}
        </div>
      </Section>

      {/* Contact us */}
      <Section className="bg-[url('/contact-us-photo.png')] bg-cover bg-center py-10 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2" id="contact-us">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              loading="lazy"
              src="/kb-logo-2.png"
              alt="Kwentong Barbero"
              className="w-48 md:w-72 h-auto"
            />

            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
