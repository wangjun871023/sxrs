package com.sxrs.service;

import java.util.List;

import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.ModelEntity;

public interface IModelService {
	public List<ModelEntity> loadModelTree(String userType);
}
