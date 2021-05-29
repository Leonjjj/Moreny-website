type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date; // 类、构造函数 ?表示可以不存在
};

type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //联合类型
    save: () => void
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
}
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
}