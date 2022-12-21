import './globals.css';
import NavBar from './NavBar';

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}