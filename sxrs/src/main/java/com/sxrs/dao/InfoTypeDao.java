package com.sxrs.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoTypeEntity;
import com.sxrs.pojo.UserEntity;

@Repository
public class InfoTypeDao extends HibernateDao<InfoTypeEntity, String> implements
		IInfoTypeDao{
	@Override
	public List<InfoTypeEntity> loadInfoTypeTree() {
		return this.getAll();
	}
}
