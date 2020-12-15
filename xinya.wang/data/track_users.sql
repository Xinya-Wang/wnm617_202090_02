-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2020 at 11:02 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `608final`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `bio` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `bio`, `phone`, `gender`, `img`, `date_create`) VALUES
(1, 'Bernice Adkins', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Tempor magna sunt voluptate anim amet do nisi anim ipsum ad nostrud ad labore sunt.', '+1 (933) 480-2891', 'female', 'https://via.placeholder.com/400/834/fff/?text=user1', '2020-03-09 10:17:34'),
(2, 'Byers wang', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Tempor voluptate culpa non excepteur fugiat commodo.', '+1 (827) 427-1122', 'Female', 'uploads/1607911620.5552_harrison-fitts-E4efSh62uwk-unsplash.png', '2020-03-03 01:31:52'),
(3, 'Carolyn Harris', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Sit laborum culpa deserunt qui incididunt reprehenderit.', '+1 (896) 411-2058', 'female', 'https://via.placeholder.com/400/785/fff/?text=user3', '2020-07-02 05:42:46'),
(4, 'Hooper Dotson', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Nisi enim labore mollit velit ex duis eu tempor excepteur ipsum voluptate anim commodo.', '+1 (867) 439-3639', 'male', 'https://via.placeholder.com/400/707/fff/?text=user4', '2020-02-21 09:13:20'),
(5, 'Gray Burt', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Quis excepteur cillum Lorem commodo quis mollit aliqua nulla ipsum occaecat dolore enim mollit aliqua.', '+1 (874) 459-3408', 'male', 'https://via.placeholder.com/400/961/fff/?text=user5', '2020-10-23 04:10:59'),
(6, 'Pamela Maldonado', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'In ex pariatur exercitation minim sunt proident magna nisi Lorem nulla fugiat ut non.', '+1 (955) 594-2916', 'female', 'https://via.placeholder.com/400/890/fff/?text=user6', '2020-01-27 08:40:21'),
(7, 'Lynn Mosley', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Culpa dolore proident consequat cillum.', '+1 (940) 466-2537', 'female', 'https://via.placeholder.com/400/703/fff/?text=user7', '2020-04-01 12:08:04'),
(8, 'Henson Coffey', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Ex aute proident aute est aliqua cupidatat cupidatat irure occaecat laborum.', '+1 (818) 470-2279', 'male', 'https://via.placeholder.com/400/985/fff/?text=user8', '2020-04-16 07:18:51'),
(9, 'Antonia Spears', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Ut magna labore elit incididunt incididunt sit anim duis.', '+1 (809) 471-2646', 'female', 'https://via.placeholder.com/400/922/fff/?text=user9', '2020-08-16 05:02:18'),
(10, 'Dorothea Hines', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Nulla proident officia laborum elit deserunt nostrud non adipisicing velit incididunt aliqua amet sunt fugiat.', '+1 (946) 532-2483', 'female', 'https://via.placeholder.com/400/885/fff/?text=user10', '2020-03-31 07:22:37'),
(12, '', 'xinya', 'xinya@gmail.com', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-25 01:20:24'),
(13, '', 'test2', 'test2@gmail.com', '2e416649e6ca0a1cbf9a1210cf4ce234', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 14:25:44'),
(14, '', 'test3', 'test3@gmail.com', '8ad8757baa8564dc136c1e07507f4a98', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 14:36:34'),
(15, '', 'user', '123@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 18:47:07'),
(16, '', 'test4', 'test4@gmail.com', '73882ab1fa529d7273da0db6b49cc4f3', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-08 15:50:01'),
(17, '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-08 17:26:36'),
(18, 'Sophia Bush', 'user0', 'user0@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'Animals are creatures that bring so many people happiness every single day. ', '+1 (827) 427-1122', 'Female', 'uploads/1607931096.4116_Screen Shot 2020-12-05 at 7.57.24 PM.png', '2020-12-09 12:29:59'),
(19, '', 'test5', 'test5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-10 03:53:54'),
(20, 'gdfgdfgfgd', 't6', 't6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'gfdgdfgdfgfdg', '+1 (827) 427-1111', 'Female', 'https://via.placeholder.com/400/?text=USER', '2020-12-10 03:55:19'),
(21, '', 't7', 't7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-10 04:32:07'),
(22, '', 't8', 't8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-10 04:33:44'),
(23, '', 't1', 't1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 18:45:13'),
(24, '', 't2', 't2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 18:47:42'),
(25, '', 't3', 't3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 18:49:29'),
(26, '', 't4', 't4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 18:52:15'),
(27, '', '', 't5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 18:54:59'),
(28, '', 'a1', 'a1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 19:00:18'),
(29, 'adaf', 'a2', 'a2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'asdfasdf', '', '', '', '2020-12-13 19:01:47'),
(30, 'Xinya ', 'a3', 'a3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'adsafsdf', '', '', 'uploads/1607912070.1546_harrison-fitts-E4efSh62uwk-unsplash.png', '2020-12-13 19:09:59'),
(31, 'Xinya ', 'a4', 'a4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'afadfsdfa', '', '', 'uploads/1607920492.1223_hilary-bird-F_aYxIFPnfk-unsplash.png', '2020-12-13 21:34:45'),
(32, 'Zhuang', 'zs', 'zs@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'A like a sldjflkajdklf ', '', '', 'uploads/1608011190.6856_andra-taylor-TUrSii7XYaQ-unsplash.png', '2020-12-14 22:46:25'),
(33, 'c', 'camel', 'z.shuang303@gmail.com', '7a947287dcb5518e4a4c7045144d09f9', 'hi', '', '', '', '2020-12-14 22:51:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
