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

 Date: 04/06/2022 21:14:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book_message
-- ----------------------------
DROP TABLE IF EXISTS `book_message`;
CREATE TABLE `book_message`  (
  `message_id` int(64) NOT NULL AUTO_INCREMENT COMMENT '主键 id',
  `message_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '连丹丹',
  `message_message` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号',
  `message_dateTime` timestamp NOT NULL DEFAULT '2022-01-01 00:00:00' COMMENT '更新时间',
  `creat_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`message_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1039 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of book_message
-- ----------------------------
INSERT INTO `book_message` VALUES (1001, '连丹丹', '哼(￢︿̫̿￢☆)不爱你了', '2022-05-07 12:56:00', '2022-05-06 22:23:09');
INSERT INTO `book_message` VALUES (1028, '小海', '昨天谢谢你1了丫', '2022-01-01 00:00:00', '2022-05-21 15:48:30');
INSERT INTO `book_message` VALUES (1030, '连丹丹', '不客气哦', '2022-01-01 00:00:00', '2022-05-21 15:51:08');
INSERT INTO `book_message` VALUES (1032, '小海', '啊不,我才要认真说谢谢啦', '2022-01-01 00:00:00', '2022-05-21 15:52:45');
INSERT INTO `book_message` VALUES (1035, '小海', '好饿啊好饿啊好饿啊', '2022-01-01 00:00:00', '2022-05-22 00:34:21');
INSERT INTO `book_message` VALUES (1037, '连丹丹', '是呀', '2022-01-01 00:00:00', '2022-05-22 00:35:56');
INSERT INTO `book_message` VALUES (1038, NULL, NULL, '2022-01-01 00:00:00', '2022-06-04 21:04:18');

SET FOREIGN_KEY_CHECKS = 1;
