import React from 'react';

const PersonalFinancialWebsite = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Introduction Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Personal Financial Management
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to the Personal Financial Management module of Vibe Connect. This tool is designed to help you track your income, manage your expenses, and visualize your financial status effortlessly. Get a clear understanding of your financial situation and make better decisions.
        </p>
      </section>

      {/* Income Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Income Overview
        </h2>
        <p className="text-gray-600 mb-6">
          Stay on top of your finances by monitoring all your income streams in one place. The module allows you to easily input and track:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Salary:</strong> Your regular monthly earnings</li>
          <li><strong>Bonus:</strong> Extra income from bonuses or incentives</li>
          <li><strong>Investment Income:</strong> Earnings from stocks, real estate, and other investments</li>
        </ul>
      </section>

      {/* Expense Tracking Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Expense Tracking
        </h2>
        <p className="text-gray-600 mb-6">
          Keep track of all your expenses and categorize them to better understand where your money goes. The module allows you to categorize expenses into areas such as:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Housing:</strong> Rent or mortgage payments</li>
          <li><strong>Groceries:</strong> Food and daily essentials</li>
          <li><strong>Transportation:</strong> Travel and commute-related expenses</li>
          <li><strong>Entertainment:</strong> Leisure and recreational activities</li>
        </ul>
        <p className="text-gray-600">
          By understanding your spending habits, you can make informed decisions on how to allocate your budget and cut unnecessary costs.
        </p>
      </section>

      {/* Income vs Expense Comparison Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Monthly Income vs. Expenses Comparison
        </h2>
        <p className="text-gray-600 mb-6">
          Easily compare your monthly income against your expenses to see how your spending measures up to your earnings. This section helps you:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Visualize your cash flow:</strong> Understand whether you're saving money or spending more than you earn</li>
          <li><strong>Track monthly changes:</strong> Identify months with unusual spending or income variations</li>
          <li><strong>Plan ahead:</strong> Make better financial decisions by analyzing your spending trends</li>
        </ul>
      </section>

      {/* Conclusion & CTA */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get started with Vibe Connect’s Personal Financial Management module today. Organize your financial life, stay on track with your budget, and gain peace of mind with a clearer understanding of your financial health.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default PersonalFinancialWebsite;
