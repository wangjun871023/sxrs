package com.sxrs.service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.macrosoft.common.constant.CommonConst;
import com.macrosoft.common.string.StringUtils;
import com.macrosoft.core.BaseForm;
import com.sxrs.dao.IUserDao;
import com.sxrs.pojo.UserEntity;

@Service
public class UserService implements IUserService {
	@Autowired
	private IUserDao userDao;

	@Override
	public BaseForm loginService(HttpSession session, UserEntity userEntity,
			String deptId, String verifyCode) {
		BaseForm temp = new BaseForm();
		boolean result = false;
		// 校验验证码
		if (!checkVerifyCode(session, verifyCode)) {
			temp.setSuccess(false);
			temp.setInfo("验证码错误！");
			return temp;
		}
		// 检验用户信息
		if (!checkUserInfo(userEntity)) {
			temp.setSuccess(false);
			temp.setInfo("用户信息错误！");
			return temp;
		}
		//设置用户类别
		temp.setMid(userEntity.getUserType());
		temp.setSuccess(true);
		return temp;
	}

	/**
	 * 检验用户信息
	 * 
	 * @param userEntity
	 * @return
	 */
	private boolean checkUserInfo(UserEntity userEntity) {
		if (userEntity != null) {
			//检验密码
			UserEntity user = userDao.getUserByUserName(userEntity.getUserName());
			if(user!=null){
				userEntity.setUserType(user.getUserType());
				return true;
			}
		}
		return false;
	}

	/**
	 * 验证码验证
	 * 
	 * @param session
	 * @param verifyCode
	 * @return
	 */
	private boolean checkVerifyCode(HttpSession session, String verifyCode) {
		if (!StringUtils.isBlank(verifyCode)) {
			String code = (String) session.getAttribute(CommonConst.VALID_CODE);
			if (verifyCode.equalsIgnoreCase(code)) {
				return true;
			}
		}
		return false;
	}

}
