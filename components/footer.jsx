import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm opacity-80">Entity: The Super Food AI · Slogan: Super Food for Super Humans</p>
            <p className="text-sm opacity-80">Hotline: <a href="tel:+919773081099" className="decoration-dashed text-primary underline-offset-8">+91 97730 81099</a></p>
        </footer>
    );
}
