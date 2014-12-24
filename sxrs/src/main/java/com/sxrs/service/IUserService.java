package com.sxrs.service;  

import javax.servlet.http.HttpSession;

import com.macrosoft.core.BaseForm;
import com.sxrs.pojo.UserEntity;
  
  
public interface IUserService {  
	public BaseForm loginService(HttpSession session, UserEntity userEntity, String deptId,
			String verifyCode);
  
}  
