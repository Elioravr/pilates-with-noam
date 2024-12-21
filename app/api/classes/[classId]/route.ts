// app/api/classes/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { database, get, ref } from '../../../../firebaseConfig';

export async function GET(
  req: NextRequest,
  { params }: { params: { classId: string } }
) {
  const { classId } = params;

  try {
    // Reference the specific class by ID in the Realtime Database
    const classRef = ref(database, `classes/${classId}`);
    const snapshot = await get(classRef);

    if (snapshot.exists()) {
      // Return the class data as JSON
      return NextResponse.json({ id: classId, ...snapshot.val() });
    } else {
      // Class not found
      return NextResponse.json({ error: 'Class not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching class:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
