import React, { useState } from 'react';

const RequestEmployeeInfoModal = ({ showModal, setShowModal }) => {
  const [employeeSelection, setEmployeeSelection] = useState('all');
  const [fields, setFields] = useState([{ section: '', field: '', hideIfExists: false, mandatory: false }]);
  const [showPopup, setShowPopup] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const handleAddField = () => {
    setFields([...fields, { section: '', field: '', hideIfExists: false, mandatory: false }]);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleDeleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      employeeSelection,
      fields,
      showPopup,
      sendEmail,
    });
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Request Employee Information</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Please select which employee</label>
            <div className="flex space-x-4">
            <input type="radio" value="specific" checked={employeeSelection === 'specific'} onChange={() => setEmployeeSelection('specific')} />

             <label>All the Employees
              </label>
                <input type="radio" value="all" checked={employeeSelection === 'all'} onChange={() => setEmployeeSelection('all')} />
              
              <label>Some Employees
              </label>
                <input type="radio" value="some" checked={employeeSelection === 'some'} onChange={() => setEmployeeSelection('some')} />
              
              <label>Specific Employees
              </label>
            
            </div>
          </div>
<p>Please select the fields within the section which you would like to update *</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Section and Field</label>
            {fields.map((field, index) => (
              <div key={index} className="mb-4 p-4 border rounded-md">
                <div className="mb-2">
                  <select
                    
                    value={field.section}
                    onChange={(e) => handleFieldChange(index, 'section', e.target.value)}
                    className="p-2 border rounded w-full"
                  ><option value="">Basic Information</option></select>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Field"
                    value={field.field}
                    onChange={(e) => handleFieldChange(index, 'field', e.target.value)}
                    className="p-2 border rounded w-full"
                  />
                </div>
                <div className="mb-2 flex flex-col gap-2">
                    <div className='flex gap-4'>
                  <label> Hide if value already exists
                  </label>
                  <input type="radio"  name='group1'/>
                <label> Yes
              </label>
             
                <input type="radio"  name='group1'/>
                <label>  No
              </label>
              </div>
              <div className='flex gap-4'>
                  <label>  Mandatory?
                  </label>
                  <input type="radio" name='group2' />
                <label> Yes
              </label>
             
                <input type="radio" name='group2' />
                <label>  No
              </label>
              </div>
                </div>
                <button type="button" onClick={() => handleDeleteField(index)} className="p-2 bg-red-500 text-white rounded">Delete Section</button>
              </div>
            ))}
            <button type="button" onClick={handleAddField} className="p-2 bg-blue-500 text-white rounded">+ Add Section</button>
          </div>

          <div className="mb-4">
            <div className="flex space-x-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Show pop-up on web?</label>

              
                <input type="radio" value={true} checked={showPopup === true} onChange={() => setShowPopup(true)} />
                <label> Yes
              </label>
             
                <input type="radio" value={false} checked={showPopup === false} onChange={() => setShowPopup(false)} />
                <label>  No
              </label>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex space-x-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Do you want to send an email request to employees?</label>

             
                <input type="radio" value={true} checked={sendEmail === true} onChange={() => setSendEmail(true)} />
                <label> Yes
              </label>
             
                <input type="radio" value={false} checked={sendEmail === false} onChange={() => setSendEmail(false)} />
                <label>  No
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" onClick={() => setShowModal(false)} className="mr-4 p-2 bg-gray-500 text-white rounded">Cancel</button>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestEmployeeInfoModal;
