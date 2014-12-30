package com.sxrs.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.macrosoft.core.HqlCondition;
import com.macrosoft.core.orm.Page;
import com.macrosoft.core.orm.hibernate.HibernateDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoEntity;

@Repository
public class InfoDao extends HibernateDao<InfoEntity, String> implements
		IInfoDao{

	@Override
	public void saveInfoEntity(InfoEntity info) {
		this.save(info);
	}

	@Override
	public Page loadInfos(InfoEntity info, HqlCondition condition, List param) {
		return this.findPage(new Page(info.getPageNoInt(), info.getPageSizeInt()), condition.toString(), param);
	}

	@Override
	public InfoEntity getInfoEntityById(String id) {
		return this.getById(id);
	}

	@Override
	public void deleteInfos(String ids) throws Exception {
		this.delete(ids, new InfoEntity());
	}

	

	
}
