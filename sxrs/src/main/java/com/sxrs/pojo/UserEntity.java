package com.sxrs.pojo;

// default package

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

/**
 * UserEntity entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "user_table", catalog = "sxrs")
public class UserEntity implements java.io.Serializable {

	// Fields

	private String id;
	private String userName;
	private String userPass;
	private String staffId;
	private String createUser;
	private String updateUser;
	private String createTime;
	private String updateTime;

	// Constructors

	/** default constructor */
	public UserEntity() {
	}

	/** full constructor */
	public UserEntity(String userName, String userPass, String staffId,
			String createUser, String updateUser, String createTime,
			String updateTime) {
		this.userName = userName;
		this.userPass = userPass;
		this.staffId = staffId;
		this.createUser = createUser;
		this.updateUser = updateUser;
		this.createTime = createTime;
		this.updateTime = updateTime;
	}

	// Property accessors
	@GenericGenerator(name = "generator", strategy = "uuid.string")
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "id", unique = true, nullable = false)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "user_name")
	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "user_pass")
	public String getUserPass() {
		return this.userPass;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	@Column(name = "staff_id")
	public String getStaffId() {
		return this.staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
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