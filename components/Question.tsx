interface Answer {
  id: string;
  text: string;
}

interface QuestionProps {
  question: {
    id: string;
    number: number;
    question: string;
    type: string;
    points: number;
    answers: Answer[];
  };
  selectedAnswer?: string;
  onAnswerSelect: (answerId: string) => void;
}

export default function Question({ question, selectedAnswer, onAnswerSelect }: QuestionProps) {
  const answerLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">{question.number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.question}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{question.type}</span>
            <span>{question.points} points</span>
          </div>
        </div>
      </div>

      <div className="ml-12 space-y-3">
        {question.answers.map((answer, index) => {
          const label = answerLabels[index];
          const isSelected = selectedAnswer === answer.id;

          return (
            <button
              key={answer.id}
              onClick={() => onAnswerSelect(answer.id)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-100 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`} 
            >
              <span className="font-light text-sm text-gray-900">
                {label}. {answer.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
