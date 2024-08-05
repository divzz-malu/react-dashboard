import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WadeWarren from '../assets/male-01.jpg';
import JaneCooper from '../assets/female-01.jpg';
import GuyHawkins from '../assets/male-02.jpg';
import KristinWatson from '../assets/female-02.jpg';
import CodyFisher from '../assets/male-03.jpg';
import SavannahNguyen from '../assets/female-03.jpg';



export const mockDataTeam = [
    {
        id: 1,
        name: "Jane Cooper",
        email: "janecooper@gmail.com",
        age: 20,
        phone: 3456782930,
        access: "admin",
    },
    {
        id: 2,
        name: "Wade Warren",
        email: "wadewarren@gmail.com",
        age: 30,
        phone: 9456732930,
        access: "manager",
    },
];

export const MenuItems = [
    {
        label: "Dashboard",
        icon: HomeOutlinedIcon,
        // filledIcon: HomeIcon,
        href: "/dashboard",
    },
    {
        label: "Analytics",
        icon: InsertChartOutlinedIcon,
        href: "/analytics",
    },
    {
        label: "Orders",
        icon: AssignmentTurnedInOutlinedIcon,
        href: "/orders",
    },
    {
        label: "Products",
        icon: FolderOpenOutlinedIcon,
        href: "/products",
    },
    {
        label: "Cart",
        icon: LocalMallOutlinedIcon,
        href: "/cart",
    },
];

export const orderDetails = [
    {
        id: 1,
        icon: ShoppingBasketIcon,
        badge: "+",
        title: "Total Orders",
        totalCount: "75",
        percentage: "3%",
        status: true,
        orderStatus: "ordered",
    },
    {
        id: 2,
        icon: LocalMallIcon,
        badge: "✓",
        title: "Total Delievered",
        totalCount: "70",
        percentage: "3%",
        status: false,
        orderStatus: "delivered",
    },
    {
        id: 3,
        icon: LocalMallIcon,
        badge: "x",
        title: "Total Cancelled",
        totalCount: "05",
        percentage: "3%",
        status: true,
        orderStatus: "cancelled",
    },
    {
        id: 4,
        icon: MonetizationOnIcon,
        badge: "↓",
        title: "Total Revenue",
        totalCount: "$12k",
        percentage: "3%",
        status: false,
        orderStatus: "revenue",
    },
];

export const ProfitData = {
    id: 1,
    title: "Net Profit",
    amount: "$6959.25",
    growth: "3%",
    succesRate: "70%",
};

export const ActivityData = [
    {
        label: "3",
        value: 5000,
    },
    {
        label: "6",
        value: 3000,
    },
    {
        label: "9",
        value: 15000,
    },
    {
        label: "12",
        value: 2000,
    },
    {
        label: "15",
        value: 5000,
    },
    {
        label: "18",
        value: 10000,
    },
    {
        label: "21",
        value: 8000,
    },
    {
        label: "24",
        value: 2000,
    },
    {
        label: "27",
        value: 9000,
    },
    {
        label: "30",
        value: 3000,
    },
    {
        label: "33",
        value: 8000,
    },
    {
        label: "36",
        value: 5000,
    },
    {
        label: "39",
        value: 2000,
    },
    {
        label: "42",
        value: 8000,
    },
    {
        label: "45",
        value: 4000,
    },
    {
        label: "48",
        value: 15000,
    },
    {
        label: "51",
        value: 5000,
    },
    {
        label: "54",
        value: 3000,
    },
    {
        label: "57",
        value: 15000,
    },
];
export const categories =[
    {
        id: 1,
        icon:AdsClickIcon,
        title: "Goals",
     },
     {
        id: 2,
        icon:LunchDiningIcon,
        title: "Poular Dishes",
     },
     {
        id: 3,
        icon:MenuBookIcon,
        title: "Menus",
     }
];

export const feedbacks = [
    {
        id: 1,
        img:"../../assets/male-01.jpg",
        name: "Jenny Wilson",
        rating: 4,
        comment:"Service of your hotel was awesome we enjoyed your food 😊.... It was feeling that we are eating in our home ... Just loved your taste of food ❤️May u see more success in future ... Thank u"
    },
    {
        id: 2,
        img:"",
        name: "Dianne Russel",
        rating: 5,
        comment:"Very nice experience.Nice ambience with nice food "
    },
    {
        id: 3,
        img:"",
        name: "Jenny Wilson",
        rating: 2.5,
        comment:"Service of your hotel was awesome we enjoyed your food 😊.... It was feeling that we are eating in our home ... Just loved your taste of food ❤️May u see more success in future ... Thank u"
    },
    {
        id: 4,
        img:"",
        name: "Dianne Russel",
        rating: 3.5,
        comment:"Very nice experience.Nice ambience with nice food "
    },
];

function createData(avatar,customer, orderNo, amount, status) {
    return { avatar,customer, orderNo, amount, status };
}

export const rows = [
    createData(WadeWarren,"Wade Warren", 18908424, "$124.00", "Delivered"),
    createData(JaneCooper,"Jane Cooper ", 18908424, "$365.02", "Delivered"),
    createData(GuyHawkins,"Guy Hawkins", 18908424, "$45.88", "Cancelled"),
    createData(KristinWatson,"Kristin Watson", 18908421, "$65", "Pending"),
    createData(CodyFisher,"Cody Fisher", 18908424, "$545.00", "Delivered"),
    createData(SavannahNguyen,"Savannah Gnuyen ", 18908424, "$128.00", "Delivered"),
];
