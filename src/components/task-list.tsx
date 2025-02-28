import { getTasks } from '@/apis/firebase';
import { useAuthContext } from '@/contexts/auth-context';
import { Task } from '@/types/task-types';
import { useEffect, useState } from 'react';

export default function TaskList() {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchTasks = async () => {
      const querySnapshot = await getTasks(user);
      if (!querySnapshot) return;
      setTasks(querySnapshot);
    };

    fetchTasks();
  }, [user]);

  if (!tasks) return;

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id}>
            <h4>{task.title}</h4>
            <p>시작: {task.startDate}</p>
            <p>종료: {task.endDate}</p>
          </li>
        ))
      ) : (
        <p>등록된 일정이 없습니다.</p>
      )}
    </ul>
  );
}
