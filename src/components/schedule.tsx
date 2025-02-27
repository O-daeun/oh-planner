import { addData } from '@/apis/firebase';
import { useAuthContext } from '@/contexts/auth-context';
import { FormEvent, useState } from 'react';

export default function Schedule() {
  const { user } = useAuthContext();
  const [task, setTask] = useState({
    title: '',
    startDate: '',
    endDate: '',
  });

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    addData(user, task);
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="일정 제목"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <input
        type="date"
        value={task.startDate}
        onChange={(e) => setTask({ ...task, startDate: e.target.value })}
      />
      <input
        type="date"
        value={task.endDate}
        onChange={(e) => setTask({ ...task, endDate: e.target.value })}
      />
      <button disabled={!task.title || !task.startDate || !task.endDate}>추가</button>
    </form>
  );
}
