package com.sxrs.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoEntity;

@Repository
public class InfoDao extends HibernateDao<InfoEntity, String> implements
		IInfoDao{
	@Override
	public List<InfoEntity> loadInfos() {
		return this.getAll();
	}
}
