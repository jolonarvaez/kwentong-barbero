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
        <div className="h-screen -mt-[50px] flex justify-center items-center">
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
              <div className="text-5xl font-bold">Our Story</div>
            </div>
            <p
              style={{
                fontSize: "1.125rem",
              }}
              className="text-center sm:text-left"
            >
              Kwentong Barbero isn't just for quick haircuts—it's a home for
              relaxation, engaging conversations, and timeless charm. Founded by
              Richard and Marissa Narvaez in Baguio City, the idea sparked when
              Richard's barber on Session Road mentioned the shop was closing
              and asked if he was interested in buying it. This small talk led
              Richard to conceptualize a first-class traditional full-service
              barbershop, a novel concept in the city. Since its debut in
              September 2002, this nostalgic barbershop has blended modern
              grooming with timeless hospitality, earning a reputation as an
              "old school" barbershop. By "old," we mean traditional, classic,
              special, and personal. Despite being imitated, the original shop
              remains genuine in its services and has never been equaled by
              others. It's the barbershop that first elevated the grooming
              experience for every gentleman in the city.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center">
            <Image
              src="/our-story/storefront.jpg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover bg-contain bg-center md:max-h-[400px]"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <Image
              src="/our-story/emilio.jpg"
              width={1000}
              height={1000}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white ">
          <div className="flex flex-col space-y-5">
            <Image
              width={1000}
              height={1000}
              loading="lazy"
              src="/legacy.png"
              alt="legacy"
              className="w-full max-h-[450px]"
            />
            <div className="text-4xl font-bold">Legacy</div>
            <p>
              <span className="italic">Kwentong Barbero</span> is a "throwback"
              barbershop offering modern and classy hair services while honoring
              the era of family-owned shops and personalized service. With three
              shops in Baguio City and one in Urdaneta City,{" "}
              <span className="italic">Kwentong Barbero</span>
              has grown and innovated since its debut in September 2002. It
              blends modern grooming with timeless hospitality, earning a
              reputation as an "old school" barbershop—traditional, classic,
              special, and personal. Despite imitations, the original shop
              remains unmatched, setting the standard for elevating the grooming
              experience for every gentleman in the city.
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            <Image
              width={1000}
              height={1000}
              loading="lazy"
              src="/craftsmanship.png"
              alt="craftsmanship"
              className="w-full max-h-[450px]"
            />
            <div className="text-4xl font-bold">Craftsmanship</div>
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
              width={1000}
              height={1000}
              loading="lazy"
              src="/vintage.png"
              alt="vintage"
              className="w-full max-h-[450px]"
            />

            <div className="text-4xl font-bold">Vintage</div>
            <p>
              <span className="italic">Kwentong Barbero Barbershop</span> exudes
              a hyper-stylish vintage vibe with its 1940s barber chairs,
              black-and-white checkerboard floor, subway tiles, and brick walls
              reminiscent of the Prohibition Era. The authentic charm creates a
              comforting neighborhood shop atmosphere, making you feel welcome
              the moment you step in. The interior is calming and neat, with the
              fresh, clean scent of a traditional barbershop. This vintage feel
              highlights the tenured and professional reputation of the barbers,
              offering a nostalgic escape that combines timeless elegance with
              modern grooming.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Locations */}

      <Section className="py-10">
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
          <div className="text-5xl font-bold">Our Locations</div>
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
