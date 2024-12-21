// app/api/punchCards/getAllpunchCards/route.ts
import { NextResponse } from 'next/server';
import { database, get, ref } from '../../../firebaseConfig';

export async function GET() {
  try {
    // Reference the "punchCards" field in the Realtime Database
    const punchCardsRef = ref(database, 'punchCard');

    // Fetch data
    const snapshot = await get(punchCardsRef);

    if (snapshot.exists()) {
      // Return the data as JSON
      return NextResponse.json({ punchCards: snapshot.val() });
    } else {
      // No data found
      return NextResponse.json(
        { error: 'No punchCards found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching punchCards:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
