'use client';
import { ReactNode } from 'react';
import "@/lib/locales/i18n"


type Props = {
    children: ReactNode;
};

export const Provider = ({ children}: Props) => {

    return (
        <div>
            {children}
        </div>
    );
};
