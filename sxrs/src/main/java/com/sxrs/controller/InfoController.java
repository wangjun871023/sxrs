package com.sxrs.controller;  
  
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.macrosoft.core.BaseForm;
import com.macrosoft.core.orm.Page;
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
    public @ResponseBody Map<String, Object> loadInfo(InfoEntity info) {  
    	try {
    		Page<InfoEntity> page = infoService.loadInfos(info);
     		return ResponseUtils.sendPage(page);  
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
    		infoService.uploadInfoImage(file, request, title, width, height, tmp);
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }

    @RequestMapping(value="/uploadFile")  
    public @ResponseBody Map<String, Object> uploadFile(MultipartFile file,HttpServletRequest request) {  
    	try {
    		BaseForm tmp = new BaseForm();
    		infoService.uploadFile(file, request, tmp);
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }

    @RequestMapping(value="/addInfo")  
    public @ResponseBody Map<String, Object> addInfo(InfoEntity info) {  
    	try {
    		BaseForm tmp = new BaseForm();
    		infoService.addInfo(info);
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
    
    @RequestMapping(value="/editInfo")  
    public @ResponseBody Map<String, Object> editInfo(InfoEntity info) {  
    	try {
    		BaseForm tmp = new BaseForm();
    		infoService.editInfo(info);
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
    
    @RequestMapping(value="/deleteInfo")  
    public @ResponseBody Map<String, Object> deleteInfo(String ids) {  
    	try {
    		BaseForm tmp = new BaseForm();
    		infoService.deleteInfos(ids);
    		tmp.setSuccess(true);
    		return ResponseUtils.sendBaseForm(tmp);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error(e, e);
		}
		return null;
    }  
    
    
     /**
	 * 使用@ModelAttribute, 实现Struts2 Preparable二次部分绑定的效果,先根据form的id从数据库查出Example对象,
	 * 再把Form提交的内容绑定到该对象上。
	 * 因为仅update()方法的form中有id属性，因此本方法在该方法中执行.
	 */
	@ModelAttribute("preEditInfo")
	public InfoEntity preEditInfo(@RequestParam(value = "id", required = false) String id) {
		if (id != null) {
			return infoService.getInfoById(id);
		}
		return null;
	}
    
}  
