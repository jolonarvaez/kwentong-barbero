import { Section, Title } from "./components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function OurStory() {
  return (
    <main className="h-full">
      <div className="mb-14">
        <Section className="bg-[url('/landing-page.png')] bg-no-repeat bg-cover bg-center">
          <div className="flex justify-center items-center">
            <img
              className="my-28"
              src="./kb-patch-1-white.png"
              alt="kb-logo"
              style={{
                objectFit: "contain",
                height: "25rem",
              }}
            />
          </div>
        </Section>
        <Section className="sm:py-14 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="font-semibold md:text-3xl text-2xl flex flex-col justify-center">
              A Shop that Shears, Shaves and Shines so You Stay Sharp
            </div>
            <p>
              There are barber shops that give record-time haircuts, and there
              are those that offer a whole experience of relaxation and good
              conversation within delightful surroundings. Kwentong Barbero
              falls into the latter subset and has become a venue for male
              day-cations as memorable as its name.
            </p>
          </div>
        </Section>
        <Section>
          <div className="sm:space-y-4 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <img
                src="./our-story/humble.jpg"
                className="w-full  object-cover bg-center max-h-[350px] mx-auto"
              />
              <div className="sm:space-y-4 space-y-6">
                <Title> Humble beginnings and vision</Title>
                <p>
                  Richard was having a haircut back then at his old barbershop
                  along Session Road when his barber told him that the shop was
                  about to fold up. The business was for sale and his barber
                  asked him if he was interested. A typical conversation at the
                  barbershop - small talk leading to big ideas. This inspired
                  Richard to conceptualize a first class traditional full
                  service barbershop, a novel in the city.
                </p>
                <p>
                  When husband and wife Richard and Marissa Narvaez scored a
                  space for a grooming establishment in Baguio city, they
                  envisioned a throwback barber shop that would offer hair
                  services both current and classy, while paying homage to a
                  more genteel time of family-owned shops and service with a
                  personal touch.{" "}
                </p>
              </div>
            </div>
            <p>
              Since its debut in September 2002, this nostalgic barbershop has
              blended modern grooming with timeless hospitality, earning a
              reputation as an "old school" barbershop. By "old," we mean
              traditional, classic, special, and personal. Despite being
              imitated, the original shop remains genuine in its services and
              has never been equaled by others. It's the barbershop that set the
              standard and elevated the grooming experience for every gentleman
              in the city.
            </p>
          </div>
        </Section>
      </div>

      <Section className="text-white bg-dark-blue py-16">
        <div className="sm:space-y-4 space-y-6">
          <Title className="text-center">
            Kwentong Barbero Through the Years
          </Title>

          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              <CarouselItem >
                {" "}
                <p>
                  Kwentong Barbero burst onto the scene in September 2002 and
                  was initially located at the Porta Vaga Commercial Building.
                  The following year, the barbershop moved first to the Lower
                  Ground Floor of SM City Baguio on November 26 when the mall
                  first opened in the City of Pines.
                </p>
              </CarouselItem>
              <CarouselItem className="-z-50">
                {" "}
                <p>
                  On March 16, 2016, another branch opened at Holiday Park Hotel
                  branch and then two years later, on May 3 2018, Kwentong
                  Barbero opened its doors at SM City Urdaneta Central.
                </p>
              </CarouselItem>
              <CarouselItem className="-z-50">
                {" "}
                <p>
                  When the pandemic hit, the shop closed on March 16, 2020 but
                  three months later, on June 7, 2020, the barbershop was again
                  in full swing.
                </p>
              </CarouselItem>
              <CarouselItem className="-z-50">
                {" "}
                <p>
                  On October 15, 2022, the shop moved up to the 3rd floor of SM
                  City Baguio, near Cinema 3 & 4.
                </p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>
      <Section className="py-16">
        <div className="sm:space-y-4 space-y-6">
          <Title>Vintage Barbershop</Title>
          <p>
            With its black and white checkerboard floor, subway tiles, brick
            walls, and film posters evoking the Prohibition Era, Kwentong
            Barbero exudes a hyper stylish vintage vibe akin to a cozy
            neighborhood shop. Adding to its charm are original 1940s Koken
            barber chairs, a piece of history cherished by enthusiasts. The
            branch at SM City Baguio proudly showcases these iconic chairs,
            renowned for their durability and classic design. The best part is
            the services come at a price that won't break the bank, which has
            come to be the norm in other swanky salons.
          </p>
          <img
            className="w-full max-h-[450px] object-cover"
            src="./our-story/vintage2.jpg"
          />
        </div>
      </Section>
      <Section className="py-16 bg-dark-blue">
        <div className="sm:space-y-4 space-y-6">
          <Title className="text-gold">Exceptional Barberhop Service</Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            <p>
              After settling into a chair, opt for a shampoo and haircut where a
              short massage to obliterate tension is thrown in as a freebie. The
              body massage is anywhere from 15 minutes to an hour of sublime
              kneading to loosen tight spots and dissolve stress. Like any
              self-respecting salon, Kwentong Barbero offers the obligatory hair
              dye, hot oil and hair treatment
            </p>
            <p>
              But its authenticity as a traditional barber shop lies in the
              other services reserved for unkempt dudes and shaven gentlemen
              alike. Any man sick of plastic razors can book a hot-towel
              straight-razor shave. The services menu includes other exciting
              combo packages with price points that don't offend.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <img
              src="./our-story/exceptional-1.jpg"
              className="w-full md:max-w-[400px] object-cover bg-center max-h-[450px]"
            />
            <img
              src="./our-story/exceptional-3.jpg"
              className="w-full md:max-w-[400px] object-cover bg-center max-h-[450px]"
            />
          </div>
        </div>
      </Section>
      <div className="py-14 space-y-14">
        <Section className="">
          <Title className="text-center">The Kwentong Barbero Barbers</Title>
        </Section>
        <img
          src="./our-story/barbers.png"
          className="w-screen min-h-[300px] max-h-[500px] bg-center object-cover"
        />
        <Section>
          <p>
            But the ultimate and inimitable charm of Kwentong Barbero is found
            in the barbers themselves, who give you more than a haircut or a
            soothing shave. Between the snap of the clippers and the buzz of a
            razor are the sounds of conversation about sports, politics, and
            life. It's not unusual for a barber to service three generations of
            a family or witness a man's clean traditional Don Draper cut morph
            into the receding hairline of Leo Di Caprio. Here, the barber-client
            relationship doesn't end with good grooming. By the time your barber
            dusts you off, you would have, in all likelihood, made a friend
            you'll want to visit regularly. That's a quality that simply can't
            be copied and is exactly what sets Kwentong Barbero apart from the
            rest of the hair care industry.
          </p>
        </Section>
      </div>
    </main>
  );
}
