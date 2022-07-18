import React from 'react';
import { useSelector } from "react-redux";
import { getUsers } from '../../redux/features/userTableSlice';
import { StyledUserTable } from './styled';
import listIcone from "../../assets/listIcone.png";

function UserTable() {
    const users = useSelector(getUsers);
  return (
      <StyledUserTable>

          <div className='tableHeader'><span>ID</span> <span><b>UserName</b></span> <span>Comission</span> <span>view</span></div>
          <div> 
              {
                  users.map((user) => {
                      return (
                          <p key={user.id}>
                              <span>{user.id}</span> <span>{user.userName}</span>
                              <span>{user.profit}</span><span>{user.comission}</span>
                              <span><img src={listIcone} alt="" width="24" height="24" /></span>
                          </p>
                      )
                  })
              }
          </div>
    </StyledUserTable>
  )
}

export {UserTable} 