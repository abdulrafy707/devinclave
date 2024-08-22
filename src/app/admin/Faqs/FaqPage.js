"use client";
import { useState, useEffect } from 'react';

export default function FaqPage() {
  const [questions, setQuestions] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ comp_id: '', question: '', answer: '' });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions();
    fetchCompanies();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch('/api/faqs');
      const data = await res.json();
  
      // Ensure data is an array before setting it in the state
      if (Array.isArray(data)) {
        setQuestions(data);
      } else {
        console.error("Expected an array but got:", data);
        setQuestions([]); // Reset to an empty array if the data is not valid
      }
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setQuestions([]); // Reset to an empty array on error
    }
  };
  
  const fetchCompanies = async () => {
    try {
      const res = await fetch('/api/selectcompany');
      const data = await res.json();
      console.log("Fetched Companies:", data);  // Debugging line
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(`/api/faqs/${editId ? editId : ''}`, {
        method: editId ? 'PUT' : 'POST', // Use POST to add new questions
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        console.error('Failed to save question');
      } else {
        console.log('Question saved successfully');
        fetchQuestions();
        setFormData({ comp_id: '', question: '', answer: '' });
        setEditId(null);
      }
    } catch (error) {
      console.error('Error occurred during save:', error);
    } finally {
      setLoading(false);
    }
  };

  

  const handleEdit = (question) => {
    setFormData({ comp_id: question.comp_id, question: question.question, answer: question.answer });
    setEditId(question.id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/faqs/${id}`, {
        method: 'DELETE',
      });
      fetchQuestions();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  const filteredQuestions = questions.filter((question) =>
    question.question && question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">FAQ Management</h1>
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Select Company</label>
          <select
            value={formData.comp_id}
            onChange={(e) => setFormData({ ...formData, comp_id: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.com_title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Question</label>
          <input
            type="text"
            value={formData.question}
            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Question"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Answer</label>
          <textarea
            value={formData.answer}
            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Answer"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Saving...' : editId ? 'Update Question' : 'Add Question'}
        </button>
      </form>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="space-y-4">
        {filteredQuestions.map((question) => (
          <li key={question.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-700"><strong>Company:</strong> {companies.find(c => c.id === question.comp_id)?.com_title || 'Unknown'}</p>
                <p className="text-gray-700 mt-1"><strong>Question:</strong> {question.question}</p>
                <p className="text-gray-700 mt-1"><strong>Answer:</strong> {question.answer}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(question)}
                  className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(question.id)}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
