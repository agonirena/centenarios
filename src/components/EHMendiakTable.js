import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const EHMendiakTable = (props) => {
    const columns = [
        {field: 'id', headerName: 'ID', type: 'number', width: 70 },
        {field: 'name', headerName: 'Mountain', width: 150},
        {field: 'altitude', headerName: 'Altitude', type:'number', width: 150}
    ]
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid rows={props.mountains} columns={columns} pageSize={15}  />
        </div>
    )
}

export default EHMendiakTable;