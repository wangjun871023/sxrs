package com.sxrs.dao;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.UserEntity;

@Repository  
public class UserDao extends HibernateDao<UserEntity, String>  implements IUserDao{
	@Override
	public UserEntity getUserByUserName(String userName) {
		return this.findUniqueBy("userName", userName);
	}
}
