package com.sxrs.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.PropertyFilter.MatchType;
import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.ModelEntity;

@Repository
public class ModelDao extends HibernateDao<ModelEntity, String> implements
		IModelDao {
	@Override
	public List<ModelEntity> loadModelTree(String userType) {
		return this.findBy("menuId", userType, MatchType.EQ);
	}
}
