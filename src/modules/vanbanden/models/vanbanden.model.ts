export class QLLoaivb{
    IdLoaivb: number | undefined;
    TenLoaivb: string = '';
    MotaLoaivb: string ='';
}
export class QLNoiden{
    IdNoiden : number | undefined;
    TenNoiden: string ='';
    MotaNoiden: string ='';
}
export class QLVbden{
    IdVbden: number | undefined;
    TenVbden: string = '';
    MotaVbden: string = '';
    Noiden: string = '';
    TenNhanvien :string ='';
    TrangthaiXuly: boolean | undefined;
    TrangthaiPhancong: boolean | undefined;
    TrangthaiPheduyet: boolean | undefined;
    BcNhanvien: boolean | undefined;
    BcTruongphong: boolean | undefined;
    BcBgh: boolean | undefined;
    MessageXuly: string= '';
    MessageCv :string = '';
    MessageBaocaonv: string = '';
    MessageBaocaotp: string ='';
    MessageBaocaobgh:string = '';
    Note: string = '';
    Save: boolean | undefined;
}