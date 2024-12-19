import { useEffect, useState } from 'react';
import { Class } from './types';

export default function ClassesPage() {
  const [classes, setClasses] = useState<Record<string, Class> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('/api/classes'); // Fetch from the API route
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setClasses(data.classes || {}); // Update state with classes data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []); // Empty dependency array to run only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='overflow-x-auto'>
      <div className='p-3 text-2xl'>שיעורים בודדים</div>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>שם המתאמנ/ת</th>
            <th>תאריך ושעה</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(classes || {}).map(([id, cls]: [string, Class]) => (
            <tr key={id}>
              <th>{cls.practitionerName}</th>
              <td>{cls.datetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
