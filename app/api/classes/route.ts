// app/api/classes/getAllClasses/route.ts
import { NextResponse } from 'next/server';
import { database, get, ref } from '../../../firebaseConfig';

export async function GET() {
  try {
    // Reference the "classes" field in the Realtime Database
    const classesRef = ref(database, 'classes');

    // Fetch data
    const snapshot = await get(classesRef);

    if (snapshot.exists()) {
      // Return the data as JSON
      return NextResponse.json({ classes: snapshot.val() });
    } else {
      // No data found
      return NextResponse.json({ error: 'No classes found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching classes:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
