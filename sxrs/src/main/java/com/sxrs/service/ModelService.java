package com.sxrs.service;  
  
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxrs.dao.IModelDao;
import com.sxrs.pojo.ModelEntity;
  
@Service  
public class ModelService implements IModelService {  
    @Autowired  
    private IModelDao modelDao;

	@Override
	public List<ModelEntity> loadModelTree(String userType) {
		return modelDao.loadModelTree(userType);
	}  
}  
