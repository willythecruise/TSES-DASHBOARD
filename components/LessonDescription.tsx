interface LessonDescriptionProps {
  lessonNumber: number;
  title: string;
  description: string;
  content?: {
    sections?: Array<{
      heading?: string;
      text?: string;
      listItems?: string[];
    }>;
  };
}

export default function LessonDescription({ lessonNumber, title, description, content }: LessonDescriptionProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Lesson {lessonNumber} - {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      
      {content?.sections && (
        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.heading}</h4>
              )}
              {section.text && (
                <p className="text-gray-600 leading-relaxed mb-3">{section.text}</p>
              )}
              {section.listItems && section.listItems.length > 0 && (
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  {section.listItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">{item}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
