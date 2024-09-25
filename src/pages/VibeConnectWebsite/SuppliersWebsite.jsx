import React from 'react';

const SuppliersWebsite = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Introduction Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Suppliers Management 
        </h1>
        <p className="text-lg text-gray-600">
          Streamline your supplier relationships, track their performance, and manage contracts efficiently with the Suppliers Management module. Ensure a seamless procurement process with all your suppliers in one place.
        </p>
      </section>

      {/* Supplier Tracking Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6097/6097256.png" 
            alt="Supplier Tracking" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Supplier Tracking</h2>
          <p className="text-gray-600 mb-6">
            Manage all your suppliers in one place. Track key information such as contact details, contracts, and performance metrics to ensure smooth operations and strong relationships.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Centralized supplier database</li>
            <li>Real-time supplier status updates</li>
            <li>Easy access to supplier information</li>
          </ul>
        </div>
      </section>

      {/* Contract Management Section */}
      <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2387/2387656.png" 
            alt="Contract Management" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Contract Management</h2>
          <p className="text-gray-600 mb-6">
            Store and manage contracts for each supplier with ease. Track renewal dates, compliance, and other important details to ensure contracts are always up to date.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Store contracts securely</li>
            <li>Automated renewal reminders</li>
            <li>Ensure contract compliance</li>
          </ul>
        </div>
      </section>

      {/* Supplier Performance Monitoring Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2166/2166823.png" 
            alt="Supplier Performance" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Supplier Performance Monitoring</h2>
          <p className="text-gray-600 mb-6">
            Monitor supplier performance through KPIs such as delivery times, product quality, and pricing consistency. Easily identify top-performing suppliers and flag underperforming ones.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Track key performance indicators (KPIs)</li>
            <li>Generate performance reports</li>
            <li>Evaluate supplier reliability and quality</li>
          </ul>
        </div>
      </section>

      {/* Procurement and Order Management Section */}
      <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1204/1204212.png" 
            alt="Procurement and Orders" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Procurement and Order Management</h2>
          <p className="text-gray-600 mb-6">
            Manage your procurement and ordering processes seamlessly. Create purchase orders, track their progress, and manage deliveries from suppliers all in one place.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Create and manage purchase orders</li>
            <li>Track order status and deliveries</li>
            <li>Streamline procurement workflows</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Ready to Optimize Your Supplier Management?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get started with our Suppliers Management module and improve your supplier relationships and procurement process today.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default SuppliersWebsite;
