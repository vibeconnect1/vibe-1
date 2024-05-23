import React, { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch } from 'react-redux'
import { addGroup } from '../../features/group/groupSlice'

const AssetGroupModal = ({onclose}) => {
    const [groupName, setGroupName] = useState("")
    const dispatch = useDispatch()
    const createGroup = ()=>{
        if(groupName.trim()){
            dispatch(addGroup(groupName))
            setGroupName('')
            onclose()
        }
    }
    console.log(groupName)
  return (
    <ModalWrapper onclose={onclose}>
    <div className="flex flex-col gap-4 z-10">
      <h1 className="font-semibold text-center text-xl">Create Group</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-bold">Group Name:</label>
            <input type="text" name="groupName" id="groupName" value={groupName} onChange={(e)=> setGroupName(e.target.value)} placeholder="Enter Group Name" className="border rounded-md border-gray-500 p-1 px-2" />
          </div>
          <div className='flex justify-center'>
            <button className="bg-black p-1 px-4 text-white rounded-md my-5 hover:bg-white hover:text-black border-2 border-black transition-all duration-300" onClick={createGroup}>Create</button>
          </div>
    </div>
    </ModalWrapper>
  )
}

export default AssetGroupModal
