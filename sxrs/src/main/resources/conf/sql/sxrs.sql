--创建数据库
drop database if exists sxrs;
create database sxrs;
use sxrs;

--用户表
drop table if exists user_table;
create table user_table(
    id varchar(255) not null primary key comment '用户id',
    user_name varchar(255) comment '用户名',
    user_pass varchar(255) comment '密码',
    user_type varchar(255) comment '用户类别',
    staff_id varchar(255) comment '职员id',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

insert into user_table(id,user_name,user_pass,user_type) values('0001','admin','admin','0001');
insert into user_table(id,user_name,user_pass,user_type) values('0002','dept','dept','0002');
insert into user_table(id,user_name,user_pass,user_type) values('0003','person','person','0003');



--职员表
drop table if exists staff_table;
create table  staff_table(
    id varchar(255) not null primary key comment '职员id',
    staff_no varchar(255) comment '职员工号',
    staff_name varchar(255) comment '职员姓名',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

--部门表
drop table if exists dept_table;
create table dept_table(
    id varchar(255) not null primary key comment '部门id',
    dept_name varchar(255) comment '部门名称',
    dept_parent_id varchar(255) comment '父级部门id',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

insert into dept_table(id,dept_name) values('0001','办公室');
insert into dept_table(id,dept_name) values('0002','工会工作部');
insert into dept_table(id,dept_name) values('0003','监察部公室');
insert into dept_table(id,dept_name) values('0004','销售督察部');
insert into dept_table(id,dept_name) values('0005','内控合规部');
insert into dept_table(id,dept_name) values('0006','人力资源部');
insert into dept_table(id,dept_name) values('0007','教育培训部');
insert into dept_table(id,dept_name) values('0008','电销中心');
insert into dept_table(id,dept_name) values('0009','健康保险部');
insert into dept_table(id,dept_name) values('0010','团体业务部');
insert into dept_table(id,dept_name) values('0011','个险销售部');
insert into dept_table(id,dept_name) values('0012','县域保险部');
insert into dept_table(id,dept_name) values('0013','银行保险部');
insert into dept_table(id,dept_name) values('0014','客服管理');
insert into dept_table(id,dept_name) values('0015','业务管理');
insert into dept_table(id,dept_name) values('0016','财务管理');
insert into dept_table(id,dept_name) values('0017','信息技术部');

--信息表
drop table if exists info_table;
create table info_table(
    id varchar(255) not null primary key comment '信息id',
    info_title varchar(255) comment '信息标题',
    info_time varchar(255) comment '信息发布时间',
    info_content MEDIUMTEXT comment '信息内容',
    picture_url varchar(255) comment '图片url',
    info_no varchar(255) comment '文号',
    info_ems varchar(255) comment '是否紧急',
    info_count varchar(255) comment '信息浏览次数',
    info_type_id varchar(255) comment '信息类型id',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

--信息类别表
drop table if exists info_type_table;
create table info_type_table(
    id varchar(255) not null primary key comment '信息类别id',
    info_type_name varchar(255) comment '信息类别名称',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

insert into info_type_table(id,info_type_name) values('0001','通知发文');
insert into info_type_table(id,info_type_name) values('0002','热点关注');
insert into info_type_table(id,info_type_name) values('0003','理论学习');
insert into info_type_table(id,info_type_name) values('0004','信息交流');
insert into info_type_table(id,info_type_name) values('0005','每日更新');

--菜单表
drop table if exists menu_table;
create table menu_table(
    id varchar(255) not null primary key comment '菜单id',
    menu_name varchar(255) comment '菜单名称',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

insert into menu_table(id,menu_name) values('0001','系统管理员菜单');
insert into menu_table(id,menu_name) values('0002','部门管理员菜单');
insert into menu_table(id,menu_name) values('0003','普通用户菜单');

--模块表
drop table if exists model_table;
create table model_table(
    id varchar(255) not null primary key comment '模块id',
    model_name varchar(255) comment '模块名称',
    menu_id varchar(255) comment '所属菜单id',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

--系统管理员菜单
insert into model_table(id,model_name,menu_id) values('0001','部门人员维护','0001');
insert into model_table(id,model_name,menu_id) values('0002','信息发布','0001');
insert into model_table(id,model_name,menu_id) values('0003','个人信息','0001');
insert into model_table(id,model_name,menu_id) values('0003','当前关注','0001');
--部门管理员菜单
insert into model_table(id,model_name,menu_id) values('0004','信息发布','0002');
insert into model_table(id,model_name,menu_id) values('0005','人员维护','0002');
insert into model_table(id,model_name,menu_id) values('0006','个人信息','0002');
--普通用户菜单
insert into model_table(id,model_name,menu_id) values('0007','网上投票','0003');
insert into model_table(id,model_name,menu_id) values('0008','网上考试','0003');
insert into model_table(id,model_name,menu_id) values('0009','网上测评','0003');
insert into model_table(id,model_name,menu_id) values('0010','个人信息','0003');


