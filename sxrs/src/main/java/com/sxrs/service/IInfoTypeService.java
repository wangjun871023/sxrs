package com.sxrs.service;

import java.util.List;

import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoTypeEntity;

public interface IInfoTypeService {
	public List<InfoTypeEntity> loadInfoTypeTree();
}
