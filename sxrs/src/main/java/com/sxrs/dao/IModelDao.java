package com.sxrs.dao;

import java.util.List;

import com.sxrs.pojo.ModelEntity;


public interface IModelDao {
	List<ModelEntity> loadModelTree(String userType);
}
