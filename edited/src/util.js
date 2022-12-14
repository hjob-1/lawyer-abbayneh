
    export const getAllDateInfo=(createdAt)=>{

const months=[{
  number:"01",
  month:"Jan"
},
{
  number:"02",
  month:"Feb"
},
{
  number:"03",
  month:"mar"
},
{
  number:"04",
  month:"Apr"
},
{
  number:"05",
  month:"May"
},
{
  number:"06",
  month:"june"
},
{
  number:"07",
  month:"july"
},
{
  number:"08",
  month:"Aug"
},
{
  number:"09",
  month:"Sep"
},
{
  number:"10",
  month:"Oct"
},
{
  number:"11",
  month:"Nov"
},
{
  number:"12",
  month:"Dec"
},
  ]

const findmonth=(monthNumber)=>{

return months.find(month=>{
  if(month.number===monthNumber)
   return month.month
})

}

      return {
      year:createdAt.split("-")[0],
      month:findmonth(createdAt.split("-")[1]),
      date:createdAt.split("-")[2].slice(0,2),
      time:createdAt.split("-")[2].slice(3,11)
      }



    }

   