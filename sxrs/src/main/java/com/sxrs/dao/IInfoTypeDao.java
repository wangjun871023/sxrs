package com.sxrs.dao;

import java.util.List;

import com.sxrs.pojo.InfoTypeEntity;
import com.sxrs.pojo.ModelEntity;


public interface IInfoTypeDao {
	List<InfoTypeEntity> loadInfoTypeTree();
}
