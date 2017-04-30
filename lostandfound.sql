-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2017 at 03:49 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lostandfound`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminrequest`
--

CREATE TABLE IF NOT EXISTS `adminrequest` (
  `userid` int(10) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `reason` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `found_table`
--

CREATE TABLE IF NOT EXISTS `found_table` (
`ID` int(11) NOT NULL,
  `FIRSTNAME` varchar(100) NOT NULL,
  `CONTACTNO` bigint(20) NOT NULL,
  `DESCRIPTION` varchar(100) NOT NULL,
  `WHERE` varchar(100) NOT NULL,
  `STATUS` varchar(50) NOT NULL,
  `userID` bigint(50) NOT NULL,
  `LASTNAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lost_table`
--

CREATE TABLE IF NOT EXISTS `lost_table` (
`ID` int(11) NOT NULL,
  `FIRSTNAME` varchar(100) NOT NULL,
  `LASTNAME` varchar(100) NOT NULL,
  `CONTACTNO` bigint(20) NOT NULL,
  `DESCRIPTION` varchar(100) NOT NULL,
  `WHERE` varchar(100) NOT NULL,
  `STATUS` varchar(29) NOT NULL,
  `userID` bigint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `message_found`
--

CREATE TABLE IF NOT EXISTS `message_found` (
  `userid` int(50) NOT NULL,
`id` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `message` varchar(250) NOT NULL,
  `posted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `message_lost`
--

CREATE TABLE IF NOT EXISTS `message_lost` (
  `userid` int(50) NOT NULL,
  `itemid` int(11) NOT NULL,
  `message` varchar(250) NOT NULL,
  `posted` datetime DEFAULT CURRENT_TIMESTAMP,
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `names`
--

CREATE TABLE IF NOT EXISTS `names` (
  `userid` int(10) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `firstnamenew` varchar(100) NOT NULL,
  `lastnamenew` varchar(100) NOT NULL,
  `reason` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `names`
--

INSERT INTO `names` (`userid`, `firstname`, `lastname`, `firstnamenew`, `lastnamenew`, `reason`) VALUES
(3, 'Banagher', 'Links', 'Vince', 'Cruz', 'My real name');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `verified` int(10) NOT NULL DEFAULT '0',
  `code` varchar(10) NOT NULL DEFAULT '',
  `passcode` varchar(10) DEFAULT NULL,
  `admin` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `contact`, `email`, `password`, `verified`, `code`, `passcode`, `admin`) VALUES
(1, 'Lost&Found', 'Admin', '09184597871', '9999999999@ust.edu.ph', '$2a$07$computershopplayersneeWVXVxl5SjeX1vNJBdaq4GsCuTJYpJ3W', 1, '', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminrequest`
--
ALTER TABLE `adminrequest`
 ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `found_table`
--
ALTER TABLE `found_table`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `lost_table`
--
ALTER TABLE `lost_table`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `message_found`
--
ALTER TABLE `message_found`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message_lost`
--
ALTER TABLE `message_lost`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `names`
--
ALTER TABLE `names`
 ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `found_table`
--
ALTER TABLE `found_table`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lost_table`
--
ALTER TABLE `lost_table`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `message_found`
--
ALTER TABLE `message_found`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `message_lost`
--
ALTER TABLE `message_lost`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
