import Image from "next/image";
import { Gallery } from "app/components/gallery";
import { ZoomableImage } from "app/components/zoomable-image";
import { posts } from "./index";

export default function EeEvalPost() {
  const postData = posts.find((p) => p.slug === "ee-eval");
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <h1 className="!text-4xl font-bold !my-10 !text-blue-500 dark:!text-white">
          A CS research on Automated Assessment of AI-Generated Explorable
          Explanations.
        </h1>
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Abstract
            </h3>
            <p>
              EE-Eval is an <strong>automated multi-agent pipeline</strong> for
              evaluating AI-generated interactive learning materials. Existing
              evaluation benchmarks focus on static properties such as code
              correctness or visual quality, but fail to assess interaction
              quality, or whether an interactive system actually supports
              meaningful learning.
            </p>
            <p>
              EE-Eval addresses this gap by{" "}
              <strong>
                modeling interactive learning materials as a new data structure
                based on finite state machines.
              </strong>{" "}
              Through a full-stack pipeline, it enables systematic testing
              between transition states to{" "}
              <strong>
                assess whether the interaction flow aligns with pedagogical
                goals.
              </strong>
            </p>
            <p>
              This project is a continuation of research from{" "}
              <a
                href="/work/interactive-neural-networks"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Interactive Neural Networks
              </a>
              .
            </p>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Toolkit
            </h3>
            <p>Javascript, Python, Machine Learning, Full-stack Development</p>

            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Award
            </h3>
            <p className="font-semibold !mb-0 !mt-0">
              <em>Capstone Award of Distinction</em>
            </p>
            <p className="!mb-0 !mt-0">NYU Shanghai Computer Science, 2025</p>

            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Publication
            </h3>
            <p>
              This paper has been submitted to{" "}
              <strong>
                International Conference on AI in Education (AIED) 2026
              </strong>
            </p>

            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              My Role
            </h3>
            <p>Software Engineering, Research</p>

            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Collaborator
            </h3>
            <p>Zhewei Wang</p>

            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400">
              Links
            </h3>

            <p>
              <a
                href="https://docs.google.com/document/d/1MnIv9_qzOLk9guK6C6_6YoQnwYJ3WrmEXutnxtWTK_8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Capstone Paper
              </a>
            </p>
          </div>
        </div>

        {/* ============== Main Content ================= */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

          <ZoomableImage
            src="/blog-images/ee/p1.png"
            alt=""
            className="w-full shadow-lg"
          />
          <ZoomableImage
            src="/blog-images/ee/p2.png"
            alt=""
            className="w-full shadow-lg !mt-10"
          />
        </div>
      </div>
    </article>
  );
}
