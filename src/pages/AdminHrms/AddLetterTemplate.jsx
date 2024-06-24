import React, { useState } from 'react';
import DocumentDetailsList from './DocumentDetailsList';

const AddLetterTemplate = () => {
  const [documentName, setDocumentName] = useState('');
  const [templateLabel, setTemplateLabel] = useState('');
  const [letterType, setLetterType] = useState('');
  const [approvalLevel, setApprovalLevel] = useState('Auto Approval');
  const [linkWithEmployeeDocs, setLinkWithEmployeeDocs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      documentName,
      templateLabel,
      letterType,
      approvalLevel,
      linkWithEmployeeDocs,
    });
  };

  return (
    <div className='flex ml-20'>
        <DocumentDetailsList/>
    <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Letter Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="documentName">
            Document Name
          </label>
          <input
            id="documentName"
            type="text"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="templateLabel">
            Template Label
          </label>
          <input
            id="templateLabel"
            type="text"
            value={templateLabel}
            onChange={(e) => setTemplateLabel(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="letterType">
            Type of Letter
          </label>
          <select
            id="letterType"
            value={letterType}
            onChange={(e) => setLetterType(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="" disabled>
              Please Select Letter Type
            </option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Who can generate the letter?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="autoApproval"
              name="approvalLevel"
              value="Auto Approval"
              checked={approvalLevel === 'Auto Approval'}
              onChange={() => setApprovalLevel('Auto Approval')}
              className="mr-2"
            />
            <label htmlFor="autoApproval" className="mr-4">
              Auto Approval
            </label>
            <input
              type="radio"
              id="1Level"
              name="approvalLevel"
              value="1 Level"
              checked={approvalLevel === '1 Level'}
              onChange={() => setApprovalLevel('1 Level')}
              className="mr-2"
            />
            <label htmlFor="1Level" className="mr-4">
              1 Level
            </label>
            <input
              type="radio"
              id="2Levels"
              name="approvalLevel"
              value="2 Levels"
              checked={approvalLevel === '2 Levels'}
              onChange={() => setApprovalLevel('2 Levels')}
              className="mr-2"
            />
            <label htmlFor="2Levels">
              2 Levels
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Do you want to link with the existing employee documents field?
          </label>
          <input
            type="checkbox"
            checked={linkWithEmployeeDocs}
            onChange={() => setLinkWithEmployeeDocs(!linkWithEmployeeDocs)}
            className="mr-2"
          />
          <span>Yes</span>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Create Template
          </button>
        </div>
      </form>
    </div></div>
  );
};

export default AddLetterTemplate