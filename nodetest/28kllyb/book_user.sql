/*
 Navicat Premium Data Transfer

 Source Server         : localmysql
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : node_user

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 04/06/2022 21:14:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book_user
-- ----------------------------
DROP TABLE IF EXISTS `book_user`;
CREATE TABLE `book_user`  (
  `user_id` int(64) NOT NULL AUTO_INCREMENT COMMENT '主键 id',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '连丹丹',
  `user_account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号',
  `user_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `update_time` timestamp NOT NULL DEFAULT '2022-01-01 00:00:00' COMMENT '更新时间',
  `creat_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `user_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1036 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of book_user
-- ----------------------------
INSERT INTO `book_user` VALUES (1001, '连丹丹', 'dandan', '1095159173@qq.com', '2022-05-06 23:23:09', '2022-05-06 22:23:09', '123456');
INSERT INTO `book_user` VALUES (1032, '连丹丹', 'dandan111', '111', '2022-01-01 00:00:00', '2022-05-21 02:58:51', '12345611');
INSERT INTO `book_user` VALUES (1034, '连丹丹', 'dandan2', '2', '2022-01-01 00:00:00', '2022-05-22 00:32:06', '1234562');
INSERT INTO `book_user` VALUES (1035, '连丹丹', NULL, NULL, '2022-01-01 00:00:00', '2022-06-04 21:03:25', NULL);

SET FOREIGN_KEY_CHECKS = 1;
