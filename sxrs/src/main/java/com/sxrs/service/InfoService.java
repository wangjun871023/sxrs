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

import com.macrosoft.core.BaseForm;
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
	public List<InfoEntity> loadInfos() {
		return infoDao.loadInfos();
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
	public void addInfo(InfoEntity info, String infoTypeId) {
		// 提取图片
		String content = info.getInfoContent();
		Matcher matcher = PATTERN.matcher(content);
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
	}
}
