import Header from './Header';
import MainFooter from './MainFooter';
import {LanguageButton4} from "@/components/LanguageButtons";
import Chatbot from "@/components/Chatbot";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <MainFooter />
            <LanguageButton4  />
            <Chatbot />
        </div>
    );
}
