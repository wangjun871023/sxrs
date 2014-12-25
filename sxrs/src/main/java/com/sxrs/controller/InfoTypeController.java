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

import com.macrosoft.core.utils.ResponseUtils;
import com.sxrs.pojo.InfoTypeEntity;
import com.sxrs.service.IInfoTypeService;

@Controller  
@RequestMapping(value="/infoType")  
public class InfoTypeController {  
	protected Log logger=LogFactory.getLog(getClass()); 
	
    @Autowired  
    private IInfoTypeService infoTypeService;  
      
    @RequestMapping(value="/loadInfoTypeTree", method=RequestMethod.GET)  
    public @ResponseBody Map<String, Object> loadModelTree() {  
    	try {
    		List <InfoTypeEntity> types= infoTypeService.loadInfoTypeTree();
     		return ResponseUtils.sendList(types);  
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
}  
