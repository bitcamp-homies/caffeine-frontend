//@ts-nocheck

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserFilterListBox from './filter/UserFilterListBox'
import UserUpdataModal from './modal/UserUpdataModal'
import UserListTable from './UserListTable'

const UserManageMaster = () => {
  const [userData, setUserData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/getAllUserMybatis`)
      .then((res) => {
        setUserData(res.data)
        setFilteredData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    if (selectedFilter === 'business') {
      const filterResult = userData.filter((item, index) => {
        return item.user_type === 'business'
      })
      setFilteredData(filterResult)
    } else if (selectedFilter === 'user') {
      const filterResult = userData.filter((item, index) => {
        return item.user_type === 'user'
      })
      setFilteredData(filterResult)
    }
  }, [selectedFilter])

  useEffect(() => {
    if(!keyword){
      setFilteredData(userData);
    }
    if(keyword){
      const searchResult = userData.filter((item, index) => {
        if(item.name && item.nickname && item.email ){
          return (
            item.name.indexOf(keyword) >= 0
            ||item.nickname.indexOf(keyword) >= 0
            || item.email.indexOf(keyword) >= 0
          )
        }
      })
      setFilteredData(searchResult);
    }
  },[keyword])

  return (
    <div>
      <UserFilterListBox setSelectedFilter={setSelectedFilter} />
      <input
        type="text"
        placeholder="사용자 검색"
        className={`mb-4 h-8 w-72 rounded-lg border-b-2 border-[black] text-center`}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <hr/>
      <div className="my-4 h-[36rem] w-[72rem] overflow-scroll rounded-lg">
        <UserListTable userData={filteredData} />
      </div>
      <UserUpdataModal />
    </div>
  )
}

export default UserManageMaster
