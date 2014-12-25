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
import com.sxrs.pojo.InfoEntity;
import com.sxrs.service.IInfoService;

@Controller  
@RequestMapping(value="/info")  
public class InfoController {  
	protected Log logger=LogFactory.getLog(getClass()); 
	
    @Autowired  
    private IInfoService infoService;  
      
    @RequestMapping(value="/loadInfo", method=RequestMethod.GET)  
    public @ResponseBody Map<String, Object> loadModelTree() {  
    	try {
    		List <InfoEntity> infos = infoService.loadInfos();
     		return ResponseUtils.sendList(infos);  
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
}  
