
export const userColumns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'username', headerName:'USER', width:230 ,  renderCell: (params) => {
        return (
            <div className="cellWithImg">
               <img className="cellImg" src={params.row.img} alt="img"/>
               {params.row.username}
            </div>
        )
    },
},
{field: 'email', headerName: 'Email', width: 230},
{field: 'age', headerName: 'Age', width: 100},
{
field: 'status',
 headerName: 'Status',
  width: 160,
  renderCell:(params) => {
      return <div className={`cellWithStatus ${params.row.status}`}>
               {params.row.status}
      </div>
  }
},

]






export const userRows = [
    {
        id: 1,
        username:'Snow',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'active',
        email:'1snow@gmail.com',
        age:35,
    
    },
    {
        id: 2,
        username:'Lannister',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'pending',
        email:'1Lannister@gmail.com',
        age:25,
    
    },
    {
        id: 3,
        username:'Stark',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'passive',
        email:'1stark@gmail.com',
        age:45,
    
    },
    {
        id: 4,
        username:'Targaryen',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'active',
        email:'1targaryen@gmail.com',
        age:55,
    
    },
    {
        id: 5,
        username:'Melisandre',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'pending',
        email:'1melisandre@gmail.com',
        age:40,
    
    },
    {
        id: 6,
        username:'Clifford',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'active',
        email:'1clifford@gmail.com',
        age:35,
    
    },
    {
        id: 7,
        username:'Frances',
        img:'https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?ixlib=rb-1.2.1&dl=marshal-quast-IV46f_H9PXw-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        status:'active',
        email:'1frances@gmail.com',
        age:40,
    
    },
]