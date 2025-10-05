import { Main } from 'next/document';
import Header from './Header';
import MainFooter from './MainFooter';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <MainFooter />
        </div>
    );
}
