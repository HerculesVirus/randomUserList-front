import React from 'react';

const UserList = ({ users, error, handleResultsChange, resultsPerPage, goToNextPage, goToPreviousPage, page }) => {
  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <>
      <div className="flex justify-center mb-6">
        <label htmlFor="records-per-page" className="mr-4">
          Records per page:
        </label>
        <select
          id="records-per-page"
          value={resultsPerPage}
          onChange={handleResultsChange}
          className="border rounded p-2"
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li key={user.login.uuid} className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <img src={user.picture.thumbnail} alt={user.name.first} className="rounded-full mr-4" />
            <div>
              <h2 className="font-bold">{`${user.name.first} ${user.name.last}`}</h2>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={goToPreviousPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {page}</span>
        <button
          onClick={goToNextPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserList;