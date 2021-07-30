/*
 Navicat Premium Data Transfer

 Source Server         : localhost_MonGoDB
 Source Server Type    : MongoDB
 Source Server Version : 40203
 Source Host           : localhost:27017
 Source Schema         : mogosevice1

 Target Server Type    : MongoDB
 Target Server Version : 40203
 File Encoding         : 65001

 Date: 18/07/2021 12:35:57
*/


// ----------------------------
// Collection structure for ultimate
// ----------------------------
db.getCollection("ultimate").drop();
db.createCollection("ultimate");

// ----------------------------
// Documents of ultimate
// ----------------------------
