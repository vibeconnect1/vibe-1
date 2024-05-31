import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { AddOutline } from "react-ionicons";
import { IoAddOutline } from "react-icons/io5";
import { Board } from "./data";
import { useSelector } from "react-redux";
import Task from "./Task";
import AddModal from "./AddModals";
import { onDragEnd } from "./onDragEnd";

const Boards = () => {
  const [columns, setColumns] = useState(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const themeColor = useSelector((state) => state.theme.color);
  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };
  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };
  console.log(columns);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full flex-col md:flex-row flex gap-2">
          {Object.entries(columns).map(([columnId, column]) => (
            <div className="w-full flex flex-col gap-0 " key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col  gap-3 items-center py-2 "
                  >
                    <div
                      style={{ background: themeColor }}
                      className="flex items-center justify-center py-[10px] w-full  rounded-lg shadow-sm text-white font-medium text-[15px]"
                    >
                      {column.name}
                    </div>
                    {column.items.map((task, index) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <>
                            <Task provided={provided} task={task} />
                          </>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className="shadow-custom-all-sides flex cursor-pointer items-center justify-center gap-1 py-[10px]  w-full opacity-90  rounded-lg bg-white  text-[#555] font-medium text-[15px]"
              >
                <AddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Boards;
