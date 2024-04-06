import "../style.css";
import "./custom.css";

export const metadata = {
    title: "Nicolas Guillot",
    description: "site de Nicolas Guillot"
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="h-100">
            <body className="h-100">
                <div className="d-flex flex-column justify-content-between h-100">
                    {children}
                </div>
            </body>
        </html>
    );
}
