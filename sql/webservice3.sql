/*
 Navicat Premium Data Transfer

 Source Server         : AWS_MareaDB_3306
 Source Server Type    : MySQL
 Source Server Version : 100510
 Source Host           : localhost:3306
 Source Schema         : webservice3

 Target Server Type    : MySQL
 Target Server Version : 100510
 File Encoding         : 65001

 Date: 03/08/2021 16:47:04
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
  CONSTRAINT `catalog_entry_ibfk_1` FOREIGN KEY (`catalogEditionId`) REFERENCES `catalog_edition` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  CONSTRAINT `catalog_timestamp_ibfk_1` FOREIGN KEY (`catalogId`) REFERENCES `catalog` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of catalog_timestamp
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
  CONSTRAINT `edition_sections_section_ibfk_1` FOREIGN KEY (`editionId`) REFERENCES `edition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `edition_sections_section_ibfk_2` FOREIGN KEY (`sectionId`) REFERENCES `section` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `userId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES (1, 'naval pankaj add post title 1', 1);
INSERT INTO `post` VALUES (2, 'naval pankaj add post title 2', 2);
INSERT INTO `post` VALUES (3, 'naval pankaj add post title 3', 3);
INSERT INTO `post` VALUES (4, 'naval pankaj add post title 4', 4);
INSERT INTO `post` VALUES (5, 'naval pankaj add post title 5', 5);
INSERT INTO `post` VALUES (6, 'naval pankaj add post title 6', 6);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'naval pankaj test1');
INSERT INTO `user` VALUES (2, 'naval pankaj test2');
INSERT INTO `user` VALUES (3, 'naval pankaj test3');
INSERT INTO `user` VALUES (4, 'naval pankaj test4');
INSERT INTO `user` VALUES (5, 'naval pankaj test5');
INSERT INTO `user` VALUES (6, 'naval pankaj test6');

SET FOREIGN_KEY_CHECKS = 1;
