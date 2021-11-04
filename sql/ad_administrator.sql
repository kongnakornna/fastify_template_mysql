 
DROP TABLE IF EXISTS `ad_administrator`;
CREATE TABLE `ad_administrator`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `passwordvd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role_id` int NOT NULL DEFAULT 1,
  `status` int NOT NULL DEFAULT 1,
  `online_status` int UNSIGNED NULL DEFAULT NULL,
  `mesage` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `network_id` int NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `infomation_agree_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 0,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 1,
  `birthday` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_sign_in` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `idcard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of ad_administrator
-- ----------------------------
INSERT INTO `ad_administrator` VALUES (1, 'kongnakorn jantakun', 'kongnakornna', '5cd3c5448220bf0a576bc13de63f823f', 'Na@5371@@', 'kongnakornna@gmail.com', 1, 1, NULL, NULL, 0, NULL, '', '', '', '', '', '', '');
INSERT INTO `ad_administrator` VALUES (2, 'kobakiorn jantakun', 'kongnakornna222', '5cd3c5448220bf0a576bc13de63f823f', 'Na@5371@@', 'kongnakorna02@gmail.com', 2, 0, NULL, NULL, 0, NULL, '', '', '', '', '', '', '');

SET FOREIGN_KEY_CHECKS = 1;
