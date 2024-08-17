import { useState, useEffect } from 'react';

const useFetchUsers = (initialPage = 1, initialResultsPerPage = 10) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(initialPage);
    const [resultsPerPage, setResultsPerPage] = useState(initialResultsPerPage);
  
    const fetchUsers = async (page, resultsPerPage) => {
      setLoading(true);
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`);
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users.');
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchUsers(page, resultsPerPage);
    }, [page, resultsPerPage]);
  
    const goToNextPage = () => setPage((prevPage) => prevPage + 1);
    const goToPreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  
    return { users, loading, error, goToNextPage, goToPreviousPage, setResultsPerPage, page, resultsPerPage };
};

export default useFetchUsers;