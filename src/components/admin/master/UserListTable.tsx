//@ts-nocheck
import React, { useState } from 'react'
import UserUpdataModal from './modal/UserUpdataModal'

const UserListTable = ({ userData }) => {
  //modal
  const [open, setOpen] = useState(false)

  const [selected, setSelected] = useState({
    user_id: 0,
    business_reg_num: 0,
    user_type: '',
    insta_account: '',
    name: '',
    nickname: '',
    email: '',
    password: '',
    business_name: '',
    business_address: '',
  })

  const handleOpen = () => {
    setOpen(true)
  }
  //modal

  return (
    <table className="w-[110rem]">
      <thead className="sticky top-0 z-10 bg-[#F8E5EE]">
        <tr className="h-16">
          <th>USER_ID</th>
          <th>USER_TYPE</th>
          <th>INSTA_ACCOUNT</th>
          <th>NAME</th>
          <th>NICKNAME</th>
          <th>EMAIL</th>
          <th>BUSINESS_NAME</th>
          <th>BUSINESS_ADDRESS</th>
          <th>BUSINESS_REG_NUM</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, userIdx) => {
          return (
            <tr
              className="h-12 cursor-pointer border-b-[1px] border-b-[#9F2042] text-center hover:bg-gray-100"
              key={userIdx}
              onClick={() => {
                setSelected(user)
                handleOpen()
              }}
            >
              <td>{user.user_id}</td>
              <td>{user.user_type}</td>
              <td>{user.insta_account}</td>
              <td>{user.name}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
              <td>{user.business_name}</td>
              <td>{user.business_address}</td>
              <td>{user.business_reg_num}</td>
            </tr>
          )
        })}
      </tbody>
      <UserUpdataModal
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
    </table>
  )
}

export default UserListTable
