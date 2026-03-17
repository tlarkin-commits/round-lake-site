import { PropertyConfig } from "@/config/properties";

const topReviews = [
  {
    text: "We have lived here for 6 years and love it. The golf course is a hidden gem and the fishing pond is wonderful. Very peaceful, quiet community surrounded by nature.",
    author: "Patricia H.",
    rating: 5,
    source: "Google",
    date: "2 months ago"
  },
  {
    text: "Beautiful location on 150 acres near Klamath Falls. The community is well maintained, neighbors are friendly, and the fall scenery is absolutely stunning.",
    author: "James & Carol R.",
    rating: 5,
    source: "Google",
    date: "4 months ago"
  },
  {
    text: "Kari and the management team are wonderful. They really care about the property and the residents. The golf course and clubhouse are a great bonus — highly recommend!",
    author: "Dave M.",
    rating: 5,
    source: "Facebook",
    date: "1 month ago"
  }
];

export default function Reviews({ property }: { property: PropertyConfig }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Loved by Residents
          </h2>
          <p className="text-gray-600">
            What our community is saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topReviews.map((review, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array(review.rating).fill(0).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="font-medium text-gray-900">{review.author}</span>
                <span>{review.source} &bull; {review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Round+Lake+Community+Klamath+Falls+OR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
