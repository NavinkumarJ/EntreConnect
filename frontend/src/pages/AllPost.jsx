import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";


const AllPost = () => {
  const {backendUrl} = useContext(AppContent);
  const [ideas, setIdeas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
    owner: "",
    phone: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    const { data } = await axios.get(backendUrl+'/api/ideas/get-idea');
    setIdeas(data.data);
  };

  const handleInterest = (phone, ownerName) => {
    const message = encodeURIComponent(
      `Hey, ${ownerName}, found your idea on EntreConnect. Sounds interesting! What about a small meeting?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(backendUrl+'/api/ideas/post-idea', newIdea);
    toast.success(data.message);
    fetchIdeas(); // Refresh ideas after adding a new one
    setShowForm(false);
    setNewIdea({
      title: "",
      description: "",
      owner: "",
      phone: "",
      category: "",
      image: "",
    });
  };



  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Startup Ideas</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
      {[
        "All",
        "Startup",
        "Technology",
        "Agriculture",
        "Delivery",
        "Health & Wellness",
        "Finance",
        "Education",
        "E-commerce",
        "Entertainment",
        "Real Estate",
        "Sustainability",
        "Transportation",
        "Other",
      ].map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-lg transition ${
            selectedCategory === cat
              ? "bg-gray-900 text-white"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>


      {/* Ideas List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas
          .filter((idea) => selectedCategory === "All" || idea.category === selectedCategory)
          .map((idea) => (
            <div key={idea._id} className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img src={idea.image} alt={idea.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{idea.title}</h2>
                <p className="text-gray-600 mb-4">{idea.description}</p>
                <p className="text-sm text-gray-500">By {idea.owner}</p>
                <button
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                  onClick={() => handleInterest(idea.phone,idea.owner)}
                >
                  I'm Interested
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        + Add Idea
      </button>

      {/* Add Idea Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Your Startup Idea</h2>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="w-full border p-2 mb-2"
              value={newIdea.title}
              onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              className="w-full border p-2 mb-2"
              value={newIdea.description}
              onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Owner Name"
              className="w-full border p-2 mb-2"
              value={newIdea.owner}
              onChange={(e) => setNewIdea({ ...newIdea, owner: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Phone (WhatsApp)"
              className="w-full border p-2 mb-2"
              value={newIdea.phone}
              onChange={(e) => setNewIdea({ ...newIdea, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full border p-2 mb-2"
              value={newIdea.image}
              onChange={(e) => setNewIdea({ ...newIdea, image: e.target.value })}
            />

            {/* Category Dropdown */}
            <select
              className="w-full border p-2 mb-2 rounded-lg"
              value={newIdea.category}
              onChange={(e) => setNewIdea({ ...newIdea, category: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Delivery">Delivery</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-lg">
              Submit
            </button>
          </form>

          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default AllPost