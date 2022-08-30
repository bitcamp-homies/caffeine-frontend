// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { listAllMybatis } from 'store/api'

import Drinks from './productRsc/Drinks'

/* data -> menu data */
/*  */
const ProductContainer = ({ data, cafe_name, img, file_path, img_file }) => {
  const result = [...new Set(data.map((item) => item.subcategory))]
  const [address, SetAddress] = useState([])
  useEffect(() => {
    listAllMybatis().then((res) => SetAddress(res.data))
  }, [address])
  let addressfilter
  if (address !== '') {
    addressfilter = address.filter((item) => item.cafe_id === data[0].cafe_id)
  }
  return (
    <div className="pt-6 justify-center">
      <div className="h-16 w-full rounded-2xl bg-red-800 flex flex-row items-center pl-4 gap-4 md:h-28 md:gap-10">
          <img
            className="h-14 w-14 rounded-full bg-white md:h-20 md:w-20"
            src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${img}`}
            alt="image loading.."
            loading="lazy"
          />

          <div className="text-white text-sm md:text-xl">
            <p>{cafe_name}</p>
          </div>

          {/* addres, instagram ID */}
          <div className="flex flex-col gap-2 text-xs">
            {/* svg 1 */}
            <div className="flex-row items-center gap-2 hidden md:flex">
              <svg className="mr-3 h-[24px] w-[24px] overflow-visible fill-current   text-white">
                <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
              </svg>
              {address !== '' &&
                addressfilter.map((item) => {
                  const address = `${item.address1} ${item.address2} ${item.address3}`
                  const address4 = item.address4
                  return (
                    <p
                      key={item.cafe_id}
                      className="text-xs text-white"
                      onClick={() => window.open(`${map}${address}`)}
                    >
                      {`${address}${address4}`}
                    </p>
                  )
                })}
            </div>
            {/* svg 2 */}
            <div className="flex flex-row items-center gap-2 pl-1.5 md:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="white"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              {address !== '' &&
                addressfilter.map((item) => {
                  return (
                    <button
                      key={item.cafe_id}
                      className="truncate text-xs text-white"
                      onClick={() =>
                        window.open(`${instagramUrl}${item.insta_account}`)
                      }
                    >
                      @{item.insta_account}
                    </button>
                  )
                })}
            </div>
          </div>
        </div>
      <div className="text-bold pb-4 pt-5 text-3xl font-bold">Menu</div>
      <div className="pb-2 text-xl font-bold">All Menu</div>
      {<Drinks data={data} result={result} />}
    </div>
  )
}

export default ProductContainer
