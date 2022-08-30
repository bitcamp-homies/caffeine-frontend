//@ts-nocheck

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import axios from 'axios'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 700,
  boxShadow: 24,
  p: 4,
}

export default function UserUpdataModal({
  open,
  setOpen,
  selected,
  setSelected,
}) {
  const handleClose = () => setOpen(false)
  const handleChange = (event) => {
    const { value, name } = event.target
    setSelected({
      ...selected,
      [name]: value,
    })
  }
  const userUpdate = (userParam) => {
    axios
      .get(
        `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/updateUserMybatis`,
        {
          params: userParam,
        },
      )
      .catch((err) => {
        console.log(err)
      })
  }

  const getRandBusinessNum = () => {
    const num = Math.floor(Math.random() * 100000000) + 1600000000
    // 160 00 00000 170 00 00000 사이 랜덤번호로
    return num
  }

  const setRecommended = () => {
    const insta = selected.insta_account
    axios
      .get(
        `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/getCafeByInstaMybatis`,
        {
          params: {
            insta_account: selected.insta_account,
          },
        },
      )
      .then((res) => {
        console.log('res.data', res.data)
        setSelected({
          ...selected,
          email: insta + '@gmail.com',
          password: insta + '!@',
          name: res.data.cafe_name,
          nickname: res.data.cafe_name,
          business_reg_num: getRandBusinessNum(),
          business_name: res.data.cafe_name + '주식회사',
          business_address:
            res.data.address1 + res.data.address2 + res.data.address3,
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-xl bg-gradient-to-tr from-[#F8E5EE] to-white"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="h-12 rounded-lg border-b-4 border-b-[#9F2042] text-center text-2xl font-semibold">
              {open && selected.insta_account}
              {open && (
                <span className="mx-2 rounded-lg bg-[#9F2042] px-2 text-center text-xl text-white">
                  {selected.user_type}
                </span>
              )}
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div className="rounded-lg py-2 px-4">
                <div className="mb-[4px] font-semibold">NAME</div>
                <input
                  type={'text'}
                  name="name"
                  placeholder="이름 입력"
                  value={open && selected.name}
                  className="h-8 w-3/5 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-lg py-2 px-4">
                <div className="mb-[4px] font-semibold">NICKNAME</div>
                <input
                  type={'text'}
                  name="nickname"
                  placeholder="닉네임 입력"
                  value={open && selected.nickname}
                  className="h-8 w-3/5 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-lg py-2 px-4">
                <div className="mb-[4px] font-semibold">EMAIL</div>
                <input
                  type={'text'}
                  placeholder="이메일 입력"
                  name="email"
                  value={open && selected.email}
                  className="h-8 w-3/5 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-lg py-2 px-4">
                <div className="mb-[4px] font-semibold">PASSWORD</div>
                <input
                  type={'text'}
                  placeholder="비밀번호 입력"
                  name="password"
                  value={open && selected.password}
                  className="h-8 w-3/5 rounded-lg"
                  onChange={handleChange}
                />
              </div>
              {(open && selected.user_type) === 'business' && (
                <div>
                  <div className="rounded-lg py-2 px-4">
                    <div className="mb-[4px] font-semibold">BUSINESS_NAME</div>
                    <input
                      type={'text'}
                      placeholder="사업자명 입력"
                      name="business_name"
                      value={open && selected.business_name}
                      className="h-8 w-3/5 rounded-lg"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="rounded-lg py-2 px-4">
                    <div className="mb-[4px] font-semibold">
                      BUSINESS_ADDRESS
                    </div>
                    <input
                      type={'text'}
                      placeholder="사업장주소 입력"
                      name="business_address"
                      value={open && selected.business_address}
                      className="h-8 w-3/5 rounded-lg"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="rounded-lg py-2 px-4">
                    <div className="mb-[4px] font-semibold">
                      BUSINESS_REG_NUM
                    </div>
                    <input
                      type={'text'}
                      placeholder="사업자등록번호 입력"
                      name="business_reg_num"
                      value={open && selected.business_reg_num}
                      className="h-8 w-3/5 rounded-lg"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <button
                  className="mx-2 rounded-lg border-2 border-[#9F2042] bg-white px-2 py-2 text-xl font-semibold"
                  onClick={() => {
                    setRecommended()
                  }}
                >
                  추천값 입력
                </button>
                <button
                  className="mx-2 rounded-lg bg-[#9F2042] px-2 py-2 text-xl font-semibold text-white "
                  onClick={() => {
                    userUpdate(selected)
                    setOpen(false)
                  }}
                >
                  수정하기
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
