package com.sxrs.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.macrosoft.core.BaseForm;

/**
 * InfoEntity entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "info_table", catalog = "sxrs")
public class InfoEntity extends BaseForm implements java.io.Serializable {

	// Fields

	private String id;
	private String infoTitle;
	private String infoTime;
	private String infoContent;
	private String pictureUrl;
	private String infoNo;
	private String infoEms;
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
	public InfoEntity(String infoTitle, String infoTime, String infoContent,
			String pictureUrl, String infoNo, String infoEms, String infoCount,
			String infoTypeId, String createUser, String updateUser,
			String createTime, String updateTime) {
		this.infoTitle = infoTitle;
		this.infoTime = infoTime;
		this.infoContent = infoContent;
		this.pictureUrl = pictureUrl;
		this.infoNo = infoNo;
		this.infoEms = infoEms;
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

	@Column(name = "info_title")
	public String getInfoTitle() {
		return this.infoTitle;
	}

	public void setInfoTitle(String infoTitle) {
		this.infoTitle = infoTitle;
	}

	@Column(name = "info_time")
	public String getInfoTime() {
		return this.infoTime;
	}

	public void setInfoTime(String infoTime) {
		this.infoTime = infoTime;
	}

	@Column(name = "info_content")
	public String getInfoContent() {
		return this.infoContent;
	}

	public void setInfoContent(String infoContent) {
		this.infoContent = infoContent;
	}

	@Column(name = "picture_url")
	public String getPictureUrl() {
		return this.pictureUrl;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	@Column(name = "info_no")
	public String getInfoNo() {
		return this.infoNo;
	}

	public void setInfoNo(String infoNo) {
		this.infoNo = infoNo;
	}

	@Column(name = "info_ems")
	public String getInfoEms() {
		return this.infoEms;
	}

	public void setInfoEms(String infoEms) {
		this.infoEms = infoEms;
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