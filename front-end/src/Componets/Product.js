import React from 'react'
import DataTable from 'react-data-table-component'
const Product = () => {
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    const columns = [
        {
            name:`id`,
            selector:row=>row.id,
            sortable:true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable:true,
            
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable:true,
        },
    ];   
    
   
    
  return (
    <>
      <DataTable data={data} columns={columns}  selectableRows/>
    </>
  )
}

export default Product
