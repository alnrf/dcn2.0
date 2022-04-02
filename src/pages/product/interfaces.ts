export interface iCategory {
    id?: number;
    title?: string;
    seo_url?: string;
  }
  
  export interface  iProdDetail {
    id?: number;
    uuid?: string;
    code?: string;
    title?: string;
    from_amount?: any;
    amount?: any;
    stock_type?: string;
    stock_unity?: number;
    seo_url?: string;
    full_seo_url?: string;
    main_image_id?: number;
    show_home?: string;
    image?: [
      {
        id?: number;
        main?: boolean;
        path?: string | undefined;
        image?: string | undefined;
        image_thumb?: string | undefined;
        image_path?: string | undefined;
        image_url?: string | undefined;
      }
    ];
    category?: iCategory;
    subcategory?: iCategory;
  }