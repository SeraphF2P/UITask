import { ReactNode } from "react";
import {
	BsCalendar2Check,
	BsJournalBookmark,
	BsJournalText,
	BsPersonPlus,
	BsPersonSlash,
	BsPlayCircle,
} from "react-icons/bs";
import {
	GoChevronDown,
	GoChevronLeft,
	GoGear,
	GoHeart,
	GoHome,
	GoInfo,
	GoPeople,
	GoPerson,
	GoProjectRoadmap,
	GoSearch,
	GoShareAndroid,
	GoTag,
	GoUnread,
} from "react-icons/go";

const Icons = ({ children }: { children: ReactNode }) => children;

Icons.home = GoHome;
Icons.setting = GoGear;
Icons.arrowDown = GoChevronDown;
Icons.arrowLeft = GoChevronLeft;
Icons.tag = GoTag;
Icons.share = GoShareAndroid;
Icons.info = GoInfo;
Icons.heart = GoHeart;
Icons.search = GoSearch;
Icons.unreadMessage = GoUnread;
Icons.person = GoPerson;
Icons.people = GoPeople;
Icons.project = GoProjectRoadmap;

Icons.calendar = BsCalendar2Check;
Icons.personAdd = BsPersonPlus;
Icons.personDelete = BsPersonSlash;
Icons.textFile = BsJournalText;
Icons.book = BsJournalBookmark;
Icons.play = BsPlayCircle;
export default Icons;
