package com.sxrs.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
 * InfoEntity entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "info_table", catalog = "sxrs")
public class InfoEntity implements java.io.Serializable {

	// Fields

	private String id;
	private String deptName;
	private String infoTime;
	private String infoCount;
	private String infoTypeId;
	private String createUser;
	private String updateUser;
	private String createTime;
	private String updateTime;

	// Constructors

	/** default constructor */
	public InfoEntity() {
	}

	/** full constructor */
	public InfoEntity(String deptName, String infoTime, String infoCount,
			String infoTypeId, String createUser, String updateUser,
			String createTime, String updateTime) {
		this.deptName = deptName;
		this.infoTime = infoTime;
		this.infoCount = infoCount;
		this.infoTypeId = infoTypeId;
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

	@Column(name = "dept_name")
	public String getDeptName() {
		return this.deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	@Column(name = "info_time")
	public String getInfoTime() {
		return this.infoTime;
	}

	public void setInfoTime(String infoTime) {
		this.infoTime = infoTime;
	}

	@Column(name = "info_count")
	public String getInfoCount() {
		return this.infoCount;
	}

	public void setInfoCount(String infoCount) {
		this.infoCount = infoCount;
	}

	@Column(name = "info_type_id")
	public String getInfoTypeId() {
		return this.infoTypeId;
	}

	public void setInfoTypeId(String infoTypeId) {
		this.infoTypeId = infoTypeId;
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