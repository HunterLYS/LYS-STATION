import { dataList } from './data';

export function getDataList(type){
    let list;
    let data =  dataList.find( (e) =>  {
        return e.type == type;
    });
    list = data ? data.list : [];
    return list;
}