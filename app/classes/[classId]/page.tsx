import { database, get, ref } from '../../../firebaseConfig';

type Class = {
  id: string;
  practitionerName: string;
  datetime: string;
};

type Props = {
  params: {
    classId: string;
  };
};

export default async function ClassPage({ params }: Props) {
  const { classId } = params;

  // Fetch the class data from Firebase
  const classData = await getClassById(classId);

  if (!classData) {
    return (
      <div>
        <h1>Class Not Found</h1>
        <p>The class with ID {classId} does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>פרטי שיעור</h1>
      <p>
        <strong>שם המתאמנ/ת:</strong> {classData.practitionerName}
      </p>
      <p>
        <strong>תאריך ושעה:</strong> {classData.datetime}
      </p>
    </div>
  );
}

// Helper function to fetch a class by its ID
async function getClassById(classId: string): Promise<Class | null> {
  try {
    const classRef = ref(database, `classes/${classId}`);
    const snapshot = await get(classRef);

    if (snapshot.exists()) {
      return { id: classId, ...snapshot.val() } as Class;
    } else {
      return null; // Class not found
    }
  } catch (error) {
    console.error('Error fetching class:', error);
    return null;
  }
}
