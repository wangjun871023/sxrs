package com.sxrs.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.macrosoft.common.collection.CollectionUtils;
import com.macrosoft.common.date.DateUtils;
import com.macrosoft.common.log.LoggerUtils;
import com.macrosoft.common.string.StringUtils;
import com.macrosoft.core.BaseForm;
import com.macrosoft.core.HqlCondition;
import com.macrosoft.core.orm.Page;
import com.sxrs.dao.IInfoDao;
import com.sxrs.pojo.InfoEntity;

@Service
public class InfoService implements IInfoService {
	public static final Pattern PATTERN = Pattern.compile(
			"<img\\s+(?:[^>]*)src\\s*=\\s*([^>]+)", Pattern.CASE_INSENSITIVE
					| Pattern.MULTILINE);

	@Autowired
	private IInfoDao infoDao;

	@Override
	public Page<InfoEntity> loadInfos(InfoEntity info) {
		Page page = null;
		List param = null;
		HqlCondition condition = null;
		try {
			info.initPageInfo();
			condition = new HqlCondition();
			condition.setSelStr(" select infoEntity");
			condition.setFromStr(" from InfoEntity infoEntity");
			condition.setWhereStr(" where 1=1 ");
			if (info != null) {
				param = new ArrayList();
				if (!StringUtils.isEmpty(info.getInfoTypeId())) {
					param.add(info.getInfoTypeId());
					condition.setWhereStr(" and infoTypeId= ? ");
				}
				/*
				 * if (info.getId() != null) {
				 * condition.setWhereStr(" and id = ? ");
				 * param.add(info.getId()); } if
				 * (!StringUtils.isEmpty(info.getInfoTitle())) {
				 * condition.setWhereStr(" and roleName like ?"); param.add("%"
				 * + info.getInfoTitle().trim() + "%"); }
				 */
				page = infoDao.loadInfos(info, condition, param);
			}
			return page;
		} catch (Exception e) {
			e.printStackTrace();
			LoggerUtils.logger.error(e, e);
		} finally {
			condition = null;
			CollectionUtils.clearList(param);
			param = null;
		}
		return null;
	}

	@Override
	public void uploadInfoImage(MultipartFile file, HttpServletRequest request,
			String title, String width, String height, BaseForm tmp)
			throws Exception {
		String path = request.getSession().getServletContext()
				.getRealPath("/uploadFile");

		File targetFile = new File(path, file.getOriginalFilename());
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		file.transferTo(targetFile);
		tmp.setMname(title);
		tmp.setPageNo(width);
		tmp.setMid(height);
		tmp.setDir("/sxrs/uploadFile/" + file.getOriginalFilename());
	}

	@Override
	public void uploadFile(MultipartFile file, HttpServletRequest request,
			BaseForm tmp) throws Exception {
		String path = request.getSession().getServletContext()
				.getRealPath("/uploadFile");
		File targetFile = new File(path, file.getOriginalFilename());
		if (!targetFile.exists()) {
			targetFile.mkdirs();
		}
		file.transferTo(targetFile);
		tmp.setMname(file.getOriginalFilename());
		tmp.setDir("/sxrs/uploadFile/" + file.getOriginalFilename());
	}

	@Override
	public void addInfo(InfoEntity info) {
		// 提取图片
		List list = getContentImages(info.getInfoContent());
		String src = "";
		if (!CollectionUtils.emptyList(list)) {
			// 取第一张图片的src
			src = (String) list.get(0);
		}
		// 如果有图片设置url
		info.setPictureUrl(src);
		// info时间
		info.setInfoTime(DateUtils.getServerCurrentDateAndTime());
		// info浏览数
		info.setInfoCount("0");
		infoDao.saveInfoEntity(info);
	}

	@Override
	public void editInfo(InfoEntity info) {
		// 提取图片
		List list = getContentImages(info.getInfoContent());
		if (!CollectionUtils.emptyList(list)) {
			// 取第一张图片的src
			String src = (String) list.get(0);
			// 如果有图片设置url
			info.setPictureUrl(src);
		}
		// info时间
		info.setInfoTime(DateUtils.getServerCurrentDateAndTime());
		infoDao.saveInfoEntity(info);
	}

	/**
	 * 提取图片
	 * 
	 * @param infoContent
	 * @return
	 */
	private List getContentImages(String infoContent) {
		Matcher matcher = PATTERN.matcher(infoContent);
		List list = new ArrayList();
		while (matcher.find()) {
			String group = matcher.group(1);
			if (group == null) {
				continue;
			}
			// 这里可能还需要更复杂的判断,用以处理src="...."内的一些转义符
			if (group.startsWith("'")) {
				list.add(group.substring(1, group.indexOf("'", 1)));
			} else if (group.startsWith("\"")) {
				list.add(group.substring(1, group.indexOf("\"", 1)));
			} else {
				list.add(group.split("\\s")[0]);
			}
		}
		return list;
	}

	@Override
	public InfoEntity getInfoById(String id) {
		return infoDao.getInfoEntityById(id);
	}

	@Override
	public void deleteInfos(String ids) throws Exception {
		infoDao.deleteInfos(ids);
	}

}
