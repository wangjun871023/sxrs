package com.sxrs.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import com.macrosoft.core.BaseForm;
import com.macrosoft.core.orm.Page;
import com.sxrs.pojo.InfoEntity;

public interface IInfoService {
	public Page<InfoEntity> loadInfos(InfoEntity info);

	public void uploadInfoImage(MultipartFile file, HttpServletRequest request,
			String title, String width, String height, BaseForm tmp) throws Exception;

	public void uploadFile(MultipartFile file, HttpServletRequest request,
			BaseForm tmp) throws Exception;

	public void addInfo(InfoEntity info);

	public void editInfo(InfoEntity info);

	public InfoEntity getInfoById(String id);

	public void deleteInfos(String ids) throws Exception;
}
