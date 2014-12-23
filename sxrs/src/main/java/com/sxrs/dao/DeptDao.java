package com.sxrs.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.UserEntity;

@Repository
public class DeptDao extends HibernateDao<DeptEntity, String> implements
		IDeptDao {

	@Override
	public List<DeptEntity> loadDept() {
		List<DeptEntity> depts = this.getAll();
		return depts;
	}

}
