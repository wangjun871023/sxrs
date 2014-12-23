package com.sxrs.service;  
  
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sxrs.dao.IDeptDao;
import com.sxrs.pojo.DeptEntity;
  
@Service  
public class DeptService implements IDeptService {  
    @Autowired  
    private IDeptDao deptDao;

	@Override
	public List<DeptEntity> loadDept() {
		List <DeptEntity> depts = deptDao.loadDept();
		return depts;
	}  

}  
