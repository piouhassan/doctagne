import Cookies from 'js-cookie';


export   const API_BASE = "https://api.doctagne.com/api/v1/";

export const X_API_KEY : string  = "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y"

export const attachTokenToHeaders = (file: boolean = false): { headers: Record<string, string> } => {
    const token = Cookies.get('auth-token');

    const config: { headers: Record<string, string>, cache?: string } = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': X_API_KEY,
        },
    };

    if (file) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    config.cache = "no-store";


    return config;
};

export const numberWithCommas = (value: number | string): string => {
    const str = value.toString();
    const [integer, decimal] = str.split(".");
    const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return decimal ? `${formatted}.${decimal}` : formatted;
};

export const formatDateString = (dateString: string) => {
    const lng = {
        fr : "fr-FR",
        en : "en-US"
    }
    // @ts-ignore
    return new Date(dateString).toLocaleDateString(lng[localStorage.getItem('i18nextLng') ?? 'fr'], {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const generateSlug = (name: string): string => {
    const slug = name.toLowerCase().replace(/[^\w-]+/g, '-');
    return slug.replace(/--+/g, '-');
};


