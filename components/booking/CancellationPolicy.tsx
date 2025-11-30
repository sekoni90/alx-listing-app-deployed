function CancellationPolicy() {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation Policy</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Free Cancellation</h3>
            <p className="text-gray-600">Cancel for free before Aug 23. Get a full refund if you change your plans.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Partial Refund</h3>
            <p className="text-gray-600">Cancel before check-in on Aug 24 for a 50% refund of the booking amount.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ground Rules</h2>
        <ul className="space-y-3">
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Follow the house rules and respect the property</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Treat your host&apos;s home like your own</span>
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Check-in and check-out times must be respected</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CancellationPolicy;
