'use client';

import Schedule from '@/components/schedule';
import InnerLayout from '@/components/ui/inner-layout';

export default function HomePage() {
  return (
    <InnerLayout className="py-8">
      <Schedule />
    </InnerLayout>
  );
}
