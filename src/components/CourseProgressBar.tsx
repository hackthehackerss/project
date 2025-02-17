import React from 'react';
import { Clock, BookOpen } from 'lucide-react';

interface CourseProgressBarProps {
  progress: number;
  timeSpent: number;
  completedSections: number;
  totalSections: number;
}

function CourseProgressBar({ progress, timeSpent, completedSections, totalSections }: CourseProgressBarProps) {
  return (
    <div className="bg-primary-dark/30 rounded-lg p-4 border border-primary-blue/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-primary-blue" />
          <span className="text-sm text-gray-400">Course Progress</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-primary-blue" />
          <span className="text-sm text-gray-400">
            {Math.floor(timeSpent / 60)}h {timeSpent % 60}m
          </span>
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-primary-blue">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-primary-blue">
              {completedSections}/{totalSections} Sections
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-dark">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-blue transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CourseProgressBar;