package com.sxrs.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

/**
 * MenuEntity entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "menu_table", catalog = "sxrs")
public class MenuEntity implements java.io.Serializable {

	// Fields

	private String id;
	private String menuName;
	private String modelIds;
	private String createUser;
	private String updateUser;
	private String createTime;
	private String updateTime;

	// Constructors

	/** default constructor */
	public MenuEntity() {
	}

	/** full constructor */
	public MenuEntity(String menuName, String modelIds, String createUser,
			String updateUser, String createTime, String updateTime) {
		this.menuName = menuName;
		this.modelIds = modelIds;
		this.createUser = createUser;
		this.updateUser = updateUser;
		this.createTime = createTime;
		this.updateTime = updateTime;
	}

	// Property accessors
	@GenericGenerator(name = "generator", strategy = "uuid2")
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "id", unique = true, nullable = false)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "menu_name")
	public String getMenuName() {
		return this.menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	@Column(name = "model_ids")
	public String getModelIds() {
		return this.modelIds;
	}

	public void setModelIds(String modelIds) {
		this.modelIds = modelIds;
	}

	@Column(name = "create_user")
	public String getCreateUser() {
		return this.createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	@Column(name = "update_user")
	public String getUpdateUser() {
		return this.updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	@Column(name = "create_time")
	public String getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	@Column(name = "update_time")
	public String getUpdateTime() {
		return this.updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

}