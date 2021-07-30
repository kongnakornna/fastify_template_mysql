/*
 Navicat Premium Data Transfer

 Source Server         : AWS_MareaDB_3306
 Source Server Type    : MySQL
 Source Server Version : 100510
 Source Host           : localhost:3306
 Source Schema         : webservice1

 Target Server Type    : MySQL
 Target Server Version : 100510
 File Encoding         : 65001

 Date: 30/07/2021 11:03:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ad_administrator
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator`;
CREATE TABLE `ad_administrator`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role_id` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idcard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `infomation_agree_status` int NULL DEFAULT 0,
  `gender` int NULL DEFAULT 1,
  `birthday` date NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `online_status` int UNSIGNED NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_address
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_address`;
CREATE TABLE `ad_administrator_address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `active` int NULL DEFAULT 0,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `contact_name` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `phone_number` varbinary(255) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `line` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `freetext` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `location` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `countries_id` int NULL DEFAULT NULL,
  `geo_id` int NULL DEFAULT NULL,
  `province_id` int NULL DEFAULT NULL,
  `district_id` int NULL DEFAULT NULL,
  `subdistrict_id` int NULL DEFAULT NULL,
  `postcode` int NULL DEFAULT NULL,
  `status` int UNSIGNED NULL DEFAULT 1,
  `comment` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `create` datetime NULL DEFAULT NULL,
  `update` datetime NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`, `user_id`) USING BTREE,
  INDEX `id2`(`user_id`) USING BTREE,
  INDEX `first_name`(`first_name`) USING BTREE,
  INDEX `last_name`(`last_name`) USING BTREE,
  INDEX `contact`(`contact_name`(1024)) USING BTREE,
  INDEX `countries_id`(`countries_id`) USING BTREE,
  INDEX `geo_id`(`geo_id`) USING BTREE,
  INDEX `province_id`(`province_id`) USING BTREE,
  INDEX `district_id`(`district_id`) USING BTREE,
  INDEX `subdistrict_id`(`subdistrict_id`) USING BTREE,
  INDEX `postcode`(`postcode`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_pdpa_allow
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_pdpa_allow`;
CREATE TABLE `ad_administrator_pdpa_allow`  (
  `allow_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_option_id` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  PRIMARY KEY (`allow_id`) USING BTREE,
  INDEX `allow_id`(`allow_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_pdpa_allow_option
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_pdpa_allow_option`;
CREATE TABLE `ad_administrator_pdpa_allow_option`  (
  `pdpa_option_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_option_id_id2` int NULL DEFAULT NULL,
  `option_name` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `descriptiopn` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `language_id` int NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_option_id`) USING BTREE,
  INDEX `id`(`pdpa_option_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_pdpa_category
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_pdpa_category`;
CREATE TABLE `ad_administrator_pdpa_category`  (
  `pdpa_category_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_category_id2` int NULL DEFAULT NULL,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_category_id`) USING BTREE,
  INDEX `uid`(`pdpa_category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_pdpa_history
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_pdpa_history`;
CREATE TABLE `ad_administrator_pdpa_history`  (
  `pdpa_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `pdpa_option_id_id2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NOT NULL DEFAULT 1,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `usertype` int NULL DEFAULT 1 COMMENT 'customer or employee',
  `pdpa_option_id` int NULL DEFAULT NULL,
  `file` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`pdpa_id`) USING BTREE,
  INDEX `uid`(`pdpa_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_profile
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_profile`;
CREATE TABLE `ad_administrator_profile`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `language_id` int NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_roles
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_roles`;
CREATE TABLE `ad_administrator_roles`  (
  `create` datetime NOT NULL,
  `update` datetime NOT NULL,
  `role_id` int NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`role_id`, `id`) USING BTREE,
  INDEX `user_id`(`id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_roles_access
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_roles_access`;
CREATE TABLE `ad_administrator_roles_access`  (
  `create` datetime NOT NULL,
  `update` datetime NOT NULL,
  `zone_id` int NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`zone_id`, `id`) USING BTREE,
  INDEX `user_id`(`id`) USING BTREE,
  INDEX `role_id`(`zone_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ad_administrator_roles_type
-- ----------------------------
DROP TABLE IF EXISTS `ad_administrator_roles_type`;
CREATE TABLE `ad_administrator_roles_type`  (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created` datetime NOT NULL,
  `updated` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ca_calendar
-- ----------------------------
DROP TABLE IF EXISTS `ca_calendar`;
CREATE TABLE `ca_calendar`  (
  `calendar_id` int NOT NULL AUTO_INCREMENT,
  `category_id2` int NULL DEFAULT 1,
  `calendar_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `calendar_detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `date_start` date NULL DEFAULT NULL,
  `time_start` time NULL DEFAULT NULL,
  `date_end` date NULL DEFAULT NULL,
  `time_end` time NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_by_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `share` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`calendar_id`) USING BTREE,
  INDEX `id`(`calendar_id`) USING BTREE,
  INDEX `category_id`(`category_id2`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `date`(`date_start`) USING BTREE,
  INDEX `time`(`time_start`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ca_calendar_category
-- ----------------------------
DROP TABLE IF EXISTS `ca_calendar_category`;
CREATE TABLE `ca_calendar_category`  (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_id2` int NULL DEFAULT NULL,
  `group_id2` int NULL DEFAULT 1,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `category__detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `created_by_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`) USING BTREE,
  INDEX `id`(`category_id`) USING BTREE,
  INDEX `category_id`(`category_id2`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ca_calendar_group
-- ----------------------------
DROP TABLE IF EXISTS `ca_calendar_group`;
CREATE TABLE `ca_calendar_group`  (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_id2` int NULL DEFAULT NULL,
  `group_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `group__detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `created_by_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`group_id`) USING BTREE,
  INDEX `id`(`group_id`) USING BTREE,
  INDEX `category_id`(`group_id2`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ca_calendar_log
-- ----------------------------
DROP TABLE IF EXISTS `ca_calendar_log`;
CREATE TABLE `ca_calendar_log`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '1= event calendar 2= event  category',
  `uid` int NULL DEFAULT NULL,
  `log_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `event_id`(`event_id`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `type`(`type`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_comment
-- ----------------------------
DROP TABLE IF EXISTS `ev_comment`;
CREATE TABLE `ev_comment`  (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `uid_by` int NULL DEFAULT NULL,
  `uid_to` int NULL DEFAULT NULL,
  `id` int NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  `score` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_gallery
-- ----------------------------
DROP TABLE IF EXISTS `ev_gallery`;
CREATE TABLE `ev_gallery`  (
  `gallery_id` int NOT NULL AUTO_INCREMENT,
  `timeline_id` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `time` time NULL DEFAULT NULL,
  `titel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `active` int NULL DEFAULT 0,
  `source` int NULL DEFAULT 0,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`gallery_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_invite
-- ----------------------------
DROP TABLE IF EXISTS `ev_invite`;
CREATE TABLE `ev_invite`  (
  `invite_id` int NOT NULL AUTO_INCREMENT,
  `uid_by` int NULL DEFAULT NULL,
  `uid_to` int NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  `satatus` int NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`invite_id`) USING BTREE,
  INDEX `invite_id`(`invite_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_like
-- ----------------------------
DROP TABLE IF EXISTS `ev_like`;
CREATE TABLE `ev_like`  (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `uid_by` int NULL DEFAULT NULL,
  `uid_to` int NULL DEFAULT NULL,
  `timeline_id` int NULL DEFAULT NULL,
  `satus_like` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`like_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_score
-- ----------------------------
DROP TABLE IF EXISTS `ev_score`;
CREATE TABLE `ev_score`  (
  `score_id` int NOT NULL AUTO_INCREMENT,
  `uid_by` int NULL DEFAULT NULL,
  `uid_to` int NULL DEFAULT NULL,
  `timeline_id` int NULL DEFAULT NULL,
  `score` int NULL DEFAULT NULL,
  PRIMARY KEY (`score_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_shared
-- ----------------------------
DROP TABLE IF EXISTS `ev_shared`;
CREATE TABLE `ev_shared`  (
  `shared_id` int NOT NULL AUTO_INCREMENT,
  `uid_by` int NULL DEFAULT NULL,
  `id` int NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`shared_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_tag
-- ----------------------------
DROP TABLE IF EXISTS `ev_tag`;
CREATE TABLE `ev_tag`  (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`tag_id`) USING BTREE,
  INDEX `id`(`tag_id`) USING BTREE,
  INDEX `tag`(`tag`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_task
-- ----------------------------
DROP TABLE IF EXISTS `ev_task`;
CREATE TABLE `ev_task`  (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `task_id2` int NULL DEFAULT NULL,
  `timeline_id` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `time` time NULL DEFAULT NULL,
  `titel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `score` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`task_id`) USING BTREE,
  INDEX `task_id2`(`task_id2`) USING BTREE,
  INDEX `timeline_id`(`timeline_id`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `date`(`date`) USING BTREE,
  INDEX `time`(`time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_task_status
-- ----------------------------
DROP TABLE IF EXISTS `ev_task_status`;
CREATE TABLE `ev_task_status`  (
  `status_id` int NOT NULL AUTO_INCREMENT,
  `status_id2` int NULL DEFAULT NULL,
  `status_name` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`status_id`) USING BTREE,
  INDEX `status_id2`(`status_id2`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_timeline
-- ----------------------------
DROP TABLE IF EXISTS `ev_timeline`;
CREATE TABLE `ev_timeline`  (
  `timeline_id` int NOT NULL AUTO_INCREMENT,
  `timeline_id2` int NULL DEFAULT NULL,
  `timeline_parent_id` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `time` time NULL DEFAULT NULL,
  `titel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `share` int NULL DEFAULT NULL,
  `tag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`timeline_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_timeline_group
-- ----------------------------
DROP TABLE IF EXISTS `ev_timeline_group`;
CREATE TABLE `ev_timeline_group`  (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_id2` int NULL DEFAULT NULL,
  `group_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `group_detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `created_by_uid` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  `share` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_type
-- ----------------------------
DROP TABLE IF EXISTS `ev_type`;
CREATE TABLE `ev_type`  (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_id2` int NULL DEFAULT NULL,
  `type_name` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`type_id`) USING BTREE,
  INDEX `type_id2`(`type_id2`) USING BTREE,
  INDEX `type`(`type_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ev_view
-- ----------------------------
DROP TABLE IF EXISTS `ev_view`;
CREATE TABLE `ev_view`  (
  `view_id` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL,
  `id` int NULL DEFAULT NULL,
  `type_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`view_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for fi_files
-- ----------------------------
DROP TABLE IF EXISTS `fi_files`;
CREATE TABLE `fi_files`  (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `originalname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `filesize` int NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`file_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `originalname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `filesize` int NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`file_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for he_header
-- ----------------------------
DROP TABLE IF EXISTS `he_header`;
CREATE TABLE `he_header`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 67 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for log_event
-- ----------------------------
DROP TABLE IF EXISTS `log_event`;
CREATE TABLE `log_event`  (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trigger` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `action` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `sort_order` int NOT NULL,
  PRIMARY KEY (`event_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth2_account
-- ----------------------------
DROP TABLE IF EXISTS `oauth2_account`;
CREATE TABLE `oauth2_account`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `profile_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `level` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `uid`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth2_config
-- ----------------------------
DROP TABLE IF EXISTS `oauth2_config`;
CREATE TABLE `oauth2_config`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `user_id_create` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `grant_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `authorization_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `access_token_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `client_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `client_secret` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `redirect_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `enabled` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `refresh_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `identity_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `access_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `scope` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `web` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `app` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `access_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`access_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_appservice
-- ----------------------------
DROP TABLE IF EXISTS `oauth_appservice`;
CREATE TABLE `oauth_appservice`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `secect_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `client_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `app_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `device` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ipaddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `count` int NULL DEFAULT NULL,
  `expire_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_date` datetime NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_authorization_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_authorization_codes`;
CREATE TABLE `oauth_authorization_codes`  (
  `authorization_code` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Authorization code，access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'url',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`authorization_code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppId',
  `client_secret` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppSecret',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'url',
  `grant_types` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'client_credentials、password、refresh_token、authorization_code、authorization_access_token',
  `scope` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'Scope',
  `user_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'u_id',
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_jwt
-- ----------------------------
DROP TABLE IF EXISTS `oauth_jwt`;
CREATE TABLE `oauth_jwt`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'id',
  `subject` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `public_key` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `refresh_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'access_token token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppId',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`refresh_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_scopes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_scopes`;
CREATE TABLE `oauth_scopes`  (
  `scope` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `is_default` tinyint(1) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for oauth_users
-- ----------------------------
DROP TABLE IF EXISTS `oauth_users`;
CREATE TABLE `oauth_users`  (
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expires_in` int NOT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for profile
-- ----------------------------
DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `uid`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_countries
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_countries`;
CREATE TABLE `sa_geo_countries`  (
  `countries_id` int NOT NULL AUTO_INCREMENT,
  `countries_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `countries_iso_code_2` char(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `countries_iso_code_3` char(3) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`countries_id`) USING BTREE,
  INDEX `IDX_COUNTRIES_NAME`(`countries_name`) USING BTREE,
  INDEX `countries_id`(`countries_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 240 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_district
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_district`;
CREATE TABLE `sa_geo_district`  (
  `district_id` int NOT NULL AUTO_INCREMENT,
  `district_code` varchar(6) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `district_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amphur_id` int NOT NULL DEFAULT 0,
  `province_id` int NOT NULL DEFAULT 0,
  `geo_id` int NOT NULL DEFAULT 0,
  `countries_id` int NULL DEFAULT NULL,
  `district_id_map` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`district_id`) USING BTREE,
  INDEX `district_id`(`district_id`, `amphur_id`, `province_id`, `geo_id`, `countries_id`, `district_id_map`, `language_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 17810 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_geography
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_geography`;
CREATE TABLE `sa_geo_geography`  (
  `geo_id` int NOT NULL AUTO_INCREMENT,
  `geo_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `countries_id` int NULL DEFAULT NULL,
  `geo_id_map` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  PRIMARY KEY (`geo_id`) USING BTREE,
  INDEX `geo_id`(`geo_id`, `countries_id`, `geo_id_map`, `language_id`, `status`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_postcode
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_postcode`;
CREATE TABLE `sa_geo_postcode`  (
  `zipcode_id` int NOT NULL AUTO_INCREMENT,
  `district_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `province_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amphur_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `district_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `countries_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`zipcode_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7456 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_province
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_province`;
CREATE TABLE `sa_geo_province`  (
  `province_id` int NOT NULL AUTO_INCREMENT,
  `province_code` varchar(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `province_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `geo_id` int NOT NULL DEFAULT 0,
  `countries_id` int NULL DEFAULT NULL,
  `province_id_map` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`province_id`) USING BTREE,
  INDEX `province_id`(`province_id`, `geo_id`, `countries_id`, `province_id_map`, `language_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 155 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_subdistrict
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_subdistrict`;
CREATE TABLE `sa_geo_subdistrict`  (
  `subdistrict_id` int NOT NULL AUTO_INCREMENT,
  `subdistrict_code` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `subdistrict_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `geo_id` int NOT NULL DEFAULT 0,
  `province_id` int NOT NULL DEFAULT 0,
  `countries_id` int NULL DEFAULT NULL,
  `amphur_id_map` int NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`subdistrict_id`) USING BTREE,
  INDEX `amphur_id`(`subdistrict_id`, `geo_id`, `province_id`, `countries_id`, `amphur_id_map`, `language_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2021 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_zipcode
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_zipcode`;
CREATE TABLE `sa_geo_zipcode`  (
  `zipcode_id` int NOT NULL AUTO_INCREMENT,
  `district_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `province_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amphur_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `district_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `countries_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`zipcode_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7456 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sa_geo_zone
-- ----------------------------
DROP TABLE IF EXISTS `sa_geo_zone`;
CREATE TABLE `sa_geo_zone`  (
  `zone_id` int NOT NULL AUTO_INCREMENT,
  `country_code` char(2) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `zone_name` varchar(35) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`zone_id`) USING BTREE,
  INDEX `idx_zone_name`(`zone_name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 416 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_roles
-- ----------------------------
DROP TABLE IF EXISTS `sd_roles`;
CREATE TABLE `sd_roles`  (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created` datetime NOT NULL,
  `updated` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_user_gender
-- ----------------------------
DROP TABLE IF EXISTS `sd_user_gender`;
CREATE TABLE `sd_user_gender`  (
  `gender_id` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`gender_id`, `id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_user_roles
-- ----------------------------
DROP TABLE IF EXISTS `sd_user_roles`;
CREATE TABLE `sd_user_roles`  (
  `create` datetime NOT NULL,
  `update` datetime NOT NULL,
  `role_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`role_id`, `user_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users
-- ----------------------------
DROP TABLE IF EXISTS `sd_users`;
CREATE TABLE `sd_users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `profile_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `level` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idcard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `infomation_agree_status` int NULL DEFAULT 0,
  `gender` int NULL DEFAULT 1,
  `birthday` date NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `online_status` int NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `uid`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_address
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_address`;
CREATE TABLE `sd_users_address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id2` int NOT NULL,
  `active` int NULL DEFAULT 0,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `contact_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone_number` varbinary(255) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `line` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `freetext` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `location` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `countries_id` int NULL DEFAULT NULL,
  `geo_id` int NULL DEFAULT NULL,
  `province_id` int NULL DEFAULT NULL,
  `district_id` int NULL DEFAULT NULL,
  `subdistrict_id` int NULL DEFAULT NULL,
  `postcode` int NULL DEFAULT NULL,
  `status` int UNSIGNED NULL DEFAULT 1,
  `comment` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `create` datetime NULL DEFAULT NULL,
  `update` datetime NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`, `id2`) USING BTREE,
  INDEX `id2`(`id2`) USING BTREE,
  INDEX `first_name`(`first_name`) USING BTREE,
  INDEX `last_name`(`last_name`) USING BTREE,
  INDEX `contact`(`contact_name`) USING BTREE,
  INDEX `countries_id`(`countries_id`) USING BTREE,
  INDEX `geo_id`(`geo_id`) USING BTREE,
  INDEX `province_id`(`province_id`) USING BTREE,
  INDEX `district_id`(`district_id`) USING BTREE,
  INDEX `subdistrict_id`(`subdistrict_id`) USING BTREE,
  INDEX `postcode`(`postcode`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_history
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_history`;
CREATE TABLE `sd_users_history`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `zone_id` int NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `zone_id`(`zone_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_log
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_log`;
CREATE TABLE `sd_users_log`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NULL DEFAULT NULL COMMENT 'user_id ,type=1 address ,type=2',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '1= event calendar 2= event  category',
  `uid` int NULL DEFAULT NULL,
  `log_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `event_id`(`event_id`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `type`(`type`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_pdpa_allow
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_allow`;
CREATE TABLE `sd_users_pdpa_allow`  (
  `allow_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_option_id` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  PRIMARY KEY (`allow_id`) USING BTREE,
  INDEX `allow_id`(`allow_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_pdpa_allow_option
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_allow_option`;
CREATE TABLE `sd_users_pdpa_allow_option`  (
  `pdpa_option_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_option_id_id2` int NULL DEFAULT NULL,
  `option_name` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `descriptiopn` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `language_id` int NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_option_id`) USING BTREE,
  INDEX `id`(`pdpa_option_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_pdpa_category
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_category`;
CREATE TABLE `sd_users_pdpa_category`  (
  `pdpa_category_id` int NOT NULL AUTO_INCREMENT,
  `pdpa_category_id2` int NULL DEFAULT NULL,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_category_id`) USING BTREE,
  INDEX `uid`(`pdpa_category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_pdpa_history
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_history`;
CREATE TABLE `sd_users_pdpa_history`  (
  `pdpa_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `pdpa_option_id_id2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NOT NULL DEFAULT 1,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `usertype` int NULL DEFAULT 1 COMMENT 'customer or employee',
  `pdpa_option_id` int NULL DEFAULT NULL,
  `file` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`pdpa_id`) USING BTREE,
  INDEX `uid`(`pdpa_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sd_users_profile
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_profile`;
CREATE TABLE `sd_users_profile`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `level` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `idcard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `infomation_agree_status` int NULL DEFAULT 0,
  `gender` int NULL DEFAULT 1,
  `birthday` date NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `online_status` int NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `language_id` int NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for se_service_type
-- ----------------------------
DROP TABLE IF EXISTS `se_service_type`;
CREATE TABLE `se_service_type`  (
  `service_type_id` int NOT NULL AUTO_INCREMENT,
  `service_type_id2` int NULL DEFAULT NULL,
  `service_type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `create` datetime NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT 1,
  PRIMARY KEY (`service_type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tr_language
-- ----------------------------
DROP TABLE IF EXISTS `tr_language`;
CREATE TABLE `tr_language`  (
  `language_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `locale` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `directory` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sort_order` int NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`language_id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tr_translation
-- ----------------------------
DROP TABLE IF EXISTS `tr_translation`;
CREATE TABLE `tr_translation`  (
  `translation_id` int NOT NULL AUTO_INCREMENT,
  `store_id` int NOT NULL,
  `language_id` int NOT NULL,
  `route` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `key` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `value` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_added` datetime NOT NULL,
  PRIMARY KEY (`translation_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `profile_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `level` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `uid`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zo_allow_access
-- ----------------------------
DROP TABLE IF EXISTS `zo_allow_access`;
CREATE TABLE `zo_allow_access`  (
  `allow_id` int NOT NULL AUTO_INCREMENT,
  `zone_id2` int NULL DEFAULT NULL,
  `uid` int NOT NULL,
  `create` datetime NOT NULL,
  `update` datetime NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  PRIMARY KEY (`allow_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zo_zone
-- ----------------------------
DROP TABLE IF EXISTS `zo_zone`;
CREATE TABLE `zo_zone`  (
  `zone_id` int NOT NULL AUTO_INCREMENT,
  `zone_id2` int NULL DEFAULT NULL,
  `zone_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `create` datetime NOT NULL,
  `update` datetime NULL DEFAULT NULL,
  `language_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`zone_id`) USING BTREE,
  INDEX `user_id`(`zone_id`) USING BTREE,
  INDEX `role_id`(`zone_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
