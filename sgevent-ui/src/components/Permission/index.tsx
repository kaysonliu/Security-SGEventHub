import React from 'react';
import { selectAuthSlice } from '../../state/auth/slice';
import { useSelector } from 'react-redux';
import { navigate } from 'gatsby';

export interface PermissionProps {
  authKeyList: string[];
  children: React.ReactNode;
}

const Permission: React.FC<PermissionProps> = ({ authKeyList, children }) => {
  const { isLoggedIn } = useSelector(state => selectAuthSlice(state));
  const hasPermission = usePermission(authKeyList);
  if (!isLoggedIn) {
    //if user is not logged in, navigate to login page
    navigate('/login');
  } else if (!hasPermission) {
    //if user does not have permission to access, navigate to 403 page
    navigate('/403');
  }

  return children;
};

export const usePermission = (authKeyList: string[]) => {
  const { userInfo } = useSelector(state => selectAuthSlice(state));
  const role = userInfo.user_role;
  return authKeyList.includes(role);
};

export default Permission;
