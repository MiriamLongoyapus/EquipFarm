'use client'
import React, { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const initialDataRecords = [
  {
    User: 'Saru',
    PhoneNumber: '0701234550',
    Equipment:'Slasher',
    Date: '16/8/2023',
    Amount: '304000',
  },
  {
    User: 'Cynthia',
    PhoneNumber: '0701234534',
    Equipment:'Loader',
    Date: '1/7/2023',
    Amount: '30000',
  },
  {
    User: 'Nyambura',
    PhoneNumber: '0740456788',
    Equipment:'Backhoe',
    Date: '1/5/2023',
    Amount: '30000',
  },
  {
    User: 'Mwangombe',
    PhoneNumber: '0701234550',
    Equipment:'Cultipacker',
    Date: '1/9/2023',
    Amount: '4500',
  },
  {
    User: 'Berryl',
    PhoneNumber: '07049050',
    Equipment:'Milking machines',
    Date: '1/9/2023',
    Amount: '30000',
  },
  {
    User: 'Vicky',
    PhoneNumber: '0701494550',
    Equipment:'Cultivator',
    Date: '1/3/2023',
    Amount: '37000',
  },
  {
    User: 'Queen',
    PhoneNumber: '0701234600',
    Equipment:'Cultivator',
    Date: '18/9/2023',
    Amount: '30500',
  },
  {
    User: 'Akinyii',
    PhoneNumber: '0701934580',
    Equipment:'Plow',
    Date: '1/9/2023',
    Amount: '40000',
  },
  {
    User: 'Ivy',
    PhoneNumber: '0740454550',
    Equipment:'B',
    Date: '1/9/2023',
    Amount: '30000',
  }
];

const DataRecords = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataRecords, setDataRecords] = useState(initialDataRecords);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSearchChange = (e: { target: { value: string; }; }) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = initialDataRecords.filter((record) => {
      const recordValues = Object.values(record).map((value) =>
        typeof value === "string" ? value.toLowerCase() : value
      );

      return recordValues.some((value) => value.includes(query));
    });

    setDataRecords(filtered);
  };

  const handleDelete = (index: number) => {
    const newDataRecords = [...dataRecords];
    newDataRecords.splice(index, 1);
    setDataRecords(newDataRecords);
  };

  const handleEdit = (index: React.SetStateAction<number>) => {
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleEditChange = (field: string, value: string) => {
    setDataRecords((prevData) => {
      return prevData.map((record, index) => {
        if (index === editIndex) {
          return { ...record, [field]: value };
        }
        return record;
      });
    });
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    setEditIndex(-1);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditIndex(-1);
  };

  return (
    <div className="py-4 px-60 font-['Sanchez'] ">
      <h1 className="text-2xl font-semibold text-orange-400 mb-2 ml-4">Orders</h1>
      <div className="flex space-x-4 mb-4">
        <div className="relative ml-72 mr-72  w-96">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none"
            onChange={handleSearchChange}
          />
          <FaSearch className="w-6 h-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <table className="w-full space-evenly" style={{ tableLayout: 'fixed' }}>
        <thead>
          <tr className="border-b border-solid border-gray-500">
            <th className="py-4 px-14 text-left text-20 font-semibold">User</th>
            <th className="py-4 px-6 text-left text-20 font-semibold">Phone Number</th>
            <th className="py-4 px-6 text-left text-20 font-semibold">Equipment</th>
            <th className="py-4 px-6 text-left text-20 font-semibold">Amount</th>
            <th className="py-4 px-14 text-left text-20 font-semibold">Edit</th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-500">
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.User}
                    onChange={(e) => handleEditChange('User', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"
                  />
                ) : (
                  record.User
                )}
              </td>
              <td className="py-4 px-8">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.PhoneNumber}
                    onChange={(e) => handleEditChange('PhoneNumber', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"
                  />
                ) : (
                  record.PhoneNumber
                )}
              </td>
              <td className="py-4 px-10">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Equipment}
                    onChange={(e) => handleEditChange('Equipment', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"
                  />
                ) : (
                  record.Equipment
                )}
              </td>
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Amount}
                    onChange={(e) => handleEditChange('Amount', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"
                  />
                ) : (
                  record.Amount
                )}
              </td>
              <td className="py-4 px-16 flex space-x-2">
                {isEditing && editIndex === index ? (
                  <>
                    <button
                      className="bg-orange-400 text-black text-lg px-4 py-2 rounded hover:bg-indigo-600"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="bg-indigo-600 text-white text-lg px-4 py-2 rounded hover:bg-orange-400"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <BiEdit
                    size={25}
                    className="text-indigo-600 cursor-pointer"
                    onClick={() => handleEdit(index)}
                  />
                )}
                <MdDeleteForever
                  size={25}
                  className="text-green-400 cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataRecords;
