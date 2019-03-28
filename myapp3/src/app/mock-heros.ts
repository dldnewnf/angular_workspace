//mock-heros.ts - 나중에 실제 웹서버랑 연동하면 필요없어짐
//현재 가짜 디비 + 웹서버 역할
import {hero} from './hero'

export const HEROS:hero[]=[
    {id : 1, name : '이순신1', phone : '1111', email : 'aaa', description : 'desc1' },
    {id : 2, name : '이순신2', phone : '2222', email : 'bbb', description : 'desc2' },
    {id : 3, name : '이순신3', phone : '3333', email : 'ccc', description : 'desc3' },
    {id : 4, name : '이순신4', phone : '4444', email : 'ddd', description : 'desc4' },
    {id : 5, name : '이순신5', phone : '5555', email : 'eee', description : 'desc5' },
    {id : 6, name : '이순신6', phone : '6666', email : 'fff', description : 'desc6' },
    {id : 7, name : '이순신7', phone : '7777', email : 'ggg', description : 'desc7' },
    {id : 8, name : '이순신8', phone : '8888', email : 'hhh', description : 'desc8' },
    {id : 9, name : '이순신9', phone : '9999', email : 'iii', description : 'desc9' },
    {id : 10, name : '이순신10', phone : '1010', email : 'jjj', description : 'desc10' },
]
