import React from 'react';
import Spinner from '../components/Spinner.jsx';
import UserList from '../components/UserList.jsx';
import useFetchUsers from '../hooks/useFetchUser.jsx';

const UsersPage = () => {
  const {
    users,
    loading,
    error,
    goToNextPage,
    goToPreviousPage,
    setResultsPerPage,
    page,
    resultsPerPage,
  } = useFetchUsers();

  const handleResultsChange = (e) => {
    setResultsPerPage(parseInt(e.target.value, 10));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen relative">
      <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>

      {loading ? (
        <Spinner />
      ) : (
        <UserList
          users={users}
          error={error}
          handleResultsChange={handleResultsChange}
          resultsPerPage={resultsPerPage}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          page={page}
        />
      )}
    </div>
  );
};

export default UsersPage;
