import React from 'react'

const ContentContainer = () => {
  const urlPath = window.location.href
  const getTitle = () => {
    if (urlPath.indexOf('CafeManageMaster') >= 0) {
      return '전체카페관리'
    } else if (urlPath.indexOf('UserManageMaster') >= 0) {
      return '전체유저관리'
    } else if (urlPath.indexOf('UserAnalytics') >= 0) {
      return '가입현황'
    } else if (urlPath.indexOf('VisitAnalytics') >= 0) {
      return '방문자현황'
    } else {
      return '관리'
    }
  }
  return (
    <div>
      <div className="w-full ">
        <h1 className="mb-4 px-4 text-2xl font-semibold sm:px-0 ">
          {getTitle()}
        </h1>
        <hr />
        {/* 여기 안에서 Like List, OrderedList, PointUsed, Profile 페이지가 돌아야함 */}
      </div>
    </div>
  )
}

export default ContentContainer
