package com.sxrs.dao;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.UserEntity;

@Repository  
public class UserDao extends HibernateDao<UserEntity, Integer>  implements IUserDao{
	@Override
	public void saveUserEntity(UserEntity userEntity) {
		this.save(userEntity);
	}
}
