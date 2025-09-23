import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Address: "",
    PhoneNumber: "",
    gender: "",
    MeduimOfInstructions: "",
    Intrest: "",
    DisabledPerson: false,
  });
  const [editStudent, setEditStudent] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const API_URL = "https://68d0e236e6c0cbeb39a2bb5f.mockapi.io/api/insert";

                                              // STYLE FOR TABLE
  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "0px",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "0px",
        fontSize: "14px",
      },
    },
  };

                                          // TABLE
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "60px" },
    { name: "First Name", selector: (row) => row.FirstName, sortable: true },
    { name: "Last Name", selector: (row) => row.LastName, sortable: true },
    { name: "Age", selector: (row) => row.Age, sortable: true, width: "80px" },
    { name: "Address", selector: (row) => row.Address, sortable: true, wrap: true },
    { name: "Phone", selector: (row) => row.PhoneNumber, sortable: true, },
    { name: "Gender", selector: (row) => row.gender, sortable: true, width: "90px" },
    { name: "Medium", selector: (row) => row.MeduimOfInstructions, sortable: true },
    { name: "Interest", selector: (row) => row.Intrest, sortable: true },
    {
      name: "Disabled",
      selector: (row) => (row.DisabledPerson ? "Yes" : "No"),
      sortable: true,
      width: "100px",
    },
    {
      name: "Created Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
      width: "120px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-1">
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-500"
          >
            <FaEdit className="text-2xl" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="bg-red-500 text-white px-1 py-1 rounded hover:bg-red-600"
          >
            <MdDeleteOutline  className="text-2xl"/>
          </button>
        </div>
      ),
    },
  ];

                                                  // FETCH
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
      setFiltered(data);
    } catch (err) {
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
      return;
    }
    fetchStudents();
  }, []);

                                                            // ADD
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!validate(newStudent)) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newStudent, Age: Number(newStudent.Age), createdAt: new Date().toISOString() }),
      });
      await res.json();
      fetchStudents();
      setShowAddModal(false);
      resetForm();
    } catch (err) {
      alert("Failed to add student");
    }
  };

                                                          // EDIT
  const handleEdit = (student) => {
    setEditStudent(student);
    setShowEditModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate(editStudent)) return;

    try {
      const res = await fetch(`${API_URL}/${editStudent.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editStudent, Age: Number(editStudent.Age) }),
      });
      await res.json();
      fetchStudents();
      setShowEditModal(false);
    } catch (err) {
      alert("Failed to update student");
    }
  };

                                                    // DELETE
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This student will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "grey",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchStudents();
        Swal.fire("Deleted!", "Student has been deleted.", "success");
      } catch {
        Swal.fire("Error!", "Failed to delete student.", "error");
      }
    }
  };

                                                  //  SEARCH
const handleSearch = (e) => {
  const value = e.target.value.toLowerCase();
  setFiltered(
    students.filter(
      (s) =>
        s.FirstName?.toLowerCase().includes(value) ||
        s.LastName?.toLowerCase().includes(value)
    )
  );
};


                                                  // VALIDATAION
  const validate = (student) => {
    const errs = {};
    if (!student.FirstName) errs.FirstName = "Required";
    if (!student.LastName) errs.LastName = "Required";
    if (!student.Age) errs.Age = "Required";
    if (!student.Address) errs.Address = "Required";
    if (!student.PhoneNumber) errs.PhoneNumber = "Required";
    if (!student.gender) errs.gender = "Required";
    if (!student.MeduimOfInstructions) errs.MeduimOfInstructions = "Required";
    if (!student.Intrest) errs.Intrest = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const resetForm = () => {
    setNewStudent({
      FirstName: "",
      LastName: "",
      Age: "",
      Address: "",
      PhoneNumber: "",
      gender: "",
      MeduimOfInstructions: "",
      Intrest: "",
      DisabledPerson: false,
    });
    setErrors({});
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="container m-auto p-6">
                                                       {/* HEADER */}
      <div className="w-full flex justify-between mb-6 shadow-xl p-4 rounded bg-white items-center lg:flex-row flex-col gap-4">
        <h1 className="text-2xl font-bold ">Student Management Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            + Add Student
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/login");
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

                                                     {/* SEARCH */}
      <div className="border flex gap-2 items-center  p-2 pl-3 rounded mb-4 border-gray-400 w-1/3">
      <IoSearch className="text-blue-600 text-2xl"/>
        <input
        type="text"
        placeholder="Search by Name . . . "
        onChange={handleSearch}
        className="w-full focus:outline-none text-sm"
      />
      </div>

                                                 {/* TABLE OF CONTENT */}
      <DataTable
        columns={columns}
        data={filtered}
        pagination
        highlightOnHover
        striped
        noDataComponent="No records found"
        customStyles={customStyles}
      />

                                          {/* ADD MODEL */}
      {showAddModal && (
        <Modal
          title="Add Student"
          student={newStudent}
          setStudent={setNewStudent}
          errors={errors}
          onClose={() => {
            setShowAddModal(false);
            resetForm();
          }}
          onSubmit={handleAdd}
        />
      )}

                                            {/* EDIT MODEL */}
      {showEditModal && (
        <Modal
          title="Edit Student"
          student={editStudent}
          setStudent={setEditStudent}
          errors={errors}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
}

                                                  // REUSE
function Modal({ title, student, setStudent, errors, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          {["FirstName", "LastName", "Age", "Address", "PhoneNumber", "MeduimOfInstructions", "Intrest"].map(
            (field) => {
              let inputProps = {};
              if (field === "FirstName" || field === "LastName") inputProps.maxLength = 20;
              if (field === "Age") {
                inputProps.type = "number";
                inputProps.max = 99;
              }
              if (field === "PhoneNumber") inputProps.maxLength = 10;

              return (
                <div key={field}>
                  <label className="block text-sm">{field}</label>
                  <input
                    {...inputProps}
                    name={field}
                    value={student?.[field] || ""}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (field === "Age" || field === "PhoneNumber") {
                        val = val.replace(/\D/g, ""); // remove non-digit chars
                        if (field === "Age" && val > 99) val = "99";
                        if (field === "PhoneNumber" && val.length > 10) val = val.slice(0, 10);
                      }
                      setStudent((prev) => ({ ...prev, [field]: val }));
                    }}
                    className="w-full border p-2 rounded"
                    placeholder={`Enter ${field}`}
                  />
                  {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                </div>
              );
            }
          )}
                                                {/* Gender */}
          <div>
            <label className="block text-sm">Gender</label>
            <select
              name="gender"
              value={student?.gender || ""}
              onChange={(e) => setStudent((prev) => ({ ...prev, gender: e.target.value }))}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

                                                {/* Disabled */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="DisabledPerson"
              checked={student?.DisabledPerson || false}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, DisabledPerson: e.target.checked }))
              }
              className="mr-2"
            />
            <label>Disabled Person</label>
          </div>

                                                            {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;