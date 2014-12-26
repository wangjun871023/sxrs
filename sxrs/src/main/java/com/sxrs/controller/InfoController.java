package com.sxrs.controller;  
  
import java.io.File;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.macrosoft.common.constant.CommonConst;
import com.macrosoft.common.file.FileUtils;
import com.macrosoft.common.upload.UploadUtils;
import com.macrosoft.core.BaseForm;
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
    
    @RequestMapping(value="/uploadInfoImage")  
    public @ResponseBody Map<String, Object> uploadInfoImage(MultipartFile file,HttpServletRequest request,String title,String width,String height) {  
    	try {
    		BaseForm tmp = new BaseForm();
    		String path = request.getSession().getServletContext().getRealPath("/uploadFile");  
    		
    		File targetFile = new File(path, file.getOriginalFilename());  
	        if(!targetFile.exists()){  
	            targetFile.mkdirs();  
	        }  
	        file.transferTo(targetFile);
	        tmp.setMname(title);
	        tmp.setPageNo(width);
	        tmp.setMid(height);
	        tmp.setDir("/sxrs/uploadFile/"+file.getOriginalFilename());
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
    
    
}  