import Link from "next/link";

function page() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white w-full   px-5 md:px-12">
      <div className=" md:w-[80%] md:mx-auto">
        <section className="flex flex-col-reverse md:flex-row justify-between mt-20">
          <div className="w-[50%] flex flex-col gap-4">
            <p className="text-md font-semibold">Home - About Our Company</p>
            <h1 className="text-5xl  font-bold">
              Company that works for yours{" "}
              <span className="text-blue-500">business.</span>
            </h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              porro.
            </h4>
            <Link
              href="/"
              className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white mt-4 w-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border duration-500 md:w-64 text-center rounded"
            >
              See Portfolio
            </Link>
          </div>
          <div className="relative">
            <div className="bg-blue-500 relative h-56 w-80 z-20 rounded border">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="absolute h-32 w-72 rounded-full bg-blue-500  blur-xl -bottom-5 left-5 "></div>
          </div>
        </section>
        <section>
            <div>
                <p>We Believe Great Businesses Always Put People First.</p>
            </div>
        </section>
        <section>
            <div>
                our story
            </div>
            <div>
                what we do
            </div>
        </section>
        <section>
            <div>
                <div>Work Flow</div>
                <div>Description</div>
            </div>
            <div>
                WorkFlow Cards
            </div>
        </section>
        <section>
            <div>Articles</div>
        </section>
        
        

        <section>
            <div>CTA</div>
        </section>
      </div>
    </div>
  );
}

export default page;
