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
    staff_id varchar(255) comment '职员id',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

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
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);

insert into dept_table(id,dept_name) values("0001","办公室");
insert into dept_table(id,dept_name) values("0002","工会工作部");
insert into dept_table(id,dept_name) values("0003","监察部公室");
insert into dept_table(id,dept_name) values("0004","销售督察部");
insert into dept_table(id,dept_name) values("0005","内控合规部");
insert into dept_table(id,dept_name) values("0006","人力资源部");
insert into dept_table(id,dept_name) values("0007","教育培训部");
insert into dept_table(id,dept_name) values("0008","电销中心");
insert into dept_table(id,dept_name) values("0009","健康保险部");
insert into dept_table(id,dept_name) values("0010","团体业务部");
insert into dept_table(id,dept_name) values("0011","个险销售部");
insert into dept_table(id,dept_name) values("0012","县域保险部");
insert into dept_table(id,dept_name) values("0013","银行保险部");
insert into dept_table(id,dept_name) values("0014","客服管理");
insert into dept_table(id,dept_name) values("0015","业务管理");
insert into dept_table(id,dept_name) values("0016","财务管理");
insert into dept_table(id,dept_name) values("0017","信息技术部");

--信息表
drop table if exists info_table;
create table info_table(
    id varchar(255) not null primary key comment '信息id',
    dept_name varchar(255) comment '信息标题',
    info_time varchar(255) comment '信息发布时间',
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
    dept_name varchar(255) comment '信息类别名称',
    create_user varchar(255) comment '创建用户id',
    update_user varchar(255) comment '更新用户id',
    create_time varchar(255) comment '创建时间',
    update_time varchar(255) comment '更新时间'
);



