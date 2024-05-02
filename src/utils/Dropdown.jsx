
'use client'
import {  Dropdown } from 'keep-react'

export const DropdownComponent = () => {
    const dropdownData = ["Item1","Item2" ,"Item3 ","Item4"]
  return (
    <Dropdown  action={<h1 className='text-xl hover:scale-110 cursor-pointer '>Products 🔽</h1>} actionClassName=" text-black border-none m-0 p-0 bg-transparent">
      <Dropdown.List className=''>
        {dropdownData.map((data) => (
          <Dropdown.Item key={data.id}>
            <div className=''>
              <p className="font-medium">{data}</p>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  )
}
