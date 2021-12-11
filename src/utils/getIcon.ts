import * as Icons from '../../src/assets/icons/category-icons'
import {BsFillCartXFill} from 'react-icons/bs';
import {MdPets} from 'react-icons/md'


export const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
        case 'MeatFish': return Icons.MeatFish;
        case 'Bazar': return Icons.Bazar;
        case 'Beverage': return Icons.Beverage;
        case 'Dairy': return Icons.Dairy;
        case 'BeautyHealth': return Icons.BeautyHealth;
        case 'FruitsVegetable': return Icons.FruitsVegetable;
        case 'Snacks': return Icons.Snacks;
        case 'HomeCleaning': return Icons.HomeCleaning;
        case 'Cooking': return Icons.Cooking;
        case 'Breakfast': return Icons.Breakfast;
        case 'PetCare': return MdPets;
        case 'Purse': return Icons.Purse;
        case 'HandBags': return Icons.HandBags;
        case 'ShoulderBags': return Icons.ShoulderBags;
        case 'Wallet': return Icons.Wallet;
        case 'LaptopBags': return Icons.LaptopBags;
        case 'WomenDress': return Icons.WomenDress;
        case 'OuterWear': return Icons.OuterWear;
        case 'Pants': return Icons.Pants;
        case 'Tops': return Icons.Tops;
        case 'Skirts': return Icons.Skirts;
        case 'Face': return Icons.Face;
        case 'Eyes': return Icons.Eyes;
        case 'Lips': return Icons.Lips;
        case 'ShavingNeeds': return Icons.ShavingNeeds;
        case 'OralCare': return Icons.OralCare;
        case 'FacialCare': return Icons.FacialCare;
        case 'Deodorant': return Icons.Deodorant;
        case 'BathOil': return Icons.BathOil;
        case 'Minus': return Icons.Minus;
        case 'Chair': return Icons.Chair;
        case 'Bed': return Icons.Bed;
        case 'BookShelf': return Icons.BookShelf;
        case 'DressingTable': return Icons.DressingTable;
        case 'ReadingTable': return Icons.ReadingTable;
        case 'Sofa': return Icons.Sofa;
        case 'CenterTable': return Icons.CenterTable;
        case 'RelaxChair': return Icons.RelaxChair;
        case 'Storage': return Icons.Storage;
        case 'Tools': return Icons.Tools;
        default: return BsFillCartXFill
    }
}