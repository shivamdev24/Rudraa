import Image from "next/image";
import Hero from "@/public/Hero.webp"
import Link from "next/link";
import { InfiniteMovingCard } from "@/app/Components/ui/InfiniteMovingCard";

import AboutUsImg from "@/public/rts.png"



import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";













const testimonials = [
  {
    name: "Java",
    svg: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    name: "Kotlin",
    svg: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  },
  {
    name: "Swift",
    svg: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Objective-C",
    svg: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "Dart",
    svg: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "JavaScript",
    svg: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    svg: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },

  {
    name: "Python",
    svg: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },

  {
    name: "Go",
    svg: "https://www.vectorlogo.zone/logos/golang/golang-official.svg",
  },
  {
    name: "Rust",
    svg: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  },
  {
    name: "Ruby",
    svg: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  },
  {
    name: "Bash",
    svg: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  },

  {
    name: "SQL",
    svg: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "MongoDB",
    svg: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    svg: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Julia",
    svg: "https://www.vectorlogo.zone/logos/julialang/julialang-icon.svg",
  },
];

const Benifit = [
  {
    Icon: "https://cdn-icons-png.freepik.com/256/11726/11726534.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Increased efficiency and productivity",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/11135/11135271.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Enhanced security and data protection",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/12198/12198106.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Reduced IT costs and downtime",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/12495/12495774.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Improved scalability and flexibility",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/3247/3247114.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "24/7 support and peace of mind",
  },
];
const Service = [
  {
    Icon: "https://cdn-icons-png.freepik.com/256/14019/14019053.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Custom Website Design & Development",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/2092/2092050.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Content Management System ",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/12419/12419169.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Landing Page Design & Development",
  },
  {
    Icon: "https://cdn-icons-png.freepik.com/256/2304/2304389.png?ga=GA1.1.635363915.1718627588&semt=ais_hybrid",
    Title: "Responsive Design Optimization",
  },
];


export default function Home() {
  return (
    <div className="dark:bg-black bg-white text-black dark:text-white">
      <section>
        <div className="h-auto  md:h-[30rem] pt-20 md:pt-40 w-full    dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="w-full md:max-w-7xl px-6 z-10 py-5 sm:px-6 lg:px-8 flex flex-col gap-8 md:flex-row mx-auto md:justify-between">
            <div className="w-full md:w-1/2 flex flex-col ">
              <p className="border-[.1px] border-gray-300 text-gray-500 w-40 mb-3 rounded-full text-center text-xs py-1">
                Intro to Our Templates
              </p>
              <h1 className="text-5xl font-bold">
                Empowering Businesses with Reliable IT Solutions
              </h1>
              <h2 className="text-base text-gray-500">
                We provide comprehensive IT services to keep your business
                technology running smoothly and securely.
              </h2>
              <Link
                href="/"
                className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white mt-4 w-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border duration-500 md:w-64 text-center rounded"
              >
                Contact Us Today
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex gap-2 ">
              <div className="">
                <div className="w-full h-[17rem] md:w-[40rem] md:h-[20rem] overflow-hidden rounded">
                  <Image
                    src={Hero}
                    alt="Hero Image "
                    className="rounded object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:h-[14rem] rounded-md flex flex-col  antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <h1 className="text-3xl text-center  font-bold mb-6">
            {" "}
            Technology Stack We Used.
          </h1>
          <InfiniteMovingCard
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      <section>
        <div className="w-full md:max-w-7xl px-6 z-10 py-20 sm:px-6 lg:px-8 flex flex-col justify-center  mx-auto ">
          <h1 className="text-4xl text-center font-bold">
            What Services Are We Offer?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
            {Service.map((items, index) => (
              <Link
                href="/"
                // href={items.path}
                key={index}
                className="w-full h-auto md:w-72 md:h-56  py-6  rounded flex flex-col items-center text-center justify-between duration-500 md:py-10 hover:scale-105 hover:shadow-md hover:shadow-blue-200 p-2"
              >
                <Image
                  src={items.Icon}
                  width={90}
                  height={90}
                  alt="Our Key Benifit"
                />
                <p className="mt-3"> {items.Title} </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full md:max-w-7xl px-6 z-10 pb-10 sm:px-6 lg:px-8 flex flex-col justify-center  mx-auto  bg-white dark:bg-black text-black dark:text-white">
          <h1 className="text-4xl text-center font-bold">
            Key Benefits of Our IT Services
          </h1>
          <div className="flex flex-wrap items-center justify-center mt-8 gap-4">
            {Benifit.map((items, index) => (
              <div
                key={index}
                className="w-36 md:w-56  rounded flex flex-col items-center text-center justify-center p-2"
              >
                <Image
                  src={items.Icon}
                  width={60}
                  height={60}
                  alt="Our Key Benifit"
                />
                <p className="mt-3"> {items.Title} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="w-full md:max-w-7xl px-6 z-10 pb-10 sm:px-6 lg:px-8 flex flex-col justify-center  mx-auto  bg-white dark:bg-black text-black dark:text-white">
          <h1 className="text-4xl text-center font-bold">Know About us.</h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start mt-8 gap-4">
            <div className="w-full md:w-[50%] overflow-hidden">
              <Image
                src={AboutUsImg}
                width={1000}
                height={1000}
                alt="About Image"
                className="w-full h-[30vh]  md:w-[35vw] rounded-lg md:h-[44vh] object-cover  "
              />
            </div>
            <div className="w-full md:w-[40%]">
              <h1 className="text-3xl font-bold mb-4">
                Welcom to YourCompany.
              </h1>
              <p className="text-lg">
                <strong>
                  We&apos;re a passionate team of IT architects, not just service
                  providers.
                </strong>{" "}
                We believe in the transformative power of technology, and we&apos;re
                dedicated to crafting innovative solutions that propel your
                business forward.
              </p>
              <p className="text-lg mt-2">
                <strong>Our vision is your success.</strong> We partner with you
                to understand your unique goals and challenges, then leverage
                our expertise to craft solutions that are not only cutting-edge
                but perfectly tailored to your needs.
              </p>
              <Link href="/" className="text-blue-500 font-bold mt-3">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                  Subscribe to our newsletter.
                </h2>
                <p className="mt-4 text-lg leading-8 ">
                  Don&apos;t miss out on the latest insights and resources that can
                  help you transform your IT and achieve your business goals.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border outline-none  dark:bg-white/5 px-3.5 py-2 dark:text-white shadow-sm r sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 f focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-black/5 ring-black/10 dark:bg-white/5 p-2 ring-1 dark:ring-white/10">
                    <CalendarDaysIcon
                      className="h-6 w-6 text-black dark:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold ">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-6 00">
                    Keep your finger on the pulse of the ever-evolving IT
                    landscape with our curated articles and expert commentary.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-black/5 ring-black/10 dark:bg-white/5 p-2 ring-1 dark:ring-white/10">
                    <HandRaisedIcon
                      className="h-6 w-6 text-black dark:text-white "
                      aria-hidden="true"
                    />
                  </div>
                  <dt className="mt-4 font-semibold ">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    We value your privacy and will never share your email
                    address with third parties.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5c9] to-[#2a659c] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* <section>
        <div className="md:mx-auto md:w-[80%] w-full lg:px-8 px-6 py-16">
          <div className="w-full flex gap-4 flex-col md:flex-row items-center justify-center md:justify-around">
            <div className="flex flex-col w-full md:w-[30%]">
              <h2 className="text-3xl font-bold  mb-4">
                Ready to Transform Your Idea?
              </h2>
              <Link
                href="/"
                className="bg-indigo-500 text-white hover:bg-indigo-400 text-center p-2"
              >
                Let&apos;s Talk
              </Link>
            </div>
            <div className="grid grid-cols-3 w-full md:w-56 gap-2">
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/x/x-icon.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg"
                  width={1000}
                  className="w-20 p-1 rounded bg-white"
                  height={1000}
                  alt="GMail Icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
