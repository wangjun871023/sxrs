package com.sxrs.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.macrosoft.common.log.LoggerUtils;
import com.macrosoft.core.BaseForm;
import com.macrosoft.core.utils.ResponseUtils;
import com.sxrs.pojo.UserEntity;
import com.sxrs.service.IUserService;

@Controller
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private IUserService userService;

	@RequestMapping(value = "/login")
	public @ResponseBody Map<String, Object> login(HttpSession session,UserEntity userEntity,String deptId,String verifyCode) {
		BaseForm temp = null;
		try {
			temp = userService.loginService(session,userEntity,deptId,verifyCode);
		} catch (Exception e) {
			e.printStackTrace();
			temp = new BaseForm();
			temp.setSuccess(false);
			LoggerUtils.logger.error(e, e);
		}
		return ResponseUtils.sendBaseForm(temp);
	}

	
	
	// @RequestMapping(value = "/beforeList",method = RequestMethod.GET)
	// public String beforeList(Model model) {
	// return "example/example_list";
	// }
	// /**
	// * 查询数据
	// * @param entity
	// * @param request
	// * @return
	// */
	// @RequestMapping(value = "/list")
	// public @ResponseBody Map<String, Object> list(Example entity,
	// ServletRequest request) {
	// Page page=null;
	// try{
	// entity.initPageInfo();
	// page =exampleService.listPage(entity, entity.getPageNoInt(),
	// entity.getPageSizeInt());
	// }
	// catch(Exception ex){
	// page=new Page();
	// return ResponseUtils.sendPage(page,false);
	// }
	// return ResponseUtils.sendPage(page);
	// }
	//
	// @RequestMapping(value = "/beforeCreate")
	// public String beforeCreate(Model model) {
	// model.addAttribute("task", new Example());
	// model.addAttribute("action", "create");
	// return "example/example_add";
	// }
	// /**
	// * 新增数据
	// * @param newExample
	// * @param redirectAttributes
	// * @return
	// */
	// @RequestMapping(value = "/create", method = RequestMethod.POST)
	// public @ResponseBody Map<String, Object> create( Example entity,
	// RedirectAttributes redirectAttributes) {
	// BaseForm temp=null;
	// try{
	// temp=exampleService.create(entity);
	// if(temp!=null){
	// temp.setSuccess(temp.getSuccess());
	// temp.setInfo(temp.getInfo());
	// }
	// }
	// catch(Exception ex){
	// temp=new BaseForm();
	// temp.setSuccess(false);
	// logger.error(ex,ex);
	// }
	// return ResponseUtils.sendBaseForm(temp);
	// }
	// /**
	// * 修改数据之前的操作
	// * @param id
	// * @param model
	// * @return
	// */
	// @RequestMapping(value = "/beforeUpdate", method = RequestMethod.GET)
	// public String beforeUpdate(@PathVariable("id") Long id, Model model) {
	// model.addAttribute("task", exampleService.getById(id));
	// model.addAttribute("action", "update");
	// return "example/example_update";
	// }
	// /**
	// * 修改数据
	// * @param task
	// * @param redirectAttributes
	// * @return
	// */
	// @RequestMapping(value = "/update", method = RequestMethod.POST)
	// public @ResponseBody Map<String, Object> update( Example entity,
	// RedirectAttributes redirectAttributes) {
	// BaseForm temp=null;
	// try{
	// temp=exampleService.update(entity);
	// if(temp!=null){
	// temp.setSuccess(temp.getSuccess());
	// temp.setInfo(temp.getInfo());
	// }
	// }
	// catch(Exception ex){
	// temp=new BaseForm();
	// temp.setSuccess(false);
	// logger.error(ex,ex);
	// }
	// return ResponseUtils.sendBaseForm(temp);
	// }
	// /**
	// * 删除数据
	// * @param entity
	// * @param redirectAttributes
	// * @return
	// */
	// @RequestMapping(value = "/delete")
	// public @ResponseBody Map<String, Object> delete(Example entity,
	// RedirectAttributes redirectAttributes) {
	// BaseForm temp=null;
	// try{
	// temp=exampleService.delete(entity.getIds(),entity);
	// if(temp!=null){
	// temp.setSuccess(temp.getSuccess());
	// temp.setInfo(temp.getInfo());
	// }
	// }
	// catch(Exception ex){
	// temp.setSuccess(false);
	// logger.error(ex,ex);
	// }
	// return ResponseUtils.sendBaseForm(temp);
	// }
	// /**
	// * 新增数据
	// * @param newExample
	// * @param redirectAttributes
	// * @return
	// */
	// @RequestMapping(value = "/listAge")
	// public @ResponseBody Map<String, Object> listAge(@Valid Example entity,
	// RedirectAttributes redirectAttributes) {
	// List temp=null;
	// try{
	// temp=exampleService.listAge(entity);
	// }
	// catch(Exception ex){
	// logger.error(ex,ex);
	// }
	// return ResponseUtils.sendList(temp,true);
	// }
	// /**
	// * 使用@ModelAttribute, 实现Struts2
	// Preparable二次部分绑定的效果,先根据form的id从数据库查出Example对象,
	// * 再把Form提交的内容绑定到该对象上。
	// * 因为仅update()方法的form中有id属性，因此本方法在该方法中执行.
	// */
	// @ModelAttribute("preloadExample")
	// public Example getExample(@RequestParam(value = "id", required = false)
	// Long id) {
	// if (id != null) {
	// return exampleService.getById(id);
	// }
	// return null;
	// }
	//
	// /**
	// * 取出Shiro中的当前用户Id.
	// */
	// private Long getCurrentUserId() {
	// ShiroUser user = (ShiroUser) SecurityUtils.getSubject().getPrincipal();
	// return user.id;
	// }

}
