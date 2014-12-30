package com.sxrs.dao;

import java.util.List;

import com.macrosoft.core.HqlCondition;
import com.macrosoft.core.orm.Page;
import com.sxrs.pojo.InfoEntity;


public interface IInfoDao {
	Page loadInfos(InfoEntity info, HqlCondition condition, List param);

	void saveInfoEntity(InfoEntity info);

	InfoEntity getInfoEntityById(String id);

	void deleteInfos(String ids) throws Exception;
}
