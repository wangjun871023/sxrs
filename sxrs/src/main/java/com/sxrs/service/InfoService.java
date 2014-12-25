package com.sxrs.service;  
  
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxrs.dao.IDeptDao;
import com.sxrs.dao.IInfoDao;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoEntity;
  
@Service  
public class InfoService implements IInfoService {  
    @Autowired  
    private IInfoDao infoDao;

	@Override
	public List<InfoEntity> loadInfos() {
		return infoDao.loadInfos();
	}

}  
