/*
 Navicat Premium Data Transfer

 Source Server         : AWS_MareaDB_3306
 Source Server Type    : MySQL
 Source Server Version : 100510
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 100510
 File Encoding         : 65001

 Date: 15/07/2021 10:50:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for catalog
-- ----------------------------
DROP TABLE IF EXISTS `catalog`;
CREATE TABLE `catalog`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `journal` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publisher` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `edition` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isPublished` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of catalog
-- ----------------------------

-- ----------------------------
-- Table structure for catalog_edition
-- ----------------------------
DROP TABLE IF EXISTS `catalog_edition`;
CREATE TABLE `catalog_edition`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `edition` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isPublished` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of catalog_edition
-- ----------------------------

-- ----------------------------
-- Table structure for catalog_entry
-- ----------------------------
DROP TABLE IF EXISTS `catalog_entry`;
CREATE TABLE `catalog_entry`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isPublished` tinyint NOT NULL,
  `catalogEditionId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_9608fdecc3707fa5522de850db0`(`catalogEditionId`) USING BTREE,
  CONSTRAINT `FK_9608fdecc3707fa5522de850db0` FOREIGN KEY (`catalogEditionId`) REFERENCES `catalog_edition` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of catalog_entry
-- ----------------------------

-- ----------------------------
-- Table structure for catalog_timestamp
-- ----------------------------
DROP TABLE IF EXISTS `catalog_timestamp`;
CREATE TABLE `catalog_timestamp`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstAdded` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `firstUpdated` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastUpdated` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `catalogId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `REL_99c0d4799d250d66ce0879ffa4`(`catalogId`) USING BTREE,
  CONSTRAINT `FK_99c0d4799d250d66ce0879ffa4e` FOREIGN KEY (`catalogId`) REFERENCES `catalog` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of catalog_timestamp
-- ----------------------------

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `cus_id` int NOT NULL,
  PRIMARY KEY (`cus_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------

-- ----------------------------
-- Table structure for edition
-- ----------------------------
DROP TABLE IF EXISTS `edition`;
CREATE TABLE `edition`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 168 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of edition
-- ----------------------------
INSERT INTO `edition` VALUES (1, 'January February 2019');
INSERT INTO `edition` VALUES (2, 'January February 2019');
INSERT INTO `edition` VALUES (3, 'November December 2018');
INSERT INTO `edition` VALUES (4, 'January February 2019');
INSERT INTO `edition` VALUES (5, 'November December 2018');
INSERT INTO `edition` VALUES (6, 'January February 2019');
INSERT INTO `edition` VALUES (7, 'November December 2018');
INSERT INTO `edition` VALUES (8, 'January February 2019');
INSERT INTO `edition` VALUES (9, 'November December 2018');
INSERT INTO `edition` VALUES (10, 'January February 2019');
INSERT INTO `edition` VALUES (11, 'November December 2018');
INSERT INTO `edition` VALUES (12, 'January February 2019');
INSERT INTO `edition` VALUES (13, 'November December 2018');
INSERT INTO `edition` VALUES (14, 'January February 2019');
INSERT INTO `edition` VALUES (15, 'November December 2018');
INSERT INTO `edition` VALUES (16, 'January February 2019');
INSERT INTO `edition` VALUES (17, 'November December 2018');
INSERT INTO `edition` VALUES (18, 'January February 2019');
INSERT INTO `edition` VALUES (19, 'November December 2018');
INSERT INTO `edition` VALUES (20, 'January February 2019');
INSERT INTO `edition` VALUES (21, 'November December 2018');
INSERT INTO `edition` VALUES (22, 'January February 2019');
INSERT INTO `edition` VALUES (23, 'November December 2018');
INSERT INTO `edition` VALUES (24, 'January February 2019');
INSERT INTO `edition` VALUES (25, 'November December 2018');
INSERT INTO `edition` VALUES (26, 'January February 2019');
INSERT INTO `edition` VALUES (27, 'November December 2018');
INSERT INTO `edition` VALUES (28, 'January February 2019');
INSERT INTO `edition` VALUES (29, 'November December 2018');
INSERT INTO `edition` VALUES (30, 'January February 2019');
INSERT INTO `edition` VALUES (31, 'November December 2018');
INSERT INTO `edition` VALUES (32, 'January February 2019');
INSERT INTO `edition` VALUES (33, 'November December 2018');
INSERT INTO `edition` VALUES (34, 'January February 2019');
INSERT INTO `edition` VALUES (35, 'November December 2018');
INSERT INTO `edition` VALUES (36, 'January February 2019');
INSERT INTO `edition` VALUES (37, 'November December 2018');
INSERT INTO `edition` VALUES (38, 'January February 2019');
INSERT INTO `edition` VALUES (39, 'November December 2018');
INSERT INTO `edition` VALUES (40, 'January February 2019');
INSERT INTO `edition` VALUES (41, 'November December 2018');
INSERT INTO `edition` VALUES (42, 'January February 2019');
INSERT INTO `edition` VALUES (43, 'November December 2018');
INSERT INTO `edition` VALUES (44, 'January February 2019');
INSERT INTO `edition` VALUES (45, 'November December 2018');
INSERT INTO `edition` VALUES (46, 'January February 2019');
INSERT INTO `edition` VALUES (47, 'November December 2018');
INSERT INTO `edition` VALUES (48, 'January February 2019');
INSERT INTO `edition` VALUES (49, 'November December 2018');
INSERT INTO `edition` VALUES (50, 'January February 2019');
INSERT INTO `edition` VALUES (51, 'November December 2018');
INSERT INTO `edition` VALUES (52, 'January February 2019');
INSERT INTO `edition` VALUES (53, 'November December 2018');
INSERT INTO `edition` VALUES (54, 'January February 2019');
INSERT INTO `edition` VALUES (55, 'November December 2018');
INSERT INTO `edition` VALUES (56, 'January February 2019');
INSERT INTO `edition` VALUES (57, 'November December 2018');
INSERT INTO `edition` VALUES (58, 'January February 2019');
INSERT INTO `edition` VALUES (59, 'November December 2018');
INSERT INTO `edition` VALUES (60, 'January February 2019');
INSERT INTO `edition` VALUES (61, 'November December 2018');
INSERT INTO `edition` VALUES (62, 'January February 2019');
INSERT INTO `edition` VALUES (63, 'November December 2018');
INSERT INTO `edition` VALUES (64, 'January February 2019');
INSERT INTO `edition` VALUES (65, 'November December 2018');
INSERT INTO `edition` VALUES (66, 'January February 2019');
INSERT INTO `edition` VALUES (67, 'November December 2018');
INSERT INTO `edition` VALUES (68, 'January February 2019');
INSERT INTO `edition` VALUES (69, 'November December 2018');
INSERT INTO `edition` VALUES (70, 'January February 2019');
INSERT INTO `edition` VALUES (71, 'November December 2018');
INSERT INTO `edition` VALUES (72, 'January February 2019');
INSERT INTO `edition` VALUES (73, 'November December 2018');
INSERT INTO `edition` VALUES (74, 'January February 2019');
INSERT INTO `edition` VALUES (75, 'November December 2018');
INSERT INTO `edition` VALUES (76, 'January February 2019');
INSERT INTO `edition` VALUES (77, 'November December 2018');
INSERT INTO `edition` VALUES (78, 'January February 2019');
INSERT INTO `edition` VALUES (79, 'November December 2018');
INSERT INTO `edition` VALUES (80, 'January February 2019');
INSERT INTO `edition` VALUES (81, 'November December 2018');
INSERT INTO `edition` VALUES (82, 'January February 2019');
INSERT INTO `edition` VALUES (83, 'November December 2018');
INSERT INTO `edition` VALUES (84, 'January February 2019');
INSERT INTO `edition` VALUES (85, 'November December 2018');
INSERT INTO `edition` VALUES (86, 'January February 2019');
INSERT INTO `edition` VALUES (87, 'November December 2018');
INSERT INTO `edition` VALUES (88, 'January February 2019');
INSERT INTO `edition` VALUES (89, 'November December 2018');
INSERT INTO `edition` VALUES (90, 'January February 2019');
INSERT INTO `edition` VALUES (91, 'November December 2018');
INSERT INTO `edition` VALUES (92, 'January February 2019');
INSERT INTO `edition` VALUES (93, 'November December 2018');
INSERT INTO `edition` VALUES (94, 'January February 2019');
INSERT INTO `edition` VALUES (95, 'November December 2018');
INSERT INTO `edition` VALUES (96, 'January February 2019');
INSERT INTO `edition` VALUES (97, 'November December 2018');
INSERT INTO `edition` VALUES (98, 'January February 2019');
INSERT INTO `edition` VALUES (99, 'November December 2018');
INSERT INTO `edition` VALUES (100, 'January February 2019');
INSERT INTO `edition` VALUES (101, 'November December 2018');
INSERT INTO `edition` VALUES (102, 'January February 2019');
INSERT INTO `edition` VALUES (103, 'November December 2018');
INSERT INTO `edition` VALUES (104, 'January February 2019');
INSERT INTO `edition` VALUES (105, 'November December 2018');
INSERT INTO `edition` VALUES (106, 'January February 2019');
INSERT INTO `edition` VALUES (107, 'November December 2018');
INSERT INTO `edition` VALUES (108, 'January February 2019');
INSERT INTO `edition` VALUES (109, 'November December 2018');
INSERT INTO `edition` VALUES (110, 'January February 2019');
INSERT INTO `edition` VALUES (111, 'November December 2018');
INSERT INTO `edition` VALUES (112, 'January February 2019');
INSERT INTO `edition` VALUES (113, 'November December 2018');
INSERT INTO `edition` VALUES (114, 'January February 2019');
INSERT INTO `edition` VALUES (115, 'November December 2018');
INSERT INTO `edition` VALUES (116, 'January February 2019');
INSERT INTO `edition` VALUES (117, 'November December 2018');
INSERT INTO `edition` VALUES (118, 'January February 2019');
INSERT INTO `edition` VALUES (119, 'November December 2018');
INSERT INTO `edition` VALUES (120, 'January February 2019');
INSERT INTO `edition` VALUES (121, 'November December 2018');
INSERT INTO `edition` VALUES (122, 'January February 2019');
INSERT INTO `edition` VALUES (123, 'November December 2018');
INSERT INTO `edition` VALUES (124, 'January February 2019');
INSERT INTO `edition` VALUES (125, 'November December 2018');
INSERT INTO `edition` VALUES (126, 'January February 2019');
INSERT INTO `edition` VALUES (127, 'November December 2018');
INSERT INTO `edition` VALUES (128, 'January February 2019');
INSERT INTO `edition` VALUES (129, 'November December 2018');
INSERT INTO `edition` VALUES (130, 'January February 2019');
INSERT INTO `edition` VALUES (131, 'November December 2018');
INSERT INTO `edition` VALUES (132, 'January February 2019');
INSERT INTO `edition` VALUES (133, 'November December 2018');
INSERT INTO `edition` VALUES (134, 'January February 2019');
INSERT INTO `edition` VALUES (135, 'November December 2018');
INSERT INTO `edition` VALUES (136, 'January February 2019');
INSERT INTO `edition` VALUES (137, 'November December 2018');
INSERT INTO `edition` VALUES (138, 'January February 2019');
INSERT INTO `edition` VALUES (139, 'November December 2018');
INSERT INTO `edition` VALUES (140, 'January February 2019');
INSERT INTO `edition` VALUES (141, 'November December 2018');
INSERT INTO `edition` VALUES (142, 'January February 2019');
INSERT INTO `edition` VALUES (143, 'November December 2018');
INSERT INTO `edition` VALUES (144, 'January February 2019');
INSERT INTO `edition` VALUES (145, 'November December 2018');
INSERT INTO `edition` VALUES (146, 'January February 2019');
INSERT INTO `edition` VALUES (147, 'November December 2018');
INSERT INTO `edition` VALUES (148, 'January February 2019');
INSERT INTO `edition` VALUES (149, 'November December 2018');
INSERT INTO `edition` VALUES (150, 'January February 2019');
INSERT INTO `edition` VALUES (151, 'November December 2018');
INSERT INTO `edition` VALUES (152, 'January February 2019');
INSERT INTO `edition` VALUES (153, 'November December 2018');
INSERT INTO `edition` VALUES (154, 'January February 2019');
INSERT INTO `edition` VALUES (155, 'November December 2018');
INSERT INTO `edition` VALUES (156, 'January February 2019');
INSERT INTO `edition` VALUES (157, 'November December 2018');
INSERT INTO `edition` VALUES (158, 'January February 2019');
INSERT INTO `edition` VALUES (159, 'November December 2018');
INSERT INTO `edition` VALUES (160, 'January February 2019');
INSERT INTO `edition` VALUES (161, 'November December 2018');
INSERT INTO `edition` VALUES (162, 'January February 2019');
INSERT INTO `edition` VALUES (163, 'November December 2018');
INSERT INTO `edition` VALUES (164, 'January February 2019');
INSERT INTO `edition` VALUES (165, 'November December 2018');
INSERT INTO `edition` VALUES (166, 'January February 2019');
INSERT INTO `edition` VALUES (167, 'November December 2018');

-- ----------------------------
-- Table structure for edition_sections_section
-- ----------------------------
DROP TABLE IF EXISTS `edition_sections_section`;
CREATE TABLE `edition_sections_section`  (
  `editionId` int NOT NULL,
  `sectionId` int NOT NULL,
  PRIMARY KEY (`editionId`, `sectionId`) USING BTREE,
  INDEX `IDX_c6945f8087a8cd6e55433c6ef7`(`editionId`) USING BTREE,
  INDEX `IDX_d096d3ea5202446964b2e3d914`(`sectionId`) USING BTREE,
  CONSTRAINT `FK_c6945f8087a8cd6e55433c6ef76` FOREIGN KEY (`editionId`) REFERENCES `edition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d096d3ea5202446964b2e3d9146` FOREIGN KEY (`sectionId`) REFERENCES `section` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of edition_sections_section
-- ----------------------------
INSERT INTO `edition_sections_section` VALUES (2, 1);
INSERT INTO `edition_sections_section` VALUES (3, 1);
INSERT INTO `edition_sections_section` VALUES (4, 2);
INSERT INTO `edition_sections_section` VALUES (4, 3);
INSERT INTO `edition_sections_section` VALUES (4, 4);
INSERT INTO `edition_sections_section` VALUES (5, 2);
INSERT INTO `edition_sections_section` VALUES (6, 5);
INSERT INTO `edition_sections_section` VALUES (6, 6);
INSERT INTO `edition_sections_section` VALUES (6, 7);
INSERT INTO `edition_sections_section` VALUES (7, 5);
INSERT INTO `edition_sections_section` VALUES (8, 8);
INSERT INTO `edition_sections_section` VALUES (8, 9);
INSERT INTO `edition_sections_section` VALUES (8, 10);
INSERT INTO `edition_sections_section` VALUES (9, 8);
INSERT INTO `edition_sections_section` VALUES (10, 11);
INSERT INTO `edition_sections_section` VALUES (10, 12);
INSERT INTO `edition_sections_section` VALUES (10, 13);
INSERT INTO `edition_sections_section` VALUES (11, 11);
INSERT INTO `edition_sections_section` VALUES (12, 14);
INSERT INTO `edition_sections_section` VALUES (12, 15);
INSERT INTO `edition_sections_section` VALUES (12, 16);
INSERT INTO `edition_sections_section` VALUES (13, 14);
INSERT INTO `edition_sections_section` VALUES (14, 17);
INSERT INTO `edition_sections_section` VALUES (14, 18);
INSERT INTO `edition_sections_section` VALUES (14, 19);
INSERT INTO `edition_sections_section` VALUES (15, 17);
INSERT INTO `edition_sections_section` VALUES (16, 20);
INSERT INTO `edition_sections_section` VALUES (16, 21);
INSERT INTO `edition_sections_section` VALUES (16, 22);
INSERT INTO `edition_sections_section` VALUES (17, 20);
INSERT INTO `edition_sections_section` VALUES (18, 23);
INSERT INTO `edition_sections_section` VALUES (18, 24);
INSERT INTO `edition_sections_section` VALUES (18, 25);
INSERT INTO `edition_sections_section` VALUES (19, 23);
INSERT INTO `edition_sections_section` VALUES (20, 26);
INSERT INTO `edition_sections_section` VALUES (20, 27);
INSERT INTO `edition_sections_section` VALUES (20, 28);
INSERT INTO `edition_sections_section` VALUES (21, 26);
INSERT INTO `edition_sections_section` VALUES (22, 29);
INSERT INTO `edition_sections_section` VALUES (22, 30);
INSERT INTO `edition_sections_section` VALUES (22, 31);
INSERT INTO `edition_sections_section` VALUES (23, 29);
INSERT INTO `edition_sections_section` VALUES (24, 32);
INSERT INTO `edition_sections_section` VALUES (24, 33);
INSERT INTO `edition_sections_section` VALUES (24, 34);
INSERT INTO `edition_sections_section` VALUES (25, 32);
INSERT INTO `edition_sections_section` VALUES (26, 35);
INSERT INTO `edition_sections_section` VALUES (26, 36);
INSERT INTO `edition_sections_section` VALUES (26, 37);
INSERT INTO `edition_sections_section` VALUES (27, 35);
INSERT INTO `edition_sections_section` VALUES (28, 38);
INSERT INTO `edition_sections_section` VALUES (28, 39);
INSERT INTO `edition_sections_section` VALUES (28, 40);
INSERT INTO `edition_sections_section` VALUES (29, 38);
INSERT INTO `edition_sections_section` VALUES (30, 41);
INSERT INTO `edition_sections_section` VALUES (30, 42);
INSERT INTO `edition_sections_section` VALUES (30, 43);
INSERT INTO `edition_sections_section` VALUES (31, 41);
INSERT INTO `edition_sections_section` VALUES (32, 44);
INSERT INTO `edition_sections_section` VALUES (32, 45);
INSERT INTO `edition_sections_section` VALUES (32, 46);
INSERT INTO `edition_sections_section` VALUES (33, 44);
INSERT INTO `edition_sections_section` VALUES (34, 47);
INSERT INTO `edition_sections_section` VALUES (34, 48);
INSERT INTO `edition_sections_section` VALUES (34, 49);
INSERT INTO `edition_sections_section` VALUES (35, 47);
INSERT INTO `edition_sections_section` VALUES (36, 50);
INSERT INTO `edition_sections_section` VALUES (36, 51);
INSERT INTO `edition_sections_section` VALUES (36, 52);
INSERT INTO `edition_sections_section` VALUES (37, 50);
INSERT INTO `edition_sections_section` VALUES (38, 53);
INSERT INTO `edition_sections_section` VALUES (38, 54);
INSERT INTO `edition_sections_section` VALUES (38, 55);
INSERT INTO `edition_sections_section` VALUES (39, 53);
INSERT INTO `edition_sections_section` VALUES (40, 56);
INSERT INTO `edition_sections_section` VALUES (40, 57);
INSERT INTO `edition_sections_section` VALUES (40, 58);
INSERT INTO `edition_sections_section` VALUES (41, 56);
INSERT INTO `edition_sections_section` VALUES (42, 59);
INSERT INTO `edition_sections_section` VALUES (42, 60);
INSERT INTO `edition_sections_section` VALUES (42, 61);
INSERT INTO `edition_sections_section` VALUES (43, 59);
INSERT INTO `edition_sections_section` VALUES (44, 62);
INSERT INTO `edition_sections_section` VALUES (44, 63);
INSERT INTO `edition_sections_section` VALUES (44, 64);
INSERT INTO `edition_sections_section` VALUES (45, 62);
INSERT INTO `edition_sections_section` VALUES (46, 65);
INSERT INTO `edition_sections_section` VALUES (46, 66);
INSERT INTO `edition_sections_section` VALUES (46, 67);
INSERT INTO `edition_sections_section` VALUES (47, 65);
INSERT INTO `edition_sections_section` VALUES (48, 68);
INSERT INTO `edition_sections_section` VALUES (48, 69);
INSERT INTO `edition_sections_section` VALUES (48, 70);
INSERT INTO `edition_sections_section` VALUES (49, 68);
INSERT INTO `edition_sections_section` VALUES (50, 71);
INSERT INTO `edition_sections_section` VALUES (50, 72);
INSERT INTO `edition_sections_section` VALUES (50, 73);
INSERT INTO `edition_sections_section` VALUES (51, 71);
INSERT INTO `edition_sections_section` VALUES (52, 74);
INSERT INTO `edition_sections_section` VALUES (52, 75);
INSERT INTO `edition_sections_section` VALUES (52, 76);
INSERT INTO `edition_sections_section` VALUES (53, 74);
INSERT INTO `edition_sections_section` VALUES (54, 77);
INSERT INTO `edition_sections_section` VALUES (54, 78);
INSERT INTO `edition_sections_section` VALUES (54, 79);
INSERT INTO `edition_sections_section` VALUES (55, 77);
INSERT INTO `edition_sections_section` VALUES (56, 80);
INSERT INTO `edition_sections_section` VALUES (56, 81);
INSERT INTO `edition_sections_section` VALUES (56, 82);
INSERT INTO `edition_sections_section` VALUES (57, 80);
INSERT INTO `edition_sections_section` VALUES (58, 83);
INSERT INTO `edition_sections_section` VALUES (58, 84);
INSERT INTO `edition_sections_section` VALUES (58, 85);
INSERT INTO `edition_sections_section` VALUES (59, 83);
INSERT INTO `edition_sections_section` VALUES (60, 86);
INSERT INTO `edition_sections_section` VALUES (60, 87);
INSERT INTO `edition_sections_section` VALUES (60, 88);
INSERT INTO `edition_sections_section` VALUES (61, 86);
INSERT INTO `edition_sections_section` VALUES (62, 89);
INSERT INTO `edition_sections_section` VALUES (62, 90);
INSERT INTO `edition_sections_section` VALUES (62, 91);
INSERT INTO `edition_sections_section` VALUES (63, 89);
INSERT INTO `edition_sections_section` VALUES (64, 92);
INSERT INTO `edition_sections_section` VALUES (64, 93);
INSERT INTO `edition_sections_section` VALUES (64, 94);
INSERT INTO `edition_sections_section` VALUES (65, 92);
INSERT INTO `edition_sections_section` VALUES (66, 95);
INSERT INTO `edition_sections_section` VALUES (66, 96);
INSERT INTO `edition_sections_section` VALUES (66, 97);
INSERT INTO `edition_sections_section` VALUES (67, 95);
INSERT INTO `edition_sections_section` VALUES (68, 98);
INSERT INTO `edition_sections_section` VALUES (68, 99);
INSERT INTO `edition_sections_section` VALUES (68, 100);
INSERT INTO `edition_sections_section` VALUES (69, 98);
INSERT INTO `edition_sections_section` VALUES (70, 101);
INSERT INTO `edition_sections_section` VALUES (70, 102);
INSERT INTO `edition_sections_section` VALUES (70, 103);
INSERT INTO `edition_sections_section` VALUES (71, 101);
INSERT INTO `edition_sections_section` VALUES (72, 104);
INSERT INTO `edition_sections_section` VALUES (72, 105);
INSERT INTO `edition_sections_section` VALUES (72, 106);
INSERT INTO `edition_sections_section` VALUES (73, 104);
INSERT INTO `edition_sections_section` VALUES (74, 107);
INSERT INTO `edition_sections_section` VALUES (74, 108);
INSERT INTO `edition_sections_section` VALUES (74, 109);
INSERT INTO `edition_sections_section` VALUES (75, 107);
INSERT INTO `edition_sections_section` VALUES (76, 110);
INSERT INTO `edition_sections_section` VALUES (76, 111);
INSERT INTO `edition_sections_section` VALUES (76, 112);
INSERT INTO `edition_sections_section` VALUES (77, 110);
INSERT INTO `edition_sections_section` VALUES (78, 113);
INSERT INTO `edition_sections_section` VALUES (78, 114);
INSERT INTO `edition_sections_section` VALUES (78, 115);
INSERT INTO `edition_sections_section` VALUES (79, 113);
INSERT INTO `edition_sections_section` VALUES (80, 116);
INSERT INTO `edition_sections_section` VALUES (80, 117);
INSERT INTO `edition_sections_section` VALUES (80, 118);
INSERT INTO `edition_sections_section` VALUES (81, 116);
INSERT INTO `edition_sections_section` VALUES (82, 119);
INSERT INTO `edition_sections_section` VALUES (82, 120);
INSERT INTO `edition_sections_section` VALUES (82, 121);
INSERT INTO `edition_sections_section` VALUES (83, 119);
INSERT INTO `edition_sections_section` VALUES (84, 122);
INSERT INTO `edition_sections_section` VALUES (84, 123);
INSERT INTO `edition_sections_section` VALUES (84, 124);
INSERT INTO `edition_sections_section` VALUES (85, 122);
INSERT INTO `edition_sections_section` VALUES (86, 125);
INSERT INTO `edition_sections_section` VALUES (86, 126);
INSERT INTO `edition_sections_section` VALUES (86, 127);
INSERT INTO `edition_sections_section` VALUES (87, 125);
INSERT INTO `edition_sections_section` VALUES (88, 128);
INSERT INTO `edition_sections_section` VALUES (88, 129);
INSERT INTO `edition_sections_section` VALUES (88, 130);
INSERT INTO `edition_sections_section` VALUES (89, 128);
INSERT INTO `edition_sections_section` VALUES (90, 131);
INSERT INTO `edition_sections_section` VALUES (90, 132);
INSERT INTO `edition_sections_section` VALUES (90, 133);
INSERT INTO `edition_sections_section` VALUES (91, 131);
INSERT INTO `edition_sections_section` VALUES (92, 134);
INSERT INTO `edition_sections_section` VALUES (92, 135);
INSERT INTO `edition_sections_section` VALUES (92, 136);
INSERT INTO `edition_sections_section` VALUES (93, 134);
INSERT INTO `edition_sections_section` VALUES (94, 137);
INSERT INTO `edition_sections_section` VALUES (94, 138);
INSERT INTO `edition_sections_section` VALUES (94, 139);
INSERT INTO `edition_sections_section` VALUES (95, 137);
INSERT INTO `edition_sections_section` VALUES (96, 140);
INSERT INTO `edition_sections_section` VALUES (96, 141);
INSERT INTO `edition_sections_section` VALUES (96, 142);
INSERT INTO `edition_sections_section` VALUES (97, 140);
INSERT INTO `edition_sections_section` VALUES (98, 143);
INSERT INTO `edition_sections_section` VALUES (98, 144);
INSERT INTO `edition_sections_section` VALUES (98, 145);
INSERT INTO `edition_sections_section` VALUES (99, 143);
INSERT INTO `edition_sections_section` VALUES (100, 146);
INSERT INTO `edition_sections_section` VALUES (100, 147);
INSERT INTO `edition_sections_section` VALUES (100, 148);
INSERT INTO `edition_sections_section` VALUES (101, 146);
INSERT INTO `edition_sections_section` VALUES (102, 149);
INSERT INTO `edition_sections_section` VALUES (102, 150);
INSERT INTO `edition_sections_section` VALUES (102, 151);
INSERT INTO `edition_sections_section` VALUES (103, 149);
INSERT INTO `edition_sections_section` VALUES (104, 152);
INSERT INTO `edition_sections_section` VALUES (104, 153);
INSERT INTO `edition_sections_section` VALUES (104, 154);
INSERT INTO `edition_sections_section` VALUES (105, 152);
INSERT INTO `edition_sections_section` VALUES (106, 155);
INSERT INTO `edition_sections_section` VALUES (106, 156);
INSERT INTO `edition_sections_section` VALUES (106, 157);
INSERT INTO `edition_sections_section` VALUES (107, 155);
INSERT INTO `edition_sections_section` VALUES (108, 158);
INSERT INTO `edition_sections_section` VALUES (108, 159);
INSERT INTO `edition_sections_section` VALUES (108, 160);
INSERT INTO `edition_sections_section` VALUES (109, 158);
INSERT INTO `edition_sections_section` VALUES (110, 161);
INSERT INTO `edition_sections_section` VALUES (110, 162);
INSERT INTO `edition_sections_section` VALUES (110, 163);
INSERT INTO `edition_sections_section` VALUES (111, 161);
INSERT INTO `edition_sections_section` VALUES (112, 164);
INSERT INTO `edition_sections_section` VALUES (112, 165);
INSERT INTO `edition_sections_section` VALUES (112, 166);
INSERT INTO `edition_sections_section` VALUES (113, 164);
INSERT INTO `edition_sections_section` VALUES (114, 167);
INSERT INTO `edition_sections_section` VALUES (114, 168);
INSERT INTO `edition_sections_section` VALUES (114, 169);
INSERT INTO `edition_sections_section` VALUES (115, 167);
INSERT INTO `edition_sections_section` VALUES (116, 170);
INSERT INTO `edition_sections_section` VALUES (116, 171);
INSERT INTO `edition_sections_section` VALUES (116, 172);
INSERT INTO `edition_sections_section` VALUES (117, 170);
INSERT INTO `edition_sections_section` VALUES (118, 173);
INSERT INTO `edition_sections_section` VALUES (118, 174);
INSERT INTO `edition_sections_section` VALUES (118, 175);
INSERT INTO `edition_sections_section` VALUES (119, 173);
INSERT INTO `edition_sections_section` VALUES (120, 176);
INSERT INTO `edition_sections_section` VALUES (120, 177);
INSERT INTO `edition_sections_section` VALUES (120, 178);
INSERT INTO `edition_sections_section` VALUES (121, 176);
INSERT INTO `edition_sections_section` VALUES (122, 179);
INSERT INTO `edition_sections_section` VALUES (122, 180);
INSERT INTO `edition_sections_section` VALUES (122, 181);
INSERT INTO `edition_sections_section` VALUES (123, 179);
INSERT INTO `edition_sections_section` VALUES (124, 182);
INSERT INTO `edition_sections_section` VALUES (124, 183);
INSERT INTO `edition_sections_section` VALUES (124, 184);
INSERT INTO `edition_sections_section` VALUES (125, 182);
INSERT INTO `edition_sections_section` VALUES (126, 185);
INSERT INTO `edition_sections_section` VALUES (126, 186);
INSERT INTO `edition_sections_section` VALUES (126, 187);
INSERT INTO `edition_sections_section` VALUES (127, 185);
INSERT INTO `edition_sections_section` VALUES (128, 188);
INSERT INTO `edition_sections_section` VALUES (128, 189);
INSERT INTO `edition_sections_section` VALUES (128, 190);
INSERT INTO `edition_sections_section` VALUES (129, 188);
INSERT INTO `edition_sections_section` VALUES (130, 191);
INSERT INTO `edition_sections_section` VALUES (130, 192);
INSERT INTO `edition_sections_section` VALUES (130, 193);
INSERT INTO `edition_sections_section` VALUES (131, 191);
INSERT INTO `edition_sections_section` VALUES (132, 194);
INSERT INTO `edition_sections_section` VALUES (132, 195);
INSERT INTO `edition_sections_section` VALUES (132, 196);
INSERT INTO `edition_sections_section` VALUES (133, 194);
INSERT INTO `edition_sections_section` VALUES (134, 197);
INSERT INTO `edition_sections_section` VALUES (134, 198);
INSERT INTO `edition_sections_section` VALUES (134, 199);
INSERT INTO `edition_sections_section` VALUES (135, 197);
INSERT INTO `edition_sections_section` VALUES (136, 200);
INSERT INTO `edition_sections_section` VALUES (136, 201);
INSERT INTO `edition_sections_section` VALUES (136, 202);
INSERT INTO `edition_sections_section` VALUES (137, 200);
INSERT INTO `edition_sections_section` VALUES (138, 203);
INSERT INTO `edition_sections_section` VALUES (138, 204);
INSERT INTO `edition_sections_section` VALUES (138, 205);
INSERT INTO `edition_sections_section` VALUES (139, 203);
INSERT INTO `edition_sections_section` VALUES (140, 206);
INSERT INTO `edition_sections_section` VALUES (140, 207);
INSERT INTO `edition_sections_section` VALUES (140, 208);
INSERT INTO `edition_sections_section` VALUES (141, 206);
INSERT INTO `edition_sections_section` VALUES (142, 209);
INSERT INTO `edition_sections_section` VALUES (142, 210);
INSERT INTO `edition_sections_section` VALUES (142, 211);
INSERT INTO `edition_sections_section` VALUES (143, 209);
INSERT INTO `edition_sections_section` VALUES (144, 212);
INSERT INTO `edition_sections_section` VALUES (144, 213);
INSERT INTO `edition_sections_section` VALUES (144, 214);
INSERT INTO `edition_sections_section` VALUES (145, 212);
INSERT INTO `edition_sections_section` VALUES (146, 215);
INSERT INTO `edition_sections_section` VALUES (146, 216);
INSERT INTO `edition_sections_section` VALUES (146, 217);
INSERT INTO `edition_sections_section` VALUES (147, 215);
INSERT INTO `edition_sections_section` VALUES (148, 218);
INSERT INTO `edition_sections_section` VALUES (148, 219);
INSERT INTO `edition_sections_section` VALUES (148, 220);
INSERT INTO `edition_sections_section` VALUES (149, 218);
INSERT INTO `edition_sections_section` VALUES (150, 221);
INSERT INTO `edition_sections_section` VALUES (150, 222);
INSERT INTO `edition_sections_section` VALUES (150, 223);
INSERT INTO `edition_sections_section` VALUES (151, 221);
INSERT INTO `edition_sections_section` VALUES (152, 224);
INSERT INTO `edition_sections_section` VALUES (152, 225);
INSERT INTO `edition_sections_section` VALUES (152, 226);
INSERT INTO `edition_sections_section` VALUES (153, 224);
INSERT INTO `edition_sections_section` VALUES (154, 227);
INSERT INTO `edition_sections_section` VALUES (154, 228);
INSERT INTO `edition_sections_section` VALUES (154, 229);
INSERT INTO `edition_sections_section` VALUES (155, 227);
INSERT INTO `edition_sections_section` VALUES (156, 230);
INSERT INTO `edition_sections_section` VALUES (156, 231);
INSERT INTO `edition_sections_section` VALUES (156, 232);
INSERT INTO `edition_sections_section` VALUES (157, 230);
INSERT INTO `edition_sections_section` VALUES (158, 233);
INSERT INTO `edition_sections_section` VALUES (158, 234);
INSERT INTO `edition_sections_section` VALUES (158, 235);
INSERT INTO `edition_sections_section` VALUES (159, 233);
INSERT INTO `edition_sections_section` VALUES (160, 236);
INSERT INTO `edition_sections_section` VALUES (160, 237);
INSERT INTO `edition_sections_section` VALUES (160, 238);
INSERT INTO `edition_sections_section` VALUES (161, 236);
INSERT INTO `edition_sections_section` VALUES (162, 239);
INSERT INTO `edition_sections_section` VALUES (162, 240);
INSERT INTO `edition_sections_section` VALUES (162, 241);
INSERT INTO `edition_sections_section` VALUES (163, 239);
INSERT INTO `edition_sections_section` VALUES (164, 242);
INSERT INTO `edition_sections_section` VALUES (164, 243);
INSERT INTO `edition_sections_section` VALUES (164, 244);
INSERT INTO `edition_sections_section` VALUES (165, 242);
INSERT INTO `edition_sections_section` VALUES (166, 245);
INSERT INTO `edition_sections_section` VALUES (166, 246);
INSERT INTO `edition_sections_section` VALUES (166, 247);
INSERT INTO `edition_sections_section` VALUES (167, 245);

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `filesid` int NOT NULL AUTO_INCREMENT,
  `files_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`filesid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------

-- ----------------------------
-- Table structure for information_schema
-- ----------------------------
DROP TABLE IF EXISTS `information_schema`;
CREATE TABLE `information_schema`  (
  `id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of information_schema
-- ----------------------------

-- ----------------------------
-- Table structure for inventory
-- ----------------------------
DROP TABLE IF EXISTS `inventory`;
CREATE TABLE `inventory`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` int NOT NULL,
  `expiry_date` date NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `productId` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_c8622e1e24c6d054d36e8824490`(`productId`) USING BTREE,
  CONSTRAINT `FK_c8622e1e24c6d054d36e8824490` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of inventory
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `access_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '获取资源的access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '开发者用户id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT '认证的时间date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '权限容器',
  PRIMARY KEY (`access_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('0b84a512b6ea40d9aa71027fd3dd46d898e2ae5c', 'testclient', 'user', '2015-06-28 15:55:05', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('1d83cfb85c8afe71dac8a9ab32875d4ce8025c11', 'testclient', 'user', '2015-06-28 15:53:34', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('1f960e7bd2454a4a25f91232b71e2659fa8d6415', 'testclient', 'xiaocao', '2015-06-28 15:46:33', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('23b3ce4747183460fd753238f0e79b34b3e7bc3c', 'testclient', 'user', '2015-06-28 15:55:06', 'userinfo node file');
INSERT INTO `oauth_access_tokens` VALUES ('5c19932029b545ba220b3cba53cc996d8e321704', 'testclient', 'user', '2015-06-28 15:54:33', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('6b0abf82a8b4269759b47a2797794f657fe8868a', 'testclient', 'user', '2015-06-28 15:46:36', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('7b6c72176ede3e63f78d61849b6ad01b2bf81a6b', 'testclient', 'user', '2015-06-28 15:55:16', 'userinfo node file');
INSERT INTO `oauth_access_tokens` VALUES ('8995e510a6e5672c73e800d48acf8a3f79205621', 'testclient', 'user', '2015-06-28 15:46:49', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('8cb848d89b7d12beb746b0421ece7209f5c8633a', 'testclient', 'xiaocao', '2015-06-28 15:55:13', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('ae5f8c93dc51d856d6536aec528c31c6f6450458', 'testclient', 'user', '2015-06-28 15:55:16', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('df43443857a63df74f426dfa679c887483827318', 'testclient', 'xiaocao', '2015-06-28 15:46:48', 'userinfo cloud file node');

-- ----------------------------
-- Table structure for oauth_authorization_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_authorization_codes`;
CREATE TABLE `oauth_authorization_codes`  (
  `authorization_code` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '通过Authorization 获取到的code，用于获取access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '开发者用户id',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '认证后跳转的url',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT '认证的时间date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '权限容器',
  PRIMARY KEY (`authorization_code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_authorization_codes
-- ----------------------------
INSERT INTO `oauth_authorization_codes` VALUES ('016e1a57392e4b672415340ba4d6df18c90eab9f', 'testclient', NULL, '', '2015-06-28 14:56:55', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('2f37568bc9a2d8eb3ecb4c360a3abc71235f68c0', 'testclient', NULL, '', '2015-06-28 14:52:14', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('63c3b32c565eea30197068658d32678baf1202d6', 'testclient', NULL, '', '2015-06-28 14:56:51', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('89fab65a94cbbf8b39ac21a3d797d45964deabd2', 'testclient', NULL, '', '2015-06-28 14:56:57', 'userinfo');

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者AppId',
  `client_secret` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者AppSecret',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '认证后跳转的url',
  `grant_types` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '认证的方式，client_credentials、password、refresh_token、authorization_code、authorization_access_token',
  `scope` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '权限容器',
  `user_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '开发者用户id',
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('client2', 'pass2', 'http://homeway.me/', 'authorization_code', 'file node userinfo cloud', 'xiaocao');
INSERT INTO `oauth_clients` VALUES ('testclient', 'testpass', 'http://homeway.me/', 'client_credentials password authorization_code refresh_token', 'file node userinfo cloud', 'xiaocao');

-- ----------------------------
-- Table structure for oauth_jwt
-- ----------------------------
DROP TABLE IF EXISTS `oauth_jwt`;
CREATE TABLE `oauth_jwt`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者用户id',
  `subject` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `public_key` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_jwt
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `refresh_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '跟新access_token的token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '开发者AppId',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '开发者用户id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT '认证的时间date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '权限容器',
  PRIMARY KEY (`refresh_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------
INSERT INTO `oauth_refresh_tokens` VALUES ('0dcd00a06f1598db7c7df2d2faf4c16a7be9c28d', 'testclient', 'user', '2015-07-12 14:55:06', 'userinfo node file');
INSERT INTO `oauth_refresh_tokens` VALUES ('7432203dc184c6c2090fef8b02c5c5acf3f349a5', 'testclient', 'user', '2015-07-12 14:55:16', 'userinfo node file');
INSERT INTO `oauth_refresh_tokens` VALUES ('aef23d373a276116b3afd946ba4a9c39780186c0', 'testclient', 'user', '2015-07-12 14:53:34', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('af1e55594cae88cedf312f84a89109e3b80a5932', 'testclient', 'user', '2015-07-12 14:54:33', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('f09ed02ebf185fb08b4f0f316e59bac07028997b', 'testclient', 'user', '2015-07-12 14:46:36', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('fb1aa4bd8d123abaa882c759d60326dae51543c3', 'testclient', 'user', '2015-07-12 14:46:49', 'userinfo cloud file node');

-- ----------------------------
-- Table structure for oauth_scopes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_scopes`;
CREATE TABLE `oauth_scopes`  (
  `scope` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL COMMENT '容器名字',
  `is_default` tinyint(1) NULL DEFAULT NULL COMMENT '是否默认拥有，1=>是，0=>否'
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_scopes
-- ----------------------------
INSERT INTO `oauth_scopes` VALUES ('userinfo', 1);
INSERT INTO `oauth_scopes` VALUES ('file', 0);
INSERT INTO `oauth_scopes` VALUES ('node', 0);
INSERT INTO `oauth_scopes` VALUES ('cloud', 0);
INSERT INTO `oauth_scopes` VALUES ('share', 0);

-- ----------------------------
-- Table structure for oauth_users
-- ----------------------------
DROP TABLE IF EXISTS `oauth_users`;
CREATE TABLE `oauth_users`  (
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '内部时候使用的认证用户名',
  `password` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '内部时候使用的认证用户密码',
  `first_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '内部时候使用',
  `last_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '内部时候使用',
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_users
-- ----------------------------
INSERT INTO `oauth_users` VALUES ('user', 'pass', 'xiaocao', 'grasses');
INSERT INTO `oauth_users` VALUES ('username', 'password', 'xiaocao', 'grasses');

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
-- Records of product
-- ----------------------------

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
-- Records of profile
-- ----------------------------

-- ----------------------------
-- Table structure for sd_appservice
-- ----------------------------
DROP TABLE IF EXISTS `sd_appservice`;
CREATE TABLE `sd_appservice`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `secect_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_appservice
-- ----------------------------

-- ----------------------------
-- Table structure for sd_roles
-- ----------------------------
DROP TABLE IF EXISTS `sd_roles`;
CREATE TABLE `sd_roles`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_roles
-- ----------------------------
INSERT INTO `sd_roles` VALUES (1, 'user', '2021-05-05 09:23:32', '2021-05-05 09:23:33');
INSERT INTO `sd_roles` VALUES (2, 'moderator ', '2021-05-09 19:52:04', '2021-05-09 19:52:09');
INSERT INTO `sd_roles` VALUES (3, 'admin     ', '2021-05-09 19:52:30', '2021-05-09 19:52:32');

-- ----------------------------
-- Table structure for sd_users
-- ----------------------------
DROP TABLE IF EXISTS `sd_users`;
CREATE TABLE `sd_users`  (
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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users
-- ----------------------------
INSERT INTO `sd_users` VALUES (1, '55a54008ad1ba589aa210d2629c1df41', 'คงนคร', 'จันทะคุณ', 'kongnakornna', '7cb98c6deb32bd25bd735da156b91bf5', 'kongnakorna@gmail.com', '2021-07-15 01:15:29', 1, 1, NULL);

-- ----------------------------
-- Table structure for section
-- ----------------------------
DROP TABLE IF EXISTS `section`;
CREATE TABLE `section`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 248 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO `section` VALUES (1, 'Application Development');
INSERT INTO `section` VALUES (2, 'Application Development');
INSERT INTO `section` VALUES (3, 'DBA');
INSERT INTO `section` VALUES (4, 'Database Developer');
INSERT INTO `section` VALUES (5, 'Application Development');
INSERT INTO `section` VALUES (6, 'DBA');
INSERT INTO `section` VALUES (7, 'Database Developer');
INSERT INTO `section` VALUES (8, 'Application Development');
INSERT INTO `section` VALUES (9, 'DBA');
INSERT INTO `section` VALUES (10, 'Database Developer');
INSERT INTO `section` VALUES (11, 'Application Development');
INSERT INTO `section` VALUES (12, 'DBA');
INSERT INTO `section` VALUES (13, 'Database Developer');
INSERT INTO `section` VALUES (14, 'Application Development');
INSERT INTO `section` VALUES (15, 'DBA');
INSERT INTO `section` VALUES (16, 'Database Developer');
INSERT INTO `section` VALUES (17, 'Application Development');
INSERT INTO `section` VALUES (18, 'DBA');
INSERT INTO `section` VALUES (19, 'Database Developer');
INSERT INTO `section` VALUES (20, 'Application Development');
INSERT INTO `section` VALUES (21, 'DBA');
INSERT INTO `section` VALUES (22, 'Database Developer');
INSERT INTO `section` VALUES (23, 'Application Development');
INSERT INTO `section` VALUES (24, 'DBA');
INSERT INTO `section` VALUES (25, 'Database Developer');
INSERT INTO `section` VALUES (26, 'Application Development');
INSERT INTO `section` VALUES (27, 'DBA');
INSERT INTO `section` VALUES (28, 'Database Developer');
INSERT INTO `section` VALUES (29, 'Application Development');
INSERT INTO `section` VALUES (30, 'DBA');
INSERT INTO `section` VALUES (31, 'Database Developer');
INSERT INTO `section` VALUES (32, 'Application Development');
INSERT INTO `section` VALUES (33, 'DBA');
INSERT INTO `section` VALUES (34, 'Database Developer');
INSERT INTO `section` VALUES (35, 'Application Development');
INSERT INTO `section` VALUES (36, 'DBA');
INSERT INTO `section` VALUES (37, 'Database Developer');
INSERT INTO `section` VALUES (38, 'Application Development');
INSERT INTO `section` VALUES (39, 'DBA');
INSERT INTO `section` VALUES (40, 'Database Developer');
INSERT INTO `section` VALUES (41, 'Application Development');
INSERT INTO `section` VALUES (42, 'DBA');
INSERT INTO `section` VALUES (43, 'Database Developer');
INSERT INTO `section` VALUES (44, 'Application Development');
INSERT INTO `section` VALUES (45, 'DBA');
INSERT INTO `section` VALUES (46, 'Database Developer');
INSERT INTO `section` VALUES (47, 'Application Development');
INSERT INTO `section` VALUES (48, 'DBA');
INSERT INTO `section` VALUES (49, 'Database Developer');
INSERT INTO `section` VALUES (50, 'Application Development');
INSERT INTO `section` VALUES (51, 'DBA');
INSERT INTO `section` VALUES (52, 'Database Developer');
INSERT INTO `section` VALUES (53, 'Application Development');
INSERT INTO `section` VALUES (54, 'DBA');
INSERT INTO `section` VALUES (55, 'Database Developer');
INSERT INTO `section` VALUES (56, 'Application Development');
INSERT INTO `section` VALUES (57, 'DBA');
INSERT INTO `section` VALUES (58, 'Database Developer');
INSERT INTO `section` VALUES (59, 'Application Development');
INSERT INTO `section` VALUES (60, 'DBA');
INSERT INTO `section` VALUES (61, 'Database Developer');
INSERT INTO `section` VALUES (62, 'Application Development');
INSERT INTO `section` VALUES (63, 'DBA');
INSERT INTO `section` VALUES (64, 'Database Developer');
INSERT INTO `section` VALUES (65, 'Application Development');
INSERT INTO `section` VALUES (66, 'DBA');
INSERT INTO `section` VALUES (67, 'Database Developer');
INSERT INTO `section` VALUES (68, 'Application Development');
INSERT INTO `section` VALUES (69, 'DBA');
INSERT INTO `section` VALUES (70, 'Database Developer');
INSERT INTO `section` VALUES (71, 'Application Development');
INSERT INTO `section` VALUES (72, 'DBA');
INSERT INTO `section` VALUES (73, 'Database Developer');
INSERT INTO `section` VALUES (74, 'Application Development');
INSERT INTO `section` VALUES (75, 'DBA');
INSERT INTO `section` VALUES (76, 'Database Developer');
INSERT INTO `section` VALUES (77, 'Application Development');
INSERT INTO `section` VALUES (78, 'DBA');
INSERT INTO `section` VALUES (79, 'Database Developer');
INSERT INTO `section` VALUES (80, 'Application Development');
INSERT INTO `section` VALUES (81, 'DBA');
INSERT INTO `section` VALUES (82, 'Database Developer');
INSERT INTO `section` VALUES (83, 'Application Development');
INSERT INTO `section` VALUES (84, 'DBA');
INSERT INTO `section` VALUES (85, 'Database Developer');
INSERT INTO `section` VALUES (86, 'Application Development');
INSERT INTO `section` VALUES (87, 'DBA');
INSERT INTO `section` VALUES (88, 'Database Developer');
INSERT INTO `section` VALUES (89, 'Application Development');
INSERT INTO `section` VALUES (90, 'DBA');
INSERT INTO `section` VALUES (91, 'Database Developer');
INSERT INTO `section` VALUES (92, 'Application Development');
INSERT INTO `section` VALUES (93, 'DBA');
INSERT INTO `section` VALUES (94, 'Database Developer');
INSERT INTO `section` VALUES (95, 'Application Development');
INSERT INTO `section` VALUES (96, 'DBA');
INSERT INTO `section` VALUES (97, 'Database Developer');
INSERT INTO `section` VALUES (98, 'Application Development');
INSERT INTO `section` VALUES (99, 'DBA');
INSERT INTO `section` VALUES (100, 'Database Developer');
INSERT INTO `section` VALUES (101, 'Application Development');
INSERT INTO `section` VALUES (102, 'DBA');
INSERT INTO `section` VALUES (103, 'Database Developer');
INSERT INTO `section` VALUES (104, 'Application Development');
INSERT INTO `section` VALUES (105, 'DBA');
INSERT INTO `section` VALUES (106, 'Database Developer');
INSERT INTO `section` VALUES (107, 'Application Development');
INSERT INTO `section` VALUES (108, 'DBA');
INSERT INTO `section` VALUES (109, 'Database Developer');
INSERT INTO `section` VALUES (110, 'Application Development');
INSERT INTO `section` VALUES (111, 'DBA');
INSERT INTO `section` VALUES (112, 'Database Developer');
INSERT INTO `section` VALUES (113, 'Application Development');
INSERT INTO `section` VALUES (114, 'DBA');
INSERT INTO `section` VALUES (115, 'Database Developer');
INSERT INTO `section` VALUES (116, 'Application Development');
INSERT INTO `section` VALUES (117, 'DBA');
INSERT INTO `section` VALUES (118, 'Database Developer');
INSERT INTO `section` VALUES (119, 'Application Development');
INSERT INTO `section` VALUES (120, 'DBA');
INSERT INTO `section` VALUES (121, 'Database Developer');
INSERT INTO `section` VALUES (122, 'Application Development');
INSERT INTO `section` VALUES (123, 'DBA');
INSERT INTO `section` VALUES (124, 'Database Developer');
INSERT INTO `section` VALUES (125, 'Application Development');
INSERT INTO `section` VALUES (126, 'DBA');
INSERT INTO `section` VALUES (127, 'Database Developer');
INSERT INTO `section` VALUES (128, 'Application Development');
INSERT INTO `section` VALUES (129, 'DBA');
INSERT INTO `section` VALUES (130, 'Database Developer');
INSERT INTO `section` VALUES (131, 'Application Development');
INSERT INTO `section` VALUES (132, 'DBA');
INSERT INTO `section` VALUES (133, 'Database Developer');
INSERT INTO `section` VALUES (134, 'Application Development');
INSERT INTO `section` VALUES (135, 'DBA');
INSERT INTO `section` VALUES (136, 'Database Developer');
INSERT INTO `section` VALUES (137, 'Application Development');
INSERT INTO `section` VALUES (138, 'DBA');
INSERT INTO `section` VALUES (139, 'Database Developer');
INSERT INTO `section` VALUES (140, 'Application Development');
INSERT INTO `section` VALUES (141, 'DBA');
INSERT INTO `section` VALUES (142, 'Database Developer');
INSERT INTO `section` VALUES (143, 'Application Development');
INSERT INTO `section` VALUES (144, 'DBA');
INSERT INTO `section` VALUES (145, 'Database Developer');
INSERT INTO `section` VALUES (146, 'Application Development');
INSERT INTO `section` VALUES (147, 'DBA');
INSERT INTO `section` VALUES (148, 'Database Developer');
INSERT INTO `section` VALUES (149, 'Application Development');
INSERT INTO `section` VALUES (150, 'DBA');
INSERT INTO `section` VALUES (151, 'Database Developer');
INSERT INTO `section` VALUES (152, 'Application Development');
INSERT INTO `section` VALUES (153, 'DBA');
INSERT INTO `section` VALUES (154, 'Database Developer');
INSERT INTO `section` VALUES (155, 'Application Development');
INSERT INTO `section` VALUES (156, 'DBA');
INSERT INTO `section` VALUES (157, 'Database Developer');
INSERT INTO `section` VALUES (158, 'Application Development');
INSERT INTO `section` VALUES (159, 'DBA');
INSERT INTO `section` VALUES (160, 'Database Developer');
INSERT INTO `section` VALUES (161, 'Application Development');
INSERT INTO `section` VALUES (162, 'DBA');
INSERT INTO `section` VALUES (163, 'Database Developer');
INSERT INTO `section` VALUES (164, 'Application Development');
INSERT INTO `section` VALUES (165, 'DBA');
INSERT INTO `section` VALUES (166, 'Database Developer');
INSERT INTO `section` VALUES (167, 'Application Development');
INSERT INTO `section` VALUES (168, 'DBA');
INSERT INTO `section` VALUES (169, 'Database Developer');
INSERT INTO `section` VALUES (170, 'Application Development');
INSERT INTO `section` VALUES (171, 'DBA');
INSERT INTO `section` VALUES (172, 'Database Developer');
INSERT INTO `section` VALUES (173, 'Application Development');
INSERT INTO `section` VALUES (174, 'DBA');
INSERT INTO `section` VALUES (175, 'Database Developer');
INSERT INTO `section` VALUES (176, 'Application Development');
INSERT INTO `section` VALUES (177, 'DBA');
INSERT INTO `section` VALUES (178, 'Database Developer');
INSERT INTO `section` VALUES (179, 'Application Development');
INSERT INTO `section` VALUES (180, 'DBA');
INSERT INTO `section` VALUES (181, 'Database Developer');
INSERT INTO `section` VALUES (182, 'Application Development');
INSERT INTO `section` VALUES (183, 'DBA');
INSERT INTO `section` VALUES (184, 'Database Developer');
INSERT INTO `section` VALUES (185, 'Application Development');
INSERT INTO `section` VALUES (186, 'DBA');
INSERT INTO `section` VALUES (187, 'Database Developer');
INSERT INTO `section` VALUES (188, 'Application Development');
INSERT INTO `section` VALUES (189, 'DBA');
INSERT INTO `section` VALUES (190, 'Database Developer');
INSERT INTO `section` VALUES (191, 'Application Development');
INSERT INTO `section` VALUES (192, 'DBA');
INSERT INTO `section` VALUES (193, 'Database Developer');
INSERT INTO `section` VALUES (194, 'Application Development');
INSERT INTO `section` VALUES (195, 'DBA');
INSERT INTO `section` VALUES (196, 'Database Developer');
INSERT INTO `section` VALUES (197, 'Application Development');
INSERT INTO `section` VALUES (198, 'DBA');
INSERT INTO `section` VALUES (199, 'Database Developer');
INSERT INTO `section` VALUES (200, 'Application Development');
INSERT INTO `section` VALUES (201, 'DBA');
INSERT INTO `section` VALUES (202, 'Database Developer');
INSERT INTO `section` VALUES (203, 'Application Development');
INSERT INTO `section` VALUES (204, 'DBA');
INSERT INTO `section` VALUES (205, 'Database Developer');
INSERT INTO `section` VALUES (206, 'Application Development');
INSERT INTO `section` VALUES (207, 'DBA');
INSERT INTO `section` VALUES (208, 'Database Developer');
INSERT INTO `section` VALUES (209, 'Application Development');
INSERT INTO `section` VALUES (210, 'DBA');
INSERT INTO `section` VALUES (211, 'Database Developer');
INSERT INTO `section` VALUES (212, 'Application Development');
INSERT INTO `section` VALUES (213, 'DBA');
INSERT INTO `section` VALUES (214, 'Database Developer');
INSERT INTO `section` VALUES (215, 'Application Development');
INSERT INTO `section` VALUES (216, 'DBA');
INSERT INTO `section` VALUES (217, 'Database Developer');
INSERT INTO `section` VALUES (218, 'Application Development');
INSERT INTO `section` VALUES (219, 'DBA');
INSERT INTO `section` VALUES (220, 'Database Developer');
INSERT INTO `section` VALUES (221, 'Application Development');
INSERT INTO `section` VALUES (222, 'DBA');
INSERT INTO `section` VALUES (223, 'Database Developer');
INSERT INTO `section` VALUES (224, 'Application Development');
INSERT INTO `section` VALUES (225, 'DBA');
INSERT INTO `section` VALUES (226, 'Database Developer');
INSERT INTO `section` VALUES (227, 'Application Development');
INSERT INTO `section` VALUES (228, 'DBA');
INSERT INTO `section` VALUES (229, 'Database Developer');
INSERT INTO `section` VALUES (230, 'Application Development');
INSERT INTO `section` VALUES (231, 'DBA');
INSERT INTO `section` VALUES (232, 'Database Developer');
INSERT INTO `section` VALUES (233, 'Application Development');
INSERT INTO `section` VALUES (234, 'DBA');
INSERT INTO `section` VALUES (235, 'Database Developer');
INSERT INTO `section` VALUES (236, 'Application Development');
INSERT INTO `section` VALUES (237, 'DBA');
INSERT INTO `section` VALUES (238, 'Database Developer');
INSERT INTO `section` VALUES (239, 'Application Development');
INSERT INTO `section` VALUES (240, 'DBA');
INSERT INTO `section` VALUES (241, 'Database Developer');
INSERT INTO `section` VALUES (242, 'Application Development');
INSERT INTO `section` VALUES (243, 'DBA');
INSERT INTO `section` VALUES (244, 'Database Developer');
INSERT INTO `section` VALUES (245, 'Application Development');
INSERT INTO `section` VALUES (246, 'DBA');
INSERT INTO `section` VALUES (247, 'Database Developer');

-- ----------------------------
-- Table structure for typeorm_metadata
-- ----------------------------
DROP TABLE IF EXISTS `typeorm_metadata`;
CREATE TABLE `typeorm_metadata`  (
  `id` int NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of typeorm_metadata
-- ----------------------------

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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '55a54008ad1ba589aa210d2629c1df41', 'คงนคร', 'จันทะคุณ', 'kongnakornna', '7cb98c6deb32bd25bd735da156b91bf5', 'kongnakorna@gmail.com', '2021-07-15 01:15:29', 1, 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;
