import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function InvisibleWorldsPost() {
  const postData = posts.find((p) => p.slug === "invisible-worlds");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-6xl font-bold !my-10 !text-green-600 dark:!text-white">
          Can we turn the world itself into the interface for learning?
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-500">
              Abstract
            </h3>
            <p>
              <strong>
                We encounter the world through interfaces, but most of them
                flatten how knowledge is felt and understood.
              </strong>
            </p>

            <p>
              <strong>
                Inspired by <em>The Magic School Bus</em>, I turn the physical
                world itself into an interactive interface, letting people learn
                by directly manipulating invisible principles like scale, time,
                and perception.
              </strong>
            </p>

            <p>
              Invisible Worlds explores <strong>Extended Reality</strong>{" "}
              (especially, Mixed Reality) as a perspective-shifting educational
              tool, aiming to turn the physical world itself into a user
              interface. By utilizing Unity with Meta Quest SDK, the system
              overlays interactive layers onto real-world objects, allowing
              learners to{" "}
              <strong>
                experience phenomena normally beyond human physical limitation
                or perception.
              </strong>{" "}
              For example, zoom into a plant's inside down to the cells and even
              molecules to find out how photosynthesis works, or sense
              surrounding spaces mapped through bat-inspired echolocation.{" "}
            </p>
            <p>
              <strong>
                The goal is simple: to make learning intuitive and fun.
              </strong>
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-500">
              Toolkit
            </h3>
            <p>Unity, Meta Quest SDK</p>

            <h3 className="text-lg font-semibold text-green-600 dark:text-green-500">
              Award
            </h3>
            <p>The initial prototype won:</p>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Second Place & Most Business Viable</em>
            </p>
            <p className="!mt-0">Unity × Rokid XR Hackathon, Shanghai, 2025</p>
          </div>
        </div>

        {/* ============== Main Content ================= */}
        {/* Demo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Video Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Demo 1: Journey Inside a Plant</strong>
              </p>
              <p>
                A real plant serves as a portal to smaller dimensions. Through
                hand gestures, learners can zoom from leaf to cell, even down to
                the molecular level.
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/o2v6sz6MlSo?si=F8yB8G9gODpIne3W"
                  className="absolute top-0 left-0 w-full h-full "
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Demo 2: Bat Vision</strong>
              </p>
              <p>
                Learners perceive their surroundings through a bat’s perspective
                by making sound in different directions. Their vocal input is
                captured in real time, mapped via ray-casting and rendered as
                point-cloud that reconstructs the space.
              </p>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/aqZ-kz_6_Kc?si=8n8fClpR21LUgJ5J"
                  className="absolute top-0 left-0 w-full h-full "
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Images */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Workshop Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>
                  Audience exploring the journey inside of a plant
                </strong>
              </p>
              <ZoomableImage
                src="/blog-images/iw3/u2.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/iw3/u4.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <p className="!my-2">
                <strong>Teaching children to interact with the project</strong>
              </p>
              <ZoomableImage
                src="/blog-images/iw3/u6.jpg"
                alt="image"
                className=""
              />
              <ZoomableImage
                src="/blog-images/iw3/u7.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>
          <p className="!my-4">
            <strong>Audience exploring bat vision</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw3/u9.jpg"
                alt="image"
                className=""
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw3/u10.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>

          <div className="my-8 p-6 border-2 border-green-600 dark:border-green-500 rounded-lg">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-500 !my-0">
              User Feedback
            </h3>
            <p>
              “This project is very fun and practical, I wish I could have this
              in my high school class! I can see great potential in putting this
              piece into application in middle school or high school.” --
              Maelyn, IMA Student
            </p>
            <p>
              “The project is designed so well and the learning process is
              really solid in it. The experience of zooming and dimension
              switching in the AR is so great that it gives the audience an even
              more immersive feeling.” -- Jean, IMA Student
            </p>
            <p>
              “The concept is really interesting and meaningful! I love being
              put into bat’s shoes to sense the world, it really gives me an
              alienated feeling and makes me reflect on how the world could be
              perceived differently.” -- Lisa, IMA Student
            </p>
          </div>
        </div>

        {/* Concept */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Concept</h2>
          <p>
            Invisible Worlds emerges from a frustration with{" "}
            <strong className="text-yellow-600">
              how traditional education flattens complex phenomena into static
              diagrams and memorized definitions.
            </strong>{" "}
            We learn about photosynthesis, but never got to see the processes
            happening inside a plant. We know bats navigate with sound without
            ever experiencing their perception of space. This project breaks
            that disconnection by reimagining how we interact with the world to
            learn.
          </p>
          <p>My goals include the following:</p>

          {/* Goal 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <p>
                <strong className="text-red-600">
                  1. Reimagine Interfaces:{" "}
                </strong>
              </p>
              <p>
                Ever since the creation of the concept "interface", we've
                experienced text-based interface (terminal), graphical interface
                (screen), and more recently, spatial interface (extended
                reality). The spatial interface gives us a lot of new
                possibilities, but meanwhile in many XR applications, the means
                of interaction are still limited to toggling some GUI or
                information cards in the 3D world, or attaching some 3D objects
                to the anchors detected.{" "}
                <strong className="text-yellow-600">
                  To me, the potential of spatial interfaces are yet to be
                  unlocked.
                </strong>{" "}
                I want to build an experience where we can seamlessly enter
                another "world" through physical objects with the help of XR.
                Countless objects become countless "portals" that come together
                to form{" "}
                <strong className="text-yellow-600">
                  the world as an interface.
                </strong>
              </p>
            </div>
            <div>
              <ZoomableImage
                src="/blog-images/iw3/a2.jpg"
                alt="image"
                className=""
              />
            </div>
          </div>

          {/* Goal 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <p>
                <strong className="text-red-600">
                  2. Shifting Perspective:{" "}
                </strong>
              </p>
              <p>
                I was initially inspired by The Magic School Bus, where Ms.
                Frizzle teaches her class through adventures. Instead of reading
                about an object, they enter it, and experience how it works from
                the inside out.
              </p>
              <p>
                Rather than passively transmitting knowledge from a
                textbook/slides/lecture in a one-directional way, I want to pass
                knowledge, or more precisely, the awe or curiosity for
                knowledge, through interactive experiences. I believe that
                Extended Reality can offer a special embodied experience. Beyond
                conveying facts, the project{" "}
                <strong className="text-yellow-600">
                  cultivates curiosity and empathy
                </strong>{" "}
                by letting learners{" "}
                <strong className="text-yellow-600">
                  embody experiences beyond human physical limits
                </strong>
                , exploring diverse scale, perception, physical law, and
                dimensions that humans can't normally reach.
              </p>
            </div>
            <div>
              <ZoomableImage
                src="/blog-images/iw3/a1.jpg"
                alt="Neuron Demo"
                className="w-4/5"
              />
            </div>
          </div>

          {/* Goal 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <p>
                <strong className="text-red-600">
                  3. Technology Choice: Mixed Reality
                </strong>
              </p>
              <p>
                Built in Unity with Meta Quest hand tracking and passthrough,
                the system leverages{" "}
                <strong className="text-yellow-600">Mixed Reality</strong> to
                seamlessly merge the physical and virtual worlds. MR ensures
                interactions are embodied, spatially grounded, and immediate,
                making the world itself the playground and teacher.
              </p>
            </div>
            <div>
              <ZoomableImage
                src="/blog-images/iw3/p1.jpg"
                alt="Neuron Demo"
                className=""
              />
            </div>
          </div>
        </div>
        {/* Design*/}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Design</h2>
          <h3>1. Journey Inside a Plant</h3>
          <p>
            It enables a user stand in front of a real plant, pinch their
            fingers, and physically “zoom” through layers of biological
            structure, from leaf, cell, chloroplast, all the way down to
            molecules. Several interactive mini-games are in the way: For
            example, users can guide CO₂ and water molecules together to create
            sugar and oxygen molecules, turning the abstract idea of
            photosynthesis into something tactile and playful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-9/10">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <strong>User Journey Design</strong>
              <ZoomableImage
                src="/blog-images/iw3/a6.jpg"
                alt="image"
                className="shadow-lg"
              />
            </div>
            <div className="!space-y-4">
              <strong>Storyboard</strong>
              <ZoomableImage
                src="/blog-images/iw3/p2.jpg"
                alt="image"
                className="shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-9/10 mt-10">
            {/* 上下间隔 */}
            <div className="!space-y-4">
              <strong>Interaction Design break-down</strong>
              <ZoomableImage
                src="/blog-images/iw3/p4.jpg"
                alt="image"
                className="shadow-lg"
              />
            </div>
            <div className="!space-y-4">
              <ZoomableImage
                src="/blog-images/iw3/p5.jpg"
                alt="image"
                className="shadow-lg"
              />
            </div>
          </div>

          <strong>Technical Implementation:</strong>
          <p>
            I built customized spatial control in Unity with C# scripting,
            including grab, pinch-and-drag to scale, swipe-to-rotate, poke,
            raycast-to-place-objects and so on.
          </p>
          <p>
            To see more details, please scroll down to the Development Section.
          </p>

          <strong>Interaction Details:</strong>
          <p>Navigating different dimensions through XR spacial controls.</p>
          <ZoomableImage
            src="/blog-images/iw3/a3.png"
            alt="image"
            className="w-1/2"
          />

          <h3>2. Bat Vision</h3>
          <p>
            Users experience space through a bat’s perspective,{" "}
            <strong>
              sensing the surrounding by making sound in a certain direction.
            </strong>
          </p>
          <p>
            Their vocal input is captured in real time, mapped via{" "}
            <strong>ray-casting</strong> to simulate echolocation, and rendered
            as point-cloud that to simulate echolocation, and rendered as{" "}
            <strong>point-cloud</strong> that reconstructs the surrounding.
          </p>
          <strong>User Interaction Design:</strong>
          <ZoomableImage
            src="/blog-images/iw3/p3.jpg"
            alt="Neuron Demo"
            className="w-2/3 "
          />
          <strong>Technical Implementation:</strong>
          <p>
            I developed the space-sensing interaction through the Depth API and
            Raycast API offered by MR Utility Kit. See details in Development
            section.
          </p>
          <strong>Interaction Details:</strong>
          <ZoomableImage
            src="/blog-images/iw3/a4.png"
            alt="image"
            className="w-1/2"
          />
        </div>

        <h3>3. The Three-body Problem (In progress)</h3>
        <ZoomableImage
          src="/blog-images/iw3/a5.png"
          alt="image"
          className="w-full"
        />

        {/* Development */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <div className="grid gap-4 mr-4 mb-6 w-4/5">
            <ZoomableImage
              src="/blog-images/iw3/p6.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p7.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p8.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p9.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p10.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p11.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p12.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p13.jpg"
              alt="Image"
              className="w-full h-auto"
            />
            <ZoomableImage
              src="/blog-images/iw3/p14.jpg"
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
