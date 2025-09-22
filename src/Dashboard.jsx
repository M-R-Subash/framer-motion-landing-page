import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Age: '',
    Address: '',
    gender: '',
    PhoneNumber: '',
    MediumOfInstruction: '',
    Interest: '',
    DisabledPerson: false
  });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('loggedIn')) navigate('/');
    else {
      fetch('https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert')
        .then(res => res.json())
        .then(data => setStudents(data))
        .catch(error => console.log('Fetch error:', error));
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!form.FirstName || !form.LastName || form.Age <= 0) {
      return alert("Please fill all required fields correctly!");
    }

    const interestArray = form.Interest
      ? form.Interest.split(",").map(item => item.trim()).filter(Boolean)
      : [];

    const apiUrl = editId
      ? `https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert/${editId}`
      : "https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert";

    fetch(apiUrl, {
      method: editId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, Interest: interestArray })
    })
      .then((response) => response.json())
      .then(() => {
        fetch("https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert")
          .then((res) => res.json())
          .then((data) => setStudents(data));

        setForm({
          FirstName: "",
          LastName: "",
          Age: "",
          Address: "",
          gender: "",
          PhoneNumber: "",
          MediumOfInstruction: "",
          Interest: "",
          DisabledPerson: false
        });
        setEditId(null);
      })
      .catch((error) => console.log("Save error:", error));
  };

  const handleEdit = (student) => {
    setForm({
      FirstName: student.FirstName,
      LastName: student.LastName,
      Age: student.Age,
      Address: student.Address,
      gender: student.gender,
      PhoneNumber: student.PhoneNumber,
      MediumOfInstruction: student.MediumOfInstruction,
      Interest: student.Interest.join(', '),
      DisabledPerson: student.DisabledPerson
    });
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      fetch(`https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert/${id}`, { method: 'DELETE' })
        .then(() => {
          fetch('https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert')
            .then(res => res.json())
            .then(data => setStudents(data));
        })
        .catch(error => console.log('Delete error:', error));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Student Dashboard</h1>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {editId ? 'Edit Student' : 'Add New Student'}
          </h2>
          
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input 
                  name="FirstName" 
                  value={form.FirstName} 
                  onChange={handleChange} 
                  placeholder="John" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input 
                  name="LastName" 
                  value={form.LastName} 
                  onChange={handleChange} 
                  placeholder="Doe" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                <input 
                  name="Age" 
                  type="number" 
                  value={form.Age} 
                  onChange={handleChange} 
                  placeholder="18" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  min="1"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select 
                  name="gender" 
                  value={form.gender} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input 
                name="Address" 
                value={form.Address} 
                onChange={handleChange} 
                placeholder="123 Main Street, City" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  name="PhoneNumber" 
                  value={form.PhoneNumber} 
                  onChange={handleChange} 
                  placeholder="+1234567890" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medium of Instruction</label>
                <input 
                  name="MediumOfInstruction" 
                  value={form.MediumOfInstruction} 
                  onChange={handleChange} 
                  placeholder="English" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interests (comma-separated)</label>
              <input 
                name="Interest" 
                value={form.Interest} 
                onChange={handleChange} 
                placeholder="Programming, Sports, Music" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            <div className="flex items-center">
              <input 
                name="DisabledPerson" 
                type="checkbox" 
                checked={form.DisabledPerson} 
                onChange={handleChange} 
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                id='disable'
              />
              <label className="ml-2 text-sm font-medium text-gray-700" htmlFor='disable'>Disabled Person</label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
            >
              {editId ? 'Update Student' : 'Add Student'}
            </button>
          </form>
        </div>

        {/* Student Records Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Records ({students.length})</h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Age</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Gender</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Phone</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">Address</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden 2xl:table-cell">Medium</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map(student => (
                      <tr key={student.id} className="hover:bg-gray-50 transition duration-150">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {student.FirstName} {student.LastName}
                              </div>
                              <div className="text-xs text-gray-500 sm:hidden">
                                Age: {student.Age} • {student.gender}
                                {student.PhoneNumber && ` • ${student.PhoneNumber}`}
                              </div>
                              <div className="text-xs text-gray-500 md:hidden mt-1">
                                {student.Address && `Address: ${student.Address.substring(0, 20)}${student.Address.length > 20 ? '...' : ''}`}
                              </div>
                              <div className="text-xs text-gray-500 lg:hidden">
                                {student.MediumOfInstruction && `Medium: ${student.MediumOfInstruction}`}
                              </div>
                              <div className="mt-1 flex flex-wrap gap-1">
                                {student.Interest.slice(0, 2).map((interest, index) => (
                                  <span key={index} className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {interest}
                                  </span>
                                ))}
                                {student.Interest.length > 2 && (
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    +{student.Interest.length - 2}
                                  </span>
                                )}
                                {student.DisabledPerson && (
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Disabled
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                          {student.Age}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                          {student.gender}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 hidden lg:table-cell">
                          {student.PhoneNumber || '-'}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 hidden xl:table-cell">
                          <div className="max-w-xs truncate" title={student.Address}>
                            {student.Address || '-'}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 hidden 2xl:table-cell">
                          {student.MediumOfInstruction || '-'}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
                            <button 
                              onClick={() => handleEdit(student)} 
                              className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition duration-200 text-xs sm:text-sm"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(student.id)} 
                              className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition duration-200 text-xs sm:text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {students.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No student records found. Add your first student above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;