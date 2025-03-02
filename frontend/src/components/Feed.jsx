import React from "react";

const posts = [
  {
    id: 1,
    type: "Conference",
    title: "Tech Innovation 2025",
    description: "Join us for an exciting discussion on AI advancements.",
    likes: 120,
    comments: 35,
    shares: 20,
    image: "https://images.unsplash.com/photo-1726137569772-791c3b20b4cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    type: "Pitch Idea",
    title: "Startup Funding Opportunity",
    description: "A platform that connects startups with investors.",
    likes: 85,
    comments: 22,
    shares: 10,
    image: "https://images.unsplash.com/photo-1620608964186-18a8cfc2ad44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    type: "Event",
    title: "Startup Networking Meet",
    description: "Meet top founders and VCs in this networking event.",
    likes: 200,
    comments: 50,
    shares: 40,
    image: "https://plus.unsplash.com/premium_photo-1661963588720-838fd19183ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Feed = () => {
  return (
    <div className="bg-primary min-h-screen text-textColor p-10">
      <h1 className="text-4xl font-bold text-center mb-10">EnterConnect Feed</h1>
      
      {/* Wider Container */}
      <div className="max-w-6xl mx-auto space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="bg-secondary p-8 rounded-3xl shadow-2xl">
            {/* Larger Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
            {/* Post Content */}
            <div className="p-6">
              <span className="text-lg uppercase text-lightGray">{post.type}</span>
              <h2 className="text-3xl font-bold mt-4">{post.title}</h2>
              <p className="mt-4 text-lightGray text-xl">{post.description}</p>
              {/* Interaction Buttons */}
              <div className="flex justify-between mt-6 text-lightGray text-xl">
                <button className="hover:text-sky-950">👍 {post.likes}</button>
                <button className="hover:text-sky-950">💬 {post.comments}</button>
                <button className="hover:text-sky-950">🔁 {post.shares}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
