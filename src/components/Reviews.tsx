import { PropertyConfig } from "@/config/properties";

// Top reviews - would be pulled from API in production
const topReviews = [
  {
    text: "Beautiful park with amazing views! The pool is sparkling clean and the staff is incredibly friendly. We stayed for 2 weeks and did not want to leave.",
    author: "Sarah M.",
    rating: 5,
    source: "Google",
    date: "2 weeks ago"
  },
  {
    text: "Perfect spot for our extended stay. Full hookups work great, WiFi is fast, and it is quiet at night. Close to everything but feels like an escape.",
    author: "Mike & Linda",
    rating: 5,
    source: "RV LIFE",
    date: "1 month ago"
  },
  {
    text: "We are snowbirds and this is our 3rd year coming back. The community is wonderful and management really cares. Highly recommend!",
    author: "Robert T.",
    rating: 5,
    source: "Facebook",
    date: "3 weeks ago"
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
            Loved by Guests
          </h2>
          <p className="text-gray-600">
            Rated 9.9/10 on RV LIFE • 4.8 stars on Google
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
                <span>{review.source} • {review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={property.social.yelp || property.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Read all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
