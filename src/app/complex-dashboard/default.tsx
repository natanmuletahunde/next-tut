export default function  DefaultPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Complex Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the default page for the complex dashboard. Navigate to specific sections using the links below.
        </p>
        <ul className="space-y-4">
          <li>
            <a href="/complex-dashboard/revenue" className="text-blue-600 hover:underline">Revenue Metrics</a>
          </li>
          <li>
            <a href="/complex-dashboard/analytics" className="text-blue-600 hover:underline">Analytics Overview</a>
          </li>
          <li>
            <a href="/complex-dashboard/reports" className="text-blue-600 hover:underline">Reports Section</a>
          </li>
        </ul>
      </div>
    </div>
  );
}