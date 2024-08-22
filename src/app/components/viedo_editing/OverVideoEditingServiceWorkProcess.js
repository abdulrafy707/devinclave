// components/OverVideoEditingServiceWorkProcess.js
import { PencilSquareIcon, FilmIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function OverVideoEditingServiceWorkProcess() {
  const steps = [
    {
      number: "1",
      title: "Pre-production Phase",
      icon: PencilSquareIcon,
    },
    {
      number: "2",
      title: "Scriptwriting and Storyboarding",
      icon: FilmIcon,
    },
    {
      number: "3",
      title: "Editing and Post-production",
      icon: ChartBarIcon,
    },
    {
      number: "4",
      title: "Follow-up and Support",
      icon: ChartBarIcon,
    },
  ];

  return (
    <section className="py-12 bg-yellow-100">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Over Video Editing Service Work Process</h2>
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-1/4 mx-2"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 text-2xl font-bold flex items-center justify-center">
                {step.number}
              </div>
              <step.icon className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-center text-lg font-semibold text-gray-800">{step.title}</h3>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-12">
          If you're ready to elevate your online presence, get in touch with us today!
        </p>
      </div>
    </section>
  );
}
