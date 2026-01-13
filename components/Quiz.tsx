'use client';

import { useState } from 'react';
import Question from './Question';

interface Answer {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  number: number;
  question: string;
  type: string;
  points: number;
  answers: Answer[];
}

interface QuizProps {
  questions: QuizQuestion[];
}



export default function Quiz({ questions }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-sm font-bold text-gray-900 mb-6">Quiz</h2>
      <div className="space-y-8">
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            selectedAnswer={selectedAnswers[question.id]}
            onAnswerSelect={(answerId) => handleAnswerSelect(question.id, answerId)}
          />
        ))}
      </div>
    </div>
  );
}
