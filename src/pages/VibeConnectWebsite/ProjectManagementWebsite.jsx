import React from 'react';

const ProjectManagementWebsite = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Introduction Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Project Management 
        </h1>
        <p className="text-lg text-gray-600">
          Effectively plan, execute, and monitor your projects with our comprehensive Project Management module. Manage tasks, collaborate with your team, monitor timelines, and allocate resources efficiently.
        </p>
      </section>

      {/* Task Tracking Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" 
            alt="Task Tracking" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Task Tracking</h2>
          <p className="text-gray-600 mb-6 text-base">
            Track your tasks efficiently with our project management system.<br/>
             Organize your tasks by priority, due dates, and assign them to team members for clear accountability.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Create, assign, and prioritize tasks</li>
            <li>Set deadlines and track progress</li>
            <li>Get notifications and reminders</li>
          </ul>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1216/1216895.png" 
            alt="Team Collaboration" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Team Collaboration</h2>
          <p className="text-gray-600 mb-6">
            Collaborate with your team seamlessly. Share updates, comments, and files to keep everyone on the same page.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Real-time updates and file sharing</li>
            <li>Discussion threads and comments</li>
            <li>Team member assignment and accountability</li>
          </ul>
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3159/3159064.png" 
            alt="Project Timeline" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Project Timeline</h2>
          <p className="text-gray-600 mb-6">
            Stay on top of your project's timeline with Gantt charts and timelines. Track the progress of your project in real-time.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Visualize project phases and tasks</li>
            <li>Set milestones and deadlines</li>
            <li>Monitor progress with Gantt charts</li>
          </ul>
        </div>
      </section>

      {/* Resource Management Section */}
      <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4341/4341024.png" 
            alt="Resource Management" 
            className="w-24 h-24"
          />
        </div>
        <div className="md:w-2/3 text-left">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Resource Management</h2>
          <p className="text-gray-600 mb-6">
            Allocate and manage your resources efficiently. Ensure your team has what they need to deliver projects on time.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Monitor resource availability</li>
            <li>Allocate tasks and resources effectively</li>
            <li>Track resource usage and prevent overloading</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          Ready to Manage Your Projects Effectively?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get started with our Project Management module and streamline your project workflow, from planning to execution.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default ProjectManagementWebsite;
