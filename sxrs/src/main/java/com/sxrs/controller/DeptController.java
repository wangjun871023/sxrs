package com.sxrs.controller;  
  
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.macrosoft.core.BaseForm;
import com.macrosoft.core.utils.ResponseUtils;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.service.IDeptService;

@Controller  
@RequestMapping(value="/dept")  
public class DeptController {  
	protected Log logger=LogFactory.getLog(getClass()); 
	
    @Autowired  
    private IDeptService deptService;  
      
    @RequestMapping(value="/loadDeptCombo", method=RequestMethod.GET)  
    public @ResponseBody Map<String, Object> loadDeptCombo() {  
    	try {
    		List <DeptEntity> depts = deptService.loadDept();
    		return ResponseUtils.sendList(depts);  
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
}  
