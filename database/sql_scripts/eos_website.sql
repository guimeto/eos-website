-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: database:3306
-- Generation Time: Apr 19, 2020 at 04:15 PM
-- Server version: 10.4.12-MariaDB-1:10.4.12+maria~bionic
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eos_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `station`
--
CREATE TABLE `station` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `dir_name` tinytext NOT NULL,
  `meteograms` tinyint(1) NOT NULL DEFAULT 0,
  `radar` tinyint(1) NOT NULL DEFAULT 0,
  `disdrometer` tinyint(1) NOT NULL DEFAULT 0,
  `ceilometer` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `station`
--

INSERT INTO `station` (`id`, `name`, `dir_name`, `meteograms`, `radar`, `disdrometer`, `ceilometer`) VALUES
(1, 'Gault Sentinel', 'sentinel_1', 1, 1, 1, 1),
(2, 'Arboretum', 'sentinel_2', 1, 1, 1, 0),
(3, 'Forest Montmorency', 'sentinel_3', 1, 0, 1, 0),
(4, 'UQAM', 'sentinel_4', 1, 1, 1, 1),
(5, 'Trois-Rivieres', 'sentinel_5', 1, 0, 0, 0),
(6, 'Sherbrooke', 'sentinel_6', 0, 0, 0, 0),
(7, 'Ottawa', 'sentinel_7', 0, 0, 0, 0);
--
-- Indexes for dumped tables
--

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `station`
--
ALTER TABLE `station`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
