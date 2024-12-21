import { useEffect, useState } from 'react';
import { PunchCard } from './types';

export default function PunchCardsList() {
  const [punchCards, setPunchCards] = useState<Record<
    string,
    PunchCard
  > | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPunchCards = async () => {
      try {
        const response = await fetch('/api/punch_card'); // Fetch from the API route
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPunchCards(data.punchCards || {}); // Update state with PunchCards data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPunchCards();
  }, []); // Empty dependency array to run only once

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className='card bg-base-100 w-96 shadow-xl mt-3'>
      <div className='card-body flex justify-center items-center'>
        <h2 className='card-title'>כרטיסיות</h2>
        {loading ? (
          <span className='loading loading-ring loading-lg'></span>
        ) : (
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>שם המתאמנ/ת</th>
                <th>מספר שיעורים בסה״כ</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(punchCards || {}).map(
                ([id, cls]: [string, PunchCard]) => (
                  <tr key={id}>
                    <th>{cls.practitionerName}</th>
                    <td>{cls.classesInTotal}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
