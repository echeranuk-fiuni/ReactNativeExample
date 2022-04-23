import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import StudentForm from './src/components/StudentForm';
import StudentsList from './src/components/StudentsList';
import styles from './src/styles';

const App = () => {
  const defaultStudents = [];
  const [currentId, setCurrentId] = useState(1);
  const [students, setStudents] = useState(defaultStudents);
  const [studentOnEdit, setStudentOnEdit] = useState(undefined);

  const getNextId = () => {
    const id = Number(currentId);
    setCurrentId(id + 1);
    return id;
  };

  const handleStudentSubmit = student => {
    if (studentOnEdit) {
      // Update
      const updatedStudent = {
        id: studentOnEdit.id,
        ...student
      };

      setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    } else {
      // Create
      const newStudent = {
        id: getNextId(),
        ...student
      };
  
      setStudents([...students, newStudent]);
    }
    setStudentOnEdit(undefined);
  };

  const handleStudentRemove = id => {
    const newStudents = students.filter(student => student.id !== id);
    setStudents(newStudents);
  };

  const handleStudentEdit = student => {
    setStudentOnEdit(student);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <StudentsList
          data={students}
          onEdit={handleStudentEdit}
          onRemove={handleStudentRemove}
        />
      </ScrollView>
      <View style={styles.form}>
        <StudentForm
          style={styles.bordered}
          onStudentSubmit={handleStudentSubmit}
          studentOnEdit={studentOnEdit}
        />
      </View>
    </View>
  );
};

export default App;