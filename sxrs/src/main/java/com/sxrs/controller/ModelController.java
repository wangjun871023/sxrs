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
import com.sxrs.pojo.ModelEntity;
import com.sxrs.service.IDeptService;
import com.sxrs.service.IModelService;

@Controller  
@RequestMapping(value="/model")  
public class ModelController {  
	protected Log logger=LogFactory.getLog(getClass()); 
	
    @Autowired  
    private IModelService modelService;  
      
    @RequestMapping(value="/loadModelTree", method=RequestMethod.GET)  
    public @ResponseBody Map<String, Object> loadModelTree(String userType) {  
    	try {
    		List <ModelEntity> models = modelService.loadModelTree(userType);
     		return ResponseUtils.sendList(models);  
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
}  
