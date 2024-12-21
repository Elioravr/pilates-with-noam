import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Class } from './types';

export default function ClassesList() {
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

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='py-3 text-center text-2xl font-bold'>שיעורים בודדים</h1>
      {loading ? (
        <span className='m-auto loading loading-ring loading-lg'></span>
      ) : (
        <div className='carousel carousel-center rounded-box space-x-4 p-4 mx-2'>
          {Object.entries(classes || {}).map(([id, cls]: [string, Class]) => (
            <div className='carousel-item mx-3' key={id}>
              <div className='card bg-base-100 shadow-xl'>
                <figure>
                  <Image
                    src='/images/room.jpeg'
                    alt='Room'
                    width={100}
                    height={100}
                    style={{
                      width: 220,
                      height: 165,
                      objectFit: 'cover',
                      objectPosition: '0 64%',
                    }}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{cls.practitionerName}</h2>
                  <p>{cls.datetime}</p>
                  <div className='card-actions justify-end'>
                    <button className='btn'>עריכה</button>
                    <button className='btn btn-secondary'>קישור</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
