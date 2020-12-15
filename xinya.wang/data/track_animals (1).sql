-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2020 at 11:04 PM
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
-- Table structure for table `track_animals`
--

CREATE TABLE `track_animals` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `color` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_animals`
--

INSERT INTO `track_animals` (`id`, `user_id`, `name`, `color`, `description`, `img`, `date_create`) VALUES
(1, 5, 'Lizard', 'Bright-green', 'Consequat nulla sit aute cillum proident reprehenderit. Aliqua aliquip ex est aute deserunt deserunt nostrud magna adipisicing Lorem.', 'https://via.placeholder.com/400/860/fff/?text=Lizard', '2020-09-23 11:48:59'),
(2, 5, 'Lizard', 'Bright-green', 'Cupidatat fugiat esse reprehenderit laborum labore nulla nulla eu culpa non. In consequat dolore eu dolore elit.', 'https://via.placeholder.com/400/870/fff/?text=Lizard', '2020-05-03 10:08:23'),
(3, 1, 'Eagle', 'Black-white', 'Commodo irure cillum minim esse id aliquip. Ex et duis laboris velit laborum occaecat magna enim veniam veniam id id.', 'https://via.placeholder.com/400/845/fff/?text=Eagle', '2020-07-21 03:36:11'),
(4, 8, 'Lizard', 'Bright-green', 'Irure et sint elit anim dolor fugiat. Culpa do enim minim ut fugiat adipisicing commodo adipisicing aute.', 'https://via.placeholder.com/400/950/fff/?text=Lizard', '2020-02-24 05:30:53'),
(5, 1, 'Crow', 'Black', 'Occaecat aute elit consectetur reprehenderit nostrud amet. Adipisicing non cupidatat non exercitation irure et officia sunt pariatur.', 'https://via.placeholder.com/400/887/fff/?text=Crow', '2020-07-11 01:28:01'),
(6, 1, 'Eagle', 'Black-white', 'Cupidatat aliqua amet anim pariatur esse cupidatat commodo in irure mollit. Aliquip commodo esse laboris deserunt quis incididunt velit pariatur.', 'https://via.placeholder.com/400/775/fff/?text=Eagle', '2020-02-13 01:44:21'),
(7, 7, 'Deer', 'Grayish-brown', 'Aliqua amet ut id laboris anim quis elit dolore voluptate. Dolore ullamco et elit dolor et.', 'https://via.placeholder.com/400/912/fff/?text=Deer', '2020-04-22 12:58:04'),
(8, 3, 'Squirrel', 'Black', 'Occaecat consequat ad exercitation in nostrud. Nisi laboris proident elit cupidatat tempor nostrud sit.', 'https://via.placeholder.com/400/830/fff/?text=Squirrel', '2020-01-27 10:09:59'),
(9, 4, 'Lizard', 'Deep-green', 'Lorem amet nostrud exercitation voluptate proident nisi aliqua consequat fugiat. Ad Lorem voluptate ea voluptate est velit anim pariatur id eiusmod enim.', 'https://via.placeholder.com/400/973/fff/?text=Lizard', '2020-01-26 11:37:50'),
(10, 10, 'Squirrel', 'Light-brown', 'Dolore in occaecat officia deserunt fugiat dolore do sint aute et. Nulla eu ut ex do commodo voluptate cillum eiusmod laborum sit minim irure qui.', 'https://via.placeholder.com/400/848/fff/?text=Squirrel', '2020-09-20 06:31:42'),
(11, 6, 'Rabbit', 'Light-brown', 'Proident aliquip elit occaecat laborum ipsum nisi cupidatat do. Commodo id veniam irure aute eu commodo exercitation enim mollit enim.', 'https://via.placeholder.com/400/925/fff/?text=Rabbit', '2020-02-23 10:52:22'),
(12, 1, 'Rabbit', 'Light-brown', 'Deserunt irure dolore laboris voluptate duis labore laborum voluptate nostrud quis. Magna sit laboris irure eiusmod dolor officia cillum laborum cupidatat qui.', 'https://via.placeholder.com/400/923/fff/?text=Rabbit', '2020-10-14 01:58:50'),
(13, 3, 'Eagle', 'Black-white', 'Quis consequat in commodo culpa ex laboris Lorem est minim commodo excepteur qui dolore. Consequat aliquip culpa quis fugiat ad laborum occaecat velit amet duis elit laboris incididunt fugiat.', 'https://via.placeholder.com/400/884/fff/?text=Eagle', '2020-09-18 10:53:25'),
(14, 8, 'Crow', 'Black-brownish', 'Excepteur cupidatat pariatur ullamco nisi mollit aliquip irure aliquip anim eu. Qui id labore voluptate aliqua tempor irure magna sunt consectetur.', 'https://via.placeholder.com/400/830/fff/?text=Crow', '2020-10-25 12:09:14'),
(15, 9, 'Lizard', 'Bright-green', 'Laboris tempor dolore fugiat labore fugiat fugiat sunt est culpa id commodo. Velit velit ipsum culpa fugiat elit.', 'https://via.placeholder.com/400/899/fff/?text=Lizard', '2020-10-10 02:16:49'),
(16, 3, 'Rabbit', 'Black', 'Do magna incididunt aliqua dolore. In exercitation velit aliqua esse velit occaecat fugiat consectetur.', 'https://via.placeholder.com/400/740/fff/?text=Rabbit', '2020-01-14 12:58:29'),
(17, 9, 'Eagle', 'Dark-brown', 'Voluptate occaecat sint laborum irure cupidatat. Irure occaecat ea fugiat aliquip elit amet non consectetur commodo irure in veniam.', 'https://via.placeholder.com/400/811/fff/?text=Eagle', '2020-09-12 08:06:05'),
(18, 8, 'Deer', 'White-brown', 'Velit eiusmod sunt consequat veniam consectetur. Enim pariatur ullamco fugiat exercitation sunt.', 'https://via.placeholder.com/400/935/fff/?text=Deer', '2020-02-25 11:06:44'),
(19, 5, 'Eagle', 'Black-white', 'Consequat amet sunt magna ullamco sit voluptate minim adipisicing. Deserunt excepteur in consectetur aliqua esse.', 'https://via.placeholder.com/400/712/fff/?text=Eagle', '2020-09-22 03:42:59'),
(20, 6, 'Rabbit', 'Light-brown', 'Dolor exercitation mollit culpa sunt enim pariatur in ex cillum qui ullamco quis. Ipsum incididunt culpa nostrud elit do aliquip.', 'https://via.placeholder.com/400/797/fff/?text=Rabbit', '2020-09-05 01:26:52'),
(21, 4, 'Eagle', 'Black-white', 'Est enim anim in excepteur officia sit ut laborum ipsum deserunt consectetur. Quis sint aliqua aliqua laboris id eiusmod sint non enim veniam exercitation aliquip.', 'https://via.placeholder.com/400/843/fff/?text=Eagle', '2020-07-03 07:59:46'),
(22, 6, 'Lizard', 'Bright-green', 'Officia sunt irure occaecat eu proident proident nulla excepteur pariatur enim irure. Incididunt est excepteur consequat ea incididunt dolore commodo duis eu.', 'https://via.placeholder.com/400/887/fff/?text=Lizard', '2020-02-13 12:23:59'),
(23, 3, 'Rabbit', 'Light-brown', 'Sit et tempor ipsum exercitation. Cupidatat dolore duis adipisicing occaecat in incididunt eiusmod aliquip nostrud.', 'https://via.placeholder.com/400/934/fff/?text=Rabbit', '2020-04-06 08:33:15'),
(24, 6, 'Deer', 'White-brown', 'Amet eu aliquip tempor esse proident deserunt minim do proident esse. Ex labore dolore elit tempor.', 'https://via.placeholder.com/400/789/fff/?text=Deer', '2020-06-08 11:30:09'),
(25, 3, 'Deer', 'Reddish-brown', 'Laborum consequat commodo occaecat est laborum sunt. Enim exercitation Lorem eiusmod dolor mollit fugiat.', 'https://via.placeholder.com/400/800/fff/?text=Deer', '2020-01-28 07:35:54'),
(26, 10, 'Deer', 'White-brown', 'Labore aliqua ad nulla minim. Dolore duis elit minim nulla ullamco ut.', 'https://via.placeholder.com/400/867/fff/?text=Deer', '2020-06-24 04:16:01'),
(27, 9, 'Rabbit', 'Black', 'Aliqua consequat laborum culpa esse. Ipsum dolor exercitation aute id laboris duis aute veniam culpa dolore excepteur.', 'https://via.placeholder.com/400/736/fff/?text=Rabbit', '2020-02-15 08:08:56'),
(28, 9, 'Squirrel', 'Gray', 'Duis incididunt ea sint nostrud excepteur duis ullamco in ea quis pariatur ex. Consequat amet deserunt dolor non ad aliquip.', 'https://via.placeholder.com/400/873/fff/?text=Squirrel', '2020-08-05 01:40:06'),
(29, 5, 'Deer', 'Reddish-brown', 'Esse tempor velit nisi laborum magna sit Lorem aliquip ad nostrud enim. Nulla voluptate amet enim dolor aliquip occaecat excepteur laborum id id ullamco incididunt voluptate consequat.', 'https://via.placeholder.com/400/701/fff/?text=Deer', '2020-11-09 07:35:03'),
(30, 1, 'Deer', 'White-brown', 'Officia cillum pariatur nostrud magna anim esse laboris consequat exercitation adipisicing. Nulla mollit amet adipisicing cupidatat dolor Lorem id laboris consectetur dolore sit esse elit.', 'https://via.placeholder.com/400/962/fff/?text=Deer', '2020-10-04 03:48:00'),
(31, 9, 'Lizard', 'Bright-green', 'Eu voluptate do minim aute eiusmod duis laborum proident ullamco sint eiusmod commodo anim. Commodo eu nisi est deserunt anim sunt eu ipsum commodo velit elit.', 'https://via.placeholder.com/400/818/fff/?text=Lizard', '2020-05-19 12:24:39'),
(32, 9, 'Lizard', 'Deep-green', 'Ullamco ad eiusmod exercitation aliqua enim non ea. Est duis aliquip excepteur occaecat elit quis mollit ut ea nostrud.', 'https://via.placeholder.com/400/890/fff/?text=Lizard', '2020-05-22 03:11:46'),
(33, 6, 'Crow', 'Black-brownish', 'Adipisicing ea sint aute sit magna esse laboris qui eiusmod sunt aute magna do occaecat. Amet dolor eu id et ipsum dolor sint occaecat aliqua sit officia.', 'https://via.placeholder.com/400/796/fff/?text=Crow', '2020-07-19 04:17:05'),
(34, 10, 'Squirrel', 'Black', 'Magna eiusmod laborum reprehenderit mollit laboris ea. Tempor irure ad nulla amet.', 'https://via.placeholder.com/400/751/fff/?text=Squirrel', '2020-02-06 10:45:17'),
(35, 9, 'Crow', 'Black', 'Cillum sint dolor amet officia non in deserunt magna consectetur. Cupidatat proident cupidatat irure laboris Lorem voluptate fugiat deserunt amet velit cillum ullamco qui in.', 'https://via.placeholder.com/400/740/fff/?text=Crow', '2020-10-16 03:15:20'),
(78, 30, '', '', '', '', '2020-12-13 19:21:54'),
(79, 30, '', '', '', '', '2020-12-13 19:22:12'),
(80, 31, 'Deer', 'Brow-white', 'adfasfsdfadsf', 'uploads/1607920547.1836_henry-gressmann-hOvUzJhx-6w-unsplash.png', '2020-12-13 21:35:58'),
(37, 8, 'Crow', 'Black', 'Ipsum elit laborum culpa anim dolore sit. Reprehenderit amet adipisicing nisi in.', 'https://via.placeholder.com/400/737/fff/?text=Crow', '2020-01-17 08:23:27'),
(38, 5, 'Eagle', 'Dark-brown', 'Consectetur esse nisi ut labore in laboris officia do incididunt officia laborum nostrud excepteur. Lorem cillum consectetur ex aliquip id amet ullamco est adipisicing nostrud incididunt mollit.', 'https://via.placeholder.com/400/966/fff/?text=Eagle', '2020-01-18 02:17:53'),
(39, 3, 'Eagle', 'Dark-brown', 'Cupidatat incididunt ea non consequat culpa consequat ullamco. Ad eiusmod cupidatat sunt voluptate elit non cillum dolore.', 'https://via.placeholder.com/400/735/fff/?text=Eagle', '2020-05-13 04:22:54'),
(40, 3, 'Rabbit', 'Black-white', 'Minim eiusmod nostrud duis tempor consectetur magna elit aute esse dolor sunt dolor fugiat consequat. Laboris dolor amet ex reprehenderit est.', 'https://via.placeholder.com/400/708/fff/?text=Rabbit', '2020-10-21 10:21:18'),
(41, 4, 'Eagle', 'Dark-brown', 'Sint occaecat duis incididunt esse. Duis laboris nulla est ut labore esse proident id aliquip ut et aliquip amet.', 'https://via.placeholder.com/400/913/fff/?text=Eagle', '2020-06-04 08:23:23'),
(42, 5, 'Squirrel', 'White-grey', 'Ad eu laborum ea laborum. Id dolor irure sint occaecat veniam anim dolore laboris veniam nulla sint commodo.', 'https://via.placeholder.com/400/788/fff/?text=Squirrel', '2020-10-30 05:30:38'),
(43, 1, 'Deer', 'White-brown', 'Voluptate est tempor esse enim mollit ipsum minim. Labore culpa sunt ea ex minim ad ea enim ut enim non tempor incididunt quis.', 'https://via.placeholder.com/400/937/fff/?text=Deer', '2020-09-26 05:32:00'),
(44, 5, 'Rabbit', 'Black', 'Ipsum proident velit cillum cupidatat qui adipisicing commodo eiusmod labore. Eiusmod quis fugiat duis qui ut aute magna ad tempor.', 'https://via.placeholder.com/400/929/fff/?text=Rabbit', '2020-03-29 08:50:38'),
(82, 2, 'Eagle', 'White-black', 'a big eagle', 'uploads/1607923976.5356_elisa-stone-06srvYbXBsE-unsplash.png', '2020-12-13 22:33:11'),
(46, 8, 'Deer', 'Reddish-brown', 'Aliqua in nisi mollit aliqua aliqua est aliquip. Amet reprehenderit esse magna duis occaecat aliqua.', 'https://via.placeholder.com/400/804/fff/?text=Deer', '2020-07-01 09:58:24'),
(47, 6, 'Deer', 'Grayish-brown', 'Est consectetur officia irure culpa dolor sit deserunt duis non. Cupidatat in duis sunt ad fugiat irure pariatur magna.', 'https://via.placeholder.com/400/915/fff/?text=Deer', '2020-06-27 10:45:01'),
(48, 9, 'Squirrel', 'Light-brown', 'Sunt eiusmod et eu sint esse eiusmod officia elit nostrud id ullamco nulla occaecat. Cupidatat ut sunt commodo laboris anim ipsum nulla proident nostrud do deserunt enim.', 'https://via.placeholder.com/400/950/fff/?text=Squirrel', '2020-10-22 10:26:17'),
(49, 6, 'Squirrel', 'White-grey', 'Eiusmod dolor minim culpa quis elit aute reprehenderit amet incididunt exercitation tempor. Quis ipsum irure reprehenderit reprehenderit ipsum fugiat duis anim labore aliquip.', 'https://via.placeholder.com/400/876/fff/?text=Squirrel', '2020-11-06 05:24:52'),
(50, 7, 'Crow', 'Black-brownish', 'Ex sit consequat laborum enim ea mollit. Consequat laboris id ea labore enim anim do esse enim.', 'https://via.placeholder.com/400/907/fff/?text=Crow', '2020-10-10 10:35:40'),
(68, 2, 'Lizard', 'White', 'A new lizard', 'uploads/1607515882.8583_lizard.png', '2020-12-09 05:11:39'),
(77, 16, 'Deer', 'White', 'A cute deer', 'uploads/1607594838.6528_henry-gressmann-hOvUzJhx-6w-unsplash.jpg', '2020-12-10 03:07:31'),
(76, 2, 'Deer', 'Brown', 'Cute deer', 'uploads/1607590147.7576_henry-gressmann-hOvUzJhx-6w-unsplash.jpg', '2020-12-10 01:49:28'),
(91, 18, 'Crow', 'Black', 'They have larger bill, and their bodies are completely black. Super cool!', 'uploads/1607937611.9091_alex-LPH_ilW1iSo-unsplash.png', '2020-12-14 02:20:33'),
(84, 18, 'Eagle', 'Black-white', 'They have long, broad, slightly rounded wings. Their feet are yellow and black.', 'uploads/1607932591.8547_elisa-stone-06srvYbXBsE-unsplash.png', '2020-12-14 01:03:08'),
(85, 18, 'Deer', 'Brown', 'They have large and long ears, white rear end and dark, rope-like tail. ', 'uploads/1607937918.6112_henry-gressmann-hOvUzJhx-6w-unsplash.png', '2020-12-14 01:08:16'),
(89, 18, 'Deer with antlers', 'Brown', 'They have large antlers and ears, black forehead that contrasts with a light gray face.', 'uploads/1607939845.3722_mark-weaver-30xtrSgmR40-unsplash.png', '2020-12-14 01:27:47'),
(87, 18, 'Rabbit', 'Gray-brown', 'They are small, furry animal with long ears, short fluffy tails, and strong, large hind legs.', 'uploads/1607940182.8192_irina-babina-oTayr6q8duY-unsplash.png', '2020-12-14 01:16:57'),
(88, 18, 'Squirrel', 'Gray-brown', 'Annoying but cute. They have a long thick tail and live in trees.', 'uploads/1607933847.5678_bram-naus-f5TW2sis88s-unsplash.png', '2020-12-14 01:21:40'),
(90, 18, 'Lizard', 'Colorful', 'They have a small head, short neck and long body and tail. Their skin will produce a variety of colors as the environment changes.', 'uploads/1607937735.9491_wolfgang-hasselmann-7M37A4oNsMc-unsplash.png', '2020-12-14 02:15:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_animals`
--
ALTER TABLE `track_animals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_animals`
--
ALTER TABLE `track_animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
