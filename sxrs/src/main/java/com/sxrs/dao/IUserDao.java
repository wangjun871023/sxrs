package com.sxrs.dao;

import com.sxrs.pojo.UserEntity;


public interface IUserDao {
	UserEntity getUserByUserName(String userName);
}
