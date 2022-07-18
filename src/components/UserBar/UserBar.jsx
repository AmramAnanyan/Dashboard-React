import React, { useEffect } from 'react'
import { StyledUserBar } from './styled';
import { useDispatch,useSelector} from "react-redux";
import { loadUser, selectUserName } from '../../redux/features/userApiSlice';
import flagIcon from "../../assets/flagIcone.png";
import indetIcone from "../../assets/indentIcone.png";

function UserBar() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    console.log(userName)
  return (
      <StyledUserBar>
          <ul>
              <li className='li1'>
              <img src={indetIcone} alt="" width="36" height="24"/>
              </li>
              <li className='li2'>
                  <img src={flagIcon} alt="" width="22" height="16" />
                  EN
              </li>
              <li className='li3'>
              {
                userName.results?.map((user) => {      
                    return (
                      <React.Fragment key={`id${Math.random()}`}>
                            <img  className='userImage' src={user.picture.large} alt="" width="56" height="56" />
                            <h4 >Hello, {user.name.first}</h4> 
                        </React.Fragment>
                     )
                  })    
                }
              </li>
          </ul>
    </StyledUserBar>
  )
}

export { UserBar };