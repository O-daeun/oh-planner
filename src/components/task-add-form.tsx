import { addData } from '@/apis/firebase';
import { useAuthContext } from '@/contexts/auth-context';
import { FormEvent, useState } from 'react';
import MainButton from './ui/main-button';
import MainInput from './ui/main-input';

export default function TaskAddForm() {
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
    <form onSubmit={handleAddTask} className="flex flex-col gap-2">
      <h1 className="text-var-green-main mb-4 text-2xl font-semibold">일정 추가</h1>
      <MainInput
        type="text"
        placeholder="일정 제목"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <div className="flex justify-stretch gap-2">
        <MainInput
          type="date"
          value={task.startDate}
          onChange={(e) => setTask({ ...task, startDate: e.target.value })}
        />
        <MainInput
          type="date"
          value={task.endDate}
          onChange={(e) => setTask({ ...task, endDate: e.target.value })}
        />
      </div>

      <MainButton disabled={!task.title || !task.startDate || !task.endDate} className="mt-4">
        추가
      </MainButton>
    </form>
  );
}
