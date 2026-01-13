interface CourseBannerProps {
  imageUrl?: string;
}

export default function CourseBanner({ imageUrl }: CourseBannerProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 relative">
      {imageUrl ? (
        <img src={imageUrl} alt="Course banner" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-8">
            <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-sm">Course Banner Placeholder</p>
            <p className="text-gray-400 text-xs mt-2">Illustration showing diverse team collaboration</p>
          </div>
        </div>
      )}
    </div>
  );
}
