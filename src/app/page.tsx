'use client';

import TaskAddForm from '@/components/task-add-form';
import TaskList from '@/components/task-list';
import InnerLayout from '@/components/ui/inner-layout';

export default function HomePage() {
  return (
    <InnerLayout className="py-8">
      <TaskAddForm />
      <TaskList />
    </InnerLayout>
  );
}
