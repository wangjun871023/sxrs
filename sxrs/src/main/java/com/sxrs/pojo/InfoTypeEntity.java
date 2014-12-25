package com.sxrs.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

/**
 * InfoTypeEntity entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "info_type_table", catalog = "sxrs")
public class InfoTypeEntity implements java.io.Serializable {

	// Fields

	private String id;
	private String infoTypeName;
	private String createUser;
	private String updateUser;
	private String createTime;
	private String updateTime;

	// Constructors

	/** default constructor */
	public InfoTypeEntity() {
	}

	/** full constructor */
	public InfoTypeEntity(String infoTypeName, String createUser,
			String updateUser, String createTime, String updateTime) {
		this.infoTypeName = infoTypeName;
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

	@Column(name = "info_type_name")
	public String getInfoTypeName() {
		return this.infoTypeName;
	}

	public void setInfoTypeName(String infoTypeName) {
		this.infoTypeName = infoTypeName;
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