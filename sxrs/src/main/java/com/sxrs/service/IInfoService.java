package com.sxrs.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

import com.macrosoft.core.BaseForm;
import com.sxrs.pojo.DeptEntity;
import com.sxrs.pojo.InfoEntity;

public interface IInfoService {
	public List<InfoEntity> loadInfos();

	public void uploadInfoImage(MultipartFile file, HttpServletRequest request,
			String title, String width, String height, BaseForm tmp) throws Exception;

	public void uploadFile(MultipartFile file, HttpServletRequest request,
			BaseForm tmp) throws Exception;

	public void addInfo(InfoEntity info, String infoTypeId);
}
