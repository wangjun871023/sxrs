package com.sxrs.dao;

import java.util.List;

import com.sxrs.pojo.InfoEntity;


public interface IInfoDao {
	List<InfoEntity> loadInfos();
}
