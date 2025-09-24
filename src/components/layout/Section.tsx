import type { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    fullWidth?: boolean;
}

const Section = ({ id, className = '', children, fullWidth = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${className}`}
        >
            <div className={fullWidth ? '' : 'section-container'}>
                {children}
            </div>
        </section>
    );
};

export default Section;