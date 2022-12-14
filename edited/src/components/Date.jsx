import React from 'react'
import { getAllDateInfo } from '../util'

const Date = ({createdAt}) => {

 const allpostdateinfo=getAllDateInfo(createdAt)

    return (
        <span className="bMain_smallfont" >
            {allpostdateinfo.month.month}{" "}
              {allpostdateinfo.date}{" "} 
              {allpostdateinfo.year}
          </span>
    )
}

export default Date
