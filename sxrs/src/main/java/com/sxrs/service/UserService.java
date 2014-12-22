package com.sxrs.service;  
  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxrs.dao.IUserDao;
import com.sxrs.pojo.UserEntity;
  
@Service  
public class UserService implements IUserService {  
    @Autowired  
    private IUserDao userDao;  

	@Override
	public boolean saveUserEntity(UserEntity userEntity) {
		userDao.saveUserEntity(userEntity);  
//      System.out.println(2/0);
      return false; 
	}  
}  
