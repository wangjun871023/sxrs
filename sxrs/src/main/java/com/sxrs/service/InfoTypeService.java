package com.sxrs.service;  
  
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxrs.dao.IDeptDao;
import com.sxrs.dao.IInfoTypeDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoTypeEntity;
  
@Service  
public class InfoTypeService implements IInfoTypeService {  
    @Autowired  
    private IInfoTypeDao infoTypeDao;

	@Override
	public List<InfoTypeEntity> loadInfoTypeTree() {
		return infoTypeDao.loadInfoTypeTree();
	}
}  
